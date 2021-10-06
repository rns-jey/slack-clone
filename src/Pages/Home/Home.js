import './Home.css'
import React from "react";
import Header from '../../Components/Header/Header'
import Workspace from '../../Components/Workspace/Workspace'
import PageRouting from '../../Components/Router/PageRouting'

function Home() {
  return (
    <PageRouting className="Main">
      <Header />  
      <Workspace />
    </PageRouting>
  );
}

export default Home;