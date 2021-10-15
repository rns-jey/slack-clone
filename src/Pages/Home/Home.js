import './Home.css'
import React, { useEffect } from "react";
import Header from '../../Components/Header/Header'
import SideNav from '../../Components/Workspace/SideNav'
import { Redirect, useHistory } from "react-router"

function Home() {
  const history = useHistory();
  
  useEffect(() => {
    if (localStorage.getItem('uid')) {
      history.push("/home");
    } else {
      history.push("/login");
    }
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