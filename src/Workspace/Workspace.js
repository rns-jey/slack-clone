import './Workspace.css'
import SideNav from './SideNav';
import ChatBody from './ChatBody';
import React, { useEffect } from 'react';
import axios from 'axios';

export default function Workspace() {

  function getChannels() {
    const baseURL = "http://206.189.91.54//api/v1/channels";
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
        console.log(response.data.data)
      })
      .catch((err) => {
        console.log(err)
      });
  }

  useEffect(() => {
    getChannels();
  }, []);

  return (
    <div className="workspace">
      <SideNav />
      <ChatBody />
    </div>
  )
}