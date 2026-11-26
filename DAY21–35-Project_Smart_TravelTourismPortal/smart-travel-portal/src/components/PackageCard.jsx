
import React from "react";
import { Link } from "react-router-dom";

function PackageCard({ travelPackage }) {
  return (
    <div className="package-card">

      <img src={travelPackage.image} alt={travelPackage.name} />

      <div className="package-content">

        <span className="category">
          {travelPackage.category}
        </span>

        <h3>{travelPackage.name}</h3>

        <p>📍 {travelPackage.destination}</p>

        <p>🗓 {travelPackage.duration}</p>

        <p>{travelPackage.description}</p>

        <div className="package-bottom">

          <strong>
            ₹{travelPackage.price.toLocaleString("en-IN")}
          </strong>

          <Link to={`/packages/${travelPackage.slug}`}>
            View Details →
          </Link>

        </div>

      </div>

    </div>
  );
}

export default PackageCard;
