
import { useCallback, useEffect, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import EnquiryModal from "./components/EnquiryModal";

import HomePage from "./pages/HomePage";
import FeaturesPage from "./pages/FeaturesPage";
import SolutionsPage from "./pages/SolutionsPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";

import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function AppLayout() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const openEnquiry = useCallback(() => {
    setEnquiryOpen(true);
  }, []);

  const closeEnquiry = useCallback(() => {
    setEnquiryOpen(false);
  }, []);

  const handleSubmitEnquiry = useCallback(async (formData) => {
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    console.log(
      "Web3Forms access key loaded:",
      Boolean(accessKey)
    );

    if (!accessKey) {
      throw new Error(
        "The enquiry service is not configured. Please try again later."
      );
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New Bizcom Enquiry - ${formData.interest || "General Enquiry"}`,
        from_name: "Bizcom Website",
        name: formData.fullName,
        company: formData.company || "Not provided",
        email: formData.email,
        phone: formData.phone || "Not provided",
        interest: formData.interest || "Not specified",
        message: formData.message || "No additional message",
      }),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(
        result.message || "Unable to send your enquiry. Please try again."
      );
    }

    return result;
  }, []);

  return (
    <>
      <ScrollToTop />

      <div className="app-shell">
        <Header onOpenEnquiry={openEnquiry} />

        <main>
          <Routes>
            <Route
              path="/"
              element={<HomePage onOpenEnquiry={openEnquiry} />}
            />
            <Route
              path="/features"
              element={<FeaturesPage onOpenEnquiry={openEnquiry} />}
            />
            <Route
              path="/solutions"
              element={<SolutionsPage onOpenEnquiry={openEnquiry} />}
            />
            <Route
              path="/how-it-works"
              element={<HowItWorksPage onOpenEnquiry={openEnquiry} />}
            />
            <Route
              path="/pricing"
              element={<PricingPage onOpenEnquiry={openEnquiry} />}
            />
            <Route
              path="/contact"
              element={<ContactPage onOpenEnquiry={openEnquiry} />}
            />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer onOpenEnquiry={openEnquiry} />

        <EnquiryModal
          isOpen={enquiryOpen}
          onClose={closeEnquiry}
          onSubmitEnquiry={handleSubmitEnquiry}
        />
      </div>
    </>
  );
}

function App() {
  const basename = import.meta.env.PROD ? "/bizcom" : "/";

  return (
    <BrowserRouter basename={basename}>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
