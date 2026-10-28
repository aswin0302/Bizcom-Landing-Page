import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

import "./Footer.css";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "Features", to: "/features" },
  { label: "Solutions", to: "/solutions" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Pricing", to: "/pricing" },
  { label: "Contact Us", to: "/contact" },
];

function Footer({ onOpenEnquiry }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" id="footer-contact">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand-column">
            <Link to="/" className="footer-brand">
              <img
                src={`${import.meta.env.BASE_URL}bizcom-logo.png`}
                alt="Bizcom"
                className="footer-logo"
              />
            </Link>

            <p className="footer-description">
              Business communication, simplified. Explore the ways
              Bizcom helps businesses connect through its available
              communication options.
            </p>

            <a
              href="mailto:sales@bizcom.ai?subject=Bizcom%20Enquiry"
              className="footer-email"
            >
              <Mail size={16} />
              sales@bizcom.ai
              <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="footer-links-column">
            <h3>Explore</h3>

            <nav aria-label="Footer navigation">
              {footerLinks.map((link) => (
                <Link key={link.to} to={link.to}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-contact-column">
            <span className="footer-contact-icon">
              <MessageCircle size={21} />
            </span>

            <h3>Let's start a conversation.</h3>

            <p>
              Have questions about Bizcom? Contact the team to discuss
              your communication needs.
            </p>

            <button
              type="button"
              className="footer-contact-link"
              onClick={onOpenEnquiry}
            >
              Contact Bizcom
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Bizcom. All rights reserved.</p>

          <Link to="/" className="footer-back-to-top">
            Back to home
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;