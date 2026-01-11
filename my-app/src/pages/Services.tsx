import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

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
      <section className="home-section">
        <div className="home-content">
          <div className="home-heading">Services</div>
        </div>
      </section>

      <section
        className="text-section"
        style={{ position: "relative", zIndex: 10 }}
      >
        <div ref={servicesRef} className="what-we-do-container">
          <p className={`subpart1 ${visible.services ? "slide-up" : ""}`}>
            OUR SERVICES
          </p>
          <h2 className={`subpart2 ${visible.services ? "slide-up" : ""}`}>
            Automation & Platform Solutions That Transform Operations
          </h2>
          <p className={`subpart3 ${visible.services ? "slide-up" : ""}`}>
            At Ascendons, we specialize in transforming your ideas into
            innovative digital solutions. Whether you need a stunning website, a
            high-performance mobile app, or a custom software solution, we've
            got you covered. From startups to established enterprises, we work
            on everything where tech is needed.
          </p>
        </div>

        <div className="solutions-grid solutions-grid-2col">
          <div className="solution-card slide-up">
            <h3 className="solution-title">Custom CRMs & Business Software</h3>
            <p className="solution-description">
              Build CRMs and custom software solutions tailored to your exact
              workflow. ensuring your digital solutions drive growth and
              success. From market research to product roadmaps, we've got you
              covered.
            </p>
            <Link
              to="/contact"
              className="solution-link"
              style={{ textDecoration: "none", display: "inline-block" }}
            >
              Explore Solutions →
            </Link>
          </div>
          <div className="solution-card slide-up">
            <h3 className="solution-title">Fundraising & NGO Platforms</h3>
            <p className="solution-description">
              Complete platform solutions for nonprofits and NGOs. We build
              marketplaces, fundraising systems, organization management
              platforms with onboarding workflows, document verification, secure
              payments, and compliance-ready approval systems.
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
            <h3 className="solution-title">AI-Powered Chatbots & Automation</h3>
            <p className="solution-description">
              Intelligent chatbots powered by RAG (Retrieval Augmented
              Generation) technology that understand context and learn from your
              documents. Build customer support systems, knowledge bases, and
              automation workflows that provide accurate, context-aware
              responses.
            </p>
            <Link
              to="/contact"
              className="solution-link"
              style={{ textDecoration: "none", display: "inline-block" }}
            >
              Build Your Chatbot →
            </Link>
          </div>
          <div className="solution-card slide-up">
            <h3 className="solution-title">Communication Automation</h3>
            <p className="solution-description">
              Automate customer engagement across multiple channels. Build
              intelligent messaging systems that handle lead qualification,
              customer support, order tracking, and transactional communications
              at enterprise scale.
            </p>
            <Link
              to="/solutions/whatsapp-business-automation"
              className="solution-link"
              style={{ textDecoration: "none", display: "inline-block" }}
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      <section
        className="text-section"
        style={{ position: "relative", zIndex: 10 }}
      >
        <div ref={additionalRef} className="what-we-do-container">
          <p className={`subpart1 ${visible.additional ? "slide-up" : ""}`}>
            ADDITIONAL EXPERTISE
          </p>
          <h2 className={`subpart2 ${visible.additional ? "slide-up" : ""}`}>
            More Ways We Can Help
          </h2>
          <p className={`subpart3 ${visible.additional ? "slide-up" : ""}`}>
            We provide cutting-edge technology consulting services to help your
            business innovate, optimize, and grow. Here's how we can add value
            to your organization.
          </p>
        </div>

        <div className="solutions-grid solutions-grid-2col">
          <div className="solution-card slide-up">
            <h3 className="solution-title">Custom Platforms & Marketplaces</h3>
            <p className="solution-description">
              Build platforms and marketplaces from scratch with multi-tenant
              architecture, secure payments, role-based access, and scalable
              infrastructure—everything you need to launch and grow your
              platform.
            </p>
          </div>
          <div className="solution-card slide-up">
            <h3 className="solution-title">NGO Marketplace Development</h3>
            <p className="solution-description">
              We've built marketplaces specifically for NGOs—connecting
              organizations, managing partnerships, handling transactions, and
              scaling operations with compliance built-in from day one.
            </p>
          </div>
          <div className="solution-card slide-up">
            <h3 className="solution-title">Enterprise Admin Systems</h3>
            <p className="solution-description">
              Custom admin panels and workflow systems tailored to your
              operations. Handle complex business logic, multi-tenant
              architectures, and compliance requirements with precision.
            </p>
          </div>
          <div className="solution-card slide-up">
            <h3 className="solution-title">Workflow Optimization</h3>
            <p className="solution-description">
              Analyze your business processes, identify bottlenecks, and
              implement automation systems that eliminate repetitive tasks and
              save time.
            </p>
          </div>
        </div>
      </section>

      <section
        className="text-section"
        style={{ position: "relative", zIndex: 10 }}
      >
        <div ref={howWeWorkRef} className="what-we-do-container">
          <p className={`subpart1 ${visible.howWeWork ? "slide-up" : ""}`}>
            HOW WE WORK
          </p>
          <h2 className={`subpart2 ${visible.howWeWork ? "slide-up" : ""}`}>
            Our Approach to Building Solutions
          </h2>
          <p className={`subpart3 ${visible.howWeWork ? "slide-up" : ""}`}>
            We don't just write code—we understand your workflow, identify
            automation opportunities, and build systems that integrate
            seamlessly with your operations. Every solution is production-ready
            and built to scale.
          </p>
        </div>

        <div className="solutions-grid solutions-grid-2col">
          <div className="solution-card slide-up">
            <h3 className="solution-title">System Integration</h3>
            <p className="solution-description">
              Seamlessly integrate new systems with your existing tools—CRMs,
              payment gateways, databases, APIs. We ensure everything works
              together smoothly.
            </p>
          </div>
          <div className="solution-card slide-up">
            <h3 className="solution-title">Production-Ready Deployment</h3>
            <p className="solution-description">
              Every system we build is production-ready from day one. We handle
              deployment, monitoring, maintenance, and scaling—so you can focus
              on using the system, not managing it.
            </p>
          </div>
          <div className="solution-card slide-up">
            <h3 className="solution-title">Ongoing Support & Optimization</h3>
            <p className="solution-description">
              We don't disappear after launch. We provide ongoing support,
              monitor performance, optimize workflows, and scale systems as your
              needs grow.
            </p>
          </div>
          <div className="solution-card slide-up">
            <h3 className="solution-title">Compliance & Security</h3>
            <p className="solution-description">
              Built-in compliance for NGOs, secure payment processing,
              audit-ready workflows, and role-based access controls—security and
              compliance from the ground up.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
