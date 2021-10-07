import './ChatMsg.css'
import TextareaAutosize from 'react-textarea-autosize';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import configAPI from '../assets/config';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import AddUsers from '../AddUsers/AddUsers';

export default function ChatMsg({ type, title, convoID }) {
  const [AUModal, setAUModal] = useState(true)
  const [chat, setChat] = useState([])
  const [message, setMessage] = useState("")
  const config = configAPI();

  function reverseChat(arr) {
    let chatMsgs = []

    while (arr.length > 0) {
      chatMsgs.push(arr.pop())
    }
    
    return chatMsgs;
  }

  useEffect(() => {
    let isMounted = true; 
    const baseURL = `http://206.189.91.54//api/v1/messages?receiver_class=${type}&receiver_id=${convoID}`;

    axios
      .get(baseURL, config)
      .then((response) => {
        if (isMounted) {
          setChat(reverseChat(response.data.data))
        }
      })
      .catch((err) => {
        console.log(err)
      });

    return () => { isMounted = false }
  });

  function sendMsg() {
    const baseURL = "http://206.189.91.54//api/v1/messages";

    const data = {
      receiver_id: convoID, 
      receiver_class: type, 
      body: message
    }

    axios
      .post(baseURL, data, config)
      .then((response) => {
        setMessage("")
      })
      .catch((err) => {
        console.log(err, `sendmsg`)
      });
  }

  function handleKeyPress(e) {
    const { key } = e;

    if (key === "Enter") {
      sendMsg()
    }
  }

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>{title}</h2>
        <button className="adduserBtn"
        onClick={()=> setAUModal(true)}>
          <GroupAddIcon className="adduserIcon"/>
          </button>
      </div>
      {AUModal && <AddUsers isAUModalopen={setAUModal} channelID={convoID} channelTitle={title}/>}
      <div className="chat-body">
        {chat.map(({ id, body, sender }) => (
          <ChatBubble msgContent={body} sender={sender} />
        ))}
      </div>
      <div className="chat-box-container">
        <div className="chat-box">
          <form>
            <TextareaAutosize 
            onChange={e => setMessage(e.target.value)} 
            value={message} 
            onKeyPress={e => handleKeyPress(e)} />
          </form>
        </div>
      </div>
    </div>
  )
}

function ChatBubble({ msgContent, sender }) {
  const user = (localStorage.getItem('uid') ? localStorage.getItem('uid') : '')
  const { email } = sender;
  let bubbleClass = user === email ? "bubble you" : "bubble";

  return(
    <div className={bubbleClass}>
      <div className="msg-wrap">
        <div className="msg-sender">{email}</div>
        <div className="msg-content">{msgContent}</div>
      </div>
    </div>
  )
}