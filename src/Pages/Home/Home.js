import './Home.css'
import React, { useEffect, useState } from "react";
import Header from '../../Components/Header/Header'
import SideNav from '../../Components/Workspace/SideNav'
import ChatContainer from '../../Components/Workspace/ChatContainer';
import { Redirect, useHistory } from "react-router"
import { getAllUsers, getChannels, getRecents } from '../../API/API';
import { FaGalacticSenate } from 'react-icons/fa';

function Home() {
  const history = useHistory();
  const [userChannels, setChannels] = useState([]);
  const [recentInteracted, setRecents] = useState([]);
  const [renderHandler, toggleRender] = useState(true);
  const [newInteraction, toggleInteraction] = useState(false);
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    if (localStorage.getItem('uid')) {
      history.push("/home");
    } else {
      history.push("/login");
    }
  },[])

  const refreshSideNav = () => {
    console.log("Toggle side nav refresh")
    toggleRender(!renderHandler);
  };

  const toggleNewInteraction = () => {
    console.log("Toggle new user interaction")
    toggleInteraction(!newInteraction);
  };

  useEffect(() => {
    const headers = {
      token: localStorage.getItem('at'),
      client: localStorage.getItem('client'),
      expiry: localStorage.getItem('expiry'),
      uid: localStorage.getItem('uid'),
    };

    getChannels(headers)
      .then((data) => {
        setChannels(data);
      })
      .catch((err) => console.log("Error :", err));
    
    getRecents(headers)
      .then((data) => setRecents(data))
      .catch((err) => console.log("Error :", err));
    
    getAllUsers(headers)
      .then((data) => {
        setUsers(data)
      });
  }, [renderHandler])

  return (
    <div className="Main">
      <Header
        Users={users}
        ToggleNewInteraction={toggleNewInteraction}
      />  
      <div className="workspace">
        <SideNav 
          Channels={userChannels}
          Recents={recentInteracted}
          RefreshSideNav={refreshSideNav}
        />
        <ChatContainer
          Users={users}
          Recents={recentInteracted}
          RefreshSideNav={refreshSideNav}
        />
      </div>
    </div> 
  );
}

export default Home;