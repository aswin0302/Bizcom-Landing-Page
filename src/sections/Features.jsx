import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  CheckCheck,
  Headphones,
  MessageCircle,
  MessagesSquare,
  Mic,
  MoreHorizontal,
  Paperclip,
  Phone,
  PhoneCall,
  Send,
  Smartphone,
  Video,
  Volume2,
} from "lucide-react";

import "./Features.css";

const features = [
  {
    id: "chat",
    title: "Chat",
    subtitle: "Customer conversations",
    description:
      "Make space for clear, convenient conversations between businesses and customers.",
    kind: "chat",
    icon: MessageCircle,
    label: "CHAT EXPERIENCE",
  },
  {
    id: "audio",
    title: "Audio Chat",
    subtitle: "Voice conversations",
    description:
      "Explore voice-based communication for conversations that call for speaking directly.",
    kind: "audio",
    icon: Headphones,
    label: "AUDIO EXPERIENCE",
  },
  {
    id: "video",
    title: "Video Chat",
    subtitle: "Face-to-face conversations",
    description:
      "See how a video conversation interface can make remote interactions more personal.",
    kind: "video",
    icon: Video,
    label: "VIDEO EXPERIENCE",
  },
  {
    id: "messages",
    title: "Message Chat",
    subtitle: "Message-based communication",
    description:
      "Explore a messaging interface for reviewing conversation threads and message exchanges.",
    kind: "messages",
    icon: MessagesSquare,
    label: "MESSAGING EXPERIENCE",
  },
  {
    id: "ivr",
    title: "IVR & Click-to-Call",
    subtitle: "Calling interactions",
    description:
      "Discover the IVR and click-to-call capabilities available for business phone interactions.",
    kind: "ivr",
    icon: PhoneCall,
    label: "CALLING EXPERIENCE",
  },
  {
    id: "whatsapp",
    title: "WhatsApp Integration",
    subtitle: "Familiar messaging channel",
    description:
      "Explore Bizcom's supported WhatsApp and WhatsApp Business integration options.",
    kind: "whatsapp",
    icon: Smartphone,
    label: "WHATSAPP EXPERIENCE",
  },
];

function MessagingPreview({ feature }) {
  return (
    <div className="messaging-preview-layout">
      {feature.kind === "messages" && (
        <aside className="message-thread-list">
          <strong className="thread-list-title">Conversations</strong>

          <div className="thread-list-item selected">
            <span className="thread-avatar">SM</span>
            <span>
              <strong>Sarah Miller</strong>
              <small>Product enquiry</small>
            </span>
          </div>

          <div className="thread-list-item">
            <span className="thread-avatar thread-avatar-cyan">JD</span>
            <span>
              <strong>John Davis</strong>
              <small>General enquiry</small>
            </span>
          </div>

          <div className="thread-list-item">
            <span className="thread-avatar thread-avatar-lavender">AL</span>
            <span>
              <strong>Alex Lee</strong>
              <small>Follow-up</small>
            </span>
          </div>
        </aside>
      )}

      <div className="message-demo">
        <div className="message-demo-person">
          <div className="demo-avatar">SM</div>

          <div>
            <strong>Sarah Miller</strong>
            <small>
              {feature.kind === "whatsapp"
                ? "Illustrative WhatsApp conversation"
                : "Customer conversation preview"}
            </small>
          </div>

          {feature.kind === "whatsapp" && (
            <span className="whatsapp-preview-label">WHATSAPP</span>
          )}
        </div>

        <div className="demo-message-date">TODAY</div>

        <div className="demo-bubble incoming">
          Hi! I have a question about your services.
          <small>10:41 AM</small>
        </div>

        <div className="demo-bubble outgoing">
          Hello, Sarah! How can we help you today?
          <small>
            10:42 AM <CheckCheck size={13} />
          </small>
        </div>

        <div className="demo-bubble incoming">
          Could someone help me with an enquiry?
          <small>10:43 AM</small>
        </div>

        <div className="demo-composer">
          <Paperclip size={16} />
          <span>Write a message...</span>
          <span className="demo-send-button">
            <Send size={15} />
          </span>
        </div>
      </div>
    </div>
  );
}

function AudioPreview() {
  return (
    <div className="audio-demo">
      <span className="demo-status-pill">
        <span /> AUDIO INTERFACE PREVIEW
      </span>

      <div className="audio-demo-avatar">SM</div>

      <h4>Sarah Miller</h4>
      <p>Illustrative audio conversation</p>

      <div className="audio-waveform" aria-label="Illustrative audio waveform">
        {Array.from({ length: 39 }, (_, index) => (
          <span key={index} />
        ))}
      </div>

      <div className="audio-duration">Voice conversation interface</div>

      <div className="demo-call-controls">
        <span>
          <Mic size={17} />
        </span>
        <span>
          <Volume2 size={17} />
        </span>
        <span className="demo-end-call">
          <Phone size={17} />
        </span>
      </div>

      <small className="preview-disclaimer">
        Visual concept only — no live call is connected.
      </small>
    </div>
  );
}

