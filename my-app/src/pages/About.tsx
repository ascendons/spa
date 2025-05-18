import ParticlesComponent from "../components/Particle.tsx";
import React from "react";

const About: React.FC = () => {
  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        <ParticlesComponent id="tsparticles" className="absolute inset-0" />
        <div className="ative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className=" text-white/90 mb-5 text-4xl font-bold max-w-3xl">About Us</h1>
          <p className="text-white text-2xl font-semibold">Your success is our mission</p>
        </div>
      </section>

      {/* About Content Section */}
      <section className="relative w-full bg-white py-20">
        <div className="max-w-5xl mx-auto px-4">
          {/* About Us Text */}
          <h2 className="text-gray-800 text-left text-3xl font-semibold mb-8">About Us</h2>
          <p className="text-left mb-6 text-lg text-gray-700">
            Welcome to <span className="font-bold">ASCENDONS</span>, your trusted partner in transforming ideas into innovative digital solutions. We specialize in crafting cutting-edge mobile apps, websites, and custom software tailored to meet your unique business needs. Whether you're a startup looking to build your first app or an established business seeking to streamline operations with a custom inventory management system, we’ve got you covered.
          </p>
          <p className="text-left mb-12 text-lg text-gray-700">
            At <span className="font-bold">ASCENDONS</span>, we believe technology should work for you, not the other way around. Our team of skilled developers, designers, and tech enthusiasts is passionate about creating seamless, user-friendly, and scalable solutions for Android, iOS, and web platforms. From concept to deployment, we work closely with you to ensure your vision is brought to life with precision and creativity.
          </p>
          
          {/* What We Offer */}
          <h3 className="text-gray-800 text-left text-3xl font-semibold mb-6">What We Offer:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-xl p-8 transition-shadow duration-200 hover:shadow-2xl"
                 style={{ boxShadow: "0 8px 32px 0 rgba(60,60,90,0.15)" }}>
              <h4 className="text-gray-800 text-left font-semibold text-xl mb-2">Mobile App Development</h4>
              <p className="text-gray-600 text-left text-lg">Stunning, high-performance apps for Android and iOS.</p>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-8 transition-shadow duration-200 hover:shadow-2xl"
                 style={{ boxShadow: "0 8px 32px 0 rgba(60,60,90,0.15)" }}>
              <h4 className="text-gray-800 text-left font-semibold text-xl mb-2">Web Development</h4>
              <p className="text-gray-600 text-left text-lg">Responsive, modern websites that captivate and convert.</p>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-8 transition-shadow duration-200 hover:shadow-2xl"
                 style={{ boxShadow: "0 8px 32px 0 rgba(60,60,90,0.15)" }}>
              <h4 className="text-gray-800 text-left font-semibold text-xl mb-2">Custom Software Solutions</h4>
              <p className="text-gray-600 text-left text-lg">Tailored systems like inventory management, CRM, ERP, and more.</p>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-8 transition-shadow duration-200 hover:shadow-2xl"
                 style={{ boxShadow: "0 8px 32px 0 rgba(60,60,90,0.15)" }}>
              <h4 className="text-gray-800 text-left font-semibold text-xl mb-2">Tech Consulting</h4>
              <p className="text-gray-600 text-left text-lg">Expert advice to help you navigate the ever-evolving tech landscape.</p>
            </div>
          </div>

          {/* Why Choose Us */}
          <h3 className="text-gray-800 text-left text-3xl font-semibold mb-6">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-xl p-8 transition-shadow duration-200 hover:shadow-2xl"
                 style={{ boxShadow: "0 8px 32px 0 rgba(60,60,90,0.15)" }}>
              <h4 className="text-gray-800 text-left font-semibold text-xl mb-2">Client-Centric Approach</h4>
              <p className="text-gray-600 text-left text-lg">Your goals are our priority. We listen, collaborate, and deliver solutions that align perfectly with your vision.</p>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-8 transition-shadow duration-200 hover:shadow-2xl"
                 style={{ boxShadow: "0 8px 32px 0 rgba(60,60,90,0.15)" }}>
              <h4 className="text-gray-800 text-left font-semibold text-xl mb-2">Innovation-Driven</h4>
              <p className="text-gray-600 text-left text-lg">We stay ahead of the curve by leveraging the latest technologies and trends.</p>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-8 transition-shadow duration-200 hover:shadow-2xl"
                 style={{ boxShadow: "0 8px 32px 0 rgba(60,60,90,0.15)" }}>
              <h4 className="text-gray-800 text-left font-semibold text-xl mb-2">Transparent Process</h4>
              <p className="text-gray-600 text-left text-lg">Clear communication, timely updates, and no hidden surprises.</p>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-8 transition-shadow duration-200 hover:shadow-2xl"
                 style={{ boxShadow: "0 8px 32px 0 rgba(60,60,90,0.15)" }}>
              <h4 className="text-gray-800 text-left font-semibold text-xl mb-2">Scalable Solutions</h4>
              <p className="text-gray-600 text-left text-lg">We build systems that grow with your business.</p>
            </div>
          </div>

          {/* Closing Statement */}
          <p className="text-left text-lg text-gray-700 mb-8">
            At <span className="font-bold">ASCENDONS</span>, we’re not just building apps and websites-we’re building relationships. Let’s work together to create something extraordinary. Your success is our mission.
          </p>

          {/* Get in touch button */}
          <div>
            <a
              href="/contact"
  className="inline-block bg-pink-200 !text-pink-400 font-semibold px-8 py-3 rounded-full text-lg border-2 border-transparent transition
    hover:bg-transparent !hover:text-pink-400 hover:border-pink-400"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

