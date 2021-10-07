import './Home.css'
import React from "react";
import Header from '../../Components/Header/Header'
import Workspace from '../../Components/Workspace/Workspace'
import { Redirect } from "react-router"

function Home({ User }) {
  return (
    <>
      {
        User.length > 0 ?
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