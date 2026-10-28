import Hero from "../sections/Hero";
import About from "../sections/About";
import Audience from "../sections/Audience";
import Features from "../sections/Features";
import Problems from "../sections/Problems";
import HowItWorks from "../sections/HowItWorks";
import ContactCTA from "../sections/ContactCTA";

function HomePage({ onOpenEnquiry }) {
  return (
    <>
      <Hero onOpenEnquiry={onOpenEnquiry} />
      <About />
      <Audience />
      <Features />
      <Problems />
      <HowItWorks />
      <ContactCTA onOpenEnquiry={onOpenEnquiry} />
    </>
  );
}

export default HomePage;