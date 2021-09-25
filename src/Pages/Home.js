import React from "react";
import RedirectToLogin from "../Components/Router/RedirectToLogin";
import Header from '../Components/Header/Header'
import Sidebar from '../Components/Sidebar/Sidebar';

function Home() {
  return (
    <div className="Main">
      <RedirectToLogin />
      <Header />
      <Sidebar/>
    </div>
  );
}

export default Home;