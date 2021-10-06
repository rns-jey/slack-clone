import './Home.css'
import React from "react";
import Header from '../../Components/Header/Header'
import Workspace from '../../Components/Workspace/Workspace'
import { Redirect } from "react-router"

function Home() {
  return (
    <div className="Main">
      <Header />  
      <Workspace />
    </div>
  );
}

export default Home;