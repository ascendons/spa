import { Link } from "react-router-dom";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/our-work", label: "Our Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/privacy", label: "Privacy Policy" },
];

const solutionLinks = [
  { to: "/contact", label: "MVP Development" },
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
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-10 px-6 md:px-20 font-sans relative z-10">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="md:w-1/4 text-left">
          <h2 className="text-xl font-bold mb-6">ASCENDONS</h2>
          <p className="text-sm leading-relaxed">
            A product engineering studio that ships production-ready MVPs in
            weeks, builds custom CRMs and automation for growing businesses, and
            makes its own products, including BriefGuard for legal teams.
          </p>
          <div className="flex space-x-4 mt-6">
            <a
              href="https://www.linkedin.com/company/ascendons1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ascendons on LinkedIn"
              className="bg-blue-900 p-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/ascendonstech/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ascendons on Instagram"
              className="bg-blue-900 p-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/*Quick Links*/}
        <div className="md:w-1/4 text-left">
          <h2 className="text-xl font-bold mb-6">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-white hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/*Products & Solutions*/}
        <div className="md:w-1/4 text-left">
          <h2 className="text-xl font-bold mb-6">Products & Solutions</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://briefguard.ascendons.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                BriefGuard
              </a>
            </li>
            <li>
              <Link to="/products" className="text-white hover:underline">
                Ascendons CRM
              </Link>
            </li>
            {solutionLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="text-white hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/*Contact Information*/}
        <div className="md:w-1/4 text-left">
          <h2 className="text-xl font-bold mb-6">Contact Information</h2>
          <p className="text-sm">
            Plot No. J-72, Vastu Villa, Mansarovar, Godadara, Surat, Gujarat -
            395012
          </p>
          <p className="mt-2 text-sm">
            <a href="tel:+919523297323" className="hover:underline">
              +91 9523297323
            </a>
          </p>
          <p className="mt-2 text-sm">
            <a href="mailto:contact@ascendons.com" className="hover:underline">
              contact@ascendons.com
            </a>
          </p>
        </div>
      </div>

      {/*Copyright*/}
      <div className="text-center text-sm mt-10">
        <p>
          Copyright ©{new Date().getFullYear()} All rights reserved by{" "}
          <strong>ASCENDONS</strong>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
