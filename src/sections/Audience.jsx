import {
  Building2,
  Headset,
  Users,
  Laptop,
  Briefcase,
  Network,
  ArrowUpRight,
} from "lucide-react";

import "./Audience.css";

const audiences = [
  {
    title: "Small & Medium Businesses",
    description:
      "Explore communication options that suit the needs of growing businesses.",
    icon: Building2,
  },
  {
    title: "Customer Support & Contact Centres",
    description:
      "Explore chat, messaging, and call-related options for customer interactions.",
    icon: Headset,
  },
  {
    title: "Sales & Customer Success Teams",
    description:
      "Choose different ways to connect with customers throughout business conversations.",
    icon: Users,
  },
  {
    title: "Remote & Hybrid Teams",
    description:
      "Access different communication options for distributed working environments.",
    icon: Laptop,
  },
  {
    title: "Service-Based Businesses",
    description:
      "Explore communication options for enquiries and service-related conversations.",
    icon: Briefcase,
  },
  {
    title: "Enterprises & Multi-Location Organisations",
    description:
      "Discover multiple communication options for businesses operating across locations.",
    icon: Network,
  },
];

function Audience() {
  return (
    <section className="audience-section" id="audience">
      <div className="audience-container">
        <div className="audience-heading">
          <span className="section-eyebrow">
            WHO BIZCOM IS FOR
          </span>

          <h2>
            Designed for the Way
            <span> Your Business Works.</span>
          </h2>

          <p>
            From small businesses to growing enterprises, Bizcom
            brings essential communication capabilities into a
            connected experience.
          </p>
        </div>

        <div className="audience-grid">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;

            return (
              <article
                className="audience-card"
                key={audience.title}
              >
                <div className="audience-card-top">
                  <span className="audience-icon">
                    <Icon size={23} />
                  </span>

                  <span className="audience-number">
                    0{index + 1}
                  </span>
                </div>

                <h3>{audience.title}</h3>

                <p>{audience.description}</p>

                <a
                  className="audience-link"
                  href="#features"
                  aria-label={`Explore Bizcom features for ${audience.title}`}
                >
                  Explore features
                  <ArrowUpRight size={16} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Audience;