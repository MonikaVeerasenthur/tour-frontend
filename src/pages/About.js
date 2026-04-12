import React from "react";
import Logo from "../assets/logo.JPG"; 
import "../App.css";

export default function AboutUs() {
  return (
    <div className="aboutus-outer">
      {/* Decorative animated bubbles */}
      <div className="aboutus-bubble aboutus-bubble-a"></div>
      <div className="aboutus-bubble aboutus-bubble-b"></div>

      {/* Main content split */}
      <div className="aboutus-main">
        {/* Logo left */}
        <div className="aboutus-logo-box">
          <img src={Logo} alt="Brand Logo" />
        </div>
        {/* Content right */}
        <div className="aboutus-info-box">
          <h1 className="aboutus-heading">
            About Us
          </h1>
          <p className="aboutus-desc">
            <span className="aboutus-brand">Vibe Miles Tour</span> inspires wanderlust with joyful journeys and color-packed escapes. <br /><br />
            Our enthusiastic travel team crafts unforgettable adventures in Malaysia, Thailand, Srilanka, Andaman, Goa, and more—blending expertise, personal care, and smooth bookings. From golden beaches to bustling cities, let us paint your next trip. <br /><br />
            Your stories, our mission. Let’s create vibrant memories—together!
          </p>
        </div>
      </div>
    </div>
  );
}