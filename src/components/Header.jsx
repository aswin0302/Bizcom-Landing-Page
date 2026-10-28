import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import "./Header.css";

const navItems = [
  { label: "Home", to: "/", end: true },
  { label: "Features", to: "/features" },
  { label: "Solutions", to: "/solutions" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Pricing", to: "/pricing" },
  { label: "Contact Us", to: "/contact" },
];

function Header({ onOpenEnquiry }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleEnquiry() {
    closeMenu();
    onOpenEnquiry();
  }

  return (
    <header className="site-header">
      <div className="header-container">
        <NavLink
          className="brand"
          to="/"
          aria-label="Bizcom home"
          onClick={closeMenu}
        >
          <img
            className="brand-logo"
            src={`${import.meta.env.BASE_URL}bizcom-logo.png`}
            alt="Bizcom"
          />
        </NavLink>

        <nav
          className={`main-nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={closeMenu}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <button
            type="button"
            className="mobile-contact-link"
            onClick={handleEnquiry}
          >
            Talk to Our Team
            <ArrowUpRight size={17} />
          </button>
        </nav>

        <button
          type="button"
          className="header-cta"
          onClick={onOpenEnquiry}
        >
          Talk to Our Team
          <ArrowUpRight size={17} />
        </button>

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
    </header>
  );
}

export default Header;