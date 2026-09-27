import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { useReveal } from "../utils/useReveal";
import { submitLead, type SubmitStatus } from "../utils/submitLead";
import SEO from "../components/SEO";

const BRIEFGUARD_URL = "https://briefguard.ascendons.in";

const paths = [
  {
    tag: "For founders and new ventures",
    title: "Launch an MVP",
    description:
      "We turn an idea into a working product that real users can sign up for, in 4–6 weeks. The scope and price are agreed up front, and you see a demo every week.",
    points: [
      "Web and mobile apps, SaaS products",
      "Fixed scope and fixed price",
      "Weekly demos on a live staging link",
    ],
    cta: "Scope my MVP",
  },
  {
    tag: "For established businesses",
    title: "Build and modernise business systems",
    description:
      "We build CRMs, internal tools and automation around the way your teams already work, and connect them to the systems you have.",
    points: [
      "Custom CRMs and admin systems",
      "Workflow automation and integrations",
      "Technology consulting and architecture reviews",
    ],
    cta: "Talk to us",
  },
];

const mvpTimeline = [
  {
    week: "Week 1",
    title: "Scope",
    description:
      "We agree on who the users are, the problem to solve and what the first version must do. You get a written scope, a timeline and a fixed price.",
  },
  {
    week: "Week 1–2",
    title: "Design",
    description:
      "Screens, data model and integrations, planned on a stack that can grow with the product.",
  },
  {
    week: "Week 2–5",
    title: "Build",
    description:
      "Weekly sprints with a working demo at the end of each one, so you can give feedback and adjust priorities as we go.",
  },
  {
    week: "Week 5–6",
    title: "Launch",
    description:
      "Production deployment with monitoring, analytics and documentation, followed by post-launch support.",
  },
];

const engagementModels = [
  {
    title: "MVP Sprint",
    description:
      "A fixed-scope, fixed-price build that takes a new product from idea to launch in 4–6 weeks.",
  },
  {
    title: "Dedicated Team",
    description:
      "Product, design, engineering and QA working as an extension of your team on a monthly basis.",
  },
  {
    title: "Consulting",
    description:
      "Architecture reviews, build-vs-buy advice and automation roadmaps for leadership teams.",
  },
];

const services = [
  {
    title: "MVP & Product Development",
    description:
      "Web apps, mobile apps and SaaS products, scoped to what your first users need and built so they can scale.",
    link: "/contact",
    linkLabel: "Scope your MVP →",
    iconClass: "enterprise-icon",
    icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
  },
  {
    title: "CRMs & Business Software",
    description:
      "CRMs, admin systems and internal tools built around your process, either from scratch or on top of our own CRM.",
    link: "/products",
    linkLabel: "See our CRM →",
    iconClass: "fundraising-icon",
    icon: (
      <>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </>
    ),
  },
  {
    title: "AI & Automation",
    description:
      "AI assistants that answer from your own documents, WhatsApp and messaging automation, and workflows that remove manual steps between systems.",
    link: "/solutions/whatsapp-business-automation",
    linkLabel: "See WhatsApp automation →",
    iconClass: "whatsapp-icon",
    icon: (
      <>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M13 8H7M17 12H7" />
      </>
    ),
  },
  {
    title: "Technology Consulting",
    description:
      "Architecture reviews, build-vs-buy decisions and technical roadmaps, for teams that want an independent view before they invest.",
    link: "/contact",
    linkLabel: "Book a consultation →",
    iconClass: "enterprise-icon",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4M12 8h.01" />
      </>
    ),
  },
];

const whyUs = [
  {
    title: "Short timelines",
    body: "MVPs in 4–6 weeks, with a demo every week. We reuse a stack and process we have already run in production.",
  },
  {
    title: "We run our own products",
    body: "BriefGuard and our CRM are in daily use. That experience with onboarding, reliability and support goes into client work.",
  },
  {
    title: "Work that's already live",
    body: "A nonprofit platform serving 300+ partner organisations and WhatsApp automation handling 5,000+ conversations a day.",
  },
  {
    title: "Support after launch",
    body: "Monitoring, error handling and security are part of every build, and post-launch support is included.",
  },
];

