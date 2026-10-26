import {
  ArrowDown,
  ArrowRight,
  Check,
  CheckCircle2,
  CircleAlert,
  Headphones,
  MessageCircle,
  MessagesSquare,
  Phone,
  PhoneCall,
  Smartphone,
  Video,
  Workflow,
} from "lucide-react";

import "./Problems.css";

const stories = [
  {
    number: "01",
    category: "CHOOSING HOW TO CONNECT",
    title: "Not every conversation needs the same channel.",
    challenge:
      "A message, a voice call, and a video conversation serve different needs. Choosing how to connect isn't always straightforward.",
    challengeQuote: "Which way should we connect?",
    solutionTitle: "More ways to connect.",
    solution:
      "Explore Bizcom's chat, audio, video, and messaging options for different conversation needs.",
    icon: MessagesSquare,
    visual: "channels",
  },
  {
    number: "02",
    category: "CALLING & PHONE INTERACTIONS",
    title: "Getting a phone conversation started.",
    challenge:
      "Finding contact details and navigating phone options can add extra steps to a business interaction.",
    challengeQuote: "How do I reach the right team?",
    solutionTitle: "Explore calling options.",
    solution:
      "Bizcom offers IVR with click-to-call capabilities for supported business calling workflows.",
    icon: PhoneCall,
    visual: "calling",
  },
  {
    number: "03",
    category: "CUSTOMER COMMUNICATION",
    title: "Customers have different preferences.",
    challenge:
      "Some customers prefer a message, while others may prefer a familiar messaging channel or a call.",
    challengeQuote: "Can I use my preferred channel?",
    solutionTitle: "Explore familiar messaging options.",
    solution:
      "Discover Bizcom's supported WhatsApp and WhatsApp Business integration options.",
    icon: Smartphone,
    visual: "messaging",
  },
  {
    number: "04",
    category: "COMMUNICATION OPTIONS",
    title: "Understanding which channels are available.",
    challenge:
      "When a business uses different communication methods, it can be difficult to get a clear overview of its options.",
    challengeQuote: "What communication options do we have?",
    solutionTitle: "Discover the Bizcom modules.",
    solution:
      "Explore Bizcom's range of communication modules and see which options are relevant to your business.",
    icon: Workflow,
    visual: "overview",
  },
];

function ChannelPreview() {
  return (
    <div className="challenge-visual channel-visual">
      <div className="mini-visual-heading">
        <span>CHOOSE A WAY TO CONNECT</span>
        <MessagesSquare size={16} />
      </div>

      <div className="channel-visual-grid">
        <div className="mini-channel">
          <MessageCircle size={19} />
          <span>Chat</span>
        </div>
        <div className="mini-channel">
          <Headphones size={19} />
          <span>Audio</span>
        </div>
        <div className="mini-channel">
          <Video size={19} />
          <span>Video</span>
        </div>
        <div className="mini-channel">
          <MessagesSquare size={19} />
          <span>Messages</span>
        </div>
      </div>

      <div className="mini-visual-caption">
        Different conversations. Different needs.
      </div>
    </div>
  );
}

function CallingPreview() {
  return (
    <div className="challenge-visual calling-visual">
      <div className="mini-visual-heading">
        <span>CALLING EXPERIENCE</span>
        <PhoneCall size={16} />
      </div>

      <div className="calling-step">
        <span className="calling-step-number">01</span>
        <div>
          <strong>Initiate a call</strong>
          <small>Click-to-call</small>
        </div>
        <CheckCircle2 size={17} />
      </div>

      <div className="calling-connector" />

      <div className="calling-step">
        <span className="calling-step-number">02</span>
        <div>
          <strong>Navigate call options</strong>
          <small>Illustrative IVR flow</small>
        </div>
        <ArrowRight size={17} />
      </div>

      <div className="mini-visual-caption">
        Example workflow; actual options may vary.
      </div>
    </div>
  );
}

