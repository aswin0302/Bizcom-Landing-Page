import {
  ArrowUpRight,
  Mail,
  MessageCircle,
} from "lucide-react";

import ContactCTA from "../sections/ContactCTA";
import "./StandalonePages.css";

function ContactPage({ onOpenEnquiry }) {
  return (
    <>
      <section className="standalone-page contact-page">
        <div className="standalone-container">
          <span className="section-eyebrow">
            CONTACT BIZCOM
          </span>

          <h1>
            Let's Start a
            <span> Conversation.</span>
          </h1>

          <p className="standalone-description">
            Tell us about your business communication needs. Our enquiry
            form helps you share your interests with the Bizcom team.
          </p>

          <div className="contact-page-card">
            <span className="pricing-card-icon">
              <MessageCircle size={27} />
            </span>

            <h2>How can we help you?</h2>

            <p>
              Ask about communication modules, product capabilities,
              or pricing and subscription details.
            </p>

            <button
              type="button"
              className="standalone-button"
              onClick={onOpenEnquiry}
            >
              Open Enquiry Form
              <ArrowUpRight size={18} />
            </button>

            <a
              className="contact-email-link"
              href="mailto:sales@bizcom.ai?subject=Bizcom%20Enquiry"
            >
              <Mail size={16} />
              Contact by email
            </a>
          </div>
        </div>
      </section>

      <ContactCTA onOpenEnquiry={onOpenEnquiry} />
    </>
  );
}

export default ContactPage;