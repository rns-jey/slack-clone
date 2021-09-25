import React from "react";
import RedirectToLogin from "../Components/Router/RedirectToLogin";
import Header from '../Components/Header/Header'
import Sidebar from '../Components/Sidebar/Sidebar';
import Chat from '../Components/Chat/Chat';

function Home() {
  return (
    <div className="Main">
      <RedirectToLogin />
      <Header />
      <Sidebar/>
      <Chat />
    </div>
  );
}

export default Home;