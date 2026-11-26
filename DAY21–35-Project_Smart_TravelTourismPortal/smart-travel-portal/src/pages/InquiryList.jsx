import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Pages.css";

function getSavedInquiries() {
  try {
    const saved = JSON.parse(
      localStorage.getItem("travelInquiries") || "[]"
    );
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function InquiryList() {
  const [inquiries, setInquiries] = useState(getSavedInquiries);
  const [search, setSearch] = useState("");

  const filteredInquiries = useMemo(() => {
    const keyword = search.toLowerCase().trim();

    return inquiries.filter((item) => {
      return (
        (item.name || "").toLowerCase().includes(keyword) ||
        (item.email || "").toLowerCase().includes(keyword) ||
        (item.destination || "").toLowerCase().includes(keyword)
      );
    });
  }, [inquiries, search]);

  const deleteInquiry = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this inquiry?"
    );

    if (!confirmed) return;

    const updated = inquiries.filter((item) => item.id !== id);

    localStorage.setItem("travelInquiries", JSON.stringify(updated));
    setInquiries(updated);
  };

  const deleteAllInquiries = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all inquiries?"
    );

    if (!confirmed) return;

    localStorage.setItem("travelInquiries", JSON.stringify([]));
    setInquiries([]);
  };

  return (
    <div className="page-container">
      <div className="page-banner">
        <h1>Inquiry Management</h1>
        <p>View and manage customer travel inquiries.</p>
      </div>

      <section className="inquiry-management">
        <div className="inquiry-management-header">
          <div>
            <h2>Customer Inquiries</h2>
            <p>
              Total Inquiries: <strong>{inquiries.length}</strong>
            </p>
          </div>

          <Link to="/contact" className="inquiry-add-btn">
            + Add New Inquiry
          </Link>
        </div>

        <div className="inquiry-search">
          <input
            type="search"
            placeholder="Search by name, email or destination..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {filteredInquiries.length > 0 ? (
          <>
            <div className="inquiry-list">
              {filteredInquiries.map((item) => (
                <article className="inquiry-card" key={item.id}>
                  <div className="inquiry-card-header">
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.email}</p>
                    </div>

                    <button
                      type="button"
                      className="inquiry-delete-btn"
                      onClick={() => deleteInquiry(item.id)}
                    >
                      Delete
                    </button>
                  </div>

                  <div className="inquiry-details-grid">
                    <div>
                      <span>Phone Number</span>
                      <strong>{item.phone || "Not provided"}</strong>
                    </div>

                    <div>
                      <span>Destination</span>
                      <strong>{item.destination || "Not selected"}</strong>
                    </div>

                    <div>
                      <span>Travel Date</span>
                      <strong>{item.travelDate || "Not provided"}</strong>
                    </div>

                    <div>
                      <span>Travelers</span>
                      <strong>{item.travelers || "1"}</strong>
                    </div>

                    <div>
                      <span>Preferred Package</span>
                      <strong>{item.package || "Not specified"}</strong>
                    </div>

                    <div>
                      <span>Submitted At</span>
                      <strong>{item.submittedAt || "Not available"}</strong>
                    </div>
                  </div>

                  <div className="inquiry-message">
                    <span>Customer Message</span>
                    <p>{item.message || "No additional message provided."}</p>
                  </div>
                </article>
              ))}
            </div>

            {inquiries.length > 0 && (
              <button
                type="button"
                className="inquiry-clear-btn"
                onClick={deleteAllInquiries}
              >
                Delete All Inquiries
              </button>
            )}
          </>
        ) : (
          <div className="inquiry-empty">
            <h2>
              {inquiries.length === 0
                ? "No Inquiries Yet"
                : "No Matching Inquiries"}
            </h2>

            <p>
              {inquiries.length === 0
                ? "Submitted travel inquiries will appear here."
                : "Try searching with another name, email or destination."}
            </p>

            {inquiries.length === 0 && (
              <Link to="/contact" className="inquiry-add-btn">
                Submit Your First Inquiry
              </Link>
            )}
          </div>
        )}
      </section>
    </div>
  );
}

export default InquiryList;