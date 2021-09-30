import './ChatMsg.css'
import TextareaAutosize from 'react-textarea-autosize';

export default function ChatMsg({ title }) {
  return (
    <div className="chat-container">
      <div className="chat-header">{title}</div>
      <div className="chat-body">
        
      </div>
      <div className="chat-box-container">
        <div className="chat-box">
          <TextareaAutosize />
        </div>
      </div>
    </div>
  )
}