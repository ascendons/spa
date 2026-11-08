import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/*
  "Interconnected systems"
  A faceted core (the product) inside a wireframe lattice, surrounded by orbiting
  nodes (the business systems it connects to). Pathways between them carry
  pulses of data. Everything leans toward the cursor and dollies in on scroll.
*/

const VIOLET = new THREE.Color("#8B5CF6");
const TEAL = new THREE.Color("#43E5C0");

type Props = {
  active: boolean;
  reducedMotion: boolean;
  onReady?: () => void;
};

// Shared pointer/scroll state, written by window listeners, read in the frame loop.
const input = { x: 0, y: 0, energy: 0, scroll: 0 };

// Deterministic PRNG so the composition is identical on every load.
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ---------------------------------- Core ---------------------------------- */

const coreVert = /* glsl */ `
  varying vec3 vMv;
  varying vec3 vObj;
  void main() {
    vObj = position;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vMv = mv.xyz;
    gl_Position = projectionMatrix * mv;
  }
`;

const coreFrag = /* glsl */ `
  uniform float uTime;
  uniform float uEnergy;
  uniform vec3 uA;
  uniform vec3 uB;
  varying vec3 vMv;
  varying vec3 vObj;
  void main() {
    // Flat facet normal from screen-space derivatives.
    vec3 n = normalize(cross(dFdx(vMv), dFdy(vMv)));
    vec3 v = normalize(-vMv);
    float fr = pow(1.0 - abs(dot(n, v)), 2.4);
    float band = 0.5 + 0.5 * sin(vObj.y * 2.6 + vObj.x * 1.3 + uTime * 0.7);
    vec3 key = normalize(vec3(0.35, 0.8, 0.55));
    float diff = max(dot(n, key), 0.0);
    float spec = pow(max(dot(reflect(-key, n), v), 0.0), 24.0);
    vec3 base = vec3(0.03, 0.032, 0.055) + diff * 0.07;
    vec3 rim = mix(uA, uB, band) * fr * (0.95 + uEnergy * 0.7);
    gl_FragColor = vec4(base + rim + spec * 0.35 * uB, 1.0);
  }
`;

function Core({ reducedMotion }: { reducedMotion: boolean }) {
  const mesh = useRef<THREE.Mesh>(null);
  const shell = useRef<THREE.LineSegments>(null);
  const ring = useRef<THREE.Mesh>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uEnergy: { value: 0 },
      uA: { value: VIOLET },
      uB: { value: TEAL },
    }),
    [],
  );
  const shellGeo = useMemo(
    () => new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.75, 1)),
    [],
  );

  useFrame((state, dt) => {
    if (reducedMotion) return;
    const t = state.clock.elapsedTime;
    uniforms.uTime.value = t;
    uniforms.uEnergy.value = input.energy;
    if (mesh.current) {
      mesh.current.rotation.y += dt * (0.18 + input.energy * 0.6);
      mesh.current.rotation.x = Math.sin(t * 0.3) * 0.25;
      const s = 1 + Math.sin(t * 1.2) * 0.015;
      mesh.current.scale.setScalar(s);
    }
    if (shell.current) {
      shell.current.rotation.y -= dt * 0.07;
      shell.current.rotation.z += dt * 0.03;
    }
    if (ring.current) ring.current.rotation.z += dt * 0.12;
  });

  return (
    <group>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[0.98, 1]} />
        <shaderMaterial
          vertexShader={coreVert}
          fragmentShader={coreFrag}
          uniforms={uniforms}
        />
      </mesh>
      <lineSegments ref={shell} geometry={shellGeo}>
        <lineBasicMaterial
          color={VIOLET}
          transparent
          opacity={0.28}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
      <mesh ref={ring} rotation={[Math.PI / 2.3, 0.2, 0]}>
        <torusGeometry args={[2.25, 0.004, 4, 160]} />
        <meshBasicMaterial
          color={TEAL}
          transparent
          opacity={0.35}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

/* --------------------------------- Network -------------------------------- */

const lineVert = /* glsl */ `
  attribute float aT;
  attribute float aSeed;
  varying float vT;
  varying float vSeed;
  varying float vFog;
  void main() {
    vT = aT;
    vSeed = aSeed;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vFog = smoothstep(18.0, 6.0, -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`;

const lineFrag = /* glsl */ `
  uniform float uTime;
  uniform float uEnergy;
  uniform vec3 uA;
  uniform vec3 uB;
  varying float vT;
  varying float vSeed;
  varying float vFog;
  void main() {
    float speed = 0.16 + vSeed * 0.22;
    float head = fract(uTime * speed + vSeed * 9.17) * 1.4 - 0.2;
    float x = clamp((vT - (head - 0.22)) / 0.22, 0.0, 1.0);
    float pulse = x * x * step(vT, head);
    pulse *= step(0.42, fract(vSeed * 13.7));
    vec3 col = mix(uA, uB, step(0.55, vSeed));
    float a = 0.085 + uEnergy * 0.08 + pulse * 0.95;
    gl_FragColor = vec4(col * (1.0 + pulse), a * vFog);
  }
`;

