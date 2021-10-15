import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { sendMessage } from "../../API/API";

export default function ChatInput() {
  const [message, setMessage] = useState("");

  const chatConfig = {
    receiverID: id,
    receiverType: type,
    body: message,
    headers: {
      token: localStorage.getItem("at"),
      client: localStorage.getItem("client"),
      expiry: localStorage.getItem("expiry"),
      uid: localStorage.getItem("uid"),
    },
  };

  function handleKeyPress(e) {
    const { key } = e;

    if (key === "Enter") {
      sendMessage(chatConfig)
        .then((res) => {
          setMessage("");
        })
        .catch((err) => console.log("Error Sending Message: ", err));
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