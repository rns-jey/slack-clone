import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

export default function ChatInput() {
  const [message, setMessage] = useState("");

  function handleKeyPress(e) {
    const { key } = e;

    if (key === "Enter") {
      
    }
  }

  return (
    <div className="chat-box-container">
      <div className="chat-box">
        <form>
          
          <TextareaAutosize
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            onKeyPress={(e) => handleKeyPress(e)}
          />
        </form>
      </div>
    </div>
  )
}