import React from "react";
import ThriveBotImage from "../images/ThriveBot.png";

function RobotSection() {
  return (
    <div className="robot-section">
      <div className="speech-bubble">Hello, how may I help you?</div>
      <img src={ThriveBotImage} alt="Robot" className="robot-image" />
    </div>
  );
}

export default RobotSection;
