import './Home.css'
import React, { useEffect } from "react";
import Header from '../../Components/Header/Header'
import Workspace from '../../Components/Workspace/Workspace'
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
        
      </div>
    </div> 
  );
}

export default Home;