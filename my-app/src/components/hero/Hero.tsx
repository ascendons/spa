import {
  Component,
  Fragment,
  lazy,
  Suspense,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { prefersReducedMotion } from "../../lib/motion";
import { Button } from "../ui/ui";
import "./Hero.css";

const HeroScene = lazy(() => import("./HeroScene"));

const hasWebGL = () => {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
};

class SceneBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

/** Static composition shown without WebGL (and behind the canvas while it loads). */
const StaticConstellation = () => (
  <svg className="hero-static" viewBox="0 0 600 600" aria-hidden="true">
    <defs>
      <radialGradient id="hs-core" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.55" />
        <stop offset="60%" stopColor="#8B5CF6" stopOpacity="0.08" />
        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="300" cy="300" r="260" fill="url(#hs-core)" />
    <g stroke="#8B5CF6" strokeOpacity="0.35" fill="none">
      <polygon points="300,190 395,245 395,355 300,410 205,355 205,245" />
      <polygon
        points="300,230 360,265 360,335 300,370 240,335 240,265"
        stroke="#43E5C0"
        strokeOpacity="0.5"
      />
      <ellipse
        cx="300"
        cy="300"
        rx="215"
        ry="70"
        transform="rotate(-18 300 300)"
        stroke="#43E5C0"
        strokeOpacity="0.3"
      />
    </g>
    <g stroke="#A78BFA" strokeOpacity="0.22">
      {[
        [110, 160, 205, 245],
        [490, 140, 395, 245],
        [520, 380, 395, 355],
        [90, 420, 205, 355],
        [300, 70, 300, 190],
        [300, 530, 300, 410],
        [110, 160, 300, 70],
        [490, 140, 300, 70],
        [520, 380, 300, 530],
        [90, 420, 300, 530],
      ].map(([a, b, c, d], i) => (
        <line key={i} x1={a} y1={b} x2={c} y2={d} />
      ))}
    </g>
    {[
      [110, 160],
      [490, 140],
      [520, 380],
      [90, 420],
      [300, 70],
      [300, 530],
    ].map(([x, y], i) => (
      <circle
        key={i}
        cx={x}
        cy={y}
        r={i % 2 ? 4 : 5}
        fill={i % 2 ? "#43E5C0" : "#A78BFA"}
      />
    ))}
  </svg>
);

const HEADLINE =
  "From ambitious ideas to software that moves businesses forward.".split(" ");

// One plain sentence per audience, each a way in.
const PATHS = [
  { text: "Founders launching a first product", to: "/contact?type=mvp" },
  {
    text: "Businesses modernising how their teams work",
    to: "/contact?type=systems",
  },
  {
    text: "Enterprises connecting systems or adding engineers",
    to: "/contact?type=integrations",
  },
];

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const [webgl, setWebgl] = useState<boolean | null>(null);
  const [active, setActive] = useState(true);
  const [ready, setReady] = useState(false);
  const reduced = typeof window !== "undefined" && prefersReducedMotion();

  useEffect(() => setWebgl(hasWebGL()), []);

  // Stop rendering the scene when the hero is off screen.
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setActive(e.isIntersecting), {
      threshold: 0,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Entrance choreography + scroll exit.
  useLayoutEffect(() => {
    if (reduced || !root.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from(
        ".hero-word > span",
        { yPercent: 115, rotate: 4, duration: 1.3, stagger: 0.055 },
        0.15,
      )
        .from(".hero-sub", { opacity: 0, y: 24, duration: 1.2 }, 0.7)
        .from(
          ".hero-ctas > *",
          { opacity: 0, y: 20, duration: 1.1, stagger: 0.08 },
          0.85,
        )
        .from(
          ".hero-path",
          { opacity: 0, y: 24, duration: 1.1, stagger: 0.08 },
          1.0,
        )
        .from(
          ".hero-stage",
          { opacity: 0, scale: 1.08, duration: 2.4, ease: "power2.out" },
          0,
        );

      gsap.to(content.current, {
        yPercent: -12,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom 20%",
          scrub: true,
        },
      });
    }, root);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section ref={root} className="hero" aria-labelledby="hero-title">
      <div className="hero-stage" aria-hidden="true">
        <div className={`hero-static-wrap ${ready ? "is-hidden" : ""}`}>
          <StaticConstellation />
        </div>
        {webgl && (
          <SceneBoundary fallback={null}>
            <Suspense fallback={null}>
              <div className={`hero-canvas ${ready ? "is-ready" : ""}`}>
                <HeroScene
                  active={active}
                  reducedMotion={reduced}
                  onReady={() => setReady(true)}
                />
              </div>
            </Suspense>
          </SceneBoundary>
        )}
        <div className="hero-vignette" />
      </div>

      <div ref={content} className="hero-content x-wrap">
        <h1 id="hero-title" className="hero-title x-display">
          {HEADLINE.map((w, i) => (
            <Fragment key={i}>
              <span className="hero-word">
                <span>{w}</span>
              </span>{" "}
            </Fragment>
          ))}
        </h1>

        <p className="hero-sub x-lede">
          We design, engineer and launch production-ready software products,
          intelligent business systems and AI-powered experiences.
        </p>

        <div className="hero-ctas">
          <Button href="#contact">Let's Build Something</Button>
          <Button to="/our-work" variant="ghost">
            Explore Our Work
          </Button>
        </div>
      </div>

      <nav className="hero-paths x-wrap" aria-label="Where to start">
        {PATHS.map((p) => (
          <Link key={p.to} to={p.to} className="hero-path">
            {p.text}
          </Link>
        ))}
      </nav>
    </section>
  );
}
