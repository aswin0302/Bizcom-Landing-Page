import HowItWorks from "../sections/HowItWorks";
import ContactCTA from "../sections/ContactCTA";

function HowItWorksPage({ onOpenEnquiry }) {
  return (
    <>
      <HowItWorks />
      <ContactCTA onOpenEnquiry={onOpenEnquiry} />
    </>
  );
}

export default HowItWorksPage;