import {
  MessageCircle,
  Headphones,
  Video,
  MessagesSquare,
  PhoneCall,
  CheckCircle2,
} from "lucide-react";

import "./About.css";

const channels = [
  { name: "Chat", detail: "Chat conversations", icon: MessageCircle },
  { name: "Audio Chat", detail: "Voice conversations", icon: Headphones },
  { name: "Video Chat", detail: "Video conversations", icon: Video },
  { name: "Message Chat", detail: "Text messaging", icon: MessagesSquare },
  { name: "IVR & Click-to-Call", detail: "Call interactions", icon: PhoneCall },
  { name: "WhatsApp", detail: "Business messaging", icon: MessageCircle },
];

const benefits = [
  "Multiple ways to communicate",
  "Communication options for different needs",
  "A range of channels for business interactions",
];

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-copy">
          <span className="section-eyebrow">
            ABOUT BIZCOM
          </span>

          <h2>
            Business Communication,
            <span> Made Simpler.</span>
          </h2>

          <p className="about-description">
            Bizcom brings essential communication capabilities into
            a connected experience, giving businesses multiple ways
            to connect with their customers and teams.
          </p>

          <div className="about-benefits">
            {benefits.map((benefit) => (
              <div className="about-benefit" key={benefit}>
                <CheckCircle2 size={19} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-visual">
          <div className="about-visual-header">
            <div>
              <span className="about-visual-kicker">
                THE BIZCOM EXPERIENCE
              </span>

              <h3>Ways to connect</h3>
            </div>

            <span className="about-visual-icon">
              <MessageCircle size={22} />
            </span>
          </div>

          <p className="about-visual-description">
            Explore communication options for your business.
          </p>

          <div className="about-channel-grid">
            {channels.map((channel) => {
              const Icon = channel.icon;

              return (
                <div
                  className="about-channel-card"
                  key={channel.name}
                >
                  <span className="about-channel-icon">
                    <Icon size={21} />
                  </span>

                  <strong>{channel.name}</strong>
                  <small>{channel.detail}</small>
                </div>
              );
            })}
          </div>

          <div className="about-visual-footer">
            <span className="about-footer-mark">
              <MessageCircle size={17} />
            </span>

            <span>
              <strong>Meet Bizcom</strong>
              <small>Business Communications, Simplified.</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;