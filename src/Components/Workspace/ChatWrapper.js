import { useParams } from "react-router";

export default function ChatWrapper() {
  const { type, id } = useParams();
  
  return (
    <div className="chat-container">
      <div className="chat-box-container">
        <div className="chat-box">
          <form>
            
          </form>
        </div>
      </div>
    </div>
  );
}