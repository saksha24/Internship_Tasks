import React from "react";
import { Link } from "react-router-dom";

const stats = [
  { value: "500+", label: "Destinations" },
  { value: "120+", label: "Holiday Packages" },
  { value: "10k+", label: "Happy Travelers" },
  { value: "24/7", label: "Travel Support" },
];

const services = [
  {
    icon: "🌍",
    title: "Destination Discovery",
    text: "Explore popular domestic and international destinations.",
  },
  {
    icon: "✈️",
    title: "Tour Packages",
    text: "Browse family, adventure and holiday packages.",
  },
  {
    icon: "♡",
    title: "Travel Favorites",
    text: "Save your preferred travel destinations.",
  },
  {
    icon: "📋",
    title: "Travel Inquiries",
    text: "Submit your travel preferences through our inquiry form.",
  },
];

const steps = [
  { title: "Discover", text: "Browse destinations that match your mood." },
  { title: "Compare", text: "Review packages and save your favorites." },
  { title: "Enquire", text: "Share your preferences in one simple form." },
  { title: "Travel", text: "Head out for a journey you'll remember." },
];

const styles = `
.about-page {
  --teal: #0e7c86;
  --teal-dark: #0a5560;
  --sun: #ff9f43;
  --ink: #1d2b36;
  --muted: #5d6b77;
  --bg: #f4f9fa;
  --card: #ffffff;
  font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
  color: var(--ink);
  background: var(--bg);
  padding-bottom: 60px;
}

.about-page h1,
.about-page h2,
.about-page h3,
.about-page h4 {
  margin: 0;
  line-height: 1.2;
}

/* Hero */
.about-hero {
  position: relative;
  text-align: center;
  color: #fff;
  padding: 100px 20px 140px;
  background:
    radial-gradient(circle at 15% 20%, rgba(255, 159, 67, 0.35), transparent 40%),
    radial-gradient(circle at 85% 80%, rgba(255, 255, 255, 0.15), transparent 40%),
    linear-gradient(135deg, var(--teal-dark), var(--teal));
}

.about-eyebrow {
  display: inline-block;
  padding: 6px 16px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.18);
  font-size: 0.85rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 18px;
}

.about-hero h1 {
  font-size: clamp(2.2rem, 6vw, 3.8rem);
  font-weight: 800;
}

.about-hero h1 span {
  color: var(--sun);
}

.about-hero p {
  margin: 14px auto 0;
  max-width: 520px;
  font-size: 1.2rem;
  opacity: 0.92;
}

.about-hero-wave {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 70px;
  background: var(--bg);
  clip-path: ellipse(75% 100% at 50% 100%);
}

/* Stats */
.about-stats {
  max-width: 960px;
  margin: -70px auto 0;
  padding: 0 20px;
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.about-stat {
  background: var(--card);
  border-radius: 16px;
  padding: 22px 12px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(14, 124, 134, 0.15);
}

.about-stat strong {
  display: block;
  font-size: 1.8rem;
  color: var(--teal);
}

.about-stat span {
  color: var(--muted);
  font-size: 0.9rem;
}

/* Sections */
.about-section {
  max-width: 1050px;
  margin: 80px auto 0;
  padding: 0 20px;
}

.about-heading {
  text-align: center;
  margin-bottom: 36px;
}

.about-heading h2,
.about-split-text h2 {
  font-size: clamp(1.6rem, 3.5vw, 2.3rem);
}

.about-tag {
  display: inline-block;
  color: var(--sun);
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 10px;
}

/* Who we are */
.about-split {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 40px;
  align-items: center;
}

.about-split-text p {
  color: var(--muted);
  line-height: 1.8;
  margin-top: 16px;
  font-size: 1.05rem;
}

.about-mission {
  background: linear-gradient(145deg, var(--teal), var(--teal-dark));
  color: #fff;
  border-radius: 22px;
  padding: 36px 30px;
  box-shadow: 0 16px 36px rgba(10, 85, 96, 0.3);
  transform: rotate(1.5deg);
}

.about-mission-icon {
  font-size: 2.4rem;
  margin-bottom: 12px;
}

.about-mission p {
  margin-top: 12px;
  line-height: 1.7;
  opacity: 0.92;
}

/* Services */
.about-services {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.about-card {
  background: var(--card);
  border-radius: 18px;
  padding: 28px 22px;
  border: 1px solid #e3eef0;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.about-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 32px rgba(14, 124, 134, 0.18);
}

.about-card-icon {
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  font-size: 1.6rem;
  border-radius: 14px;
  background: #e6f5f6;
  margin-bottom: 16px;
}

.about-card h3 {
  font-size: 1.1rem;
  margin-bottom: 8px;
}

.about-card p {
  color: var(--muted);
  line-height: 1.6;
  margin: 0;
  font-size: 0.95rem;
}

/* Steps */
.about-steps {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  counter-reset: none;
}

.about-steps li {
  text-align: center;
  padding: 10px;
}

.about-step-num {
  display: inline-grid;
  place-items: center;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: var(--sun);
  color: #fff;
  font-weight: 800;
  font-size: 1.3rem;
  margin-bottom: 14px;
  box-shadow: 0 8px 18px rgba(255, 159, 67, 0.4);
}

.about-steps h4 {
  font-size: 1.1rem;
  margin-bottom: 6px;
}

.about-steps p {
  color: var(--muted);
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
}

/* CTA */
.about-cta {
  max-width: 1010px;
  margin: 90px auto 0;
  padding: 56px 24px;
  text-align: center;
  color: #fff;
  border-radius: 26px;
  background:
    radial-gradient(circle at 90% 10%, rgba(255, 159, 67, 0.45), transparent 45%),
    linear-gradient(135deg, var(--teal-dark), var(--teal));
}

.about-cta h2 {
  font-size: clamp(1.6rem, 4vw, 2.3rem);
}

.about-cta p {
  margin: 12px 0 26px;
  opacity: 0.92;
}

.about-btn {
  display: inline-block;
  background: var(--sun);
  color: #1d2b36;
  font-weight: 700;
  text-decoration: none;
  padding: 14px 32px;
  border-radius: 999px;
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.about-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.28);
}

/* Responsive */
@media (max-width: 900px) {
  .about-services,
  .about-steps {
    grid-template-columns: repeat(2, 1fr);
  }
  .about-split {
    grid-template-columns: 1fr;
  }
  .about-mission {
    transform: none;
  }
}

@media (max-width: 560px) {
  .about-stats {
    grid-template-columns: repeat(2, 1fr);
  }
  .about-services,
  .about-steps {
    grid-template-columns: 1fr;
  }
  .about-hero {
    padding: 80px 16px 120px;
  }
}
`;

