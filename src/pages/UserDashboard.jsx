import React, { useState } from "react";
import "../styles/Dashboard.css";
import { FaVideo, FaMicrophone, FaComments } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const features = [
  { text: "View Reports", icon: "📄", bg: "reports.jpg" },
  { text: "Call & Recordings", icon: "📞", bg: "calls.jpg" },
  { text: "Book Appointment", icon: "📅", bg: "appointment.jpg" },
  { text: "Play Games and Tests", icon: "🎮", bg: "games.jpg" },
  { text: "Make Friends for Support", icon: "👫", bg: "friends.jpg" },
  { text: "View Medications", icon: "💊", bg: "medications.jpg" },
  { text: "Virtual Reality", icon: "🕶️", bg: "vr.jpg" }
];

const UserDashboard = () => {
  const [showCallPopup, setShowCallPopup] = useState(false);
  const [showAppointmentPopup, setShowAppointmentPopup] = useState(false);
  const [showVRPopup, setShowVRPopup] = useState(false);
  const [showFeaturePopup, setShowFeaturePopup] = useState(null);
  const navigate = useNavigate(); 
  
  const handleFeatureClick = (feature) => {
    
    if (feature.text === "Call & Recordings") {
      setShowCallPopup(true);
    } else if (feature.text === "Book Appointment") {
      setShowAppointmentPopup(true);
    } else if (feature.text === "Virtual Reality") {
      setShowVRPopup(true);
    } else if (feature.text === "Make Friends for Support") {
      setShowFeaturePopup("friends");
    }else if (feature.text === "Play Games and Tests") {
      navigate("/games-tests");  
    }
  };

  return (
    <div className="dashboard-container">
      <h2>User Dashboard</h2>
      <textarea className="problem-input" placeholder="Explain your problem"></textarea>
      <button className="submit-button">Submit</button>
      <h3>Features:</h3>
      <div className="features-grid">
        {features.map((feature, index) => (
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
          <button onClick={() => alert("Starting Live Voice Call...")}>Live Voice</button>
          <button onClick={() => alert("Starting Live Video Call...")}>Live Video</button>
          <button onClick={() => alert("Viewing Recordings...")}>View Recordings</button>
          <button onClick={() => setShowCallPopup(false)}>Close</button>
        </div>
      )}

      {/* Book Appointment Popup */}
      {showAppointmentPopup && (
        <div className="popup">
          <h3>Book an Appointment</h3>
          <button className="psychologist" onClick={() => alert("Appointment booked with a Psychologist")}>Psychologist</button>
          <button className="psychiatrist" onClick={() => alert("Appointment booked with a Psychiatrist")}>Psychiatrist</button>
          <button className="vr-psychologist" onClick={() => alert("VR Appointment booked with a Psychologist")}>VR Psychologist</button>
          <button className="vr-psychiatrist" onClick={() => alert("VR Appointment booked with a Psychiatrist")}>VR Psychiatrist</button>
          <button onClick={() => setShowAppointmentPopup(false)}>Close</button>
        </div>
      )}

      {/* Virtual Reality Popup */}
      {showVRPopup && (
        <div className="popup">
          <h3>Virtual Reality Options</h3>
          <button onClick={() => alert("Viewing Recordings in VR Mode...")}>View Recording</button>
          <button onClick={() => setShowVRPopup(false)}>Close</button>
        </div>
      )}

      {/* Make Friends for Support Popup */}
      {showFeaturePopup === "friends" && (
        <div className="popup">
          <h3>Connect with Friends</h3>
          <button className="icon-button" onClick={() => alert("Starting Video Call...")}> 
            <FaVideo className="icon video" /> Video Call
          </button>
          <button className="icon-button" onClick={() => alert("Starting Voice Call...")}> 
            <FaMicrophone className="icon mic" /> Voice Call
          </button>
          <button className="icon-button" onClick={() => alert("Opening Chat...")}> 
            <FaComments className="icon chat" /> Chat
          </button>
          <button onClick={() => setShowFeaturePopup(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
