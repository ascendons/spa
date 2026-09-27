import React, { useRef, useEffect, useState } from "react";
import "./Contact.css";
import "./Home.css";
import { submitLead, type SubmitStatus } from "../utils/submitLead";
import SEO from "../components/SEO";

const Contact: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const infoGridRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<SubmitStatus>("idle");
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
      { threshold: 0.1 },
    );
    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (infoGridRef.current) observer.observe(infoGridRef.current);
    if (formRef.current) observer.observe(formRef.current);
    if (mapRef.current) observer.observe(mapRef.current);

    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const ok = await submitLead(new FormData(form));
    setStatus(ok ? "success" : "error");
    if (ok) {
      form.reset();
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }
  };

  return (
    <>
      <SEO
        title="Contact Us | Book a Consultation & Scope Your Project"
        description="Get in touch with Ascendons to scope your MVP, request a CRM demo, or discuss workflow automation. We respond within one business day."
        canonicalPath="/contact"
        keywords="contact Ascendons, hire software developers, scope MVP, request CRM demo, software consultants Surat"
      />
      <section className="home-section">
        <div className="home-content">
          <div className="home-heading">Contact Us</div>
        </div>
      </section>

      <section className="text-section">
        <div>
          <div className="max-w-6xl mx-auto px-4">
            <h2
              ref={titleRef}
              className={`subpart2 text-center mb-3 ${titleSlidUp ? "slide-up" : "slide-up-init"}`}
              style={{ fontSize: "2.5rem" }}
            >
              Get in Touch with Us
            </h2>
            <p
              ref={subtitleRef}
              className={`subpart3 text-center mb-10 ${subtitleSlidUp ? "slide-up" : "slide-up-init"}`}
            >
              Planning an MVP, need a custom CRM, or want a BriefGuard demo?
              Tell us what you're building and we'll reply within one business
              day.
            </p>

            <div
              ref={infoGridRef}
              className={`grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 ${infoGridSlidUp ? "slide-up" : "slide-up-init"}`}
            >
              <div className="about-card text-center">
                <div className="text-4xl mb-3">📍</div>
                <div
                  className="solution-title mb-2"
                  style={{ fontSize: "1.25rem" }}
                >
                  Address
                </div>
                <div
                  className="subpart3 leading-relaxed"
                  style={{ color: "#000000" }}
                >
                  Plot No. J-72, Vastu Villa,
                  <br />
                  Mansarovar, Godadara, Gujarat,
                  <br />
                  IN - 395012
                </div>
              </div>
              <div className="about-card text-center">
                <div className="text-4xl mb-3">📞</div>
                <div
                  className="solution-title mb-2"
                  style={{ fontSize: "1.25rem" }}
                >
                  Phone
                </div>
                <div className="subpart3" style={{ color: "#000000" }}>
                  +91 9523297323
                </div>
              </div>
              <div className="about-card text-center">
                <div className="text-4xl mb-3">✉️</div>
                <div
                  className="solution-title mb-2"
                  style={{ fontSize: "1.25rem" }}
                >
                  Email
                </div>
                <div className="subpart3" style={{ color: "#000000" }}>
                  contact@ascendons.com
                </div>
              </div>
              <div className="about-card text-center">
                <div className="text-4xl mb-3">🌐</div>
                <div
                  className="solution-title mb-2"
                  style={{ fontSize: "1.25rem" }}
                >
                  Website
                </div>
                <div className="subpart3" style={{ color: "#000000" }}>
                  www.ascendons.in
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-10">
              <form
                ref={formRef}
                className={`flex-1 cta-form flex flex-col gap-5 ${formSlidUp ? "slide-up" : "slide-up-init"}`}
                onSubmit={handleSubmit}
              >
                <h3
                  className="solution-title text-left mb-2"
                  style={{ fontSize: "1.5rem" }}
                >
                  Send Us a Message
                </h3>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="cta-input"
                  style={{ color: "#000000" }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="cta-input"
                  style={{ color: "#000000" }}
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="cta-input"
                  style={{ color: "#000000" }}
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="cta-input"
                  style={{ color: "#000000" }}
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="cta-textarea"
                  style={{ color: "#000000" }}
                />
                <button
                  type="submit"
                  className="w-60 py-4 rounded-full bg-blue-100 text-blue-600 font-semibold text-xl shadow-md border-2 border-blue-100 transition duration-200 hover:bg-transparent hover:border-blue-600 hover:text-blue-600 focus:outline-none ml-2"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
                {status === "success" && (
                  <p className="form-status form-status-success" role="status">
                    Message sent. We'll reply within one business day.
                  </p>
                )}
                {status === "error" && (
                  <p className="form-status form-status-error" role="alert">
                    Something went wrong. Please try again or email
                    contact@ascendons.com.
                  </p>
                )}
              </form>

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
        </div>
      </section>
    </>
  );
};

export default Contact;
