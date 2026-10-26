import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import EnquiryModal from "./components/EnquiryModal";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Audience from "./sections/Audience";
import Features from "./sections/Features";
import Problems from "./sections/Problems";
import HowItWorks from "./sections/HowItWorks";
import ContactCTA from "./sections/ContactCTA";

import "./App.css";

function App() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  function openEnquiry() {
    setEnquiryOpen(true);
  }

  function closeEnquiry() {
    setEnquiryOpen(false);
  }

  return (
    <div className="app-shell">
      <Header onOpenEnquiry={openEnquiry} />

      <main>
        <Hero onOpenEnquiry={openEnquiry} />
        <About />
        <Audience />
        <Features />
        <Problems />
        <HowItWorks />
        <ContactCTA onOpenEnquiry={openEnquiry} />
      </main>

      <Footer onOpenEnquiry={openEnquiry} />

      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={closeEnquiry}
      />
    </div>
  );
}

export default App;