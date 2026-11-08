import SEO from "../components/SEO";
import PageHero from "../components/sections/PageHero";
import { Button } from "../components/ui/ui";
import "./pages.css";

const PROBLEMS = [
  {
    title: "Missed Opportunities",
    body: "Leads fall through the cracks when responses are delayed or inconsistent. Every unanswered message is a lost opportunity.",
  },
  {
    title: "Scaling Issues",
    body: "Hiring more support staff isn't cost-effective. You need automation that handles routine queries while your team focuses on complex issues.",
  },
  {
    title: "Inconsistent Experience",
    body: "Manual handling leads to inconsistent responses, longer wait times, and frustrated customers who expect instant, accurate answers.",
  },
];

const INTEGRATIONS = [
  {
    title: "CRM Systems",
    body: "Integrate with HubSpot, Salesforce, Zoho CRM, Pipedrive, or any custom CRM. Auto-create contacts, update lead status, sync conversations, and trigger workflows.",
  },
  {
    title: "Payment Gateways",
    body: "Connect with Razorpay, Stripe, PayU, Paytm, and other payment processors. Send payment links, confirm transactions, and automate payment reminders.",
  },
  {
    title: "ERP & Business Tools",
    body: "Integrate with SAP, Oracle, Microsoft Dynamics, or custom ERPs. Sync inventory, order status, delivery tracking, and customer data in real-time.",
  },
  {
    title: "Google Sheets & Databases",
    body: "Automatically log conversations, update spreadsheets, sync with PostgreSQL, MySQL, MongoDB, or any database. Real-time data updates without manual entry.",
  },
  {
    title: "Email & Communication",
    body: "Integrate with email services (SendGrid, AWS SES), SMS gateways, and Slack/Teams for multi-channel notifications and alerts.",
  },
  {
    title: "Custom APIs",
    body: "Connect with any RESTful API or webhook. We can integrate with your existing systems, third-party services, or build custom integrations for your specific needs.",
  },
];

const USE_CASES = [
  {
    title: "Clinics & Hospitals",
    body: "Simplify patient communication with WhatsApp automation. Enable instant appointment booking, automated reminders, lab report sharing, prescription delivery, and follow-up care notifications. Reduce front-desk workload while improving patient experience and engagement.",
  },
  {
    title: "E-commerce & Retail",
    body: "Automate lead qualification, order confirmations, shipping updates, and customer support with 24/7 automated responses.",
  },
  {
    title: "Real Estate",
    body: "Automate property inquiries, schedule site visits, send property details, and qualify leads automatically. Reduce response time from hours to seconds, capturing more qualified leads.",
  },
  {
    title: "Service Businesses",
    body: "Automate appointment booking, service confirmations, follow-ups, and payment reminders. Reduce no-shows with automated reminders and streamline operations.",
  },
];

const BENEFITS = [
  {
    title: "Faster Response Times",
    body: "Instant automated responses reduce wait times from hours to seconds, improving customer satisfaction and capturing more leads.",
  },
  {
    title: "Cost Reduction",
    body: "Eliminate manual tasks and reduce support staff workload. Handle thousands of conversations without hiring additional team members.",
  },
  {
    title: "Scale Seamlessly",
    body: "Scale from hundreds to thousands of daily conversations without performance issues. Built for enterprise-grade volume and reliability.",
  },
  {
    title: "System Integration",
    body: "Connect with CRM, ERP, payment gateways, and databases. Real-time data sync eliminates manual entry and ensures accuracy.",
  },
];

const STEPS = [
  {
    title: "Message Reception",
    body: "Incoming WhatsApp messages are received via WhatsApp Cloud API webhooks and processed in real-time by our automation engine.",
  },
  {
    title: "Intelligent Routing",
    body: "Our system analyzes message content, user context, and conversation history to route messages to appropriate workflows or human agents.",
  },
  {
    title: "Automated Responses",
    body: "Pre-configured workflows handle common queries, fetch data from your systems, and send contextual responses automatically.",
  },
  {
    title: "System Integration",
    body: "Seamless integration with your CRM, databases, and APIs ensures responses are always accurate and actions are executed in real-time.",
  },
];

