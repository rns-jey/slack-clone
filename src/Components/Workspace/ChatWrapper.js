import { useParams } from "react-router";
import ChatHeader from "./ChatHeader";

export default function ChatWrapper() {
  const { type, id } = useParams();

  return (
    <div className="chat-container">
      <ChatHeader id={id} type={type} />
      <div className="chat-box-container">
        <div className="chat-box">
          <form>
            
          </form>
        </div>
      </div>
    </div>
  );
}