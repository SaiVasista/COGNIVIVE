import React from "react";
import "../styles/Dashboard.css";

const psychiatristFeatures = [
  { text: "View Problem Statements", icon: "📝", bg: "problems.jpg" },
  { text: "Call & Recordings", icon: "📞", bg: "calls.jpg" },
  { text: "Appointment Requests", icon: "📅", bg: "appointments.jpg" },
  { text: "View Game & Test Results", icon: "🎮", bg: "tests.jpg" },
  { text: "Prescribe Medication", icon: "💊", bg: "medications.jpg" },
];

const PsychiatristDashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Psychiatrist Dashboard</h2>
      <button className="submit-button">Submit Reports</button>
      <h3>Features:</h3>
      <div className="features-grid">
        {psychiatristFeatures.map((feature, index) => (
          <div
            key={index}
            className="feature-card"
            style={{ backgroundImage: `url(/images/${feature.bg})` }}
          >
            <div className="overlay"></div>
            <p>{feature.icon} {feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PsychiatristDashboard;
