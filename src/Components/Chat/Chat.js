import React, {useState, useEffect} from 'react';
import "./Chat.css";
import { BrowserRouter as Router } from "react-router-dom";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"

function Chat() {
  return (
    <Router>
      <div className="chat_container">
        <div className="header">
        <div className="header_left">
          <h4 className="channelName"><strong>#room-name</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="header_right">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
        </div>
      </div>
    </Router>
  );
}

export default Chat;