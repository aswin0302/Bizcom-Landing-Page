import {
  ArrowUpRight,
  MessageCircle,
  Video,
  Phone,
  MessagesSquare,
  Headphones,
  PhoneCall,
  MoreHorizontal,
  Paperclip,
  Send,
  Mic,
} from "lucide-react";

import "./Hero.css";

const channels = [
  {
    name: "Chat",
    description: "Customer conversations",
    icon: MessageCircle,
  },
  {
    name: "Audio Chat",
    description: "Voice conversations",
    icon: Headphones,
  },
  {
    name: "Video Chat",
    description: "Face-to-face calls",
    icon: Video,
  },
  {
    name: "Message Chat",
    description: "Text messaging",
    icon: MessagesSquare,
  },
  {
    name: "IVR & Click-to-Call",
    description: "Call interactions",
    icon: PhoneCall,
  },
  {
    name: "WhatsApp",
    description: "Business messaging",
    icon: MessageCircle,
  },
];

function Hero({ onOpenEnquiry }) {
  return (
    <section className="hero-section" id="home">
      <div className="hero-background-glow" aria-hidden="true" />

      <div className="hero-container">
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            BUSINESS COMMUNICATION, CONNECTED
          </div>

          <h1>
            One Platform for
            <span className="hero-heading-accent">
              {" "}Every Business Conversation.
            </span>
          </h1>

          <p className="hero-description">
            Connect with customers and teams through chat, audio, video,
            messaging, IVR with click-to-call, and WhatsApp integration
            with Bizcom.
          </p>

          <div className="hero-actions">
            <a href="#features" className="hero-button hero-button-primary">
              Explore Features
              <ArrowUpRight size={18} />
            </a>

            <button
                type="button"
                className="hero-button hero-button-secondary"
                onClick={onOpenEnquiry}
                >
                Talk to Our Team
            </button>
          </div>

          <div className="hero-supporting-note">
            <span className="supporting-check">✓</span>
            Six communication options. One Bizcom experience.
          </div>
        </div>

        <div className="hero-visual-wrap">
          <div className="hero-visual-glow" aria-hidden="true" />

          <div className="hero-app-window">
            <div className="app-window-header">
              <div className="window-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>

              <div className="window-address">
                <MessageCircle size={15} />
                <span>Bizcom Communication Workspace</span>
              </div>

              <span className="workspace-status">
                <span />
                Connected
              </span>
            </div>

            <div className="workspace-layout">
              <aside className="workspace-sidebar" aria-label="Workspace preview">
                <div className="sidebar-logo">
                  <MessageCircle size={21} />
                </div>

                <div className="sidebar-icons">
                  <span className="sidebar-icon active">
                    <MessageCircle size={19} />
                  </span>

                  <span className="sidebar-icon">
                    <Phone size={19} />
                  </span>

                  <span className="sidebar-icon">
                    <Video size={19} />
                  </span>

                  <span className="sidebar-icon">
                    <MessagesSquare size={19} />
                  </span>

                  <span className="sidebar-icon">
                    <Headphones size={19} />
                  </span>
                </div>
              </aside>

              <div className="workspace-main">
                <div className="workspace-topbar">
                  <div>
                    <span className="workspace-kicker">COMMUNICATIONS</span>
                    <h2>Customer conversations</h2>
                  </div>

                  <button
                    type="button"
                    className="more-button"
                    aria-label="More workspace options"
                  >
                    <MoreHorizontal size={20} />
                  </button>
                </div>

                <div className="conversation-area">
                  <div className="conversation-heading">
                    <div className="customer-avatar">SM</div>

                    <div className="customer-details">
                      <strong>Sarah Miller</strong>
                      <span>
                        <i />
                        Active conversation
                      </span>
                    </div>

                    <span className="conversation-tag">CHAT</span>
                  </div>

                  <div className="conversation-date">
                    TODAY'S CONVERSATION
                  </div>

                  <div className="chat-message incoming">
                    <span className="chat-avatar">SM</span>

                    <div className="message-content">
                      <div className="chat-bubble">
                        Hi, I need some help with a product enquiry.
                      </div>
                      <span className="message-time">10:41 AM</span>
                    </div>
                  </div>

                  <div className="chat-message outgoing">
                    <div className="message-content">
                      <div className="chat-bubble">
                        Hello Sarah! We'd be happy to help you.
                      </div>
                      <span className="message-time">10:42 AM</span>
                    </div>
                  </div>

                  <div className="chat-message incoming">
                    <span className="chat-avatar">SM</span>

                    <div className="message-content">
                      <div className="chat-bubble">
                        Could we discuss this over a call?
                      </div>
                      <span className="message-time">10:43 AM</span>
                    </div>
                  </div>

                  <div className="chat-composer">
                    <Paperclip size={18} />

                    <span>Write a message...</span>

                    <button type="button" aria-label="Illustrative send button">
                      <Send size={16} />
                    </button>
                  </div>
                </div>
              </div>

              <aside className="workspace-channels">
                <span className="channels-kicker">EXPLORE CHANNELS</span>

                <h3>Ways to connect</h3>

                <div className="channel-list">
                  {channels.map((channel) => {
                    const Icon = channel.icon;

                    return (
                      <div className="channel-item" key={channel.name}>
                        <span className="channel-icon">
                          <Icon size={18} />
                        </span>

                        <span className="channel-text">
                          <strong>{channel.name}</strong>
                          <small>{channel.description}</small>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </aside>
            </div>
          </div>

          <div className="floating-call-card">
            <div className="call-card-heading">
              <div className="call-avatar">SM</div>

              <div className="call-person">
                <strong>Audio conversation</strong>
                <span>
                  <i />
                  Connected · Preview
                </span>
              </div>

              <span className="call-wave" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </span>
            </div>

            <div className="call-card-controls">
              <button type="button" aria-label="Illustrative microphone control">
                <Mic size={17} />
              </button>

              <button
                type="button"
                className="call-end-button"
                aria-label="Illustrative end-call control"
              >
                <Phone size={17} />
              </button>
            </div>
          </div>

          <div className="visual-caption">
            <span className="caption-icon">
              <MessageCircle size={15} />
            </span>
            Multiple ways to connect with Bizcom
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;