function MessagingPreview() {
  return (
    <div className="challenge-visual messaging-visual">
      <div className="mini-message-header">
        <div className="mini-message-avatar">BC</div>
        <div>
          <strong>Business conversation</strong>
          <small>Illustrative messaging preview</small>
        </div>
        <MessageCircle size={17} />
      </div>

      <div className="mini-chat-bubble mini-chat-incoming">
        Hi, can I contact you on WhatsApp?
      </div>

      <div className="mini-chat-bubble mini-chat-outgoing">
        Explore our supported messaging options.
        <Check size={13} />
      </div>

      <div className="mini-visual-caption">
        WhatsApp integration options, where supported.
      </div>
    </div>
  );
}

function OverviewPreview() {
  return (
    <div className="challenge-visual overview-visual">
      <div className="mini-visual-heading">
        <span>BIZCOM COMMUNICATION MODULES</span>
        <Workflow size={16} />
      </div>

      <div className="overview-channel-list">
        <span>
          <MessageCircle size={15} /> Chat
        </span>
        <span>
          <Headphones size={15} /> Audio Chat
        </span>
        <span>
          <Video size={15} /> Video Chat
        </span>
        <span>
          <MessagesSquare size={15} /> Message Chat
        </span>
        <span>
          <PhoneCall size={15} /> IVR & Click-to-Call
        </span>
        <span>
          <Smartphone size={15} /> WhatsApp
        </span>
      </div>
    </div>
  );
}

function StoryPreview({ visual }) {
  switch (visual) {
    case "channels":
      return <ChannelPreview />;
    case "calling":
      return <CallingPreview />;
    case "messaging":
      return <MessagingPreview />;
    case "overview":
      return <OverviewPreview />;
    default:
      return null;
  }
}

function ProblemCard({ story }) {
  const Icon = story.icon;

  return (
    <article className={`problem-story problem-story-${story.visual}`}>
      <div className="story-topline">
        <span className="story-number">{story.number}</span>
        <span className="story-category">{story.category}</span>
      </div>

      <h3 className="story-title">{story.title}</h3>

      <div className="story-challenge">
        <div className="story-block-heading">
          <span className="story-heading-icon challenge-heading-icon">
            <CircleAlert size={17} />
          </span>
          <span>THE CHALLENGE</span>
        </div>

        <p className="story-quote">
          “{story.challengeQuote}”
        </p>

        <p className="story-description">
          {story.challenge}
        </p>
      </div>

      <div className="story-transition" aria-hidden="true">
        <span />
        <span className="story-transition-icon">
          <ArrowDown size={18} />
        </span>
        <span />
      </div>

      <div className="story-solution">
        <div className="story-block-heading">
          <span className="story-heading-icon solution-heading-icon">
            <CheckCircle2 size={17} />
          </span>
          <span>HOW BIZCOM HELPS</span>
        </div>

        <h4>{story.solutionTitle}</h4>

        <p className="story-description">{story.solution}</p>

        <StoryPreview visual={story.visual} />
      </div>

      <a className="story-link" href="#features">
        Explore related features
        <ArrowRight size={16} />
      </a>
    </article>
  );
}

function Problems() {
  return (
    <section className="problems-section" id="problems">
      <div className="problems-container">
        <header className="problems-heading">
          <span className="problems-eyebrow">
            FROM CHALLENGE TO CONNECTION
          </span>

          <h2>
            Every Conversation Has a Challenge.
            <span> Discover More Ways to Connect.</span>
          </h2>

          <p>
            From choosing the right channel to exploring calling options,
            discover how Bizcom's communication modules relate to everyday
            business needs.
          </p>
        </header>

        <div className="problems-story-grid">
          {stories.map((story) => (
            <ProblemCard key={story.number} story={story} />
          ))}
        </div>

        <div className="problems-cta">
          <div className="problems-cta-symbol">
            <MessageCircle size={23} />
          </div>

          <div className="problems-cta-copy">
            <h3>Find the right communication options for your business.</h3>
            <p>
              Explore the six Bizcom modules and discover their capabilities.
            </p>
          </div>

          <a href="#features" className="problems-cta-button">
            Explore Features
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Problems;