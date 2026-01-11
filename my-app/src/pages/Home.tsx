import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

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
  const solutionCard4Ref = useRef<HTMLDivElement>(null);
  const solutionCard5Ref = useRef<HTMLDivElement>(null);
  const solutionCard6Ref = useRef<HTMLDivElement>(null);
  const [whatWeDoVisible, setWhatWeDoVisible] = useState(false);
  const [solutionCardsVisible, setSolutionCardsVisible] = useState({
    card1: false,
    card2: false,
    card3: false,
    card4: false,
    card5: false,
    card6: false,
  });

  // Refs for Trust & Authority section
  const trustSectionRef = useRef<HTMLDivElement>(null);
  const [trustVisible, setTrustVisible] = useState(false);

  // Refs for How We Work section
  const howWeWorkRef = useRef<HTMLDivElement>(null);
  const [howWeWorkVisible, setHowWeWorkVisible] = useState(false);

  // Refs for Industry Use Cases section
  const industryUseCasesRef = useRef<HTMLDivElement>(null);
  const [industryUseCasesVisible, setIndustryUseCasesVisible] = useState(false);

  // Refs for Testimonials section
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);

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
            } else if (entry.target === solutionCard4Ref.current) {
              setSolutionCardsVisible((prev) => ({ ...prev, card4: true }));
            } else if (entry.target === solutionCard5Ref.current) {
              setSolutionCardsVisible((prev) => ({ ...prev, card5: true }));
            } else if (entry.target === solutionCard6Ref.current) {
              setSolutionCardsVisible((prev) => ({ ...prev, card6: true }));
            } else if (entry.target === trustSectionRef.current) {
              setTrustVisible(true);
            } else if (entry.target === howWeWorkRef.current) {
              setHowWeWorkVisible(true);
            } else if (entry.target === industryUseCasesRef.current) {
              setIndustryUseCasesVisible(true);
            } else if (entry.target === testimonialsRef.current) {
              setTestimonialsVisible(true);
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
    if (solutionCard4Ref.current) observer.observe(solutionCard4Ref.current);
    if (solutionCard5Ref.current) observer.observe(solutionCard5Ref.current);
    if (solutionCard6Ref.current) observer.observe(solutionCard6Ref.current);
    if (trustSectionRef.current) observer.observe(trustSectionRef.current);
    if (howWeWorkRef.current) observer.observe(howWeWorkRef.current);
    if (industryUseCasesRef.current)
      observer.observe(industryUseCasesRef.current);
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);
    if (ctaSectionRef.current) observer.observe(ctaSectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="home-section">
        <div className="home-content">
          <h1
            ref={heroHeadlineRef}
            className={`home-heading ${heroVisible ? "slide-up" : ""}`}
          >
            Transform Operations With
            <br />
            <span style={{ color: "#60a5fa" }}>
              Intelligent Automation & Platforms
            </span>
          </h1>
          <p
            ref={heroSubheadingRef}
            className={`hero-subheading ${heroVisible ? "slide-up" : ""}`}
          >
            Eliminate manual work, reduce errors by 95%, and scale operations
            effortlessly. We build intelligent automation systems, custom CRMs,
            and AI-powered platforms that{" "}
            <strong style={{ color: "#60a5fa" }}>
              cut costs, accelerate growth, and deliver measurable business
              impact
            </strong>{" "}
            for NGOs, enterprises, and growing businesses.
          </p>
          <div className="hero-cta-container">
            <Link
              ref={heroCTA1Ref}
              to="/contact"
              className={`home-butto hero-cta-primary ${heroVisible ? "slide-up" : ""}`}
            >
              Book a Free Consultation
            </Link>
            <Link
              ref={heroCTA2Ref}
              to="/services"
              className={`home-butto hero-cta-secondary ${heroVisible ? "slide-up" : ""}`}
            >
              Discuss Your Automation Needs
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
            Automation & Platform Solutions That Actually Work
          </h2>
          <p className={`subpart3 ${whatWeDoVisible ? "slide-up" : ""}`}>
            Stop losing time on repetitive tasks. We eliminate manual work,
            reduce errors by 95%, and automate workflows that save 15+ hours
            every week. Our intelligent automation systems, custom CRMs, and
            AI-powered platforms{" "}
            <strong style={{ color: "#1e40af" }}>
              cut operational costs, accelerate growth, and deliver ROI from day
              one.
            </strong>
          </p>
        </div>

        <div className="solutions-grid">
          <div
            ref={solutionCard1Ref}
            className={`solution-card ${solutionCardsVisible.card1 ? "slide-up" : ""}`}
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
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="solution-title">Custom CRMs & Business Software</h3>
            <p className="solution-description">
              <strong style={{ color: "#1e40af" }}>
                Save 15+ hours every week
              </strong>{" "}
              with automation that fits your exact workflow. We eliminate manual
              data entry, automate repetitive tasks, and give you real-time
              insights to make faster decisions. No forcing your process into
              templates—build exactly what you need.
            </p>
            <Link to="/contact" className="solution-link">
              Explore Solutions →
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
            <h3 className="solution-title">Fundraising & NGO Platforms</h3>
            <p className="solution-description">
              <strong style={{ color: "#1e40af" }}>
                Reduce onboarding from weeks to days (85% faster)
              </strong>{" "}
              with automated workflows. Scale from 50 to 300+ partner
              organizations seamlessly. Complete compliance-ready platforms with
              document verification, secure payments, and audit trails that
              eliminate governance risks.
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
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <path d="M13 8H7M17 12H7" />
              </svg>
            </div>
            <h3 className="solution-title">AI-Powered Chatbots & Automation</h3>
            <p className="solution-description">
              <strong style={{ color: "#1e40af" }}>
                Handle 5,000+ conversations daily with 92% accuracy
              </strong>{" "}
              using RAG-powered chatbots that understand context from your
              documents. Eliminate repetitive support tickets, provide instant
              accurate answers, and free your team to focus on complex issues.
            </p>
            <Link to="/contact" className="solution-link">
              Explore AI Solutions →
            </Link>
          </div>

          <div
            ref={solutionCard4Ref}
            className={`solution-card ${solutionCardsVisible.card4 ? "slide-up" : ""}`}
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
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>
            <h3 className="solution-title">Workflow Optimization</h3>
            <p className="solution-description">
              <strong style={{ color: "#1e40af" }}>
                Cut processing costs by ₹2-5 lakhs annually and reduce errors by
                95%
              </strong>
              by eliminating manual data entry and automating repetitive
              workflows. Transform slow, error-prone processes into efficient,
              scalable operations that grow with your business.
            </p>
            <Link to="/contact" className="solution-link">
              Optimize Workflows →
            </Link>
          </div>

          <div
            ref={solutionCard5Ref}
            className={`solution-card ${solutionCardsVisible.card5 ? "slide-up" : ""}`}
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
            <h3 className="solution-title">Custom Platforms & Marketplaces</h3>
            <p className="solution-description">
              <strong style={{ color: "#1e40af" }}>
                Process 1,000+ daily transactions with zero downtime
              </strong>{" "}
              and 99.9% uptime. Approval workflows that took 2-3 days now
              complete in under 4 hours. Multi-tenant architecture, secure
              payments, and scalable infrastructure built to handle growth from
              day one.
            </p>
            <Link to="/contact" className="solution-link">
              Build Your Platform →
            </Link>
          </div>

          <div
            ref={solutionCard6Ref}
            className={`solution-card ${solutionCardsVisible.card6 ? "slide-up" : ""}`}
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
            <h3 className="solution-title">Communication Automation</h3>
            <p className="solution-description">
              <strong style={{ color: "#1e40af" }}>
                Reduce response time by 60% (from 5 min to 2 min average)
              </strong>{" "}
              and increase conversion by 35% with automated lead qualification
              and instant responses. Handle thousands of daily interactions
              across WhatsApp and other channels—24/7, without additional staff.
            </p>
            <Link
              to="/solutions/whatsapp-business-automation"
              className="solution-link"
            >
              Learn More →
            </Link>
          </div>
        </div>

        {/* Mid-Page CTA */}
        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <Link
            to="/contact"
            className="home-button"
            style={{
              display: "inline-block",
              textDecoration: "none",
              marginTop: "2rem",
            }}
          >
            Get a Custom Quote
          </Link>
        </div>
      </section>

      {/* TRUST & AUTHORITY SECTION */}
      <section
        ref={trustSectionRef}
        className={`trust-section ${trustVisible ? "visible" : ""}`}
      >
        <div className="trust-content">
          <h2 className="trust-heading">
            Why Organizations Choose Us: Real Results, Real Impact
          </h2>
          <p className="trust-description">
            We don't build prototypes—we deliver production-ready systems that
            handle real workloads. Our automation systems process thousands of
            daily interactions, our fundraising platforms manage 300+
            organizations seamlessly, and our custom CRMs replace expensive
            enterprise software while delivering better results.
          </p>
          <div className="trust-points">
            <div className="trust-point">
              <strong>Cut Operational Costs by 40-60%</strong>
              <span>
                Our automation systems eliminate manual work, reduce errors by
                95%, and scale operations without additional staff.{" "}
                <strong style={{ color: "white" }}>
                  Clients save ₹2-5 lakhs annually
                </strong>{" "}
                through reduced processing costs and improved efficiency.
              </span>
            </div>
            <div className="trust-point">
              <strong>Scale from 50 to 300+ Organizations</strong>
              <span>
                We've built systems that handle real production
                workloads—thousands of daily transactions, hundreds of
                concurrent users, and mission-critical operations.
                <strong style={{ color: "white" }}>
                  {" "}
                  Built to grow with you, not hold you back.
                </strong>
              </span>
            </div>
            <div className="trust-point">
              <strong>Reduce Response Time by 60%</strong>
              <span>
                Our automation systems eliminate manual delays, automate lead
                qualification, and provide instant responses.{" "}
                <strong style={{ color: "white" }}>
                  Average response time drops from 5 minutes to 2 minutes,
                </strong>{" "}
                capturing more leads and improving customer satisfaction.
              </span>
            </div>
            <div className="trust-point">
              <strong>Production-Ready from Day One</strong>
              <span>
                Every solution includes monitoring, error handling, security,
                and compliance by default.{" "}
                <strong style={{ color: "white" }}>
                  99.9% uptime SLA, zero compliance issues, and 3 months of
                  post-launch support
                </strong>{" "}
                included with every project.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK SECTION */}
      <section className="text-section">
        <div ref={howWeWorkRef} className="what-we-do-container">
          <p className={`subpart1 ${howWeWorkVisible ? "slide-up" : ""}`}>
            OUR PROCESS
          </p>
          <h2 className={`subpart2 ${howWeWorkVisible ? "slide-up" : ""}`}>
            How We Work: From Discovery to Deployment
          </h2>
          <p className={`subpart3 ${howWeWorkVisible ? "slide-up" : ""}`}>
            We follow a proven 5-step process that ensures your automation
            platform is built right, deployed smoothly, and delivers measurable
            results from day one.
          </p>
        </div>

        <div
          className="solutions-grid"
          style={{ marginTop: "2rem", maxWidth: "1200px" }}
        >
          <div
            className={`solution-card ${howWeWorkVisible ? "slide-up" : ""}`}
            style={{ textAlign: "center" }}
          >
            <div
              className="solution-icon enterprise-icon"
              style={{ margin: "0 auto 1rem" }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="solution-title" style={{ marginBottom: "0.75rem" }}>
              1. Requirement Discovery
            </h3>
            <p className="solution-description">
              We deep-dive into your workflows, pain points, and goals.
              Understand current processes, identify automation opportunities,
              and define success metrics. No assumptions—just facts.
            </p>
          </div>

          <div
            className={`solution-card ${howWeWorkVisible ? "slide-up" : ""}`}
            style={{ textAlign: "center" }}
          >
            <div
              className="solution-icon fundraising-icon"
              style={{ margin: "0 auto 1rem" }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="solution-title" style={{ marginBottom: "0.75rem" }}>
              2. Solution Design
            </h3>
            <p className="solution-description">
              We design the architecture, integrations, and workflows. Create
              technical specifications, define API contracts, plan database
              schemas, and outline the implementation roadmap.
            </p>
          </div>

          <div
            className={`solution-card ${howWeWorkVisible ? "slide-up" : ""}`}
            style={{ textAlign: "center" }}
          >
            <div
              className="solution-icon whatsapp-icon"
              style={{ margin: "0 auto 1rem" }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            <h3 className="solution-title" style={{ marginBottom: "0.75rem" }}>
              3. Development & Integration
            </h3>
            <p className="solution-description">
              We build your solution with clean, scalable code. Integrate with
              your existing systems, implement automation workflows, and ensure
              security and compliance standards are met.
            </p>
          </div>

          <div
            className={`solution-card ${howWeWorkVisible ? "slide-up" : ""}`}
            style={{ textAlign: "center" }}
          >
            <div
              className="solution-icon enterprise-icon"
              style={{ margin: "0 auto 1rem" }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <h3 className="solution-title" style={{ marginBottom: "0.75rem" }}>
              4. Testing & Deployment
            </h3>
            <p className="solution-description">
              Rigorous testing in staging environments, performance
              optimization, security audits, and user acceptance testing. Deploy
              to production with zero downtime and comprehensive monitoring.
            </p>
          </div>

          <div
            className={`solution-card ${howWeWorkVisible ? "slide-up" : ""}`}
            style={{ textAlign: "center" }}
          >
            <div
              className="solution-icon fundraising-icon"
              style={{ margin: "0 auto 1rem" }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>
            <h3 className="solution-title" style={{ marginBottom: "0.75rem" }}>
              5. Support & Optimization
            </h3>
            <p className="solution-description">
              Ongoing support, performance monitoring, and continuous
              optimization. We track metrics, gather feedback, and iterate to
              ensure your platform keeps delivering value as you scale.
            </p>
          </div>

          {/* Add 6th card to make it even */}
          <div
            className={`solution-card ${howWeWorkVisible ? "slide-up" : ""}`}
            style={{ textAlign: "center" }}
          >
            <div
              className="solution-icon enterprise-icon"
              style={{ margin: "0 auto 1rem" }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <h3 className="solution-title" style={{ marginBottom: "0.75rem" }}>
              6. Continuous Improvement
            </h3>
            <p className="solution-description">
              Regular updates, feature enhancements, and performance tuning. We
              evolve your platform based on usage patterns, new requirements,
              and emerging technologies to maintain competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* INDUSTRY USE CASES SECTION */}
      <section className="text-section" data-bg-gray="true">
        <div ref={industryUseCasesRef} className="what-we-do-container">
          <p
            className={`subpart1 ${industryUseCasesVisible ? "slide-up" : ""}`}
          >
            INDUSTRY SOLUTIONS
          </p>
          <h2
            className={`subpart2 ${industryUseCasesVisible ? "slide-up" : ""}`}
          >
            Built for Your Industry
          </h2>
          <p
            className={`subpart3 ${industryUseCasesVisible ? "slide-up" : ""}`}
          >
            Every industry has unique challenges. We build automation solutions
            tailored to your specific workflows, compliance requirements, and
            growth goals.
          </p>
        </div>

        <div className="solutions-grid" style={{ marginTop: "2rem" }}>
          <div
            className={`solution-card ${industryUseCasesVisible ? "slide-up" : ""}`}
          >
            <h3 className="solution-title">For Real Estate</h3>
            <p className="solution-description">
              Automate property inquiries, schedule site visits, qualify buyers,
              send property details, and manage follow-ups.{" "}
              <strong style={{ color: "#1e40af" }}>
                Reduce response time by 70% and capture 40% more qualified leads
              </strong>{" "}
              with automated lead scoring and instant property information
              delivery.
            </p>
          </div>

          <div
            className={`solution-card ${industryUseCasesVisible ? "slide-up" : ""}`}
          >
            <h3 className="solution-title">For E-commerce</h3>
            <p className="solution-description">
              Automate order confirmations, shipping updates, delivery tracking,
              customer support, and abandoned cart recovery.{" "}
              <strong style={{ color: "#1e40af" }}>
                Increase conversion by 35% and reduce support tickets by 50%
              </strong>{" "}
              with proactive order updates and instant customer support.
            </p>
          </div>

          <div
            className={`solution-card ${industryUseCasesVisible ? "slide-up" : ""}`}
          >
            <h3 className="solution-title">For Healthcare</h3>
            <p className="solution-description">
              Automate appointment booking, reminders, lab report delivery,
              prescription notifications, and follow-up care.{" "}
              <strong style={{ color: "#1e40af" }}>
                Reduce no-shows by 50% and improve patient satisfaction scores
              </strong>{" "}
              with automated appointment management and personalized care
              reminders.
            </p>
          </div>

          <div
            className={`solution-card ${industryUseCasesVisible ? "slide-up" : ""}`}
          >
            <h3 className="solution-title">For Service Businesses</h3>
            <p className="solution-description">
              Automate service booking, confirmations, payment reminders,
              feedback collection, and customer follow-ups.{" "}
              <strong style={{ color: "#1e40af" }}>
                Eliminate manual scheduling and reduce admin overhead by 60%
              </strong>{" "}
              with end-to-end workflow automation from inquiry to service
              completion.
            </p>
          </div>

          <div
            className={`solution-card ${industryUseCasesVisible ? "slide-up" : ""}`}
          >
            <h3 className="solution-title">For NGOs & Nonprofits</h3>
            <p className="solution-description">
              Build fundraising platforms, donor management systems,
              organization onboarding workflows, and grant application
              processes.{" "}
              <strong style={{ color: "#1e40af" }}>
                Scale from 50 to 300+ partner organizations
              </strong>{" "}
              with automated onboarding, document verification, and
              compliance-ready approval workflows.
            </p>
          </div>

          <div
            className={`solution-card ${industryUseCasesVisible ? "slide-up" : ""}`}
          >
            <h3 className="solution-title">For Manufacturing & Distribution</h3>
            <p className="solution-description">
              Automate inventory updates, order processing, shipping
              notifications, and customer communication.{" "}
              <strong style={{ color: "#1e40af" }}>
                Reduce order processing time by 65% and eliminate manual data
                entry errors
              </strong>{" "}
              with real-time ERP integrations and automated workflows.
            </p>
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS SECTION */}
      <section className="text-section" data-bg-gray="true">
        <div
          className="what-we-do-container"
          style={{ marginBottom: "3rem", position: "relative", zIndex: 1 }}
        >
          <p className="subpart1" style={{ position: "relative", zIndex: 1 }}>
            TRUST & SECURITY
          </p>
          <h2 className="subpart2" style={{ position: "relative", zIndex: 1 }}>
            Built with Trust, Deployed with Confidence
          </h2>
          <p className="subpart3" style={{ position: "relative", zIndex: 1 }}>
            Your data security and business continuity matter. We follow
            industry best practices and maintain the highest standards for
            security, compliance, and reliability.
          </p>
        </div>

        <div
          className="solutions-grid solutions-grid-2col"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div
            className="solution-card slide-up"
            style={{
              textAlign: "center",
              position: "relative",
              zIndex: 1,
              opacity: "1",
            }}
          >
            <h3 className="solution-title">🔒 Data Security</h3>
            <p className="solution-description">
              End-to-end encryption, secure API integrations, regular security
              audits, and GDPR-compliant data handling. Your data stays safe and
              private.
            </p>
          </div>

          <div
            className="solution-card slide-up"
            style={{
              textAlign: "center",
              position: "relative",
              zIndex: 1,
              opacity: "1",
            }}
          >
            <h3 className="solution-title" style={{ fontSize: "1.1rem" }}>
              ⚡ 99.9% Uptime SLA
            </h3>
            <p className="solution-description" style={{ fontSize: "0.9rem" }}>
              Production-ready infrastructure with monitoring, automated
              backups, and disaster recovery. Built for reliability and business
              continuity.
            </p>
          </div>

          <div
            className="solution-card slide-up"
            style={{
              textAlign: "center",
              position: "relative",
              zIndex: 1,
              opacity: "1",
            }}
          >
            <h3 className="solution-title" style={{ fontSize: "1.1rem" }}>
              🛡️ Compliance Ready
            </h3>
            <p className="solution-description" style={{ fontSize: "0.9rem" }}>
              Audit trails, role-based access control, document versioning, and
              compliance-ready workflows. Perfect for regulated industries and
              NGOs.
            </p>
          </div>

          <div
            className="solution-card slide-up"
            style={{
              textAlign: "center",
              position: "relative",
              zIndex: 1,
              opacity: "1",
            }}
          >
            <h3 className="solution-title" style={{ fontSize: "1.1rem" }}>
              🏢 Enterprise Ready
            </h3>
            <p className="solution-description" style={{ fontSize: "0.9rem" }}>
              Registered in India | 5+ years experience | Serving NGOs,
              Enterprises, and Growing Businesses. Production-proven solutions
              with real-world results.
            </p>
          </div>
        </div>

        <div
          style={{
            maxWidth: "1200px",
            margin: "2rem auto 0",
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            padding: "1.5rem",
            background: "rgba(239, 246, 255, 0.5)",
            borderRadius: "12px",
          }}
        >
          <p
            className="solution-description"
            style={{ marginBottom: "0.5rem" }}
          >
            <strong>Tech Stack:</strong> AWS, Google Cloud, PostgreSQL, MongoDB,
            Redis, WhatsApp Cloud API, Stripe/Razorpay, React.js, Node.js,
            Docker, Kubernetes
          </p>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section
        ref={testimonialsRef}
        className={`testimonials-section ${testimonialsVisible ? "visible" : ""}`}
      >
        <div className="testimonials-content">
          <p className="testimonials-label">CLIENT STORIES</p>
          <h2 className="testimonials-heading">What Our Clients Say</h2>
          <p className="testimonials-subheading">
            Real results from real clients. Here's how our automation systems,
            custom platforms, and scalable solutions delivered measurable
            business impact.
          </p>

          <div className="testimonials-grid">
            <div className="testimonial-card slide-up">
              <div className="testimonial-quote">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="quote-icon"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
              </div>
              <p className="testimonial-text">
                Working with Ascendons was the push our engineering roadmap
                needed. They dove into our legacy systems, proposed a focused
                plan, and incrementally replaced brittle processes with robust
                automation. Beyond shipping features, they helped us clarify
                priorities and improved developer velocity across the board.
                Short version: less firefighting, more product work.
              </p>
              <div className="testimonial-author">
                <strong className="testimonial-name">Viaksh Roy</strong>
                <span className="testimonial-role">
                  Founder and CEO, WattGlow Power
                </span>
              </div>
            </div>

            <div className="testimonial-card slide-up">
              <div className="testimonial-quote">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="quote-icon"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
              </div>
              <p className="testimonial-text">
                I've worked with Ascendons for a while now, and they've
                consistently exceeded my expectations. The team is not only
                technically strong but also genuinely curious about
                understanding the business problem before jumping into code.
                They bring structure, creativity, and accountability to every
                project—traits that are rare to find together. From the very
                first engagement, they've shown a level of dedication and
                professionalism that made them feel more like an in-house team
                than an external partner. Every milestone with Ascendons has
                added measurable value to our operations and product roadmap.
              </p>
              <div className="testimonial-author">
                <strong className="testimonial-name">Pranav Kumar</strong>
                <span className="testimonial-role">
                  Founder, People Kind Pharma
                </span>
              </div>
            </div>

            <div className="testimonial-card slide-up">
              <div className="testimonial-quote">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="quote-icon"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
              </div>
              <p className="testimonial-text">
                Partnering with Ascendons has been a turning point for RK
                Enterprises. Their team streamlined our internal workflows,
                built reliable digital tools for our operations, and helped us
                move away from manual processes that slowed us down for years.
                What stood out most was their proactive approach — they
                anticipate challenges before they become issues. It's refreshing
                to work with a team that treats your business goals like their
                own.
              </p>
              <div className="testimonial-author">
                <strong className="testimonial-name">Vijay Goyal</strong>
                <span className="testimonial-role">
                  Managing Director, RK Enterprises
                </span>
              </div>
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
          <h2 className="cta-heading">
            Ready to Eliminate Manual Work & Scale Operations?
          </h2>
          <p className="cta-description">
            Stop losing time on repetitive tasks. Whether you need workflow
            automation, a custom CRM, a fundraising platform, or AI-powered
            chatbots—let's discuss how we can help you
            <strong style={{ color: "#1e40af" }}>
              {" "}
              cut costs, reduce errors, and accelerate growth.
            </strong>
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
