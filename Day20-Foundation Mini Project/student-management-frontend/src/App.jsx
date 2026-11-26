
import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "http://localhost:8080/api/students";

function App() {

  const [students, setStudents] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    age: ""
  });

  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch all students
  const fetchStudents = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Unable to fetch students");
      }

      const data = await response.json();
      setStudents(data);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Load students when component starts
  useEffect(() => {
    fetchStudents();
  }, []);

  // Handle form input
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Add or update student
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");

      const url = editingId
        ? `${API_URL}/${editingId}`
        : API_URL;

      const method = editingId ? "PUT" : "POST";

      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          age: Number(formData.age)
        })
      });

      if (!response.ok) {
        throw new Error("Unable to save student. Check the details.");
      }

      setFormData({
        name: "",
        email: "",
        course: "",
        age: ""
      });

      setEditingId(null);

      await fetchStudents();

    } catch (err) {
      setError(err.message);
    }
  };

  // Edit student
  const handleEdit = (student) => {

    setFormData({
      name: student.name,
      email: student.email,
      course: student.course,
      age: String(student.age)
    });

    setEditingId(student.id);
    setError("");
  };

  // Delete student
  const handleDelete = async (id) => {

    const confirmed = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmed) return;

    try {
      setError("");

      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
      });

      if (!response.ok) {
        throw new Error("Unable to delete student");
      }

      await fetchStudents();

    } catch (err) {
      setError(err.message);
    }
  };

  // Cancel editing
  const handleCancel = () => {

    setFormData({
      name: "",
      email: "",
      course: "",
      age: ""
    });

    setEditingId(null);
    setError("");
  };

  return (
    <div className="app-container">

      <header className="header">
        <div>
          <h1>Student Management System</h1>
          <p>Manage student records efficiently</p>
        </div>
      </header>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <div className="content">

        {/* Student Form */}

        <section className="form-section">

          <h2>
            {editingId ? "Update Student" : "Add New Student"}
          </h2>

          <form onSubmit={handleSubmit}>

            <label>Student Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter student name"
              value={formData.name}
              onChange={handleChange}
              maxLength="100"
              required
            />

            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Course</label>
            <input
              type="text"
              name="course"
              placeholder="Enter course"
              value={formData.course}
              onChange={handleChange}
              required
            />

            <label>Age</label>
            <input
              type="number"
              name="age"
              placeholder="Enter age"
              min="1"
              value={formData.age}
              onChange={handleChange}
              required
            />

            <button type="submit" className="submit-btn">
              {editingId ? "Update Student" : "Add Student"}
            </button>

            {editingId && (
              <button
                type="button"
                className="cancel-btn"
                onClick={handleCancel}
              >
                Cancel
              </button>
            )}

          </form>

        </section>

        {/* Student List */}

        <section className="table-section">

          <div className="table-header">
            <h2>Student Records</h2>
            <span>Total Students: {students.length}</span>
          </div>

          {loading ? (
            <p>Loading students...</p>
          ) : students.length === 0 ? (
            <p>No student records found.</p>
          ) : (

            <div className="table-wrapper">

              <table>

                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Course</th>
                    <th>Age</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>

                  {students.map((student) => (

                    <tr key={student.id}>

                      <td>{student.id}</td>
                      <td>{student.name}</td>
                      <td>{student.email}</td>
                      <td>{student.course}</td>
                      <td>{student.age}</td>

                      <td>
                        <button
                          className="edit-btn"
                          onClick={() => handleEdit(student)}
                        >
                          Edit
                        </button>

                        <button
                          className="delete-btn"
                          onClick={() => handleDelete(student.id)}
                        >
                          Delete
                        </button>
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          )}

        </section>

      </div>

    </div>
  );
}

export default App;
