import { Link, useLocation } from "react-router-dom";
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../ascendons.png";
import { CONTACT, PRODUCT_URLS, SERVICES } from "../data/site";
import { Button } from "./ui/ui";
import "./Footer.css";

const siteLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "What We Build" },
  { to: "/products", label: "Products" },
  { to: "/our-work", label: "Our Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const solutionLinks = [
  {
    to: "/solutions/whatsapp-business-automation",
    label: "WhatsApp Automation",
  },
  {
    to: "/solutions/fundraising-workflow-platforms",
    label: "Fundraising Platforms",
  },
];

function Footer() {
  // Home, Contact and solution pages already end with their own CTA.
  const { pathname } = useLocation();
  const showClose =
    pathname !== "/" &&
    pathname !== "/contact" &&
    !pathname.startsWith("/solutions");
  return (
    <footer className="site-footer">
      <div className="x-wrap">
        {showClose && (
          <div className="site-footer-close">
            <h2 className="site-footer-statement">
              Tell us what you're building.
            </h2>
            <div className="site-footer-actions">
              <Button to="/contact">Start a Conversation</Button>
              <Button
                href={`mailto:${CONTACT.email}`}
                variant="ghost"
                icon="none"
              >
                {CONTACT.email}
              </Button>
            </div>
          </div>
        )}

        <div className="site-footer-grid">
          <div className="site-footer-brand">
            <Link
              to="/"
              className="site-footer-logo"
              aria-label="Ascendons home"
            >
              <img src={logo} alt="" width="32" height="32" />
              Ascendons
            </Link>
            <p>
              We turn ambitious ideas into production-ready software products
              and help businesses build smarter digital operations.
            </p>
            <div className="site-footer-social">
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ascendons on LinkedIn"
              >
                <FaLinkedinIn aria-hidden="true" />
              </a>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ascendons on Instagram"
              >
                <FaInstagram aria-hidden="true" />
              </a>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message Ascendons on WhatsApp"
              >
                <FaWhatsapp aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="site-footer-heading">Navigate</h2>
            <ul>
              {siteLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="site-footer-heading">Services</h2>
            <ul>
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link to={`/services#${s.id}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="site-footer-heading">Products</h2>
            <ul>
              <li>
                <a
                  href={PRODUCT_URLS.briefguard}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BriefGuard
                </a>
              </li>
              <li>
                <a
                  href={PRODUCT_URLS.crm}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ascendons CRM
                </a>
              </li>
              <li>
                <a
                  href={PRODUCT_URLS.dpp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ascendons DPP
                </a>
              </li>
              <li>
                <a
                  href={PRODUCT_URLS.impakt}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Impakt
                </a>
              </li>
              <li>
                <a
                  href={PRODUCT_URLS.logistics}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ascendons Logistics
                </a>
              </li>
              {solutionLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="site-footer-heading">Contact</h2>
            <ul>
              <li>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </li>
              <li>
                <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
            <address>{CONTACT.address}</address>
          </div>
        </div>

        <div className="site-footer-legal">
          <p>© {new Date().getFullYear()} Ascendons. All rights reserved.</p>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
