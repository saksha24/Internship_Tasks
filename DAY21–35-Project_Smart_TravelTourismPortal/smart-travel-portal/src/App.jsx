
import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import InquiryList from "./pages/InquiryList";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";
import Packages from "./pages/Packages";
import PackageDetails from "./pages/PackageDetails";
import Favorites from "./pages/Favorites";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function AppContent() {

  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem("travelFavorites") || "[]"
      );
    } catch {
      return [];
    }
  });

  const toggleFavorite = (id) => {

    setFavorites((previous) => {

      const updated = previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id];

      localStorage.setItem(
        "travelFavorites",
        JSON.stringify(updated)
      );

      return updated;
    });

  };

  return (
    <>
      <Header favoriteCount={favorites.length} />

      <main>
        <Routes>

          <Route
            path="/"
            element={
              <Home
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />

          <Route
            path="/destinations"
            element={
              <Destinations
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />

          <Route
            path="/destinations/:slug"
            element={
              <DestinationDetails
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />

          <Route path="/packages" element={<Packages />} />

          <Route
            path="/packages/:slug"
            element={<PackageDetails />}
          />

          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />

          <Route path="/contact" element={<Contact />} />

          <Route path="/about" element={<About />} />

          <Route path="*" element={<NotFound />} />

          <Route path="/inquiries" element={<InquiryList />} />

        </Routes>
      </main>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
