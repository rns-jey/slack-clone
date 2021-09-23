import React from "react";
import Header from '../Components/Header/Header'
import Sidebar from '../Components/Sidebar/Sidebar';

function Home() {
  return (
    <div className="Main">
      <Header />
      <Sidebar/>
    </div>
  );
}

export default Home;