const pointVert = /* glsl */ `
  attribute float aSize;
  attribute float aSeed;
  uniform float uTime;
  uniform float uPx;
  uniform float uDrift;
  varying float vSeed;
  varying float vFog;
  void main() {
    vSeed = aSeed;
    vec3 p = position;
    p.y += sin(uTime * 0.25 + aSeed * 40.0) * uDrift;
    p.x += cos(uTime * 0.18 + aSeed * 23.0) * uDrift * 0.6;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    vFog = smoothstep(22.0, 5.0, -mv.z);
    gl_PointSize = aSize * uPx * (10.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`;

const pointFrag = /* glsl */ `
  uniform float uTime;
  uniform vec3 uA;
  uniform vec3 uB;
  uniform float uAlpha;
  varying float vSeed;
  varying float vFog;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float halo = smoothstep(0.5, 0.0, d);
    float core = smoothstep(0.16, 0.0, d);
    float tw = 0.75 + 0.35 * sin(uTime * (0.8 + vSeed * 1.6) + vSeed * 30.0);
    vec3 col = mix(uA, uB, step(0.6, vSeed));
    col = mix(col, vec3(1.0), core * 0.55);
    gl_FragColor = vec4(col, (halo * 0.45 + core) * tw * uAlpha * vFog);
  }
`;

function buildNetwork(count: number) {
  const rand = mulberry32(7);
  const nodes: THREE.Vector3[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const th = golden * i;
    const radius = 2.5 + rand() * 2.0;
    nodes.push(
      new THREE.Vector3(
        Math.cos(th) * r * radius * 1.3,
        y * radius * 0.82,
        Math.sin(th) * r * radius,
      ),
    );
  }

  // Connect each node to its nearest neighbours; a few hubs reach into the core.
  const segs: number[] = [];
  const ts: number[] = [];
  const seeds: number[] = [];
  const seen = new Set<string>();
  const push = (a: THREE.Vector3, b: THREE.Vector3) => {
    const s = rand();
    segs.push(a.x, a.y, a.z, b.x, b.y, b.z);
    ts.push(0, 1);
    seeds.push(s, s);
  };
  nodes.forEach((a, i) => {
    const near = nodes
      .map((b, j) => ({ j, d: a.distanceTo(b) }))
      .filter((o) => o.j !== i)
      .sort((p, q) => p.d - q.d)
      .slice(0, 3);
    near.forEach(({ j, d }) => {
      const key = i < j ? `${i}-${j}` : `${j}-${i}`;
      if (d < 2.2 && !seen.has(key)) {
        seen.add(key);
        push(a, nodes[j]);
      }
    });
    if (i % 7 === 0) push(a.clone().normalize().multiplyScalar(1.1), a);
  });

  const lineGeo = new THREE.BufferGeometry();
  lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(segs, 3));
  lineGeo.setAttribute("aT", new THREE.Float32BufferAttribute(ts, 1));
  lineGeo.setAttribute("aSeed", new THREE.Float32BufferAttribute(seeds, 1));

  const pos: number[] = [];
  const size: number[] = [];
  const seed: number[] = [];
  nodes.forEach((n, i) => {
    pos.push(n.x, n.y, n.z);
    size.push(i % 7 === 0 ? 13 : 6 + rand() * 4);
    seed.push(rand());
  });
  const nodeGeo = new THREE.BufferGeometry();
  nodeGeo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  nodeGeo.setAttribute("aSize", new THREE.Float32BufferAttribute(size, 1));
  nodeGeo.setAttribute("aSeed", new THREE.Float32BufferAttribute(seed, 1));

  return { lineGeo, nodeGeo };
}

