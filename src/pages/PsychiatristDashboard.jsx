import React, {useState} from "react";
import "../styles/Dashboard.css";

const psychiatristFeatures = [
  { text: "View Problem Statements", icon: "📝", bg: "problems.jpg" },
  { text: "Call & Recordings", icon: "📞", bg: "calls.jpg" },
  { text: "Appointment Requests", icon: "📅", bg: "appointments.jpg" },
  { text: "View Game & Test Results", icon: "🎮", bg: "tests.jpg" },
  { text: "Prescribe Medication", icon: "💊", bg: "medications.jpg" },
];

const PsychiatristDashboard = () => {
  const [showCallPopup, setShowCallPopup] = useState(false);

  const handleFeatureClick = (feature) => {
    if (feature.text === "Call & Recordings") {
      setShowCallPopup(true);
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Psychologist Dashboard</h2>
      <button className="submit-button">Submit Reports</button>
      <h3>Features:</h3>
      <div className="features-grid">
        {psychiatristFeatures.map((feature, index) => (
          <div
            key={index}
            className="feature-card"
            style={{ backgroundImage: `url(/images/${feature.bg})` }}
            onClick={() => handleFeatureClick(feature)}
          >
            <div className="overlay"></div>
            <p>{feature.icon} {feature.text}</p>
          </div>
        ))}
      </div>

      {/* Call & Recordings Popup */}
      {showCallPopup && (
        <div className="popup">
          <h3>Choose Call Type</h3>
          <button onClick={() => window.open("https://meet.google.com/nag-euji-iey?authuser=0", "_blank")}>
            Live Call
          </button>
          <button onClick={() => alert("Viewing Recordings...")}>View Recordings</button>
          <button onClick={() => setShowCallPopup(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default PsychiatristDashboard;
