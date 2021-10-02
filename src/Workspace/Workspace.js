import './Workspace.css'
import SideNav from './SideNav';
import ChatBody from './ChatBody';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideNavOpt from './SideNavOpt';

export default function Workspace() {
  const [arrChannels, setChannels] = useState([])
  const [arrRecent, setRecent] = useState([])
  const userExpiry = localStorage.getItem('expiry');
  const userUID = localStorage.getItem('uid');
  const userAt = localStorage.getItem('at');
  const userClient = localStorage.getItem('client');
  const config = {
    headers : {
      "access-token": `${userAt}`,
      client: `${userClient}`,
      expiry: `${userExpiry}`,
      uid: `${userUID}`
    }
  }
  function getChannels() {
    const baseURL = "http://206.189.91.54//api/v1/channels";

    axios
      .get(baseURL, config)
      .then((response) => {
        setChannels(response.data.data)
      })
      .catch((err) => {
        console.log(err)
      });
  }

  function removeRedundant(users) {
    let arr = [];
    let newUsers = [];
  
    for (const user of users) {
      let found = arr.find(uid => user.uid === uid)
  
      if (!found) {
        arr.push(user.uid)
        newUsers.push(user)
      }
    }
  
    return newUsers;
  }

  function getRecent() {
    const baseURL = "http://206.189.91.54//api/v1/users/recent";

    axios
      .get(baseURL, config)
      .then((response) => {
        setRecent(removeRedundant(response.data.data))
      })
      .catch((err) => {
        console.log(err)
      });
  }

  useEffect(() => {
    getChannels();
    getRecent()
  }, []);

  return (
    <div className="workspace">
      <SideNav>
        <SideNavOpt Channels={arrChannels} Recents={arrRecent} />
      </SideNav>
      <ChatBody Channels={arrChannels} Recents={arrRecent} />
    </div>
  )
}