function buildDust(count: number) {
  const rand = mulberry32(42);
  const pos: number[] = [];
  const size: number[] = [];
  const seed: number[] = [];
  for (let i = 0; i < count; i++) {
    pos.push((rand() - 0.5) * 26, (rand() - 0.5) * 14, (rand() - 0.5) * 14 - 2);
    size.push(0.8 + rand() * 1.6);
    seed.push(rand());
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute("aSize", new THREE.Float32BufferAttribute(size, 1));
  g.setAttribute("aSeed", new THREE.Float32BufferAttribute(seed, 1));
  return g;
}

function Network({
  reducedMotion,
  dense,
}: {
  reducedMotion: boolean;
  dense: boolean;
}) {
  const { gl } = useThree();
  const { lineGeo, nodeGeo } = useMemo(
    () => buildNetwork(dense ? 96 : 60),
    [dense],
  );
  const dustGeo = useMemo(() => buildDust(dense ? 520 : 220), [dense]);

  const lineU = useMemo(
    () => ({
      uTime: { value: 3 },
      uEnergy: { value: 0 },
      uA: { value: VIOLET },
      uB: { value: TEAL },
    }),
    [],
  );
  const nodeU = useMemo(
    () => ({
      uTime: { value: 3 },
      uPx: { value: gl.getPixelRatio() },
      uDrift: { value: 0.05 },
      uAlpha: { value: 1 },
      uA: { value: VIOLET },
      uB: { value: TEAL },
    }),
    [gl],
  );
  const dustU = useMemo(
    () => ({
      uTime: { value: 3 },
      uPx: { value: gl.getPixelRatio() },
      uDrift: { value: 0.4 },
      uAlpha: { value: 0.45 },
      uA: { value: new THREE.Color("#C4B5FD") },
      uB: { value: TEAL },
    }),
    [gl],
  );

  useEffect(
    () => () => {
      lineGeo.dispose();
      nodeGeo.dispose();
      dustGeo.dispose();
    },
    [lineGeo, nodeGeo, dustGeo],
  );

  useFrame((state) => {
    if (reducedMotion) return;
    const t = state.clock.elapsedTime;
    lineU.uTime.value = t;
    lineU.uEnergy.value = input.energy;
    nodeU.uTime.value = t;
    dustU.uTime.value = t;
  });

  const additive = {
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  };

  return (
    <>
      <lineSegments geometry={lineGeo}>
        <shaderMaterial
          vertexShader={lineVert}
          fragmentShader={lineFrag}
          uniforms={lineU}
          {...additive}
        />
      </lineSegments>
      <points geometry={nodeGeo}>
        <shaderMaterial
          vertexShader={pointVert}
          fragmentShader={pointFrag}
          uniforms={nodeU}
          {...additive}
        />
      </points>
      <points geometry={dustGeo}>
        <shaderMaterial
          vertexShader={pointVert}
          fragmentShader={pointFrag}
          uniforms={dustU}
          {...additive}
        />
      </points>
    </>
  );
}

/* ------------------------------ Rig & framing ------------------------------ */

function Rig({
  reducedMotion,
  children,
}: {
  reducedMotion: boolean;
  children: React.ReactNode;
}) {
  const outer = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Group>(null);
  const { size, camera } = useThree();

  // Composition sits right of the headline on wide screens, behind it on narrow ones.
  const wide = size.width / size.height > 1.15;
  const baseX = wide ? Math.min(3.2, (size.width / size.height) * 1.55) : 0;
  const baseY = wide ? 0.1 : 1.3;
  const baseScale = wide ? 1 : 0.78;

  useFrame((state, dt) => {
    const o = outer.current;
    const g = inner.current;
    if (!o || !g) return;
    o.position.set(baseX, baseY, 0);
    if (reducedMotion) {
      o.scale.setScalar(baseScale);
      g.rotation.set(0.25, -0.4, 0);
      return;
    }
    const s = input.scroll;
    o.rotation.y += dt * 0.045;
    g.rotation.x = THREE.MathUtils.damp(
      g.rotation.x,
      input.y * 0.28 + s * 0.5,
      3,
      dt,
    );
    g.rotation.z = THREE.MathUtils.damp(g.rotation.z, -input.x * 0.12, 3, dt);
    g.position.x = THREE.MathUtils.damp(g.position.x, input.x * 0.35, 2.5, dt);
    o.scale.setScalar(baseScale * (1 + s * 0.25));
    camera.position.x = THREE.MathUtils.damp(
      camera.position.x,
      input.x * 0.5,
      2,
      dt,
    );
    camera.position.y = THREE.MathUtils.damp(
      camera.position.y,
      input.y * 0.3 - s * 1.2,
      2,
      dt,
    );
    camera.position.z = 11 - s * 2.5;
    camera.lookAt(baseX * 0.35, baseY * 0.5, 0);
    input.energy = THREE.MathUtils.damp(input.energy, 0, 1.6, dt);
    void state;
  });

  return (
    <group ref={outer}>
      <group ref={inner}>{children}</group>
    </group>
  );
}

function ReadySignal({ onReady }: { onReady?: () => void }) {
  const done = useRef(false);
  useFrame(() => {
    if (!done.current) {
      done.current = true;
      requestAnimationFrame(() => onReady?.());
    }
  });
  return null;
}

export default function HeroScene({ active, reducedMotion, onReady }: Props) {
  const dense = typeof window !== "undefined" && window.innerWidth >= 768;

  useEffect(() => {
    if (reducedMotion) return;
    let lastX = 0;
    let lastY = 0;
    const onMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -((e.clientY / window.innerHeight) * 2 - 1);
      const v = Math.hypot(x - lastX, y - lastY);
      input.energy = Math.min(1, input.energy + v * 1.5);
      input.x = x;
      input.y = y;
      lastX = x;
      lastY = y;
    };
    const onScroll = () => {
      input.scroll = Math.min(
        1,
        Math.max(0, window.scrollY / window.innerHeight),
      );
    };
    onScroll();
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, [reducedMotion]);

  return (
    <Canvas
      frameloop={reducedMotion ? "demand" : active ? "always" : "never"}
      dpr={[1, dense ? 1.75 : 1.5]}
      camera={{ position: [0, 0, 11], fov: 38, near: 0.1, far: 60 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      aria-hidden="true"
    >
      <Rig reducedMotion={reducedMotion}>
        <Core reducedMotion={reducedMotion} />
        <Network reducedMotion={reducedMotion} dense={dense} />
      </Rig>
      <ReadySignal onReady={onReady} />
    </Canvas>
  );
}
