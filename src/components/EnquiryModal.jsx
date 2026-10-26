import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
  X,
} from "lucide-react";

import "./EnquiryModal.css";

const initialForm = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  interest: "",
  message: "",
};

const modules = [
  "Chat",
  "Audio Chat",
  "Video Chat",
  "Message Chat",
  "IVR & Click-to-Call",
  "WhatsApp Integration",
  "Multiple Modules",
  "Other Enquiry",
];

function EnquiryModal({ isOpen, onClose, onSubmitEnquiry }) {
  const [formData, setFormData] = useState(initialForm);
  const [showMessage, setShowMessage] = useState(false);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Close the popup with Escape and prevent background scrolling.
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    const previousOverflow = document.body.style.overflow;

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  // Reset popup status when it closes.
  useEffect(() => {
    if (!isOpen) {
      setStatus("idle");
      setErrorMessage("");
      setShowMessage(false);
      setFormData(initialForm);
    }
  }, [isOpen]);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status === "error" || status === "not-configured") {
      setStatus("idle");
      setErrorMessage("");
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setErrorMessage("");

    // The form needs a configured submission service.
    if (!onSubmitEnquiry) {
      setStatus("not-configured");
      setErrorMessage(
        "Enquiry delivery is not connected yet. Please try again later."
      );
      return;
    }

    setStatus("sending");

    try {
      await onSubmitEnquiry(formData);

      setStatus("success");
      setFormData(initialForm);
      setShowMessage(false);
    } catch (error) {
      console.error("Enquiry submission failed:", error);

      setStatus("error");
      setErrorMessage(
        "We couldn't submit your enquiry. Please check your connection and try again."
      );
    }
  }

  function handleClose() {
    if (status !== "sending") {
      onClose();
    }
  }

  if (!isOpen) return null;

  return (
    <div
      className="enquiry-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          handleClose();
        }
      }}
    >
      <section
        className="enquiry-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-title"
        aria-describedby="enquiry-description"
      >
        <button
          type="button"
          className="enquiry-close"
          onClick={handleClose}
          disabled={status === "sending"}
          aria-label="Close enquiry form"
        >
          <X size={20} />
        </button>

        {status === "success" ? (
          <div className="enquiry-success">
            <span className="enquiry-success-icon">
              <CheckCircle2 size={34} />
            </span>

            <span className="enquiry-eyebrow">
              ENQUIRY SUBMITTED
            </span>

            <h2 id="enquiry-title">
              Thanks for reaching out!
            </h2>

            <p id="enquiry-description">
              Your enquiry has been submitted successfully. The Bizcom
              team can follow up using the contact details you provided.
            </p>

            <button
              type="button"
              className="enquiry-submit"
              onClick={onClose}
            >
              Close
              <ArrowUpRight size={17} />
            </button>
          </div>
        ) : (
          <>
            <div className="enquiry-header">
              <span className="enquiry-brand-icon">
                <MessageCircle size={23} />
              </span>

              <span className="enquiry-eyebrow">
                LET'S START A CONVERSATION
              </span>

              <h2 id="enquiry-title">
                Let's Talk About
                <span> Your Business.</span>
              </h2>

              <p id="enquiry-description">
                Tell us what you need, and we'll help you explore
                the right Bizcom communication options.
              </p>
            </div>

            <form
              className="enquiry-form"
              onSubmit={handleSubmit}
            >
              <div className="enquiry-fields-grid">
                <div className="enquiry-field">
                  <label htmlFor="enquiry-full-name">
                    Full name <span>*</span>
                  </label>

                  <input
                    id="enquiry-full-name"
                    name="fullName"
                    type="text"
                    placeholder="Your full name"
                    autoComplete="name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    disabled={status === "sending"}
                  />
                </div>

                <div className="enquiry-field">
                  <label htmlFor="enquiry-company">
                    Company name <span>*</span>
                  </label>

                  <input
                    id="enquiry-company"
                    name="company"
                    type="text"
                    placeholder="Your company"
                    autoComplete="organization"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    disabled={status === "sending"}
                  />
                </div>

                <div className="enquiry-field">
                  <label htmlFor="enquiry-email">
                    Work email <span>*</span>
                  </label>

                  <input
                    id="enquiry-email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status === "sending"}
                  />
                </div>

                <div className="enquiry-field">
                  <label htmlFor="enquiry-phone">
                    Phone number
                    <small>Optional</small>
                  </label>

                  <input
                    id="enquiry-phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={status === "sending"}
                  />
                </div>

                <div className="enquiry-field enquiry-field-full">
                  <label htmlFor="enquiry-interest">
                    Interested in <span>*</span>
                  </label>

                  <select
                    id="enquiry-interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    disabled={status === "sending"}
                  >
                    <option value="" disabled>
                      Select a communication module
                    </option>

                    {modules.map((module) => (
                      <option key={module} value={module}>
                        {module}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="enquiry-field enquiry-field-full enquiry-message-field">
                  <button
                    type="button"
                    className="enquiry-message-toggle"
                    onClick={() =>
                      setShowMessage((previous) => !previous)
                    }
                    aria-expanded={showMessage}
                    disabled={status === "sending"}
                  >
                    {showMessage
                      ? "− Hide message"
                      : "+ Add a message (optional)"}
                  </button>

                  {showMessage && (
                    <>
                      <label htmlFor="enquiry-message">
                        Your message
                      </label>

                      <textarea
                        id="enquiry-message"
                        name="message"
                        placeholder="Tell us briefly about your requirements..."
                        rows={2}
                        value={formData.message}
                        onChange={handleChange}
                        disabled={status === "sending"}
                      />
                    </>
                  )}
                </div>
              </div>

              {errorMessage && (
                <p className="enquiry-error" role="alert">
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                className="enquiry-submit"
                disabled={status === "sending"}
              >
                {status === "sending"
                  ? "Submitting..."
                  : "Submit Enquiry"}

                {status !== "sending" && (
                  <ArrowUpRight size={18} />
                )}
              </button>

              <p className="enquiry-privacy-note">
                Your details will be used to respond to your enquiry.
              </p>
            </form>
          </>
        )}
      </section>
    </div>
  );
}

export default EnquiryModal;