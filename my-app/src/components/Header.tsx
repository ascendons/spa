import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../ascendons.png";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleResize();
    handleScroll();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo-wrapper">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Company Logo" className="logo-image" />
            <span className="logo-text">ASCENDONS</span>
          </Link>
        </div>
        <div className="menu-wrapper">
          {isMobile ? (
            <>
              <button
                onClick={toggleMenu}
                className="menu-toggle"
                aria-label="Toggle Navigation"
              >
                <svg
                  className="menu-icon"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
              {isMenuOpen && (
                <nav className="mobile-nav">
                  <ul className="nav-list">
                    <li>
                      <Link to="/" className="nav-link">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="nav-link">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" className="nav-link">
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/products" className="nav-link">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" className="nav-link contact">
                        Get in touch
                      </Link>
                    </li>
                  </ul>
                </nav>
              )}
            </>
          ) : (
            <nav className="desktop-nav">
              <ul className="desktop-list">
                <li>
                  <Link to="/" className="desktop-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="desktop-link">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="desktop-link">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="desktop-link">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="desktop-link contact">
                    Get in touch
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
