import React from "react";
import { useState } from "react";

function ChatSection() {
  const [message, setMessage] = useState('Area for next message');
  const [input, setInput] = useState('')

  function _handleInputChange(event){ //Allows for real time changes in input
    setInput(event.target.value);
  }

  function _handleKeyDown(event){ //Sets the message section equal to the current input and clears input
    if(event.key === 'Enter'){
      setMessage(input);
      setInput('Enter your message here');
    }
  }

  return (
    <div className="chat-section">
      <div className="message-area">{message}</div>
      <input type="text" placeholder='Enter your message here' value={input} className="input-box" onChange={_handleInputChange} onKeyDown={_handleKeyDown} />
      <div className="navigation-buttons">
        <button>Settings</button>
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
}

export default ChatSection;
