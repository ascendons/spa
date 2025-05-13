import ParticlesComponent from "../components/Particle.tsx";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
          <ParticlesComponent id="tsparticles" className="absolute inset-0" />
          <div className="ative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className=" text-white/90 mb-12 max-w-3xl">
            Smart, Scalable, and Stunning Software Solutions
          </h1>
        </div>
      </section>

        <section className="relative h-screen w-full overflow-hidden bg-white">
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
                <h1 className=" text-black/90 mb-12 max-w-3xl">
                   Our Services
                </h1>
            </div>
        </section>

    </>
  );
};

export default Home;
