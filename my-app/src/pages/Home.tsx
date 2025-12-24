import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import JParticlesEffect from "../components/JParticlesEffect";

const Home: React.FC = () => {
  // Refs for hero section
  const heroHeadlineRef = useRef<HTMLHeadingElement>(null);
  const heroSubheadingRef = useRef<HTMLParagraphElement>(null);
  const heroCTA1Ref = useRef<HTMLAnchorElement>(null);
  const heroCTA2Ref = useRef<HTMLAnchorElement>(null);
  const [heroVisible, setHeroVisible] = useState(false);

  // Refs for What We Do section
  const whatWeDoSectionRef = useRef<HTMLDivElement>(null);
  const solutionCard1Ref = useRef<HTMLDivElement>(null);
  const solutionCard2Ref = useRef<HTMLDivElement>(null);
  const solutionCard3Ref = useRef<HTMLDivElement>(null);
  const [whatWeDoVisible, setWhatWeDoVisible] = useState(false);
  const [solutionCardsVisible, setSolutionCardsVisible] = useState({
    card1: false,
    card2: false,
    card3: false,
  });

  // Refs for Trust & Authority section
  const trustSectionRef = useRef<HTMLDivElement>(null);
  const [trustVisible, setTrustVisible] = useState(false);

  // Refs for CTA section
  const ctaSectionRef = useRef<HTMLDivElement>(null);
  const [ctaVisible, setCtaVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    problem: "",
  });

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Use the same Google Apps Script endpoint as Contact page
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("company", formData.company);
    formDataToSend.append("problem", formData.problem);
    formDataToSend.append("subject", "Homepage Strategy Call Request");

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbx_5H7euCkpYZ6Ozimb3aP2kr9vizl2MDTD9YGX3qpIBklOg6x0_wXMP6gKeXg8gXvLkg/exec",
        {
          method: "POST",
          body: formDataToSend,
        },
      );
      const result = await response.text();
      console.log("Result:", result);
      alert(
        "Thank you! We'll be in touch soon to schedule your strategy call.",
      );
      setFormData({ name: "", email: "", company: "", problem: "" });
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error submitting your request. Please try again.");
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === heroHeadlineRef.current) {
              setHeroVisible(true);
            } else if (entry.target === whatWeDoSectionRef.current) {
              setWhatWeDoVisible(true);
            } else if (entry.target === solutionCard1Ref.current) {
              setSolutionCardsVisible((prev) => ({ ...prev, card1: true }));
            } else if (entry.target === solutionCard2Ref.current) {
              setSolutionCardsVisible((prev) => ({ ...prev, card2: true }));
            } else if (entry.target === solutionCard3Ref.current) {
              setSolutionCardsVisible((prev) => ({ ...prev, card3: true }));
            } else if (entry.target === trustSectionRef.current) {
              setTrustVisible(true);
            } else if (entry.target === ctaSectionRef.current) {
              setCtaVisible(true);
            }
          }
        });
      },
      { threshold: 0.1 },
    );

    if (heroHeadlineRef.current) observer.observe(heroHeadlineRef.current);
    if (whatWeDoSectionRef.current)
      observer.observe(whatWeDoSectionRef.current);
    if (solutionCard1Ref.current) observer.observe(solutionCard1Ref.current);
    if (solutionCard2Ref.current) observer.observe(solutionCard2Ref.current);
    if (solutionCard3Ref.current) observer.observe(solutionCard3Ref.current);
    if (trustSectionRef.current) observer.observe(trustSectionRef.current);
    if (ctaSectionRef.current) observer.observe(ctaSectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="home-section">
        <JParticlesEffect />
        <div className="home-content">
          <h1
            ref={heroHeadlineRef}
            className={`home-heading ${heroVisible ? "slide-up" : ""}`}
          >
            Build Platforms That Scale.
            <br />
            Automate Workflows That Deliver.
          </h1>
          <p
            ref={heroSubheadingRef}
            className={`hero-subheading ${heroVisible ? "slide-up" : ""}`}
          >
            Ascendons is a premium automation-first platform and product
            engineering partner. We build WhatsApp Business automation,
            fundraising platforms, and enterprise admin systems for founders,
            CXOs, and nonprofit leaders who need real outcomes, not just code.
          </p>
          <div className="hero-cta-container">
            <Link
              ref={heroCTA1Ref}
              to="/contact"
              className={`home-butto hero-cta-primary ${heroVisible ? "slide-up" : ""}`}
            >
              Book a Strategy Call
            </Link>
            <Link
              ref={heroCTA2Ref}
              to="/solutions/whatsapp-business-automation"
              className={`home-butto hero-cta-secondary ${heroVisible ? "slide-up" : ""}`}
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT WE DO SECTION */}
      <section className="text-section">
        <div ref={whatWeDoSectionRef} className="what-we-do-container">
          <p className={`subpart1 ${whatWeDoVisible ? "slide-up" : ""}`}>
            WHAT WE DO
          </p>
          <h2 className={`subpart2 ${whatWeDoVisible ? "slide-up" : ""}`}>
            Platform Engineering & Automation Solutions
          </h2>
          <p className={`subpart3 ${whatWeDoVisible ? "slide-up" : ""}`}>
            We design and build automation-first platforms that handle real
            financial flows, complex workflows, and compliance requirements.
            Every system we deliver is production-ready, scalable, and built for
            outcomes.
          </p>
        </div>

        <div className="solutions-grid">
          <div
            ref={solutionCard1Ref}
            className={`solution-card ${solutionCardsVisible.card1 ? "slide-up" : ""}`}
          >
            <div className="solution-icon whatsapp-icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
              </svg>
            </div>
            <h3 className="solution-title">WhatsApp Business Automation</h3>
            <p className="solution-description">
              Scale customer engagement with automated WhatsApp workflows. We
              build end-to-end messaging systems using WhatsApp Cloud API that
              handle lead qualification, customer support, and transactional
              communications at scale.
            </p>
            <Link
              to="/solutions/whatsapp-business-automation"
              className="solution-link"
            >
              Learn More →
            </Link>
          </div>

          <div
            ref={solutionCard2Ref}
            className={`solution-card ${solutionCardsVisible.card2 ? "slide-up" : ""}`}
          >
            <div className="solution-icon fundraising-icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h3 className="solution-title">Fundraising & Workflow Platforms</h3>
            <p className="solution-description">
              Complete platform solutions for nonprofits and institutions.
              Organization onboarding, document verification, admin approvals,
              role-based access, secure payments, and audit-ready workflows—all
              in one integrated system.
            </p>
            <Link
              to="/solutions/fundraising-workflow-platforms"
              className="solution-link"
            >
              Learn More →
            </Link>
          </div>

          <div
            ref={solutionCard3Ref}
            className={`solution-card ${solutionCardsVisible.card3 ? "slide-up" : ""}`}
          >
            <div className="solution-icon enterprise-icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 9h6v6H9z" />
              </svg>
            </div>
            <h3 className="solution-title">
              Custom Admin & Enterprise Systems
            </h3>
            <p className="solution-description">
              Enterprise-grade admin panels and workflow systems tailored to
              your operations. We build systems that handle complex business
              logic, multi-tenant architectures, and compliance requirements
              with precision.
            </p>
            <Link to="/contact" className="solution-link">
              Discuss Your Needs →
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST & AUTHORITY SECTION */}
      <section
        ref={trustSectionRef}
        className={`trust-section ${trustVisible ? "visible" : ""}`}
      >
        <div className="trust-content">
          <h2 className="trust-heading">Built for Real-World Impact</h2>
          <p className="trust-description">
            We've worked with nonprofits, startups, and enterprises to build
            platforms that handle real users, real financial flows, and real
            compliance requirements. Every system we deliver is production-ready
            and built to scale.
          </p>
          <div className="trust-points">
            <div className="trust-point">
              <strong>Real-User Platforms</strong>
              <span>
                Systems that handle thousands of users, complex workflows, and
                high transaction volumes.
              </span>
            </div>
            <div className="trust-point">
              <strong>Financial Flows</strong>
              <span>
                Secure payment integrations, transaction processing, and
                financial reporting built for compliance.
              </span>
            </div>
            <div className="trust-point">
              <strong>Compliance-Ready</strong>
              <span>
                Audit-ready workflows, document verification, and role-based
                access controls from day one.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION WITH LEAD FORM */}
      <section
        ref={ctaSectionRef}
        className={`cta-section ${ctaVisible ? "visible" : ""}`}
      >
        <div className="cta-content">
          <h2 className="cta-heading">Talk to an Architect</h2>
          <p className="cta-description">
            Ready to build a platform that scales? Let's discuss your automation
            needs, workflow challenges, and how we can deliver outcomes that
            matter.
          </p>
          <form onSubmit={handleFormSubmit} className="cta-form">
            <div className="cta-form-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleFormChange}
                required
                className="cta-input"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleFormChange}
                required
                className="cta-input"
              />
            </div>
            <div className="cta-form-row">
              <input
                type="text"
                name="company"
                placeholder="Company / Organization"
                value={formData.company}
                onChange={handleFormChange}
                required
                className="cta-input"
              />
            </div>
            <textarea
              name="problem"
              placeholder="Tell us about your automation or platform needs..."
              value={formData.problem}
              onChange={handleFormChange}
              required
              rows={4}
              className="cta-textarea"
            />
            <button type="submit" className="cta-submit-button">
              Request Strategy Call
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
