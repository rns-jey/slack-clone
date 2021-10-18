import './Home.css'
import React, { useEffect, useState } from "react";
import Header from '../../Components/Header/Header'
import SideNav from '../../Components/Workspace/SideNav'
import ChatContainer from '../../Components/Workspace/ChatContainer';
import { Redirect, useHistory } from "react-router"
import { getChannels, getRecents } from '../../API/API';

function Home() {
  const history = useHistory();
  const [userChannels, setChannels] = useState([]);
  const [recentInteracted, setRecents] = useState([]);
  const [renderHandler, toggleRender] = useState(true)
  
  useEffect(() => {
    if (localStorage.getItem('uid')) {
      history.push("/home");
    } else {
      history.push("/login");
    }
  })

  const refreshSideNav = () => {
    console.log("add channel toggle")
    toggleRender(!renderHandler);
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
  }, [renderHandler])

  return (
    <div className="Main">
      <Header />  
      <div className="workspace">
        <SideNav 
          Channels={userChannels}
          Recents={recentInteracted}
          RefreshSideNav={refreshSideNav}
        />
        <ChatContainer />
      </div>
    </div> 
  );
}

export default Home;