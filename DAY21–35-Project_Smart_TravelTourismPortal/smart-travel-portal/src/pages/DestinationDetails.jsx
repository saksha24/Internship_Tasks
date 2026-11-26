
import React from "react";
import { Link, useParams } from "react-router-dom";
import destinations from "../data/destinations.json";
import "../styles/PackageDetails.css";

function DestinationDetails({ favorites = [], toggleFavorite }) {
  const { slug } = useParams();

  const destination = destinations.find(
    (item) => item.slug === slug
  );

  if (!destination) {
    return (
      <div className="page-container">
        <div className="not-found-content">
          <h1>Destination Not Found</h1>
          <p>
            Sorry, we could not find the destination you are
            looking for.
          </p>
          <Link to="/destinations" className="back-btn">
            Explore Destinations
          </Link>
        </div>
      </div>
    );
  }

  const isFavorite = favorites.includes(destination.id);

  return (
    <div className="package-details-page">
      <section className="destination-hero">
        <img
          src={destination.image}
          alt={destination.name}
          className="destination-hero-image"
        />

        <div className="destination-hero-overlay">
          <span>{destination.category}</span>
          <h1>{destination.name}</h1>
          <p>{destination.country}</p>
          <p>⭐ {destination.rating} Rating</p>
        </div>
      </section>

      <div className="destination-details-container">
        <section className="destination-overview">
          <div>
            <p className="details-eyebrow">EXPLORE DESTINATION</p>
            <h2>Discover {destination.name}</h2>
            <p>{destination.description}</p>
          </div>

          <button
            type="button"
            className="favorite-btn"
            onClick={() => toggleFavorite?.(destination.id)}
          >
            {isFavorite ? "♥ Remove Favorite" : "♡ Add to Favorites"}
          </button>
        </section>

        <section className="destination-info-grid">
          <div className="destination-info-card">
            <span>Estimated Budget</span>
            <h3>₹{destination.price.toLocaleString("en-IN")}</h3>
          </div>

          <div className="destination-info-card">
            <span>Trip Duration</span>
            <h3>{destination.duration}</h3>
          </div>

          <div className="destination-info-card">
            <span>Best Time to Visit</span>
            <h3>{destination.bestTime}</h3>
          </div>

          <div className="destination-info-card">
            <span>Rating</span>
            <h3>⭐ {destination.rating}/5</h3>
          </div>
        </section>

        <section className="destination-section">
          <h2>Top Tourist Attractions</h2>

          <div className="destination-list-grid">
            {destination.attractions.map((place, index) => (
              <div className="destination-list-item" key={index}>
                <span>📍</span>
                <strong>{place}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="destination-section">
          <h2>Popular Activities</h2>

          <div className="destination-list-grid">
            {destination.activities.map((activity, index) => (
              <div className="destination-list-item" key={index}>
                <span>✦</span>
                <strong>{activity}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="destination-section travel-information">
          <h2>Travel Information</h2>

          <div className="travel-info-item">
            <span>✈️ Transportation</span>
            <p>{destination.travelInfo.transport}</p>
          </div>

          <div className="travel-info-item">
            <span>🛫 Nearest Airport</span>
            <p>{destination.travelInfo.airport}</p>
          </div>

          <div className="travel-info-item">
            <span>🚕 Local Transportation</span>
            <p>{destination.travelInfo.localTransport}</p>
          </div>

          <div className="travel-info-item">
            <span>💡 Travel Tips</span>
            <p>{destination.travelInfo.tips}</p>
          </div>
        </section>

        <div className="destination-bottom-actions">
          <Link to="/destinations" className="back-btn">
            ← Back to Destinations
          </Link>

          <Link
            to={`/contact?destination=${encodeURIComponent(destination.name)}`}
            className="book-btn"
          >
            Plan Your Trip
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DestinationDetails;
