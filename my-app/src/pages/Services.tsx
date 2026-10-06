import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import SEO from "../components/SEO";

const Services: React.FC = () => {
  const [visible, setVisible] = useState({
    services: false,
    additional: false,
    howWeWork: false,
  });

  const servicesRef = useRef<HTMLDivElement>(null);
  const additionalRef = useRef<HTMLDivElement>(null);
  const howWeWorkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === servicesRef.current) {
              setVisible((prev) => ({ ...prev, services: true }));
            } else if (entry.target === additionalRef.current) {
              setVisible((prev) => ({ ...prev, additional: true }));
            } else if (entry.target === howWeWorkRef.current) {
              setVisible((prev) => ({ ...prev, howWeWork: true }));
            }
          }
        });
      },
      { threshold: 0.1 },
    );

    if (servicesRef.current) observer.observe(servicesRef.current);
    if (additionalRef.current) observer.observe(additionalRef.current);
    if (howWeWorkRef.current) observer.observe(howWeWorkRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SEO
        title="Services & Engineering Capabilities"
        description="Explore Ascendons engineering services: rapid MVP development (4-6 weeks), custom enterprise CRMs, AI assistants with RAG, WhatsApp automation, and platform development."
        canonicalPath="/services"
        keywords="MVP development services, custom CRM engineering, AI assistants RAG, WhatsApp automation systems, platform development, SaaS consulting"
      />
      <section className="home-section">
        <div className="home-content">
          <h1 className="home-heading">Services</h1>
        </div>
      </section>

      <section
        className="text-section"
        style={{ position: "relative", zIndex: 10 }}
      >
        <div ref={servicesRef} className="what-we-do-container">
          {/* <p className={`subpart1 ${visible.services ? "slide-up" : ""}`}>
            OUR SERVICES
          </p> */}
          <h2 className={`subpart2 ${visible.services ? "slide-up" : ""}`}>
            From MVP to Enterprise Platform
          </h2>
          <p className={`subpart3 ${visible.services ? "slide-up" : ""}`}>
            New products for founders, and CRMs, automation and consulting for
            established businesses.
          </p>
        </div>

        <div className="solutions-grid solutions-grid-2col">
          <div className="solution-card slide-up">
            <h3 className="solution-title">MVP & Product Development</h3>
            <p className="solution-description">
              Web and mobile MVPs in 4–6 weeks, with a fixed scope and price and
              a demo every week on a live staging link.
            </p>
            <Link
              to="/contact"
              className="solution-link"
              style={{ textDecoration: "none", display: "inline-block" }}
            >
              Scope Your MVP →
            </Link>
          </div>
          <div className="solution-card slide-up">
            <h3 className="solution-title">Technology Consulting</h3>
            <p className="solution-description">
              Architecture reviews, build-vs-buy decisions, automation roadmaps
              and advice on projects that have stalled.
            </p>
            <Link
              to="/contact"
              className="solution-link"
              style={{ textDecoration: "none", display: "inline-block" }}
            >
              Book a Consultation →
            </Link>
          </div>
          <div className="solution-card slide-up">
            <h3 className="solution-title">Custom CRMs & Business Software</h3>
            <p className="solution-description">
              CRMs, admin systems and internal tools built around your process,
              either from scratch or on top of Ascendons CRM.
            </p>
            <Link
              to="/products"
              className="solution-link"
              style={{ textDecoration: "none", display: "inline-block" }}
            >
              See Our CRM →
            </Link>
          </div>
          <div className="solution-card slide-up">
            <h3 className="solution-title">AI Assistants</h3>
            <p className="solution-description">
              Assistants for support, sales and internal knowledge that answer
              from your own documents, using retrieval-augmented generation
              (RAG).
            </p>
            <Link
              to="/contact"
              className="solution-link"
              style={{ textDecoration: "none", display: "inline-block" }}
            >
              Discuss an AI Project →
            </Link>
          </div>
          <div className="solution-card slide-up">
            <h3 className="solution-title">Automation & Integrations</h3>
            <p className="solution-description">
              WhatsApp and messaging automation for leads, orders and support,
              and integrations that connect your CRM, ERP, payment gateway and
              databases.
            </p>
            <Link
              to="/solutions/whatsapp-business-automation"
              className="solution-link"
              style={{ textDecoration: "none", display: "inline-block" }}
            >
              See WhatsApp Automation →
            </Link>
          </div>
          <div className="solution-card slide-up">
            <h3 className="solution-title">Platforms & Marketplaces</h3>
            <p className="solution-description">
              Multi-tenant platforms and marketplaces with payments, role-based
              access and infrastructure that can grow with usage.
            </p>
            <Link
              to="/contact"
              className="solution-link"
              style={{ textDecoration: "none", display: "inline-block" }}
            >
              Discuss a Platform →
            </Link>
          </div>
        </div>
      </section>

      <section
        className="text-section"
        style={{ position: "relative", zIndex: 10 }}
      >
        <div ref={additionalRef} className="what-we-do-container">
          {/* <p className={`subpart1 ${visible.additional ? "slide-up" : ""}`}>
            ALSO
          </p> */}
          <h2 className={`subpart2 ${visible.additional ? "slide-up" : ""}`}>
            Other Systems We Build
          </h2>
        </div>

        <div className="solutions-grid solutions-grid-3col">
          <div className="solution-card slide-up">
            <h3 className="solution-title">Fundraising & NGO Platforms</h3>
            <p className="solution-description">
              Partner onboarding, document verification, approvals, payments and
              audit trails for nonprofits.
            </p>
            <Link
              to="/solutions/fundraising-workflow-platforms"
              className="solution-link"
              style={{ textDecoration: "none", display: "inline-block" }}
            >
              Learn More →
            </Link>
          </div>
          <div className="solution-card slide-up">
            <h3 className="solution-title">Admin Systems</h3>
            <p className="solution-description">
              Admin panels and back-office tools for operations teams, with the
              business rules and access controls your organisation needs.
            </p>
          </div>
          <div className="solution-card slide-up">
            <h3 className="solution-title">Process Automation</h3>
            <p className="solution-description">
              We review how work moves through your teams and automate the
              repetitive steps.
            </p>
          </div>
        </div>
      </section>

      <section
        className="text-section"
        style={{ position: "relative", zIndex: 10 }}
      >
        <div ref={howWeWorkRef} className="what-we-do-container">
          {/* <p className={`subpart1 ${visible.howWeWork ? "slide-up" : ""}`}>
            HOW WE WORK
          </p> */}
          <h2 className={`subpart2 ${visible.howWeWork ? "slide-up" : ""}`}>
            How a Project Runs
          </h2>
          <p className={`subpart3 ${visible.howWeWork ? "slide-up" : ""}`}>
            Every project follows the same basic approach, whether it's a new
            MVP or a system for an established business.
          </p>
        </div>

        <div className="solutions-grid solutions-grid-2col">
          <div className="solution-card slide-up">
            <h3 className="solution-title">Scope First</h3>
            <p className="solution-description">
              We start by understanding your users and workflow, then agree on a
              written scope, timeline and price before building.
            </p>
          </div>
          <div className="solution-card slide-up">
            <h3 className="solution-title">Weekly Releases</h3>
            <p className="solution-description">
              Short sprints with a working demo every week, so you can review
              progress and change priorities as the project goes.
            </p>
          </div>
          <div className="solution-card slide-up">
            <h3 className="solution-title">Deployment and Support</h3>
            <p className="solution-description">
              We handle deployment, monitoring and maintenance, and support the
              system after launch.
            </p>
          </div>
          <div className="solution-card slide-up">
            <h3 className="solution-title">Security</h3>
            <p className="solution-description">
              Role-based access, secure payment handling and audit trails are
              part of the build, not added later.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
