import React, { useMemo, useState } from "react";
import destinations from "../data/destinations.json";
import DestinationList from "../components/DestinationList";
import "../styles/Pages.css";
import "../styles/Designations.css";

const CATEGORIES = ["All", "Beach", "Mountain", "Heritage", "Nature", "International"];

const BUDGETS = [
  { value: "All", label: "All Budgets" },
  { value: "Below 10000", label: "Below ₹10,000" },
  { value: "10000 - 20000", label: "₹10,000 – ₹20,000" },
  { value: "Above 20000", label: "Above ₹20,000" }
];

const SORTS = [
  { value: "default", label: "Recommended" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name", label: "Name: A to Z" }
];

function Destinations({ favorites, toggleFavorite }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [region, setRegion] = useState("All");
  const [budget, setBudget] = useState("All");
  const [sort, setSort] = useState("default");

  const filteredDestinations = useMemo(() => {
    const term = search.toLowerCase().trim();

    const result = destinations.filter((item) => {
      const searchText =
        `${item.name} ${item.country} ${item.location || ""}`.toLowerCase();
      const matchesSearch = searchText.includes(term);

      const matchesCategory = category === "All" || item.category === category;

      const itemRegion = item.country === "India" ? "India" : "International";
      const matchesRegion = region === "All" || itemRegion === region;

      const price = Number(item.price);
      let matchesBudget = true;
      if (budget === "Below 10000") matchesBudget = price < 10000;
      else if (budget === "10000 - 20000")
        matchesBudget = price >= 10000 && price <= 20000;
      else if (budget === "Above 20000") matchesBudget = price > 20000;

      return matchesSearch && matchesCategory && matchesRegion && matchesBudget;
    });

    if (sort === "price-asc") result.sort((a, b) => Number(a.price) - Number(b.price));
    else if (sort === "price-desc") result.sort((a, b) => Number(b.price) - Number(a.price));
    else if (sort === "name") result.sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [search, category, region, budget, sort]);

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setRegion("All");
    setBudget("All");
    setSort("default");
  };

  // Active filter tags (each removable)
  const activeFilters = [
    search.trim() && { key: "search", label: `“${search.trim()}”`, clear: () => setSearch("") },
    category !== "All" && { key: "category", label: category, clear: () => setCategory("All") },
    region !== "All" && { key: "region", label: region, clear: () => setRegion("All") },
    budget !== "All" && {
      key: "budget",
      label: BUDGETS.find((b) => b.value === budget)?.label,
      clear: () => setBudget("All")
    }
  ].filter(Boolean);

  return (
    <div className="page-container destinations-page">
      {/* Hero */}
      <header className="dest-hero">
        <span className="dest-hero__eyebrow">Plan your escape</span>
        <h1>Explore Destinations</h1>
        <p>Find your next unforgettable travel experience.</p>

        <div className="dest-search">
          <span className="dest-search__icon" aria-hidden="true">🔍</span>
          <input
            type="search"
            aria-label="Search destinations"
            placeholder="Search by destination, country or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </header>

      {/* Sticky filter bar */}
      <section className="dest-filters" aria-label="Filters">
        <div className="dest-chips" role="group" aria-label="Category">
          {CATEGORIES.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              className={`dest-chip ${category === item ? "is-active" : ""}`}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="dest-selects">
          <label className="dest-select">
            <span>Region</span>
            <select value={region} onChange={(e) => setRegion(e.target.value)}>
              <option value="All">All Regions</option>
              <option value="India">India</option>
              <option value="International">International</option>
            </select>
          </label>

          <label className="dest-select">
            <span>Budget</span>
            <select value={budget} onChange={(e) => setBudget(e.target.value)}>
              {BUDGETS.map((b) => (
                <option key={b.value} value={b.value}>{b.label}</option>
              ))}
            </select>
          </label>

          <label className="dest-select">
            <span>Sort by</span>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              {SORTS.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
          </label>

          <button type="button" className="dest-clear" onClick={clearFilters}>
            Clear all
          </button>
        </div>
      </section>

      {/* Result summary + active tags */}
      <div className="dest-summary">
        <p className="result-count" aria-live="polite">
          Showing <strong>{filteredDestinations.length}</strong> of {destinations.length} destinations
        </p>

        {activeFilters.length > 0 && (
          <ul className="dest-tags">
            {activeFilters.map((f) => (
              <li key={f.key}>
                <button type="button" onClick={f.clear} aria-label={`Remove filter ${f.label}`}>
                  {f.label} <span aria-hidden="true">✕</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Results */}
      {filteredDestinations.length > 0 ? (
        <DestinationList
          destinations={filteredDestinations}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      ) : (
        <div className="dest-empty">
          <div className="dest-empty__icon" aria-hidden="true">🧭</div>
          <h2>No destinations found</h2>
          <p>
            Nothing matches your search and filters. Try a different keyword or
            loosen a filter or two.
          </p>
          <button type="button" onClick={clearFilters}>Reset all filters</button>
        </div>
      )}
    </div>
  );
}

export default Destinations;