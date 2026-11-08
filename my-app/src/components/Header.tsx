import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../ascendons.png";
import { NAV } from "../data/site";
import { Button } from "./ui/ui";
import { getLenis } from "../hooks/useLenis";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  // Transparent at the top; blurred surface once scrolled; tucks away while scrolling down.
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 480 && y > last + 4);
      if (y < last - 4) setHidden(false);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll and close on Escape while the mobile menu is open.
  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    if (open) getLenis()?.stop();
    else getLenis()?.start();
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className="site-header"
      data-scrolled={scrolled || open}
      data-hidden={hidden && !open}
      data-open={open}
    >
      <div className="site-header-inner">
        <Link to="/" className="site-logo" aria-label="Ascendons home">
          <img src={logo} alt="" width="28" height="28" />
          <span>Ascendons</span>
        </Link>

        <nav className="site-nav" aria-label="Main">
          <ul>
            {NAV.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.to === "/"} className="site-nav-link">
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header-cta">
          <Button to="/contact">Let's Talk</Button>
        </div>

        <button
          type="button"
          className="site-menu-toggle"
          aria-expanded={open}
          aria-controls="site-mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="site-menu-bars" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </div>

      <nav
        id="site-mobile-nav"
        className="site-mobile"
        aria-label="Mobile"
        aria-hidden={!open}
        inert={!open}
      >
        <ul>
          {NAV.map((l, i) => (
            <li key={l.to} style={{ "--i": i } as React.CSSProperties}>
              <NavLink to={l.to} end={l.to === "/"}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div
          className="site-mobile-foot"
          style={{ "--i": NAV.length } as React.CSSProperties}
        >
          <Link to="/contact" className="x-btn">
            Let's Talk
          </Link>
          <a href="mailto:contact@ascendons.com" className="x-meta">
            contact@ascendons.com
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
