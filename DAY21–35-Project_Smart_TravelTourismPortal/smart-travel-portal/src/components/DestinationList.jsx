import React from "react";
import DestinationCard from "./DestinationCard";

function DestinationList({ destinations, favorites, onToggleFavorite }) {
  return (
    <div className="card-grid">
      {destinations.length > 0 ? (
        destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            destination={destination}
            isFavorite={favorites.includes(destination.id)}
            onToggleFavorite={onToggleFavorite}
          />
        ))
      ) : (
        <p className="no-results">
          No destinations found. Try another search.
        </p>
      )}
    </div>
  );
}

export default DestinationList;
