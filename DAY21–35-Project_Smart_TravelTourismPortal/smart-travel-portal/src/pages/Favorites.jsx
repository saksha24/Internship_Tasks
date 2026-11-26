
import React from "react";
import { Link } from "react-router-dom";
import destinations from "../data/destinations.json";
import DestinationCard from "../components/DestinationCard";

function Favorites({ favorites, toggleFavorite }) {

  const savedDestinations = destinations.filter(
    (item) => favorites.includes(item.id)
  );

  return (
    <div className="page-container">

      <div className="page-banner">
        <h1>My Favorite Destinations ♡</h1>
        <p>Your saved dream travel destinations.</p>
      </div>

      {savedDestinations.length > 0 ? (

        <div className="card-grid">

          {savedDestinations.map((item) => (
            <DestinationCard
              key={item.id}
              destination={item}
              isFavorite={true}
              onToggleFavorite={toggleFavorite}
            />
          ))}

        </div>

      ) : (

        <div className="empty-state">
          <h2>No Favorites Yet!</h2>

          <p>
            You haven't saved any destinations.
            Explore our destinations and add your favorites.
          </p>

          <Link to="/destinations" className="primary-link">
            Explore Destinations
          </Link>
        </div>

      )}

    </div>
  );
}

export default Favorites;
