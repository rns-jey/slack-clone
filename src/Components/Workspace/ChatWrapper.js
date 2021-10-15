import { useParams } from "react-router";
import ChatContent from "./ChatContent";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";

export default function ChatWrapper() {
  const { type, id } = useParams();

  return (
    <div className="chat-container">
      <ChatHeader id={id} type={type} />
      <ChatContent id={id} type={type} />
      <ChatInput id={id} type={type} />
    </div>
  );
}