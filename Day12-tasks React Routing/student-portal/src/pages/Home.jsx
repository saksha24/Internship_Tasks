
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="page-card home-page">
      <span className="eyebrow">MY REACT PRACTICAL</span>

      <h1>Welcome to My Student Portal</h1>

      <p>
        Hello! I am a student and aspiring Java Full Stack Developer.
        This project demonstrates my understanding of React Router
        and navigation between multiple pages.
      </p>

      <div className="tech-stack">
        <span>React</span>
        <span>JavaScript</span>
        <span>HTML & CSS</span>
        <span>React Router DOM</span>
      </div>

      <div className="button-group">
        <Link to="/about" className="primary-button">
          About Me
        </Link>

        <Link to="/students" className="secondary-button">
          My Profile
        </Link>
      </div>

      <div className="learning-box">
        <h3>My Learning Objective</h3>
        <p>
          To create multiple pages, configure routes, navigate
          without full-page reloads, and handle invalid URLs.
        </p>
      </div>
    </section>
  );
}

export default Home;