function VideoPreview() {
  return (
    <div className="video-demo">
      <div className="video-participant-grid">
        <div className="video-person video-person-primary">
          <div className="video-person-avatar">SM</div>
          <span>Sarah Miller</span>
          <small>Participant preview</small>
        </div>

        <div className="video-person video-person-secondary">
          <div className="video-person-avatar">BC</div>
          <span>Bizcom Team</span>
          <small>Participant preview</small>
        </div>
      </div>

      <div className="video-demo-toolbar">
        <span>
          <Mic size={16} />
          Microphone
        </span>
        <span>
          <Video size={16} />
          Camera
        </span>
        <span className="video-toolbar-end">
          <Phone size={16} />
        </span>
      </div>

      <small className="preview-disclaimer">
        Illustrative video-call layout, not a live video session.
      </small>
    </div>
  );
}

function IVRPreview() {
  return (
    <div className="ivr-demo">
      <div className="ivr-call-heading">
        <div className="ivr-phone-icon">
          <PhoneCall size={25} />
        </div>

        <div>
          <span>CALLING EXPERIENCE</span>
          <h4>Connect with a team</h4>
          <p>Illustrative IVR menu</p>
        </div>
      </div>

      <div className="ivr-flow">
        <div className="ivr-flow-step">
          <span>01</span>
          <div>
            <strong>Start the interaction</strong>
            <small>Initiate a supported call</small>
          </div>
          <Check size={17} />
        </div>

        <div className="ivr-flow-connector" />

        <div className="ivr-flow-step">
          <span>02</span>
          <div>
            <strong>Choose an option</strong>
            <small>Example: enquiries or support</small>
          </div>
          <ArrowUpRight size={17} />
        </div>

        <div className="ivr-flow-connector" />

        <div className="ivr-flow-step">
          <span>03</span>
          <div>
            <strong>Continue the call</strong>
            <small>Follow the available call workflow</small>
          </div>
          <Phone size={17} />
        </div>
      </div>

      <div className="ivr-note">
        IVR example for illustration. Actual options depend on product
        configuration.
      </div>
    </div>
  );
}

function FeaturePreview({ feature }) {
  const Icon = feature.icon;

  return (
    <div className={`feature-preview-panel preview-${feature.kind}`}>
      <div className="feature-window-top">
        <div className="feature-window-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="feature-window-title">
          <MessageCircle size={15} />
          <span>Bizcom</span>
          <span className="window-title-separator">/</span>
          <span>{feature.title}</span>
        </div>

        <span className="preview-label">UI PREVIEW</span>
      </div>

      <div className="feature-preview-content">
        <div className="feature-preview-intro">
          <div className="feature-preview-icon">
            <Icon size={21} />
          </div>

          <div>
            <span>{feature.label}</span>
            <h3>{feature.title}</h3>
          </div>

          <MoreHorizontal size={21} className="feature-preview-more" />
        </div>

        {feature.kind === "audio" && <AudioPreview />}
        {feature.kind === "video" && <VideoPreview />}
        {feature.kind === "ivr" && <IVRPreview />}

        {["chat", "messages", "whatsapp"].includes(feature.kind) && (
          <MessagingPreview feature={feature} />
        )}
      </div>

      <div className="feature-preview-footer">
        <span className="feature-footer-icon">
          <Check size={14} />
        </span>
        <span>Illustrative product interface</span>
      </div>
    </div>
  );
}

function Features() {
  const [activeId, setActiveId] = useState("chat");

  const activeFeature =
    features.find((feature) => feature.id === activeId) ?? features[0];

  return (
    <section className="features-section" id="features">
      <div className="features-container">
        <div className="features-heading">
          <span className="section-eyebrow">EXPLORE BIZCOM</span>

          <h2>
            One Platform.
            <span> Multiple Ways to Connect.</span>
          </h2>

          <p>
            Every conversation is different. Explore Bizcom's communication
            modules and discover the options available for your business.
          </p>
        </div>

        <div className="feature-explorer">
          <div className="feature-selector">
            <div className="feature-selector-heading">
              <span>COMMUNICATION MODULES</span>
              <span className="module-count">06</span>
            </div>

            <div className="feature-option-list">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = activeId === feature.id;

                return (
                  <button
                    type="button"
                    key={feature.id}
                    className={`feature-option ${isActive ? "is-active" : ""}`}
                    onClick={() => setActiveId(feature.id)}
                    aria-pressed={isActive}
                  >
                    <span className="feature-option-icon">
                      <Icon size={20} />
                    </span>

                    <span className="feature-option-copy">
                      <strong>{feature.title}</strong>
                      <small>{feature.subtitle}</small>
                    </span>

                    <span className="feature-option-index">
                      0{index + 1}
                    </span>
                  </button>
                );
              })}
            </div>

            <p className="feature-selector-hint">
              Select a module to explore its interface.
            </p>
          </div>

          <div className="feature-detail">
            <div className="feature-detail-copy" aria-live="polite">
              <span className="feature-detail-eyebrow">
                {activeFeature.label}
              </span>

              <h3>{activeFeature.title}</h3>

              <p>{activeFeature.description}</p>

              <a href="#contact" className="feature-contact-link">
                Ask our team about this feature
                <ArrowUpRight size={17} />
              </a>
            </div>

            <FeaturePreview feature={activeFeature} />
          </div>
        </div>

        <div className="features-bottom-note">
          <span className="features-bottom-icon">
            <MessageCircle size={19} />
          </span>

          <p>
            Different ways to connect, designed around business
            conversations.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;