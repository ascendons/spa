import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const FundraisingPlatforms: React.FC = () => {
  const [visible, setVisible] = useState({
    hero: false,
    problem: false,
    solution: false,
    capabilities: false,
    whyChoose: false,
    cta: false,
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const problemRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);
  const capabilitiesRef = useRef<HTMLDivElement>(null);
  const whyChooseRef = useRef<HTMLDivElement>(null);
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
            } else if (entry.target === capabilitiesRef.current) {
              setVisible((prev) => ({ ...prev, capabilities: true }));
            } else if (entry.target === whyChooseRef.current) {
              setVisible((prev) => ({ ...prev, whyChoose: true }));
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
      capabilitiesRef,
      whyChooseRef,
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
            Fundraising & Workflow Platforms
          </h1>
          <p
            className={`hero-subheading ${visible.hero ? "slide-up" : ""}`}
            style={{ marginTop: "1rem" }}
          >
            Complete platform solutions for nonprofits and institutions. From
            organization onboarding to secure payments, we build systems that
            handle complex workflows, compliance, and scale.
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
            Manual Processes Don't Scale for Nonprofits
          </h2>
          <p className={`subpart3 ${visible.problem ? "slide-up" : ""}`}>
            Nonprofits and institutions struggle with manual onboarding,
            document verification, and approval workflows. Spreadsheets and
            email chains create compliance risks, slow down operations, and make
            it impossible to scale. You need a platform that handles everything
            from organization registration to payment processing—with full audit
            trails and role-based access.
          </p>
        </div>

        <div className="solutions-grid" style={{ marginTop: "2rem" }}>
          <div className={`solution-card ${visible.problem ? "slide-up" : ""}`}>
            <h3 className="solution-title">Manual Onboarding</h3>
            <p className="solution-description">
              Paper-based or email-driven onboarding processes are slow,
              error-prone, and don't scale. Organizations wait weeks to get
              onboarded.
            </p>
          </div>
          <div className={`solution-card ${visible.problem ? "slide-up" : ""}`}>
            <h3 className="solution-title">Compliance Risk</h3>
            <p className="solution-description">
              Missing documentation, incomplete audit trails, and lack of
              verification create compliance and governance risks that can
              impact funding and reputation.
            </p>
          </div>
          <div className={`solution-card ${visible.problem ? "slide-up" : ""}`}>
            <h3 className="solution-title">Inefficient Workflows</h3>
            <p className="solution-description">
              Approval processes rely on email chains and manual checklists.
              Delays pile up, and there's no visibility into where requests are
              stuck.
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
          <h2 className="trust-heading">Platform-Driven Approach</h2>
          <p className="trust-description">
            We build complete fundraising and workflow platforms that handle
            organization onboarding, document verification, admin approvals,
            role-based access, secure payments, and audit-ready workflows—all in
            one integrated system. Every feature is designed for compliance,
            scalability, and real-world operations.
          </p>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="text-section">
        <div ref={capabilitiesRef} className="what-we-do-container">
          <p className={`subpart1 ${visible.capabilities ? "slide-up" : ""}`}>
            CORE CAPABILITIES
          </p>
          <h2 className={`subpart2 ${visible.capabilities ? "slide-up" : ""}`}>
            Everything You Need in One Platform
          </h2>
        </div>

        <div className="solutions-grid" style={{ marginTop: "2rem" }}>
          <div
            className={`solution-card ${visible.capabilities ? "slide-up" : ""}`}
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
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="solution-title">Organization Onboarding</h3>
            <p className="solution-description">
              Streamlined registration process with multi-step forms, document
              upload, and automated verification workflows. Organizations can
              self-register and track their application status in real-time.
            </p>
          </div>
          <div
            className={`solution-card ${visible.capabilities ? "slide-up" : ""}`}
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
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
              </svg>
            </div>
            <h3 className="solution-title">Document Upload & Verification</h3>
            <p className="solution-description">
              Secure document upload with automatic validation, format checks,
              and verification workflows. Support for multiple document types
              with version control and audit trails.
            </p>
          </div>
          <div
            className={`solution-card ${visible.capabilities ? "slide-up" : ""}`}
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
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            </div>
            <h3 className="solution-title">Admin Approvals</h3>
            <p className="solution-description">
              Configurable approval workflows with multi-level approvals,
              role-based permissions, and automated notifications. Track
              approval status and history with full audit trails.
            </p>
          </div>
          <div
            className={`solution-card ${visible.capabilities ? "slide-up" : ""}`}
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
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="solution-title">Role-Based Access</h3>
            <p className="solution-description">
              Granular permission system with roles for admins, reviewers,
              organizations, and donors. Control who can view, edit, or approve
              what—with fine-grained access controls.
            </p>
          </div>
          <div
            className={`solution-card ${visible.capabilities ? "slide-up" : ""}`}
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
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                <line x1="1" y1="10" x2="23" y2="10" />
              </svg>
            </div>
            <h3 className="solution-title">Secure Payment Integrations</h3>
            <p className="solution-description">
              Integrated payment gateways for donations, fees, and transactions.
              Support for multiple payment methods with secure processing,
              receipts, and financial reporting.
            </p>
          </div>
          <div
            className={`solution-card ${visible.capabilities ? "slide-up" : ""}`}
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
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
              </svg>
            </div>
            <h3 className="solution-title">Audit-Ready Workflows</h3>
            <p className="solution-description">
              Complete audit trails for all actions, document changes, and
              approvals. Export-ready reports for compliance, governance, and
              financial audits.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section
        ref={whyChooseRef}
        className="text-section"
        style={{ background: "#f9fafb", paddingTop: "3rem" }}
      >
        <div className="what-we-do-container">
          <h2
            className={`subpart2 ${visible.whyChoose ? "slide-up" : ""}`}
            style={{ marginBottom: "2rem" }}
          >
            Why Choose Our Platform Approach
          </h2>
          <div className="solutions-grid solutions-grid-3col">
            <div
              className={`solution-card ${visible.whyChoose ? "slide-up" : ""}`}
            >
              <h3 className="solution-title">Faster Onboarding</h3>
              <p className="solution-description">
                Reduce onboarding time from weeks to days with automated
                workflows and self-service registration.
              </p>
            </div>
            <div
              className={`solution-card ${visible.whyChoose ? "slide-up" : ""}`}
            >
              <h3 className="solution-title">Better Governance</h3>
              <p className="solution-description">
                Complete visibility into all processes, approvals, and
                transactions with full audit trails and reporting.
              </p>
            </div>
            <div
              className={`solution-card ${visible.whyChoose ? "slide-up" : ""}`}
            >
              <h3 className="solution-title">Scalable Architecture</h3>
              <p className="solution-description">
                Built to handle growth—from hundreds to thousands of
                organizations without performance degradation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className={`cta-section ${visible.cta ? "visible" : ""}`}
      >
        <div className="cta-content">
          <h2 className="cta-heading">Discuss Your Platform</h2>
          <p className="cta-description">
            Ready to build a fundraising and workflow platform that scales?
            Let's discuss your requirements, compliance needs, and how we can
            deliver a system that transforms your operations.
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
            Discuss Your Platform
          </Link>
        </div>
      </section>
    </>
  );
};

export default FundraisingPlatforms;