const industries = [
  {
    title: "Startups",
    description:
      "First versions of new products, built to test the idea with real users.",
  },
  {
    title: "Enterprises",
    description:
      "CRMs, admin systems and automation connected to existing tools and ERPs.",
  },
  {
    title: "Legal",
    description:
      "Research, drafting and citation verification through BriefGuard.",
  },
  {
    title: "Nonprofits",
    description:
      "Fundraising platforms, partner onboarding and approval workflows.",
  },
  {
    title: "E-commerce & Retail",
    description: "Order updates, support and customer messaging on WhatsApp.",
  },
  {
    title: "Healthcare & Services",
    description: "Booking, reminders and follow-ups without extra admin work.",
  },
];

const Home: React.FC = () => {
  const [heroRef, heroVisible] = useReveal<HTMLDivElement>();
  const [pathsRef, pathsVisible] = useReveal<HTMLDivElement>();
  const [productsRef, productsVisible] = useReveal<HTMLDivElement>();
  const [mvpRef, mvpVisible] = useReveal<HTMLDivElement>();
  const [servicesRef, servicesVisible] = useReveal<HTMLDivElement>();
  const [trustRef, trustVisible] = useReveal<HTMLElement>();
  const [industriesRef, industriesVisible] = useReveal<HTMLDivElement>();
  const [ctaRef, ctaVisible] = useReveal<HTMLElement>();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    problem: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const body = new FormData();
    body.append("name", formData.name);
    body.append("email", formData.email);
    body.append("company", formData.company);
    body.append("problem", formData.problem);
    body.append("subject", "Homepage Strategy Call Request");

    const ok = await submitLead(body);
    setStatus(ok ? "success" : "error");
    if (ok) setFormData({ name: "", email: "", company: "", problem: "" });
  };

  const reveal = (visible: boolean) => (visible ? "slide-up" : "");

  return (
    <>
      <SEO
        title="Ascendons | Fast MVPs, Custom CRMs & Product Engineering"
        description="Ascendons builds production-ready MVPs in 4-6 weeks, custom CRMs, AI assistants and automation for founders and enterprises, and makes its own products like BriefGuard."
        canonicalPath="/"
        keywords="MVP development, fast time to market, product engineering, software consultancy, custom CRM, BriefGuard, legal tech, WhatsApp automation, Surat software company"
      />
      {/* HERO SECTION */}
      <section className="home-section">
        <div ref={heroRef} className="home-content">
          {/* <p className={`hero-eyebrow ${reveal(heroVisible)}`}>
            Product engineering studio
          </p> */}
          <h1 className={`home-heading ${reveal(heroVisible)}`}>
            We design, build and launch
            <br />
            <span>software products</span>
          </h1>
          <p className={`hero-subheading ${reveal(heroVisible)}`}>
            For founders, we take new products from idea to launch in 4–6 weeks.
            For established businesses, we build CRMs, internal systems and
            automation. We also make our own products, including BriefGuard for
            legal teams.
          </p>
          <div className="hero-cta-container">
            <Link
              to="/contact"
              className={`home-butto hero-cta-primary ${reveal(heroVisible)}`}
            >
              Start a project
            </Link>
            <Link
              to="/products"
              className={`home-butto hero-cta-secondary ${reveal(heroVisible)}`}
            >
              See our products
            </Link>
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      {/* <section className="logo-strip">
        <p className="logo-strip-label">Clients we've worked with</p>
        <div className="logo-strip-row">
          {clientLogos.map((logo) => (
            <img key={logo.alt} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </section> */}

      {/* TWO PATHS */}
      <section className="text-section">
        <div ref={pathsRef} className="what-we-do-container">
          <h2 className={`subpart2 ${reveal(pathsVisible)}`}>
            Two kinds of work
          </h2>
        </div>

        <div className="solutions-grid solutions-grid-2col">
          {paths.map((path) => (
            <div
              key={path.title}
              className={`solution-card product-feature ${reveal(pathsVisible)}`}
            >
              <span className="product-badge">{path.tag}</span>
              <h3 className="solution-title">{path.title}</h3>
              <p className="solution-description">{path.description}</p>
              <ul className="product-points">
                {path.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Link to="/contact" className="solution-link">
                {path.cta} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="text-section" data-bg-gray="true">
        <div ref={productsRef} className="what-we-do-container">
          {/* <p className={`subpart1 ${reveal(productsVisible)}`}>OUR PRODUCTS</p> */}
          <h2 className={`subpart2 ${reveal(productsVisible)}`}>
            Products we build and run
          </h2>
          <p className={`subpart3 ${reveal(productsVisible)}`}>
            The same team that works on client projects builds and maintains
            these.
          </p>
        </div>

        <div className="solutions-grid solutions-grid-2col">
          <div
            className={`solution-card product-feature ${reveal(productsVisible)}`}
          >
            <span className="product-badge">Legal</span>
            <h3 className="solution-title">BriefGuard</h3>
            <p className="solution-description">
              A legal operating system for India that covers research, drafting,
              review and practice management. Every citation is checked against
              the actual judgment before filing.
            </p>
            <ul className="product-points">
              <li>Citation verification</li>
              <li>Drafting in 11 Indian languages</li>
              <li>Works with Microsoft Word and Google Docs</li>
              <li>Matter and deadline management</li>
            </ul>
            <a
              href={BRIEFGUARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="solution-link"
            >
              Visit BriefGuard →
            </a>
          </div>

          <div
            className={`solution-card product-feature ${reveal(productsVisible)}`}
          >
            <span className="product-badge">Enterprise</span>
            <h3 className="solution-title">Ascendons CRM</h3>
            <p className="solution-description">
              A CRM for large teams that can be configured to match their sales
              and operations process.
            </p>
            <ul className="product-points">
              <li>Configurable pipelines, leads and accounts</li>
              <li>Workflow automation and approvals</li>
              <li>Role-based access for multi-branch teams</li>
              <li>WhatsApp, email, ERP and payment integrations</li>
            </ul>
            <Link to="/products" className="solution-link">
              Learn more →
            </Link>
          </div>
        </div>
      </section>

      {/* MVP SECTION */}
      <section className="text-section">
        <div ref={mvpRef} className="what-we-do-container">
          {/* <p className={`subpart1 ${reveal(mvpVisible)}`}>BUILDING AN MVP</p> */}
          <h2 className={`subpart2 ${reveal(mvpVisible)}`}>
            Idea to launch in 4–6 weeks
          </h2>
          <p className={`subpart3 ${reveal(mvpVisible)}`}>
            A typical MVP engagement, week by week.
          </p>
        </div>

        <div className="mvp-timeline">
          {mvpTimeline.map((step) => (
            <div
              key={step.title}
              className={`solution-card mvp-step ${reveal(mvpVisible)}`}
            >
              <span className="mvp-week">{step.week}</span>
              <h3 className="solution-title">{step.title}</h3>
              <p className="solution-description">{step.description}</p>
            </div>
          ))}
        </div>

        <h3 className="engagement-heading">Ways to work with us</h3>
        <div className="solutions-grid solutions-grid-3col">
          {engagementModels.map((model) => (
            <div
              key={model.title}
              className={`solution-card ${reveal(mvpVisible)}`}
            >
              <h3 className="solution-title">{model.title}</h3>
              <p className="solution-description">{model.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="text-section" data-bg-gray="true">
        <div ref={servicesRef} className="what-we-do-container">
          {/* <p className={`subpart1 ${reveal(servicesVisible)}`}>SERVICES</p> */}
          <h2 className={`subpart2 ${reveal(servicesVisible)}`}>
            What we build
          </h2>
        </div>

        <div className="solutions-grid solutions-grid-2col">
          {services.map((service) => (
            <div
              key={service.title}
              className={`solution-card ${reveal(servicesVisible)}`}
            >
              <div className={`solution-icon ${service.iconClass}`}>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {service.icon}
                </svg>
              </div>
              <h3 className="solution-title">{service.title}</h3>
              <p className="solution-description">{service.description}</p>
              <Link to={service.link} className="solution-link">
                {service.linkLabel}
              </Link>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "2.5rem" }}>
          <Link to="/services" className="solution-link">
            All services →
          </Link>
        </div>
      </section>

      {/* WHY US SECTION */}
      <section
        ref={trustRef}
        className={`trust-section ${trustVisible ? "visible" : ""}`}
      >
        <div className="trust-content">
          <h2 className="trust-heading">Why clients work with us</h2>
          <div className="trust-points">
            {whyUs.map((point) => (
              <div key={point.title} className="trust-point">
                <strong>{point.title}</strong>
                <span>{point.body}</span>
              </div>
            ))}
          </div>
          {/* <Link
            to="/our-work"
            className="home-butto hero-cta-secondary"
            style={{ marginTop: "3rem" }}
          >
            Read the case studies
          </Link> */}
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="text-section">
        <div ref={industriesRef} className="what-we-do-container">
          {/* <p className={`subpart1 ${reveal(industriesVisible)}`}>
            WHO WE WORK WITH
          </p> */}
          <h2 className={`subpart2 ${reveal(industriesVisible)}`}>
            Industries
          </h2>
        </div>

        <div className="solutions-grid solutions-grid-3col">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className={`solution-card industry-card ${reveal(industriesVisible)}`}
            >
              <h3 className="solution-title">{industry.title}</h3>
              <p className="solution-description">{industry.description}</p>
            </div>
          ))}
        </div>

        <p className="tech-stack">
          <strong>Tech stack:</strong> React, Node.js, PostgreSQL, MongoDB,
          Redis, AWS, Google Cloud, Docker, Kubernetes, WhatsApp Cloud API,
          Razorpay, Stripe
        </p>
      </section>

      {/* TESTIMONIALS SECTION */}
      {/* <section
        ref={testimonialsRef}
        className={`testimonials-section ${testimonialsVisible ? "visible" : ""}`}
      >
        <div className="testimonials-content">
          <p className="testimonials-label">CLIENT STORIES</p>
          <h2 className="testimonials-heading">What our clients say</h2>

          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-card slide-up">
                <div className="testimonial-quote">
                  <QuoteIcon />
                </div>
                <p className="testimonial-text">{t.quote}</p>
                <div className="testimonial-author">
                  <strong className="testimonial-name">{t.name}</strong>
                  <span className="testimonial-role">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA SECTION WITH LEAD FORM */}
      <section
        ref={ctaRef}
        className={`cta-section ${ctaVisible ? "visible" : ""}`}
      >
        <div className="cta-content">
          <h2 className="cta-heading">Tell us about your project</h2>
          <p className="cta-description">
            Whether it's a new product or a system for your business, send us a
            few lines and we'll reply within one business day.
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
                placeholder="Company / Organization (optional)"
                value={formData.company}
                onChange={handleFormChange}
                className="cta-input"
              />
            </div>
            <textarea
              name="problem"
              placeholder="What would you like to build?"
              value={formData.problem}
              onChange={handleFormChange}
              required
              rows={4}
              className="cta-textarea"
            />
            <button
              type="submit"
              className="cta-submit-button"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send"}
            </button>
            {status === "success" && (
              <p className="form-status form-status-success" role="status">
                Thanks. We'll reply within one business day.
              </p>
            )}
            {status === "error" && (
              <p className="form-status form-status-error" role="alert">
                Something went wrong. Please try again or email
                contact@ascendons.com.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
