import React, { useRef, useEffect, useState } from "react";
import ParticlesComponent from "../components/Particle.tsx";
import "./Contact.css";

const Contact: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const infoGridRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const [titleSlidUp, setTitleSlidUp] = useState(false);
  const [subtitleSlidUp, setSubtitleSlidUp] = useState(false);
  const [infoGridSlidUp, setInfoGridSlidUp] = useState(false);
  const [formSlidUp, setFormSlidUp] = useState(false);
  const [mapSlidUp, setMapSlidUp] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === titleRef.current) setTitleSlidUp(true);
            if (entry.target === subtitleRef.current) setSubtitleSlidUp(true);
            if (entry.target === infoGridRef.current) setInfoGridSlidUp(true);
            if (entry.target === formRef.current) setFormSlidUp(true);
            if (entry.target === mapRef.current) setMapSlidUp(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (infoGridRef.current) observer.observe(infoGridRef.current);
    if (formRef.current) observer.observe(formRef.current);
    if (mapRef.current) observer.observe(mapRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section with Particles */}
      <section className="relative h-screen w-full overflow-hidden">
        <ParticlesComponent id="tsparticles" className="absolute inset-0" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-white/90 mb-12 max-w-3xl text-6xl font-extrabold tracking-tight">
            Contact
          </h1>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="relative w-full bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Title and Subtitle */}
          <h2
            ref={titleRef}
            className={`text-gray-800 text-center text-3xl font-semibold mb-3 ${
              titleSlidUp ? "slide-up" : "slide-up-init"
            }`}
          >
            Get in Touch with Us
          </h2>
          <p
            ref={subtitleRef}
            className={`text-center text-gray-500 text-lg mb-10 ${
              subtitleSlidUp ? "slide-up" : "slide-up-init"
            }`}
          >
            We'd love to hear from you! Whether you have a question, a project idea, or just want to say hello, feel free to reach out.
          </p>

          {/* Info Grid */}
          <div
            ref={infoGridRef}
            className={`grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 text-center ${
              infoGridSlidUp ? "slide-up" : "slide-up-init"
            }`}
          >
            {/* ...info grid content as before... */}
            <div>
              <div className="text-3xl mb-2">📍</div>
              <div className="font-bold">Address:</div>
              <div className="text-gray-600 mt-1 leading-relaxed">
                Plot No. J-72, Vastu Villa,<br />
                Mansarovar, Godadara, Gujarat,<br />
                IN - 395012
              </div>
            </div>
            <div>
              <div className="text-3xl mb-2">📞</div>
              <div className="font-bold">Phone:</div>
              <div className="text-gray-600 mt-1">+91 7258078088</div>
            </div>
            <div>
              <div className="text-3xl mb-2">✉️</div>
              <div className="font-bold">Email:</div>
              <div className="text-gray-600 mt-1">contact@ascendons.com</div>
            </div>
            <div>
              <div className="text-3xl mb-2">🌐</div>
              <div className="font-bold">Website:</div>
              <div className="text-gray-600 mt-1">www.ascendons.com</div>
            </div>
          </div>

          {/*Contact form and google map*/}
          <div className="flex flex-col lg:flex-row gap-10">
            <form
              ref={formRef}
              className={`flex-1 bg-white rounded-xl shadow-lg p-8 flex flex-col gap-5 ${
                formSlidUp ? "slide-up" : "slide-up-init"
              }`}
              onSubmit={e => e.preventDefault()}
            >
              <h3 className="text-left text-2xl font-semibold mb-2 text-gray-800">
                Send Us a Message
              </h3>
              <input
                type="text"
                placeholder="Your Name"
                className="text-gray-800 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-200"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="text-gray-800 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-200"
                required
              />
              <input
                type="text"
                placeholder="Your Phone Number"
                className="text-gray-800 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-200"
              />
              <input
                type="text"
                placeholder="Subject"
                className="text-gray-800 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-200"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="text-gray-800 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-200"
                required
              />
              <button
                type="submit"
                className="
                  w-60
                  py-4
                  rounded-full
                  bg-pink-100
                  text-pink-400
                  font-semibold
                  text-xl
                  shadow-md
                  border-2
                  border-pink-100
                  transition
                  duration-200
                  hover:bg-transparent
                  hover:border-pink-400
                  hover:text-pink-400
                  focus:outline-none ml-2"
              >
                Send Message
              </button>
            </form>

            {/*Google map*/}
            <div
              ref={mapRef}
              className={`flex-1 relative w-full pb-[56.25%] rounded-xl overflow-hidden shadow-lg bg-white min-h-[340px] ${
                mapSlidUp ? "slide-up" : "slide-up-init"
              }`}
            >
              <iframe
                title="Ascendons Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.011687442563!2d72.88623931493234!3d21.18957888591471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be053a3a0f8f4a5%3A0x2b2c6b0b6d8d1a2d!2sVastu%20Villa%2C%20J-72%2C%20Krishna%20Park%2C%20mansarovar%2C%20Godadara%2C%20Surat%2C%20Gujarat%20395012!5e0!3m2!1sen!2sin!4v1685456712345!5m2!1sen!2sin"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
