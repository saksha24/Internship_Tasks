
import React, { useState } from "react";
import packages from "../data/packages.json";
import PackageList from "../components/PackageList";
import "../styles/Pages.css";

function Packages() {
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Family",
    "Adventure",
    "Heritage",
    "Nature",
    "International"
  ];

  const filteredPackages = packages.filter((item) =>
    category === "All" || item.category === category
  );

  return (
    <div className="page-container">
      <div className="page-banner">
        <h1>Our Tour Packages</h1>
        <p>Choose your perfect holiday package.</p>
      </div>

      <div className="filter-buttons">
        {categories.map((item) => (
          <button
            key={item}
            className={category === item ? "filter-active" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <p className="result-count">
        {filteredPackages.length} packages available
      </p>

      <PackageList packages={filteredPackages} />
    </div>
  );
}

export default Packages;
