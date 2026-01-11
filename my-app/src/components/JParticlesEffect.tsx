// src/components/JParticlesEffect.tsx
import React, { useEffect } from "react";
import JParticles from "jparticles";

interface ParticleInstance {
  destroy?: () => void;
}

const JParticlesEffect: React.FC = () => {
  useEffect(() => {
    let particleInstance: ParticleInstance | null = null;

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const canvas = document.getElementById(
        "jparticles-canvas",
      ) as HTMLElement;
      if (canvas) {
        console.log("Initializing particles on canvas:", canvas);
        particleInstance = new JParticles.Particle(canvas, {
          color: "#60a5fa",
          lineShape: "cube",
          range: 0.8, // 80% of canvas width - ensures range < canvasWidth so positionEvent runs for mouse tracking
          proximity: 100,
          parallax: true,
          parallaxStrength: 15,
          eventElem: document, // Track mouse events on entire document so it works even when hovering over content
          resize: true,
        });
        console.log("Particles initialized:", particleInstance);
      } else {
        console.error("Canvas element not found!");
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      // Cleanup if needed
      if (particleInstance && typeof particleInstance.destroy === "function") {
        particleInstance.destroy();
      }
    };
  }, []);

  return (
    <div
      id="jparticles-canvas"
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: 1,
        top: 0,
        left: 0,
        pointerEvents: "auto",
        background:
          "linear-gradient(135deg, #051221 0%, #0f2040 30%, #1e3a8a 60%, #2563eb 85%, #3b82f6 100%)",
      }}
    />
  );
};

export default JParticlesEffect;
