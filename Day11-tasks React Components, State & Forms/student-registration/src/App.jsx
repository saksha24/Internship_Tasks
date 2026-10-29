
import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !course) {
      setError("Please fill in all fields.");
      setStudent(null);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      setStudent(null);
      return;
    }

    setError("");
    setStudent({
      name: name.trim(),
      email: email.trim(),
      course,
    });
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setCourse("");
    setStudent(null);
    setError("");
  };

  return (
    <div className="page-container">
      <div className="registration-card">
        <div className="form-header">
          <div className="form-icon">🎓</div>
          <h1>Student Registration</h1>
          <p>Fill in your details to register for a course.</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Student Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="text"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="course">Select Course</label>
            <select
              id="course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option value="">Choose your course</option>
              <option value="BCA">BCA</option>
              <option value="MCA">MCA</option>
              <option value="B.Tech">B.Tech</option>
              <option value="MBA">MBA</option>
              <option value="B.Sc">B.Sc</option>
            </select>
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="register-btn">
            Register Now →
          </button>

          <button
            type="button"
            className="reset-btn"
            onClick={handleReset}
          >
            Clear Form
          </button>
        </form>

        {student && (
          <div className="success-card">
            <h2>✓ Registration Successful!</h2>
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Course:</strong> {student.course}</p>
          </div>
        )}

        <p className="footer-text">
          © 2026 Student Registration Portal
        </p>
      </div>
    </div>
  );
}

export default App;
