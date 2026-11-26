import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import destinations from "../data/destinations.json";
import "../styles/Contact.css";

const MAX_MESSAGE = 500;

const contactCards = [
  { icon: "📍", label: "Visit us", value: "Pune, Maharashtra, India" },
  { icon: "📞", label: "Call us", value: "+91 98765 43210" },
  { icon: "✉️", label: "Email us", value: "info@travelvista.example" },
  { icon: "🕘", label: "Working hours", value: "Mon – Sat, 9 AM – 7 PM" }
];

const perks = [
  { icon: "🧭", text: "Personalized travel suggestions" },
  { icon: "🎒", text: "Customized holiday packages" },
  { icon: "🌍", text: "Destination information" },
  { icon: "🤝", text: "End-to-end planning assistance" }
];

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  destination: "",
  travelDate: "",
  travelers: "1",
  package: "",
  message: ""
};

function Field({ id, label, required, error, children }) {
  return (
    <div className={`cv-field ${error ? "has-error" : ""}`}>
      <label htmlFor={id}>
        {label} {required && <span className="cv-required">*</span>}
      </label>
      {children}
      {error && (
        <p className="cv-field-error" id={`${id}-error`}>
          ⚠ {error}
        </p>
      )}
    </div>
  );
}

function Contact() {
 const [params] = useSearchParams();

const [form, setForm] = useState({
  ...emptyForm,
  destination: params.get("destination") || "",
  package: params.get("package") || ""
});

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const today = new Date();
  const minDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0")
  ].join("-");

  const updateForm = (e) => {
    const { name } = e.target;
    let { value } = e.target;

    // Phone accepts digits only
    if (name === "phone") {
      value = value.replace(/\D/g, "").slice(0, 10);
    }

    setForm((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: "" }));
    setSuccess("");
  };

  const changeTravelers = (delta) => {
    const next = Math.min(50, Math.max(1, Number(form.travelers || 0) + delta));
    setForm((previous) => ({ ...previous, travelers: String(next) }));
    setErrors((previous) => ({ ...previous, travelers: "" }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (form.name.trim().length < 3) {
      newErrors.name = "Name must contain at least 3 characters.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }

    if (!form.destination) {
      newErrors.destination = "Please select a destination.";
    }

    if (!form.travelDate) {
      newErrors.travelDate = "Travel date is required.";
    } else if (form.travelDate < minDate) {
      newErrors.travelDate = "Travel date cannot be in the past.";
    }

    if (!form.travelers) {
      newErrors.travelers = "Number of travelers is required.";
    } else if (
      !Number.isInteger(Number(form.travelers)) ||
      Number(form.travelers) < 1 ||
      Number(form.travelers) > 50
    ) {
      newErrors.travelers = "Enter a number between 1 and 50.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("");

    if (!validateForm()) {
      return;
    }

    const newInquiry = {
      ...form,
      name: form.name.trim(),
      email: form.email.trim(),
      id: Date.now(),
      submittedAt: new Date().toLocaleString()
    };

    try {
      const inquiries = JSON.parse(
        localStorage.getItem("travelInquiries") || "[]"
      );

      if (!Array.isArray(inquiries)) {
        throw new Error("Invalid inquiry data");
      }

      localStorage.setItem(
        "travelInquiries",
        JSON.stringify([...inquiries, newInquiry])
      );

      setSuccess("Your travel inquiry has been submitted successfully!");
      setErrors({});
      setForm(emptyForm);
    } catch (err) {
      setErrors({ submit: "Unable to save your inquiry. Please try again." });
    }
  };

  const fieldProps = (name) => ({
    id: name,
    name,
    value: form[name],
    onChange: updateForm,
    "aria-invalid": errors[name] ? "true" : "false",
    "aria-describedby": errors[name] ? `${name}-error` : undefined
  });

  return (
    <div className="cv-page">
      {/* ---------- Hero ---------- */}
      <header className="cv-hero">
        <div className="cv-hero-glow cv-hero-glow-1" aria-hidden="true" />
        <div className="cv-hero-glow cv-hero-glow-2" aria-hidden="true" />

        <div className="cv-hero-content">
          <span className="cv-eyebrow">✈ Let's get you moving</span>
          <h1>
            Plan Your <span>Dream Vacation</span>
          </h1>
          <p>
            Tell us where you want to go and when. Our travel experts will
            craft a journey that fits your style, budget and pace.
          </p>

          <div className="cv-hero-stats">
            <div>
              <strong>24h</strong>
              <span>Response time</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Custom plans</span>
            </div>
            <div>
              <strong>Free</strong>
              <span>No-obligation quote</span>
            </div>
          </div>
        </div>

        <svg
          className="cv-hero-wave"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,40 C240,90 480,0 720,30 C960,60 1200,90 1440,35 L1440,80 L0,80 Z" />
        </svg>
      </header>

      {/* ---------- Main layout ---------- */}
      <main className="cv-layout">
        {/* Left: info */}
        <aside className="cv-info">
          <h2>Contact TravelVista</h2>
          <p className="cv-info-lead">
            Questions, custom itineraries or group bookings. We're happy to
            help at every step.
          </p>

          <div className="cv-card-grid">
            {contactCards.map((card) => (
              <div className="cv-info-card" key={card.label}>
                <span className="cv-info-icon">{card.icon}</span>
                <div>
                  <small>{card.label}</small>
                  <p>{card.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="cv-perks">
            <h3>Why contact us?</h3>
            <ul>
              {perks.map((perk) => (
                <li key={perk.text}>
                  <span>{perk.icon}</span>
                  {perk.text}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Right: form */}
        <form className="cv-form" onSubmit={handleSubmit} noValidate>
          <div className="cv-form-head">
            <h2>Travel Inquiry Form</h2>
            <p>Fields marked <span className="cv-required">*</span> are required.</p>
          </div>

          {success && (
            <div className="cv-alert cv-alert-success" role="status">
              <span className="cv-alert-icon">🎉</span>
              <div>
                <strong>Inquiry sent!</strong>
                <p>{success} We'll get back to you shortly.</p>
              </div>
              <button
                type="button"
                className="cv-alert-close"
                onClick={() => setSuccess("")}
                aria-label="Dismiss message"
              >
                ×
              </button>
            </div>
          )}

          {errors.submit && (
            <div className="cv-alert cv-alert-error" role="alert">
              <span className="cv-alert-icon">⚠️</span>
              <div>
                <strong>Something went wrong</strong>
                <p>{errors.submit}</p>
              </div>
            </div>
          )}

          <fieldset className="cv-section">
            <legend>
              <span>1</span> About you
            </legend>

            <div className="cv-grid">
              <Field id="name" label="Full Name" required error={errors.name}>
                <input
                  {...fieldProps("name")}
                  type="text"
                  placeholder="e.g. Aarav Sharma"
                  autoComplete="name"
                />
              </Field>

              <Field id="phone" label="Phone Number" required error={errors.phone}>
                <input
                  {...fieldProps("phone")}
                  type="tel"
                  inputMode="numeric"
                  placeholder="10-digit mobile number"
                  maxLength="10"
                  autoComplete="tel"
                />
              </Field>

              <Field
                id="email"
                label="Email Address"
                required
                error={errors.email}
              >
                <input
                  {...fieldProps("email")}
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </Field>
            </div>
          </fieldset>

          <fieldset className="cv-section">
            <legend>
              <span>2</span> Your trip
            </legend>

            <div className="cv-grid">
              <Field
                id="destination"
                label="Select Destination"
                required
                error={errors.destination}
              >
                <select {...fieldProps("destination")}>
                  <option value="">Choose destination</option>
                  {destinations.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </Field>

              <Field
                id="travelDate"
                label="Travel Date"
                required
                error={errors.travelDate}
              >
                <input {...fieldProps("travelDate")} type="date" min={minDate} />
              </Field>

              <Field
                id="travelers"
                label="Number of Travelers"
                required
                error={errors.travelers}
              >
                <div className="cv-stepper">
                  <button
                    type="button"
                    onClick={() => changeTravelers(-1)}
                    aria-label="Decrease travelers"
                    disabled={Number(form.travelers) <= 1}
                  >
                    −
                  </button>
                  <input
                    {...fieldProps("travelers")}
                    type="number"
                    min="1"
                    max="50"
                  />
                  <button
                    type="button"
                    onClick={() => changeTravelers(1)}
                    aria-label="Increase travelers"
                    disabled={Number(form.travelers) >= 50}
                  >
                    +
                  </button>
                </div>
              </Field>

              <Field id="package" label="Preferred Package">
                <input
                  {...fieldProps("package")}
                  type="text"
                  placeholder="Package name (optional)"
                />
              </Field>
            </div>
          </fieldset>

          <fieldset className="cv-section">
            <legend>
              <span>3</span> Anything else?
            </legend>

            <Field id="message" label="Additional Message">
              <textarea
                {...fieldProps("message")}
                maxLength={MAX_MESSAGE}
                rows="4"
                placeholder="Budget, hotel preferences, special occasions, dietary needs..."
              />
              <span className="cv-counter">
                {form.message.length}/{MAX_MESSAGE}
              </span>
            </Field>
          </fieldset>

          <button type="submit" className="cv-submit">
            Submit Travel Inquiry <span aria-hidden="true">→</span>
          </button>

          <p className="cv-privacy">
            🔒 Your details are used only to plan your trip.
          </p>
        </form>
      </main>
    </div>
  );
}

export default Contact;