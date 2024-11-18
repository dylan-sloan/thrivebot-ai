import React from "react";
import ChatSection from "./ChatSection";
import RobotSection from "./RobotSection";

function MainContainer() {
  return (
    <div className="main-container">
      <ChatSection />
      <RobotSection />
    </div>
  );
}

export default MainContainer;
