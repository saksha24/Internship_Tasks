
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Header.css";

function Header({ favoriteCount }) {
  return (
    <header className="header">
      <Link to="/" className="logo">
        ✈ TravelVista
      </Link>

      <nav className="navbar">
        <NavLink to="/" end>Home</NavLink>

        <NavLink to="/destinations">Destinations</NavLink>

        <NavLink to="/packages">Packages</NavLink>

        <NavLink to="/favorites">
          ♡ Favorites ({favoriteCount})
        </NavLink>

        <NavLink to="/inquiries">
          📋 Inquiries
        </NavLink>

        <NavLink to="/about">About Us</NavLink>

        <NavLink to="/contact" className="contact-nav">
          Plan Your Trip
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
