import {
  ArrowUpRight,
  Mail,
  MessageCircle,
} from "lucide-react";

import "./Footer.css";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About Bizcom", href: "#about" },
  { label: "Who It's For", href: "#audience" },
  { label: "Features & Modules", href: "#features" },
  { label: "Problems & Solutions", href: "#problems" },
  { label: "How It Works", href: "#how-it-works" },
];

function Footer({ onOpenEnquiry }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" id="footer-contact">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand-column">
            <a href="#home" className="footer-brand">
              <img
                src="/public/Bizcom Gradient Chat Logo.png"
                alt="Bizcom"
                className="footer-logo"
               />
            </a>

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
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
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
          <p>
            © {currentYear} Bizcom. All rights reserved.
          </p>

          <a href="#home" className="footer-back-to-top">
            Back to top
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;