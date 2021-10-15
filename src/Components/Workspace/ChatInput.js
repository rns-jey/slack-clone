import TextareaAutosize from "react-textarea-autosize";

export default function ChatInput() {
  const [message, setMessage] = useState("");

  return (
    <div className="chat-box-container">
      <div className="chat-box">
        <form>
          <TextareaAutosize
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </form>
      </div>
    </div>
  )
}