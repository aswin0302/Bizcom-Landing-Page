import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import "./Header.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Bizcom", href: "#about" },
  { label: "Who It's For", href: "#audience" },
  { label: "Features", href: "#features" },
  { label: "Problems & Solutions", href: "#problems" },
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
        {/* Bizcom Logo */}
        <a
          className="brand"
          href="#home"
          aria-label="Bizcom home"
          onClick={closeMenu}
        >
          <img
            className="brand-logo"
            src={`${import.meta.env.BASE_URL}bizcom-logo.png`}
            alt="Bizcom"
          />
        </a>

        {/* Navigation */}
        <nav
          className={`main-nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="nav-link"
            >
              {item.label}
            </a>
          ))}

          {/* Mobile CTA */}
          <button
            type="button"
            onClick={handleEnquiry}
            className="mobile-contact-link"
          >
            Talk to Our Team
            <ArrowUpRight size={17} />
          </button>
        </nav>

        {/* Desktop CTA */}
        <button
          type="button"
          className="header-cta"
          onClick={onOpenEnquiry}
        >
          Talk to Our Team
          <ArrowUpRight size={17} />
        </button>

        {/* Mobile Menu Toggle */}
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