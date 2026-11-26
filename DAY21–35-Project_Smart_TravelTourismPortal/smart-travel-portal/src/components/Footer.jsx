
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-grid">

        <div>
          <h2>✈ TravelVista</h2>
          <p>
            Discover beautiful destinations and create
            unforgettable travel experiences.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/packages">Packages</Link>
          <Link to="/favorites">Favorites</Link>
        </div>

        <div>
          <h3>Company</h3>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div>
          <h3>Contact Information</h3>
          <p>📍 Pune, Maharashtra, India</p>
          <p>📧 info@travelvista.example</p>
          <p>📞 +91 98765 43210</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 TravelVista. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;
