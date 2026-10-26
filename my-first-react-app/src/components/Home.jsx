
function Home({ name, course, description }) {
  return (
    <main id="home" className="home">
      <section className="hero">
        <span className="tag">MY FIRST REACT PROJECT</span>

        <h1>
          Welcome to <span>{name}</span>!
        </h1>

        <p className="description">{description}</p>

        <div className="info-card" id="about">
          <div className="info-icon">⚛</div>

          <h2>My Learning Journey</h2>

          <p>
            I am learning React components, JSX, and props.
          </p>

          <div className="course">
            <span>Current Course</span>
            <strong>{course}</strong>
          </div>

          <button
            onClick={() => alert("Welcome to my React application!")}
          >
            Explore My Project
          </button>
        </div>
      </section>
    </main>
  );
}

export default Home;
