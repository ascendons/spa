// src/components/JParticlesEffect.tsx
import React, { useEffect } from "react";
import JParticles from "jparticles";

const JParticlesEffect: React.FC = () => {
  useEffect(() => {
    const canvas = document.getElementById("jparticles-canvas") as HTMLElement;
    if (canvas) {
      new JParticles.Particle(canvas, {
        color: "#25bfff",
        lineShape: "cube",
        range: 2000,
        proximity: 100,
        parallax: true,
      });
    }
  }, []);

  return (
    <div
      id="jparticles-canvas"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 0,
        top: 0,
        left: 0,
      }}
    />
  );
};

export default JParticlesEffect;
