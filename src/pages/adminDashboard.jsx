import { useEffect, useState } from "react";
import "./adminDashboard.css";

export function AdminDashboard() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchSubmissions = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/submissions"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch submissions");
      }

      const data = await response.json();

      setSubmissions(data);
    } catch (error) {
      console.error(error);
      setError("Unable to load submissions");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  return (
    <div className="admin-page">

      {/* Header */}
      <header className="admin-header">
        <div>
          <h1>Admin Dashboard</h1>
          <p>BGMI Event Demo Management</p>
        </div>

        <button
          className="refresh-btn"
          onClick={fetchSubmissions}
        >
          <span className="bi bi-arrow-clockwise"></span>
          Refresh
        </button>
      </header>

      {/* Statistics */}
      <div className="admin-stats">

        <div className="stat-card">
          <span className="bi bi-people-fill"></span>

          <div>
            <p>Total Submissions</p>
            <h2>{submissions.length}</h2>
          </div>
        </div>

        <div className="stat-card">
          <span className="bi bi-gift-fill"></span>

          <div>
            <p>Rewards Selected</p>
            <h2>{submissions.length}</h2>
          </div>
        </div>

        <div className="stat-card">
          <span className="bi bi-check-circle-fill"></span>

          <div>
            <p>Demo Status</p>
            <h2>ACTIVE</h2>
          </div>
        </div>

      </div>

      {/* Table */}
      <section className="submission-section">

        <div className="section-title">
          <div>
            <h2>Demo Submissions</h2>
            <p>Only non-sensitive demo information is displayed.</p>
          </div>
        </div>

        {loading && (
          <div className="loading">
            <span className="spinner"></span>
            Loading submissions...
          </div>
        )}

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="table-wrapper">

            <table>

              <thead>
                <tr>
                  <th>#</th>
                  <th>Player ID</th>
                  <th>Phone</th>
                  <th>Level</th>
                  <th>Reward</th>
                  <th>Provider</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>

                {submissions.length === 0 ? (
                  <tr>
                    <td
                      colSpan="8"
                      className="no-data"
                    >
                      No demo submissions yet.
                    </td>
                  </tr>
                ) : (
                  submissions.map((submission, index) => (

                    <tr key={submission._id}>

                      <td>
                        {index + 1}
                      </td>

                      <td className="player-id">
                        {submission.demoPlayerId}
                      </td>

                      <td>
                        {submission.demoPhone}
                      </td>

                      <td>
                        {submission.accountLevel}
                      </td>

                      <td>
                        {submission.rewardSelected}
                      </td>

                      <td>
                        <span className="provider">
                          {submission.loginProvider}
                        </span>
                      </td>

                      <td>
                        {new Date(
                          submission.createdAt
                        ).toLocaleDateString("en-IN")}
                      </td>

                      <td>
                        <span className="status">
                          {submission.status}
                        </span>
                      </td>

                    </tr>

                  ))
                )}

              </tbody>

            </table>

          </div>
        )}

      </section>

      {/* Security Notice */}
      <div className="security-notice">

        <span className="bi bi-shield-check"></span>

        <div>
          <strong>Demo Security Notice</strong>

          <p>
            This dashboard displays only non-sensitive demo
            submission information. Never store passwords,
            OTPs, OAuth tokens, authentication cookies, or
            social-media credentials.
          </p>
        </div>

      </div>

    </div>
  );
}