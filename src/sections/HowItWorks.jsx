import {
  ArrowRight,
  Check,
  MessageCircle,
  MessagesSquare,
  PhoneCall,
  Video,
  Headphones,
  MousePointerClick,
} from "lucide-react";

import "./HowItWorks.css";

const steps = [
  {
    number: "01",
    title: "Choose a Channel",
    description:
      "Explore the available communication options and choose one that fits the interaction.",
    icon: MousePointerClick,
    visual: "choose",
  },
  {
    number: "02",
    title: "Start Connecting",
    description:
      "Begin a supported chat, message, audio, video, or calling interaction.",
    icon: MessageCircle,
    visual: "connect",
  },
  {
    number: "03",
    title: "Continue the Conversation",
    description:
      "Continue the interaction through the communication channel and workflow available.",
    icon: MessagesSquare,
    visual: "continue",
  },
];

function ChooseVisual() {
  return (
    <div className="process-visual choose-visual">
      <div className="process-visual-label">AVAILABLE OPTIONS</div>

      <div className="process-choice-grid">
        <div className="process-choice selected">
          <MessageCircle size={20} />
          <span>Chat</span>
          <Check size={13} className="choice-check" />
        </div>

        <div className="process-choice">
          <Headphones size={20} />
          <span>Audio</span>
        </div>

        <div className="process-choice">
          <Video size={20} />
          <span>Video</span>
        </div>

        <div className="process-choice">
          <PhoneCall size={20} />
          <span>Calling</span>
        </div>
      </div>

      <div className="process-visual-note">
        <span />
        Select a suitable option
      </div>
    </div>
  );
}

function ConnectVisual() {
  return (
    <div className="process-visual connect-visual">
      <div className="process-message-header">
        <div className="process-avatar">SM</div>
        <div>
          <strong>Customer conversation</strong>
          <small>Illustrative chat preview</small>
        </div>
        <MessageCircle size={17} />
      </div>

      <div className="process-chat-bubble received">
        Hello! I have an enquiry.
        <small>10:41 AM</small>
      </div>

      <div className="process-chat-bubble sent">
        Hi! How can we help?
        <small>10:42 AM</small>
      </div>

      <div className="process-message-composer">
        <span>Write a message...</span>
        <span className="process-send-icon">
          <ArrowRight size={14} />
        </span>
      </div>
    </div>
  );
}

function ContinueVisual() {
  return (
    <div className="process-visual continue-visual">
      <div className="process-continue-heading">
        <span>CONVERSATION OPTIONS</span>
        <MessagesSquare size={17} />
      </div>

      <div className="process-continue-row">
        <span className="continue-option-icon">
          <MessageCircle size={17} />
        </span>
        <div>
          <strong>Chat & Messaging</strong>
          <small>Message-based interaction</small>
        </div>
        <Check size={16} />
      </div>

      <div className="process-continue-row">
        <span className="continue-option-icon">
          <Headphones size={17} />
        </span>
        <div>
          <strong>Audio & Video</strong>
          <small>Voice or video interaction</small>
        </div>
        <Check size={16} />
      </div>

      <div className="process-continue-note">
        Use the supported communication workflow.
      </div>
    </div>
  );
}

function StepVisual({ visual }) {
  if (visual === "choose") return <ChooseVisual />;
  if (visual === "connect") return <ConnectVisual />;
  return <ContinueVisual />;
}

function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="how-container">
        <header className="how-heading">
          <span className="section-eyebrow">HOW BIZCOM WORKS</span>

          <h2>
            From First Message
            <span> to Meaningful Conversation.</span>
          </h2>

          <p>
            Explore how Bizcom's communication options can fit different
            business interactions, from choosing a channel to continuing
            the conversation.
          </p>
        </header>

        <div className="how-steps">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div className="how-step-wrapper" key={step.number}>
                <article className="how-step-card">
                  <div className="how-step-topline">
                    <span className="how-step-number">
                      STEP {step.number}
                    </span>

                    <span className="how-step-icon">
                      <Icon size={21} />
                    </span>
                  </div>

                  <h3>{step.title}</h3>

                  <p className="how-step-description">
                    {step.description}
                  </p>

                  <StepVisual visual={step.visual} />
                </article>

                {index < steps.length - 1 && (
                  <div className="how-step-connector" aria-hidden="true">
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="how-bottom-note">
          <span className="how-bottom-icon">
            <MessageCircle size={19} />
          </span>

          <p>
            Explore the communication options available through Bizcom.
          </p>

          <a href="#features">
            View Features
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;