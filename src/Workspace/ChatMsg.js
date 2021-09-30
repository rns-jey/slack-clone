import './ChatMsg.css'
import TextareaAutosize from 'react-textarea-autosize';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ChatMsg({ type, title, convoID }) {
  const [chat, setChat] = useState([])

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
    const config = {
      headers : {
        "access-token": "kDumw8TgSqAch9IZi1AK5Q",
        client: "4QtfzQRef-071r-TyjFR2w",
        expiry: "1627305480",
        uid: "postman@test.com"
      }
    }

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