function About() {
  return (
    <div className="about-page">
      <style>{styles}</style>
      {/* Hero */}
      <section className="about-hero">
        <span className="about-eyebrow">✦ About Us</span>
        <h1>
          About <span>TravelVista</span>
        </h1>
        <p>Making every journey meaningful and memorable.</p>
        <div className="about-hero-wave" aria-hidden="true" />
      </section>

      {/* Stats */}
      <section className="about-stats">
        {stats.map((s) => (
          <div className="about-stat" key={s.label}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </section>

      {/* Who we are */}
      <section className="about-section about-split">
        <div className="about-split-text">
          <span className="about-tag">Who We Are</span>
          <h2>Your companion for smarter travel planning</h2>
          <p>
            TravelVista is a travel and tourism portal designed to help
            travelers discover destinations, explore holiday packages and plan
            memorable journeys.
          </p>
          <p>
            Our platform brings destination information, travel experiences and
            package details together in one place.
          </p>
        </div>

        <div className="about-mission">
          <div className="about-mission-icon">🧭</div>
          <h3>Our Mission</h3>
          <p>
            Our mission is to make travel planning simple, accessible and
            enjoyable for everyone.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="about-section">
        <div className="about-heading">
          <span className="about-tag">What We Offer</span>
          <h2>Our Services</h2>
        </div>

        <div className="about-services">
          {services.map((s) => (
            <article className="about-card" key={s.title}>
              <div className="about-card-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="about-section">
        <div className="about-heading">
          <span className="about-tag">Simple Process</span>
          <h2>How It Works</h2>
        </div>

        <ol className="about-steps">
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className="about-step-num">{i + 1}</span>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Ready for your next adventure?</h2>
        <p>Pick a destination and let TravelVista handle the rest.</p>
        <Link to="/destinations" className="about-btn">
          Start Exploring →
        </Link>
      </section>
    </div>
  );
}

export default About;