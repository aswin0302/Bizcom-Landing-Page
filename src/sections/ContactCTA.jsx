import {
  ArrowUpRight,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";
import "./ContactCTA.css";

function ContactCTA({ onOpenEnquiry }) {
  return (
    <section className="contact-cta-section" id="contact">
      <div className="contact-cta-panel">
        <div className="contact-cta-decoration" aria-hidden="true" />

        <div className="contact-cta-content">
          <span className="contact-cta-eyebrow">
            <Sparkles size={15} />
            YOUR NEXT CONVERSATION STARTS HERE
          </span>

          <h2>
            Let's Make Every
            <span> Conversation Count.</span>
          </h2>

          <p>
            Discover how Bizcom's communication capabilities can
            fit your business needs. Explore the possibilities
            and start a conversation with our team.
          </p>

          <div className="contact-cta-actions">
            <button
                type="button"
                className="contact-cta-primary"
                onClick={onOpenEnquiry}
                >
                Talk to Our Team
                <ArrowUpRight size={18} />
            </button>

            <a href="#features" className="contact-cta-secondary">
              <MessageCircle size={17} />
              Explore Features
            </a>
          </div>

          <div className="contact-cta-note">
            Explore the communication options available through Bizcom.
          </div>
        </div>

        <div className="contact-cta-visual" aria-hidden="true">
          <div className="cta-orbit orbit-one" />
          <div className="cta-orbit orbit-two" />

          <div className="cta-chat-bubble cta-bubble-one">
            <span className="cta-bubble-icon">
              <MessageCircle size={19} />
            </span>
            <span>
              <strong>Chat</strong>
              <small>Start a conversation</small>
            </span>
          </div>

          <div className="cta-chat-bubble cta-bubble-two">
            <span className="cta-bubble-icon cyan-icon">
              <Phone size={19} />
            </span>
            <span>
              <strong>Audio & Calling</strong>
              <small>Connect through voice</small>
            </span>
          </div>

          <div className="cta-center-icon">
            <MessageCircle size={39} strokeWidth={1.7} />
            <span className="cta-center-dot" />
          </div>

          <span className="cta-decoration-dot dot-one" />
          <span className="cta-decoration-dot dot-two" />
          <span className="cta-decoration-dot dot-three" />
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;