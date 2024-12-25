import React from "react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from '../app/hooks.ts';
import { increment} from '../slices/counter-slice.ts';
import{ addMessage, removeMessage } from '../slices/userMessage-slice.ts'

function ChatSection() {
  const [messages, setMessages] = useState([]); //Handle message display within ReactDOM
  const [input, setInput] = useState('');

  const count = useAppSelector((state) => state.counter.value); //These two line allow for redux to store values in global variables
  const dispatch = useAppDispatch();

  function _handleInputChange(event){ //Allows for real time changes in input
    setInput(event.target.value);
  }

  function _handleKeyDown(event){ //Sets the message section equal to the current input and clears input
    if(event.key === 'Enter' && input.trim() !== ''){
      dispatch(addMessage(input));
      setMessages(prevMessages => [...prevMessages, input]);
      setInput(''); // reset input
    }
  }

  function _handleCounter(event){
    dispatch(increment());
  }

  return (
    <div className="chat-section">
      <div className="message-area">
        {messages.map((msg, msg_id) => (
        <p key={msg_id}>{msg}</p>
      ))}
      </div>
      <input type="text" placeholder='Enter your message here' value={input} className="input-box" onChange={_handleInputChange} onKeyDown={_handleKeyDown} />
      <div className="navigation-buttons">
        <button>Settings</button>
        <button onClick={_handleCounter}>Count is: {count}</button>
        <div className="prev-next-buttons">
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
}

export default ChatSection;
