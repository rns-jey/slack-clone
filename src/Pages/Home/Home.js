import './Home.css'
import React, { useEffect, useState } from "react";
import Header from '../../Components/Header/Header'
import SideNav from '../../Components/Workspace/SideNav'
import { Redirect, useHistory } from "react-router"

function Home() {
  const history = useHistory();
  const [userChannels, setChannels] = useState([]);
  
  useEffect(() => {
    if (localStorage.getItem('uid')) {
      history.push("/home");
    } else {
      history.push("/login");
    }
  })

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
  })

  return (
    <div className="Main">
      <Header />  
      <div className="workspace">
        <SideNav />
      </div>
    </div> 
  );
}

export default Home;