const WhatsAppAutomation = () => {
  return (
    <div className="x-page">
      <SEO
        title="WhatsApp Business Automation & Cloud API Integration"
        description="Scale customer engagement with automated WhatsApp workflows, CRM integrations, and order tracking using WhatsApp Cloud API. 24/7 automated handling."
        canonicalPath="/solutions/whatsapp-business-automation"
        keywords="WhatsApp Cloud API, WhatsApp automation, customer engagement chatbot, CRM WhatsApp integration, automated order tracking"
      />
      <PageHero
        title="WhatsApp Business Automation"
        lede="Scale customer engagement with automated WhatsApp workflows. Handle lead qualification, customer support, and transactional communications at scale using WhatsApp Cloud API."
      >
        <div className="pg-actions">
          <Button to="/contact">Request a Demo</Button>
          <Button href="#how-it-works" variant="ghost">
            How it works
          </Button>
        </div>
      </PageHero>

      {/* The challenge */}
      <section
        className="x-section x-section--tight"
        aria-labelledby="wa-problem-title"
      >
        <div className="x-wrap">
          <div className="x-head x-head--split">
            <div>
              <h2 id="wa-problem-title" className="x-h2">
                Manual WhatsApp Handling Doesn't Scale
              </h2>
            </div>
            <p className="x-lede">
              As your business grows, manual WhatsApp conversations become a
              bottleneck. You're missing leads, struggling with response times,
              and spending hours on repetitive customer queries. Scaling your
              team isn't sustainable, and generic chatbot solutions don't
              understand your business context.
            </p>
          </div>
          <div className="sol-problems">
            {PROBLEMS.map((p) => (
              <article key={p.title} className="sol-problem">
                <h3 className="x-h3">{p.title}</h3>
                <p className="x-body">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="x-section x-paper" aria-labelledby="wa-int-title">
        <div className="x-wrap">
          <div className="x-head x-head--split">
            <div>
              <h2 id="wa-int-title" className="x-h2">
                What We Integrate With
              </h2>
            </div>
            <p className="x-lede">
              Our WhatsApp automation systems integrate seamlessly with your
              existing tools and workflows. Connect with CRMs, ERPs, databases,
              payment gateways, and APIs to automate every aspect of customer
              communication.
            </p>
          </div>
          <div className="pg-feature-grid">
            {INTEGRATIONS.map((f) => (
              <article key={f.title} className="pg-feature">
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="x-section" aria-labelledby="wa-cases-title">
        <div className="x-wrap">
          <div className="x-head">
            <h2 id="wa-cases-title" className="x-h2">
              Who Benefits from WhatsApp Automation
            </h2>
          </div>
          <div className="sol-cards sol-cards--2">
            {USE_CASES.map((c) => (
              <article key={c.title} className="sol-card x-panel">
                <h3 className="x-h3">{c.title}</h3>
                <p className="x-body">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Key benefits */}
      <section
        className="x-section x-section--tight sol-flush"
        aria-labelledby="wa-benefits-title"
      >
        <div className="x-wrap">
          <div className="x-head">
            <h2 id="wa-benefits-title" className="x-h2">
              Key Benefits
            </h2>
          </div>
          <ul className="sol-benefits">
            {BENEFITS.map((b) => (
              <li key={b.title} className="sol-benefit">
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Workflow */}
      <section
        id="how-it-works"
        className="x-section x-paper"
        aria-labelledby="wa-flow-title"
      >
        <div className="x-wrap">
          <div className="x-head x-head--split">
            <div>
              <h2 id="wa-flow-title" className="x-h2">
                Simple Workflow, Powerful Results
              </h2>
            </div>
            <p className="x-lede">
              See how our automation flows work—from customer inquiry to action,
              all automated, all integrated with your existing systems.
            </p>
          </div>
          <ol className="sol-flow">
            <li className="sol-flow-stage">
              <span className="x-meta">01</span>
              <p className="sol-flow-node sol-flow-node--start">
                Customer Message via WhatsApp
              </p>
            </li>
            <li className="sol-flow-stage">
              <span className="x-meta">02</span>
              <p className="sol-flow-node">
                Automated Response &amp; Lead Qualification
              </p>
            </li>
            <li className="sol-flow-stage">
              <span className="x-meta">03</span>
              <ul className="sol-flow-actions">
                <li className="sol-flow-node sol-flow-node--action">
                  Update CRM
                </li>
                <li className="sol-flow-node sol-flow-node--action">
                  Sync Order Status
                </li>
                <li className="sol-flow-node sol-flow-node--action">
                  Trigger Payment Link
                </li>
              </ul>
            </li>
            <li className="sol-flow-stage">
              <span className="x-meta">04</span>
              <p className="sol-flow-node sol-flow-node--end">
                Automated Follow-up &amp; Human Handoff (if needed)
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* Architecture */}
      <section className="x-section" aria-labelledby="wa-arch-title">
        <div className="x-wrap">
          <div className="x-head x-head--split">
            <div>
              <h2 id="wa-arch-title" className="x-h2">
                Architecture Built for Scale
              </h2>
            </div>
            <p className="x-lede">
              Our WhatsApp automation systems are built on a robust architecture
              that connects WhatsApp Cloud API with your business logic. Here's
              how it works:
            </p>
          </div>
          <ol className="sol-steps">
            {STEPS.map((s) => (
              <li key={s.title} className="sol-step">
                <h3 className="sol-step-title">{s.title}</h3>
                <p className="sol-step-body">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section
        className="x-section x-section--tight sol-cta"
        aria-labelledby="wa-cta-title"
      >
        <div className="x-wrap">
          <div className="sol-cta-inner">
            <h2 id="wa-cta-title" className="x-h2">
              Request a Demo
            </h2>
            <p className="x-lede">
              See how WhatsApp automation can transform your customer
              engagement. Book a demo to see our platform in action and discuss
              your specific use case.
            </p>
            <div className="pg-actions">
              <Button to="/contact">Request a Demo</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatsAppAutomation;
