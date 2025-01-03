import React from "react";
import ThriveBotImage from "../images/ThriveBot.png";
import { useAppDispatch, useAppSelector } from '../app/hooks.ts';

function RobotSection() {
  const userMessageText = useAppSelector((state) => {
    const messages = state.userMessage;
    return messages.length > 0 ? messages[messages.length - 1].text : "No messages yet.";
  });

  return (
    <div className="robot-section">
      <div className="speech-bubble">{userMessageText}</div>
      <img src={ThriveBotImage} alt="Robot" className="robot-image" />
    </div>
  );
}

export default RobotSection;
