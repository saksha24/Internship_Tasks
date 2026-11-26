
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Cards.css";

function DestinationCard({ destination, isFavorite, onToggleFavorite }) {
  return (
    <div className="destination-card">

      <div className="card-image">
        <img src={destination.image} alt={destination.name} />

        <button
          className={`favorite-btn ${isFavorite ? "selected" : ""}`}
          onClick={() => onToggleFavorite(destination.id)}
          aria-label="Toggle favorite"
        >
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>

      <div className="card-content">

        <span className="category">{destination.category}</span>

        <h3>{destination.name}, {destination.country}</h3>

        <p>{destination.description}</p>

        <div className="card-info">
          <span>⭐ {destination.rating}</span>
          <span>{destination.duration}</span>
        </div>

        <div className="card-bottom">
          <strong>From ₹{destination.price.toLocaleString("en-IN")}</strong>

          <Link to={`/destinations/${destination.slug}`}>
            Explore More →
          </Link>
        </div>

      </div>
    </div>
  );
}

export default DestinationCard;
