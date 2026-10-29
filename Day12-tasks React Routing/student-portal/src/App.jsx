
import { Link, NavLink, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Students from './pages/Students';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <Link to="/" className="brand">
          <span className="brand-icon">S</span>
          Student Portal
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/students">Students</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/students" element={<Students />} />
          <Route path="/contact" element={<Contact />} />

          {/* Catch all unknown URLs */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>© 2026 Student Portal. Built with React Router.</p>
      </footer>
    </div>
  );
}

export default App;
