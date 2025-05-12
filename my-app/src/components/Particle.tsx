import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Engine, Container, ISourceOptions } from "@tsparticles/engine";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

interface ParticlesComponentProps {
  id: string;
  children?: React.ReactNode;
  className?: string;
}

const ParticlesComponent = ({ id, children, className }: ParticlesComponentProps) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = async (container: Container) => {
    console.log("Particles loaded", container);
  };

  const options: ISourceOptions = {
    background: {
      color: "#0d0d0d"  
    },

    
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: false, mode: "push" },
        onHover: { enable: false, mode: "repulse" }
      }
    },
    particles: {
      color: { value: "#ffffff" },
      links: { 
        color: "#ffffff",
        distance: 200,
        enable: true,
        opacity: 0.5,
        width: 1
      },
      move: {
        enable: true,
        speed: 4
      },
      number: { density: { enable: true }, value: 100 },
      opacity: { value: 0.7 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } }
    },
    detectRetina: true
  };

  if (!init) return null;

  return (
   <div className={`relative ${className}`}> 
      <div className="absolute inset-0 -z-10">  
        <Particles
          id={id}
          init = {particlesLoaded}
          options={options}
        />
      </div>
      <div className="relative z-0">  
        {children}
      </div>
    </div>
  );
};

export default ParticlesComponent;