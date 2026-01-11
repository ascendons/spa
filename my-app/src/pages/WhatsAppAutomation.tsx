import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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

        <div
          className="solutions-grid solutions-grid-3col"
          style={{ marginTop: "2rem" }}
        >
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
      >
        <div className="trust-content">
          <h2 className="trust-heading">What We Integrate With</h2>
          <p className="trust-description">
            Our WhatsApp automation systems integrate seamlessly with your
            existing tools and workflows. Connect with CRMs, ERPs, databases,
            payment gateways, and APIs to automate every aspect of customer
            communication.
          </p>
          <div className="trust-points" style={{ marginTop: "2rem" }}>
            <div className="trust-point">
              <strong>CRM Systems</strong>
              <span>
                Integrate with HubSpot, Salesforce, Zoho CRM, Pipedrive, or any
                custom CRM. Auto-create contacts, update lead status, sync
                conversations, and trigger workflows.
              </span>
            </div>
            <div className="trust-point">
              <strong>Payment Gateways</strong>
              <span>
                Connect with Razorpay, Stripe, PayU, Paytm, and other payment
                processors. Send payment links, confirm transactions, and
                automate payment reminders.
              </span>
            </div>
            <div className="trust-point">
              <strong>ERP & Business Tools</strong>
              <span>
                Integrate with SAP, Oracle, Microsoft Dynamics, or custom ERPs.
                Sync inventory, order status, delivery tracking, and customer
                data in real-time.
              </span>
            </div>
            <div className="trust-point">
              <strong>Google Sheets & Databases</strong>
              <span>
                Automatically log conversations, update spreadsheets, sync with
                PostgreSQL, MySQL, MongoDB, or any database. Real-time data
                updates without manual entry.
              </span>
            </div>
            <div className="trust-point">
              <strong>Email & Communication</strong>
              <span>
                Integrate with email services (SendGrid, AWS SES), SMS gateways,
                and Slack/Teams for multi-channel notifications and alerts.
              </span>
            </div>
            <div className="trust-point">
              <strong>Custom APIs</strong>
              <span>
                Connect with any RESTful API or webhook. We can integrate with
                your existing systems, third-party services, or build custom
                integrations for your specific needs.
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
            <h3 className="solution-title">E-commerce & Retail</h3>
            <p className="solution-description">
              Automate lead qualification, order confirmations, shipping
              updates, and customer support.{" "}
              <strong style={{ color: "#1e40af" }}>
                Convert 35% more leads and reduce support costs by 40%
              </strong>{" "}
              with 24/7 automated responses.
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
            <h3 className="solution-title">Real Estate</h3>
            <p className="solution-description">
              Automate property inquiries, schedule site visits, send property
              details, and qualify leads automatically.{" "}
              <strong style={{ color: "#1e40af" }}>
                Reduce response time from hours to seconds,
              </strong>{" "}
              capturing more qualified leads.
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
            <h3 className="solution-title">Service Businesses</h3>
            <p className="solution-description">
              Automate appointment booking, service confirmations, follow-ups,
              and payment reminders.{" "}
              <strong style={{ color: "#1e40af" }}>
                Reduce no-shows by 50%
              </strong>
              with automated reminders and streamline operations.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <h3 className="solution-title" style={{ marginBottom: "2rem" }}>
            Key Benefits
          </h3>
          <div
            className="solutions-grid"
            style={{
              marginTop: "2rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            }}
          >
            <div
              className={`solution-card ${visible.useCases ? "slide-up" : ""}`}
            >
              <h4
                className="solution-title"
                style={{ fontSize: "1.1rem", color: "#1e40af" }}
              >
                ⚡ Faster Response Times
              </h4>
              <p className="solution-description">
                Instant automated responses reduce wait times from hours to
                seconds, improving customer satisfaction and capturing more
                leads.
              </p>
            </div>
            <div
              className={`solution-card ${visible.useCases ? "slide-up" : ""}`}
            >
              <h4
                className="solution-title"
                style={{ fontSize: "1.1rem", color: "#1e40af" }}
              >
                💰 Cost Reduction
              </h4>
              <p className="solution-description">
                Eliminate manual tasks and reduce support staff workload. Handle
                thousands of conversations without hiring additional team
                members.
              </p>
            </div>
            <div
              className={`solution-card ${visible.useCases ? "slide-up" : ""}`}
            >
              <h4
                className="solution-title"
                style={{ fontSize: "1.1rem", color: "#1e40af" }}
              >
                📈 Scale Seamlessly
              </h4>
              <p className="solution-description">
                Scale from hundreds to thousands of daily conversations without
                performance issues. Built for enterprise-grade volume and
                reliability.
              </p>
            </div>
            <div
              className={`solution-card ${visible.useCases ? "slide-up" : ""}`}
            >
              <h4
                className="solution-title"
                style={{ fontSize: "1.1rem", color: "#1e40af" }}
              >
                🔗 System Integration
              </h4>
              <p className="solution-description">
                Connect with CRM, ERP, payment gateways, and databases.
                Real-time data sync eliminates manual entry and ensures
                accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Diagram / Architecture Explanation */}
      <section className="text-section">
        <div ref={architectureRef} className="what-we-do-container">
          <p className={`subpart1 ${visible.architecture ? "slide-up" : ""}`}>
            HOW IT WORKS
          </p>
          <h2 className={`subpart2 ${visible.architecture ? "slide-up" : ""}`}>
            Simple Workflow, Powerful Results
          </h2>
          <p
            className={`subpart3 ${visible.architecture ? "slide-up" : ""}`}
            style={{ marginBottom: "2rem" }}
          >
            See how our automation flows work—from customer inquiry to action,
            all automated, all integrated with your existing systems.
          </p>

          {/* Workflow Diagram */}
          <div
            style={{
              maxWidth: "900px",
              margin: "2rem auto",
              padding: "2rem",
              background: "rgba(255, 255, 255, 0.95)",
              borderRadius: "16px",
              border: "1px solid #bfdbfe",
              boxShadow: "0 4px 20px rgba(59, 130, 246, 0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  width: "100%",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    padding: "1rem 1.5rem",
                    background:
                      "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
                    color: "white",
                    borderRadius: "12px",
                    fontWeight: "600",
                    minWidth: "200px",
                    textAlign: "center",
                    flex: "1 1 250px",
                  }}
                >
                  Customer Message via WhatsApp
                </div>
                <div
                  style={{ fontSize: "2rem", color: "#3b82f6", flexShrink: 0 }}
                >
                  →
                </div>
                <div
                  style={{
                    padding: "1rem 1.5rem",
                    background: "#e0f2fe",
                    color: "#1e40af",
                    borderRadius: "12px",
                    fontWeight: "600",
                    minWidth: "200px",
                    textAlign: "center",
                    flex: "1 1 250px",
                  }}
                >
                  Automated Response & Lead Qualification
                </div>
              </div>

              <div style={{ fontSize: "2rem", color: "#3b82f6" }}>↓</div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  width: "100%",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    padding: "1rem 1.5rem",
                    background: "#eff6ff",
                    color: "#1e40af",
                    borderRadius: "12px",
                    fontWeight: "600",
                    textAlign: "center",
                    flex: "1 1 150px",
                  }}
                >
                  Update CRM
                </div>
                <div
                  style={{
                    padding: "1rem 1.5rem",
                    background: "#eff6ff",
                    color: "#1e40af",
                    borderRadius: "12px",
                    fontWeight: "600",
                    textAlign: "center",
                    flex: "1 1 150px",
                  }}
                >
                  Sync Order Status
                </div>
                <div
                  style={{
                    padding: "1rem 1.5rem",
                    background: "#eff6ff",
                    color: "#1e40af",
                    borderRadius: "12px",
                    fontWeight: "600",
                    textAlign: "center",
                    flex: "1 1 150px",
                  }}
                >
                  Trigger Payment Link
                </div>
              </div>

              <div style={{ fontSize: "2rem", color: "#3b82f6" }}>↓</div>

              <div
                style={{
                  padding: "1rem 1.5rem",
                  background:
                    "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                  color: "white",
                  borderRadius: "12px",
                  fontWeight: "600",
                  textAlign: "center",
                  width: "100%",
                  maxWidth: "600px",
                }}
              >
                ✅ Automated Follow-up & Human Handoff (if needed)
              </div>
            </div>
          </div>

          <h3
            className="solution-title"
            style={{ marginTop: "3rem", marginBottom: "1.5rem" }}
          >
            Architecture Built for Scale
          </h3>
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
