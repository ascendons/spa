import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import JParticlesEffect from "../components/JParticlesEffect";
import "./Home.css";

const WhatsAppAutomation: React.FC = () => {
  const [visible, setVisible] = useState({
    hero: false,
    problem: false,
    solution: false,
    useCases: false,
    architecture: false,
    cta: false,
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const problemRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);
  const useCasesRef = useRef<HTMLDivElement>(null);
  const architectureRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === heroRef.current) {
              setVisible((prev) => ({ ...prev, hero: true }));
            } else if (entry.target === problemRef.current) {
              setVisible((prev) => ({ ...prev, problem: true }));
            } else if (entry.target === solutionRef.current) {
              setVisible((prev) => ({ ...prev, solution: true }));
            } else if (entry.target === useCasesRef.current) {
              setVisible((prev) => ({ ...prev, useCases: true }));
            } else if (entry.target === architectureRef.current) {
              setVisible((prev) => ({ ...prev, architecture: true }));
            } else if (entry.target === ctaRef.current) {
              setVisible((prev) => ({ ...prev, cta: true }));
            }
          }
        });
      },
      { threshold: 0.1 },
    );

    const refs = [
      heroRef,
      problemRef,
      solutionRef,
      useCasesRef,
      architectureRef,
      ctaRef,
    ];
    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="home-section">
        <JParticlesEffect />
        <div className="home-content">
          <h1
            ref={heroRef}
            className={`home-heading ${visible.hero ? "slide-up" : ""}`}
          >
            WhatsApp Business Automation
          </h1>
          <p
            className={`hero-subheading ${visible.hero ? "slide-up" : ""}`}
            style={{ marginTop: "1rem" }}
          >
            Scale customer engagement with automated WhatsApp workflows. Handle
            lead qualification, customer support, and transactional
            communications at scale using WhatsApp Cloud API.
          </p>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="text-section">
        <div ref={problemRef} className="what-we-do-container">
          <p className={`subpart1 ${visible.problem ? "slide-up" : ""}`}>
            THE CHALLENGE
          </p>
          <h2 className={`subpart2 ${visible.problem ? "slide-up" : ""}`}>
            Manual WhatsApp Handling Doesn't Scale
          </h2>
          <p className={`subpart3 ${visible.problem ? "slide-up" : ""}`}>
            As your business grows, manual WhatsApp conversations become a
            bottleneck. You're missing leads, struggling with response times,
            and spending hours on repetitive customer queries. Scaling your team
            isn't sustainable, and generic chatbot solutions don't understand
            your business context.
          </p>
        </div>

        <div className="solutions-grid" style={{ marginTop: "2rem" }}>
          <div className={`solution-card ${visible.problem ? "slide-up" : ""}`}>
            <h3 className="solution-title">Missed Opportunities</h3>
            <p className="solution-description">
              Leads fall through the cracks when responses are delayed or
              inconsistent. Every unanswered message is a lost opportunity.
            </p>
          </div>
          <div className={`solution-card ${visible.problem ? "slide-up" : ""}`}>
            <h3 className="solution-title">Scaling Issues</h3>
            <p className="solution-description">
              Hiring more support staff isn't cost-effective. You need
              automation that handles routine queries while your team focuses on
              complex issues.
            </p>
          </div>
          <div className={`solution-card ${visible.problem ? "slide-up" : ""}`}>
            <h3 className="solution-title">Inconsistent Experience</h3>
            <p className="solution-description">
              Manual handling leads to inconsistent responses, longer wait
              times, and frustrated customers who expect instant, accurate
              answers.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section
        ref={solutionRef}
        className={`trust-section ${visible.solution ? "visible" : ""}`}
        style={{
          background: "linear-gradient(135deg, #25d366 0%, #128c7e 100%)",
        }}
      >
        <div className="trust-content">
          <h2 className="trust-heading">Our Automation-First Approach</h2>
          <p className="trust-description">
            We build end-to-end WhatsApp automation systems using WhatsApp Cloud
            API that integrate seamlessly with your existing workflows. Our
            solutions handle lead qualification, customer support, order
            tracking, and transactional communications—all automated, all
            scalable.
          </p>
          <div className="trust-points" style={{ marginTop: "2rem" }}>
            <div className="trust-point">
              <strong>Automated Workflows</strong>
              <span>
                Intelligent conversation flows that qualify leads, answer FAQs,
                and route complex queries to human agents.
              </span>
            </div>
            <div className="trust-point">
              <strong>API Integration</strong>
              <span>
                Seamless integration with your CRM, order management, and
                payment systems for real-time data and actions.
              </span>
            </div>
            <div className="trust-point">
              <strong>Scalable Architecture</strong>
              <span>
                Built to handle thousands of concurrent conversations without
                performance degradation or cost overruns.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="text-section">
        <div ref={useCasesRef} className="what-we-do-container">
          <p className={`subpart1 ${visible.useCases ? "slide-up" : ""}`}>
            USE CASES
          </p>
          <h2 className={`subpart2 ${visible.useCases ? "slide-up" : ""}`}>
            Who Benefits from WhatsApp Automation
          </h2>
        </div>

        <div className="solutions-grid" style={{ marginTop: "2rem" }}>
          <div
            className={`solution-card ${visible.useCases ? "slide-up" : ""}`}
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
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </div>

            <h3 className="solution-title">Clinics & Hospitals</h3>

            <p className="solution-description">
              Simplify patient communication with WhatsApp automation. Enable
              instant appointment booking, automated reminders, lab report
              sharing, prescription delivery, and follow-up care notifications.
              Reduce front-desk workload while improving patient experience and
              engagement.
            </p>
          </div>

          <div
            className={`solution-card ${visible.useCases ? "slide-up" : ""}`}
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
            <h3 className="solution-title">Startups & E-commerce</h3>
            <p className="solution-description">
              Automate lead qualification, order confirmations, shipping
              updates, and customer support. Convert more leads and reduce
              support costs.
            </p>
          </div>
          <div
            className={`solution-card ${visible.useCases ? "slide-up" : ""}`}
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
            <h3 className="solution-title">Enterprises</h3>
            <p className="solution-description">
              Large-scale customer communication, transactional messaging, and
              support automation. Integrate with existing enterprise systems and
              workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture Explanation */}
      <section className="text-section" style={{ background: "#f9fafb" }}>
        <div ref={architectureRef} className="what-we-do-container">
          <p className={`subpart1 ${visible.architecture ? "slide-up" : ""}`}>
            HOW IT WORKS
          </p>
          <h2 className={`subpart2 ${visible.architecture ? "slide-up" : ""}`}>
            Architecture Built for Scale
          </h2>
          <p className={`subpart3 ${visible.architecture ? "slide-up" : ""}`}>
            Our WhatsApp automation systems are built on a robust architecture
            that connects WhatsApp Cloud API with your business logic. Here's
            how it works:
          </p>
        </div>

        <div className="solutions-grid" style={{ marginTop: "2rem" }}>
          <div
            className={`solution-card ${visible.architecture ? "slide-up" : ""}`}
          >
            <h3 className="solution-title">1. Message Reception</h3>
            <p className="solution-description">
              Incoming WhatsApp messages are received via WhatsApp Cloud API
              webhooks and processed in real-time by our automation engine.
            </p>
          </div>
          <div
            className={`solution-card ${visible.architecture ? "slide-up" : ""}`}
          >
            <h3 className="solution-title">2. Intelligent Routing</h3>
            <p className="solution-description">
              Our system analyzes message content, user context, and
              conversation history to route messages to appropriate workflows or
              human agents.
            </p>
          </div>
          <div
            className={`solution-card ${visible.architecture ? "slide-up" : ""}`}
          >
            <h3 className="solution-title">3. Automated Responses</h3>
            <p className="solution-description">
              Pre-configured workflows handle common queries, fetch data from
              your systems, and send contextual responses automatically.
            </p>
          </div>
          <div
            className={`solution-card ${visible.architecture ? "slide-up" : ""}`}
          >
            <h3 className="solution-title">4. System Integration</h3>
            <p className="solution-description">
              Seamless integration with your CRM, databases, and APIs ensures
              responses are always accurate and actions are executed in
              real-time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className={`cta-section ${visible.cta ? "visible" : ""}`}
      >
        <div className="cta-content">
          <h2 className="cta-heading">Request a Demo</h2>
          <p className="cta-description">
            See how WhatsApp automation can transform your customer engagement.
            Book a demo to see our platform in action and discuss your specific
            use case.
          </p>
          <Link
            to="/contact"
            className="cta-submit-button"
            style={{
              display: "inline-block",
              textDecoration: "none",
              textAlign: "center",
              width: "auto",
              padding: "1rem 3rem",
            }}
          >
            Request a Demo
          </Link>
        </div>
      </section>
    </>
  );
};

export default WhatsAppAutomation;
