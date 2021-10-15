import TextareaAutosize from "react-textarea-autosize";

export default function ChatInput() {
  return (
    <div className="chat-box-container">
      <div className="chat-box">
        <form>
          <TextareaAutosize />
        </form>
      </div>
    </div>
  )
}