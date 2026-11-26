
import { Link, useParams } from "react-router-dom";
import packages from "../data/packages.json";
import "../styles/PackageDetails.css";

function PackageDetails() {
 
  const { slug } = useParams();

  const travelPackage = packages.find(
    (item) => item.slug === slug
  );

  if (!travelPackage) {
    return (
      <div className="package-not-found">
        <h2>Package Not Found</h2>
        <p>Sorry, this travel package is unavailable.</p>
        <Link to="/packages" className="pd-primary-btn">
          Explore Packages
        </Link>
      </div>
    );
  }

  return (
    <main className="package-details-page">

      {/* Breadcrumb */}
      <div className="pd-breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/packages">Packages</Link>
        <span>/</span>
        <span>{travelPackage.name}</span>
      </div>

      {/* Hero Section */}
      <section className="pd-hero">
        <img
          src={travelPackage.image}
          alt={travelPackage.destination}
          className="pd-hero-image"
        />

        <div className="pd-hero-overlay"></div>

        <div className="pd-hero-content">
          <span className="pd-category">
            {travelPackage.category} Package
          </span>

          <h1>{travelPackage.name}</h1>

          <p>
            <span>📍 {travelPackage.destination}</span>
            <span> | </span>
            <span>🕒 {travelPackage.duration}</span>
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pd-main-container">

        <div className="pd-left-content">

          {/* Overview */}
          <div className="pd-section-card">
            <div className="pd-section-heading">
              <span className="pd-heading-icon">✈️</span>
              <div>
                <h2>Package Overview</h2>
                <p>Everything you need to know about this trip</p>
              </div>
            </div>

            <p className="pd-description">
              {travelPackage.description}
            </p>

            <div className="pd-highlights">
              <div className="pd-highlight">
                <span>📍</span>
                <div>
                  <small>Destination</small>
                  <strong>{travelPackage.destination}</strong>
                </div>
              </div>

              <div className="pd-highlight">
                <span>🗓️</span>
                <div>
                  <small>Duration</small>
                  <strong>{travelPackage.duration}</strong>
                </div>
              </div>

              <div className="pd-highlight">
                <span>💰</span>
                <div>
                  <small>Starting Price</small>
                  <strong>
                    ₹{travelPackage.price.toLocaleString("en-IN")}
                  </strong>
                </div>
              </div>
            </div>
          </div>

          {/* Inclusions */}
          <div className="pd-section-card">
            <div className="pd-section-heading">
              <span className="pd-heading-icon">🎒</span>
              <div>
                <h2>What's Included</h2>
                <p>Enjoy a comfortable and memorable journey</p>
              </div>
            </div>

            <div className="pd-inclusions-grid">
              {travelPackage.inclusions?.map((item, index) => (
                <div className="pd-inclusion-item" key={index}>
                  <span className="pd-check">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Itinerary */}
          <div className="pd-section-card">
            <div className="pd-section-heading">
              <span className="pd-heading-icon">🗺️</span>
              <div>
                <h2>Tour Itinerary</h2>
                <p>Explore your trip day by day</p>
              </div>
            </div>

            <div className="pd-itinerary">
              {travelPackage.itinerary?.map((day, index) => (
                <div className="pd-itinerary-item" key={index}>
                  <div className="pd-day-number">
                    {index + 1}
                  </div>

                  <div className="pd-day-content">
                    <span>DAY {index + 1}</span>
                    <h3>{day}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Booking Sidebar */}
        <aside className="pd-booking-card">

          <div className="pd-booking-top">
            <span>PACKAGE PRICE</span>

            <h2>
              ₹{travelPackage.price.toLocaleString("en-IN")}
            </h2>

            <p>Starting price per person</p>
          </div>

          <div className="pd-booking-details">
            <div>
              <span>📍 Destination</span>
              <strong>{travelPackage.destination}</strong>
            </div>

            <div>
              <span>⏱️ Duration</span>
              <strong>{travelPackage.duration}</strong>
            </div>

            <div>
              <span>🏷️ Package Type</span>
              <strong>{travelPackage.category}</strong>
            </div>
          </div>

          <Link
            to="/contact"
            className="pd-primary-btn pd-booking-btn"
          >
            Enquire Now <span>→</span>
          </Link>

          <p className="pd-booking-note">
            ✨ Plan your next unforgettable journey with TravelVista.
          </p>

          <Link to="/packages" className="pd-back-link">
            ← Explore More Packages
          </Link>

        </aside>

      </section>

      {/* Bottom CTA */}
      <section className="pd-bottom-cta">
        <div>
          <h2>Ready for Your Next Adventure?</h2>
          <p>
            Let TravelVista help you plan a memorable travel experience.
          </p>
        </div>

        <Link to="/contact" className="pd-cta-button">
          Plan Your Trip →
        </Link>
      </section>

    </main>
  );
}

export default PackageDetails;
