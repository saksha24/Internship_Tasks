
import React from "react";
import PackageCard from "./PackageCard";

function PackageList({ packages }) {
  return (
    <div className="card-grid">
      {packages.length > 0 ? (
        packages.map((travelPackage) => (
          <PackageCard
            key={travelPackage.id}
            travelPackage={travelPackage}
          />
        ))
      ) : (
        <p className="no-results">
          No tour packages available.
        </p>
      )}
    </div>
  );
}

export default PackageList;
