import { useEffect } from "react"
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
          
        }
      })
      .catch((err) => console.log(err));

    return () => {
      isMounted = false;
    };
  });

  return (
    <div className="chat-body">
      
    </div>
  )
}