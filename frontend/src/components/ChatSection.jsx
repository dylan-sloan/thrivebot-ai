import React from "react";

function ChatSection() {
  return (
    <div className="chat-section">
      <div className="message-area">Area for current message</div>
      <input type="text" placeholder="Enter something here" className="input-box" />
      <div className="navigation-buttons">
        <button>Settings</button>
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
}

export default ChatSection;
