import { ArrowUpRight, BadgeCheck, MessageCircle } from "lucide-react";
import ContactCTA from "../sections/ContactCTA";
import "./StandalonePages.css";

function PricingPage({ onOpenEnquiry }) {
  return (
    <>
      <section className="standalone-page">
        <div className="standalone-container">
          <span className="section-eyebrow">BIZCOM PRICING</span>

          <h1>
            Let's Find the Right
            <span> Plan for Your Business.</span>
          </h1>

          <p className="standalone-description">
            Looking for pricing and subscription details? Contact the
            Bizcom team to explore available plans and get information
            relevant to your requirements.
          </p>

          <div className="pricing-enquiry-card">
            <span className="pricing-card-icon">
              <BadgeCheck size={27} />
            </span>

            <span className="pricing-card-eyebrow">
              PRICING ENQUIRY
            </span>

            <h2>Get Bizcom pricing information</h2>

            <p>
              Ask about available plans, included communication
              modules, and subscription details.
            </p>

            <button
              type="button"
              className="standalone-button"
              onClick={onOpenEnquiry}
            >
              Request Pricing
              <ArrowUpRight size={18} />
            </button>

            <span className="pricing-card-note">
              Pricing details will be confirmed by the Bizcom team.
            </span>
          </div>
        </div>
      </section>

      <ContactCTA onOpenEnquiry={onOpenEnquiry} />
    </>
  );
}

export default PricingPage;