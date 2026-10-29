
import { Link, useLocation } from 'react-router-dom';

function NotFound() {
  const location = useLocation();

  return (
    <section className="page-card not-found">
      <div className="error-code">404</div>

      <h1>Page Not Found</h1>

      <p>
        The page <strong>{location.pathname}</strong> does not exist.
      </p>

      <p>
        Please check the URL or return to the home page.
      </p>

      <Link to="/" className="primary-button">
        Back to Home
      </Link>
    </section>
  );
}

export default NotFound;
