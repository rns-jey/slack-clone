import React from "react";
import Header from '../Components/Header/Header'
import Sidebar from '../Components/Sidebar/Sidebar';
import Chat from '../Components/Chat/Chat';

function Home() {
  return (
    <div className="Main">
      <Header />
      <Sidebar />
      <Chat />
    </div>
  );
}

export default Home;