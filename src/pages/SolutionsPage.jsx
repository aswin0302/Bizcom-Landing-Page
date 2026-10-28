import Problems from "../sections/Problems";
import ContactCTA from "../sections/ContactCTA";

function SolutionsPage({ onOpenEnquiry }) {
  return (
    <>
      <Problems />
      <ContactCTA onOpenEnquiry={onOpenEnquiry} />
    </>
  );
}

export default SolutionsPage;