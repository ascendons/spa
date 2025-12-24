import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import JParticlesEffect from "../components/JParticlesEffect";
import "./Home.css";

const OurWork: React.FC = () => {
  const [visible, setVisible] = useState({
    hero: false,
    case1: false,
    case2: false,
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const case1Ref = useRef<HTMLDivElement>(null);
  const case2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === heroRef.current) {
              setVisible((prev) => ({ ...prev, hero: true }));
            } else if (entry.target === case1Ref.current) {
              setVisible((prev) => ({ ...prev, case1: true }));
            } else if (entry.target === case2Ref.current) {
              setVisible((prev) => ({ ...prev, case2: true }));
            }
          }
        });
      },
      { threshold: 0.1 },
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (case1Ref.current) observer.observe(case1Ref.current);
    if (case2Ref.current) observer.observe(case2Ref.current);

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
            Our Work
          </h1>
          <p
            className={`hero-subheading ${visible.hero ? "slide-up" : ""}`}
            style={{ marginTop: "1rem" }}
          >
            Real platforms. Real outcomes. Real impact. Here's how we've helped
            organizations automate workflows, scale operations, and deliver
            results.
          </p>
        </div>
      </section>

      {/* Case Study 1: WhatsApp Automation */}
      <section className="text-section">
        <div ref={case1Ref} className="what-we-do-container">
          <p className={`subpart1 ${visible.case1 ? "slide-up" : ""}`}>
            CASE STUDY
          </p>
          <h2 className={`subpart2 ${visible.case1 ? "slide-up" : ""}`}>
            WhatsApp Automation for a Consumer-Facing Platform
          </h2>
        </div>

        <div
          className="solution-card"
          style={{
            maxWidth: "900px",
            margin: "2rem auto 0",
            textAlign: "left",
          }}
        >
          <h3 className="solution-title" style={{ marginBottom: "1.5rem" }}>
            The Challenge
          </h3>
          <p className="solution-description" style={{ marginBottom: "2rem" }}>
            A consumer-facing platform was handling thousands of customer
            inquiries daily through WhatsApp. Manual responses were slow,
            inconsistent, and couldn't scale. The team was spending hours on
            repetitive queries like order status, product information, and basic
            support—leaving little time for complex issues. Lead qualification
            was manual, and many potential customers were lost due to delayed
            responses.
          </p>

          <h3 className="solution-title" style={{ marginBottom: "1.5rem" }}>
            The Solution
          </h3>
          <p className="solution-description" style={{ marginBottom: "2rem" }}>
            We built a comprehensive WhatsApp automation system using WhatsApp
            Cloud API that integrated with their order management and CRM
            systems. The solution included:
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              marginBottom: "2rem",
              color: "#6b7280",
            }}
          >
            <li style={{ marginBottom: "0.75rem", paddingLeft: "1.5rem" }}>
              <strong style={{ color: "#404044" }}>
                Automated Lead Qualification:
              </strong>{" "}
              Intelligent workflows that qualify leads, answer product queries,
              and route qualified leads to sales teams.
            </li>
            <li style={{ marginBottom: "0.75rem", paddingLeft: "1.5rem" }}>
              <strong style={{ color: "#404044" }}>
                Order Tracking Automation:
              </strong>{" "}
              Real-time order status updates, shipping notifications, and
              delivery confirmations—all automated.
            </li>
            <li style={{ marginBottom: "0.75rem", paddingLeft: "1.5rem" }}>
              <strong style={{ color: "#404044" }}>
                Customer Support Workflows:
              </strong>{" "}
              Automated responses to common FAQs, with seamless handoff to human
              agents for complex issues.
            </li>
            <li style={{ marginBottom: "0.75rem", paddingLeft: "1.5rem" }}>
              <strong style={{ color: "#404044" }}>System Integration:</strong>{" "}
              Deep integration with their order management, inventory, and CRM
              systems for real-time data and actions.
            </li>
          </ul>

          <h3 className="solution-title" style={{ marginBottom: "1.5rem" }}>
            The Outcome
          </h3>
          <div className="solutions-grid" style={{ marginTop: "1rem" }}>
            <div className="solution-card">
              <h4 className="solution-title" style={{ fontSize: "1.2rem" }}>
                Efficiency Gains
              </h4>
              <p className="solution-description">
                Automated handling of 80% of routine queries, freeing up the
                team to focus on complex customer issues and strategic work.
              </p>
            </div>
            <div className="solution-card">
              <h4 className="solution-title" style={{ fontSize: "1.2rem" }}>
                Scale & Automation
              </h4>
              <p className="solution-description">
                System handles thousands of concurrent conversations without
                additional staff, enabling 24/7 customer engagement.
              </p>
            </div>
            <div className="solution-card">
              <h4 className="solution-title" style={{ fontSize: "1.2rem" }}>
                Improved Conversion
              </h4>
              <p className="solution-description">
                Faster response times and automated lead qualification resulted
                in higher conversion rates and better customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 2: Fundraising Platform */}
      <section className="text-section" style={{ background: "#f9fafb" }}>
        <div ref={case2Ref} className="what-we-do-container">
          <p className={`subpart1 ${visible.case2 ? "slide-up" : ""}`}>
            CASE STUDY
          </p>
          <h2 className={`subpart2 ${visible.case2 ? "slide-up" : ""}`}>
            Fundraising & Admin Platform for a Large Nonprofit
          </h2>
        </div>

        <div
          className="solution-card"
          style={{
            maxWidth: "900px",
            margin: "2rem auto 0",
            textAlign: "left",
            background: "white",
          }}
        >
          <h3 className="solution-title" style={{ marginBottom: "1.5rem" }}>
            The Challenge
          </h3>
          <p className="solution-description" style={{ marginBottom: "2rem" }}>
            A leading nonprofit organization was managing hundreds of partner
            organizations through manual processes. Onboarding took weeks,
            document verification was done via email, and approval workflows
            relied on spreadsheets and email chains. There was no centralized
            system for tracking applications, managing payments, or maintaining
            audit trails. Compliance was a constant concern, and scaling
            operations was impossible with existing processes.
          </p>

          <h3 className="solution-title" style={{ marginBottom: "1.5rem" }}>
            The Solution
          </h3>
          <p className="solution-description" style={{ marginBottom: "2rem" }}>
            We built a complete fundraising and workflow platform that
            transformed their operations:
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              marginBottom: "2rem",
              color: "#6b7280",
            }}
          >
            <li style={{ marginBottom: "0.75rem", paddingLeft: "1.5rem" }}>
              <strong style={{ color: "#404044" }}>
                Organization Onboarding:
              </strong>{" "}
              Self-service registration portal with multi-step forms, document
              upload, and real-time application tracking.
            </li>
            <li style={{ marginBottom: "0.75rem", paddingLeft: "1.5rem" }}>
              <strong style={{ color: "#404044" }}>Document Workflows:</strong>{" "}
              Automated document verification, format validation, and secure
              storage with version control and audit trails.
            </li>
            <li style={{ marginBottom: "0.75rem", paddingLeft: "1.5rem" }}>
              <strong style={{ color: "#404044" }}>
                Admin Approval System:
              </strong>{" "}
              Configurable multi-level approval workflows with role-based
              permissions, automated notifications, and complete approval
              history.
            </li>
            <li style={{ marginBottom: "0.75rem", paddingLeft: "1.5rem" }}>
              <strong style={{ color: "#404044" }}>
                Role-Based Access Control:
              </strong>{" "}
              Granular permissions for admins, reviewers, organizations, and
              donors with fine-grained access controls.
            </li>
            <li style={{ marginBottom: "0.75rem", paddingLeft: "1.5rem" }}>
              <strong style={{ color: "#404044" }}>
                Secure Payment Integration:
              </strong>{" "}
              Integrated payment gateways for donations, fees, and transactions
              with secure processing and financial reporting.
            </li>
            <li style={{ marginBottom: "0.75rem", paddingLeft: "1.5rem" }}>
              <strong style={{ color: "#404044" }}>
                Audit-Ready Workflows:
              </strong>{" "}
              Complete audit trails for all actions, document changes, and
              approvals with export-ready reports for compliance.
            </li>
          </ul>

          <h3 className="solution-title" style={{ marginBottom: "1.5rem" }}>
            The Outcome
          </h3>
          <div className="solutions-grid" style={{ marginTop: "1rem" }}>
            <div className="solution-card">
              <h4 className="solution-title" style={{ fontSize: "1.2rem" }}>
                Faster Onboarding
              </h4>
              <p className="solution-description">
                Reduced onboarding time from weeks to days with automated
                workflows and self-service registration, enabling faster
                organization activation.
              </p>
            </div>
            <div className="solution-card">
              <h4 className="solution-title" style={{ fontSize: "1.2rem" }}>
                Better Governance
              </h4>
              <p className="solution-description">
                Complete visibility into all processes, approvals, and
                transactions with full audit trails, ensuring compliance and
                reducing governance risks.
              </p>
            </div>
            <div className="solution-card">
              <h4 className="solution-title" style={{ fontSize: "1.2rem" }}>
                Scalable Operations
              </h4>
              <p className="solution-description">
                Platform handles growth from hundreds to thousands of
                organizations without performance degradation, enabling
                sustainable scaling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section visible">
        <div className="cta-content">
          <h2 className="cta-heading">Ready to Build Your Platform?</h2>
          <p className="cta-description">
            Let's discuss how we can help you automate workflows, scale
            operations, and deliver outcomes that matter.
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
            Book a Strategy Call
          </Link>
        </div>
      </section>
    </>
  );
};

export default OurWork;
