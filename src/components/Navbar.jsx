import React from "react";
import logo from "../logo.jpg"; 

const Navbar = () => {
  return (
    <nav style={{ 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center", 
      padding: "1rem", 
      backgroundColor: "#0a112e", 
      color: "white",
      position: "relative"
    }}>
      {/* Empty div for spacing (Pushes center text) */}
      <div style={{ flex: 1 }}></div>
      
      {/* Centered Text */}
      <div style={{ 
        position: "absolute", 
        left: "50%", 
        transform: "translateX(-50%)", 
        fontSize: "1.5rem", 
        fontWeight: "bold" 
      }}>
        COGNIVIVE
      </div>

      {/* Logo at Right Corner */}
      <div style={{ flex: 1, textAlign: "right" }}>
        <img src={logo} alt="Logo" style={{ height: "60px" }} />
      </div>
    </nav>
  );
};

export default Navbar;
