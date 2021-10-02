import './Home.css'
import React from "react";
import RedirectToLogin from "../Components/Router/RedirectToLogin";
import Header from '../Components/Header/Header'
import Sidebar from '../Components/Sidebar/Sidebar';
// import Chat from '../Components/Chat/Chat';
import People from '../Components/Peopleanduser/People'

function Home() {
  return (
    <div className="Main">
      <RedirectToLogin />
      <Header />
      <Sidebar />
      <People />
      {/* <Chat /> */}
    </div>
  );
}

export default Home;