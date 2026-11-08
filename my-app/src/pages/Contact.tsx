import SEO from "../components/SEO";
import ContactSection from "../components/sections/ContactSection";
import { CONTACT } from "../data/site";
import "./pages.css";

const Contact = () => {
  return (
    <div className="x-page pg-contact">
      <SEO
        title="Contact Ascendons | Start a Conversation"
        description="Tell us what you're building. Scope an MVP, plan a CRM or business system, or discuss AI automation and integrations. We reply within one business day."
        canonicalPath="/contact"
        keywords="contact Ascendons, scope MVP, hire product engineers, custom CRM quote, software consultants Surat"
      />
      <ContactSection source="Contact page enquiry" headingLevel="h1" />

      <section
        className="x-section x-section--tight"
        aria-labelledby="visit-title"
      >
        <div className="x-wrap pg-visit">
          <div>
            <h2 id="visit-title" className="x-h3">
              Surat, Gujarat, India
            </h2>
            <address className="x-body">{CONTACT.address}</address>
            <ul className="pg-visit-list">
              <li>
                <span className="x-meta">Phone</span>
                <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
              </li>
              <li>
                <span className="x-meta">Email</span>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </li>
            </ul>
          </div>
          <div className="pg-map x-panel">
            <iframe
              title="Ascendons studio location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.011687442563!2d72.88623931493234!3d21.18957888591471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be053a3a0f8f4a5%3A0x2b2c6b0b6d8d1a2d!2sVastu%20Villa%2C%20J-72%2C%20Krishna%20Park%2C%20mansarovar%2C%20Godadara%2C%20Surat%2C%20Gujarat%20395012!5e0!3m2!1sen!2sin!4v1685456712345!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
