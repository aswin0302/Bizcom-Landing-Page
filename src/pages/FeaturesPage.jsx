import Features from "../sections/Features";
import ContactCTA from "../sections/ContactCTA";

function FeaturesPage({ onOpenEnquiry }) {
  return (
    <>
      <Features />
      <ContactCTA onOpenEnquiry={onOpenEnquiry} />
    </>
  );
}

export default FeaturesPage;