import { useEffect, useState } from "react"
import { getMessage } from "../../API/API";

export default function ChatContent({ id, type }) {
  const [chatMsgs, setMsgs] = useState([]);

  const chatConfig = {
    receiverID: id,
    receiverType: type,
    headers: {
      token: localStorage.getItem("at"),
      client: localStorage.getItem("client"),
      expiry: localStorage.getItem("expiry"),
      uid: localStorage.getItem("uid"),
    },
  };

  useEffect(() => {
    let isMounted = true;

    getMessage(chatConfig)
      .then((convo) => {
        if (isMounted) {
          if (convo.data.data.reverse() !== chatMsgs) {
            setMsgs(convo.data.data.reverse());  
          }
        }
      })
      .catch((err) => console.log(err));

    return () => {
      isMounted = false;
    };
  });

  return (
    <div className="chat-body">
      {chatMsgs.map(({ id, body, sender }) => (
        <ChatBubble key={id} msgContent={body} sender={sender} />
      ))}
    </div>
  )
}

function ChatBubble({ msgContent, sender }) {
  const user = localStorage.getItem("uid") ? localStorage.getItem("uid") : "";
  const { email } = sender;
  let bubbleClass = user === email ? "bubble you" : "bubble";

  return (
    <div className={bubbleClass}>
      <div className="msg-wrap">
        <div className="msg-sender">{email}</div>
        <div className="msg-content">{msgContent}</div>
      </div>
    </div>
  );
}