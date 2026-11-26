import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import destinations from "../data/destinations.json";
import packages from "../data/packages.json";
import DestinationCard from "../components/DestinationCard";
import PackageCard from "../components/PackageCard";
import "../styles/Home.css";

const quickTags = ["Goa", "Paris", "Manali", "Bali", "Dubai"];

const stats = [
  { value: "50+", label: "Destinations" },
  { value: "120+", label: "Tour Packages" },
  { value: "10K+", label: "Happy Travelers" },
  { value: "4.9★", label: "Average Rating" },
];

const features = [
  {
    icon: "🌍",
    title: "Explore Worldwide",
    text: "Discover amazing domestic and international destinations.",
  },
  {
    icon: "💰",
    title: "Multiple Packages",
    text: "Compare different holiday experiences and prices.",
  },
  {
    icon: "♡",
    title: "Save Favorites",
    text: "Keep your dream destinations in one place.",
  },
  {
    icon: "📋",
    title: "Easy Inquiries",
    text: "Share your travel requirements through our inquiry form.",
  },
];

const steps = [
  { n: "01", title: "Search", text: "Pick a destination that excites you." },
  { n: "02", title: "Compare", text: "Review packages, prices and durations." },
  { n: "03", title: "Enquire", text: "Send us your requirements in a minute." },
  { n: "04", title: "Travel", text: "Pack your bags and make memories." },
];

const testimonials = [
  {
    name: "Aarav Sharma",
    trip: "Manali Getaway",
    text: "Everything was planned perfectly. We just had to enjoy the mountains!",
  },
  {
    name: "Priya Nair",
    trip: "Goa Beach Holiday",
    text: "Great packages at honest prices. The inquiry process was super easy.",
  },
  {
    name: "Rohan Mehta",
    trip: "Paris Escape",
    text: "A dream trip from start to finish. Highly recommend TravelVista.",
  },
];

function Home({ favorites, toggleFavorite }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const popularDestinations = destinations.slice(0, 3);
  const popularPackages = packages.slice(0, 3);

  const goSearch = (term) => {
    const value = term.trim();
    navigate(
      value
        ? `/destinations?search=${encodeURIComponent(value)}`
        : "/destinations"
    );
  };

  const handleSearch = (e) => {
    e.preventDefault();
    goSearch(search);
  };

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />

        <div className="hero-content">
          <span className="hero-tag">✈ YOUR NEXT ADVENTURE STARTS HERE</span>

          <h1>
            Explore The World,
            <br />
            <span className="gradient-text">Experience Life</span>
          </h1>

          <p>
            Discover beautiful destinations, explore exciting travel packages
            and create memories that last forever.
          </p>

          <div className="hero-buttons">
            <Link to="/destinations" className="hero-btn">
              Explore Destinations →
            </Link>
            <Link to="/packages" className="hero-outline">
              View Packages
            </Link>
          </div>
        </div>
      </section>

      {/* FLOATING SEARCH */}
      <section className="home-search">
        <div className="search-card">
          <div className="search-text">
            <h2>Where Would You Like To Go?</h2>
            <p>Find your perfect holiday destination.</p>
          </div>

          <form onSubmit={handleSearch} className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="search"
              placeholder="Search Goa, Paris, Manali..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search destinations"
            />
            <button type="submit">Search</button>
          </form>

          <div className="quick-tags">
            <span>Popular:</span>
            {quickTags.map((tag) => (
              <button key={tag} type="button" onClick={() => goSearch(tag)}>
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-strip">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </section>

      {/* POPULAR DESTINATIONS */}
      <section className="home-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">TOP PICKS</span>
            <h2>Popular Destinations</h2>
            <p>Discover places loved by travelers.</p>
          </div>
          <Link to="/destinations" className="view-all">
            View All →
          </Link>
        </div>

        <div className="card-grid">
          {popularDestinations.map((item) => (
            <DestinationCard
              key={item.id}
              destination={item}
              isFavorite={favorites.includes(item.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      </section>

      {/* OFFER BANNER */}
      <section className="offer-banner">
        <div className="offer-glow" />
        <div className="offer-text">
          <span className="offer-badge">LIMITED TIME OFFERS</span>
          <h2>Ready For Your Next Adventure?</h2>
          <p>
            Explore our travel packages and discover your next favorite
            destination.
          </p>
        </div>
        <Link to="/packages" className="hero-btn">
          Explore Packages →
        </Link>
      </section>

      {/* FEATURED PACKAGES */}
      <section className="home-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">CURATED FOR YOU</span>
            <h2>Featured Tour Packages</h2>
            <p>Choose a holiday that matches your travel style.</p>
          </div>
          <Link to="/packages" className="view-all">
            View All →
          </Link>
        </div>

        <div className="card-grid">
          {popularPackages.map((item) => (
            <PackageCard key={item.id} travelPackage={item} />
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="steps-section">
        <div className="center-heading">
          <span className="eyebrow">SIMPLE PROCESS</span>
          <h2>Plan Your Trip In 4 Easy Steps</h2>
        </div>

        <div className="steps-grid">
          {steps.map((s) => (
            <div key={s.n} className="step">
              <span className="step-num">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="why-section">
        <div className="center-heading">
          <span className="eyebrow">WHY US</span>
          <h2>Why Choose TravelVista?</h2>
          <p>Everything you need to plan a memorable journey.</p>
        </div>

        <div className="why-grid">
          {features.map((f) => (
            <div key={f.title} className="why-card">
              <span className="why-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="home-section">
        <div className="center-heading">
          <span className="eyebrow">TESTIMONIALS</span>
          <h2>Loved By Travelers</h2>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <figure key={t.name} className="testimonial">
              <div className="stars">★★★★★</div>
              <blockquote>“{t.text}”</blockquote>
              <figcaption>
                <span className="avatar">{t.name.charAt(0)}</span>
                <div>
                  <strong>{t.name}</strong>
                  <small>{t.trip}</small>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <div className="cta-inner">
          <h2>Let's Plan Your Next Journey!</h2>
          <p>Your dream vacation is just a few clicks away.</p>
          <Link to="/contact" className="hero-btn light">
            Plan Your Trip →
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;