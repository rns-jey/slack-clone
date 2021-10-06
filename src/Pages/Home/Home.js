import './Home.css'
import React from "react";
import Header from '../../Components/Header/Header'
import Workspace from '../../Components/Workspace/Workspace'
import { Redirect } from "react-router"

function Home() {
  const user = (localStorage.getItem('uid') ? localStorage.getItem('uid') : '')

  return (
    <>
      {
        user.length > 0 ?
        <div className="Main">
          <Header />  
          <Workspace />
        </div> :
        <Redirect to="/login" />
      }
    </>
  );
}

export default Home;