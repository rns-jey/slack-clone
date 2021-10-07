import './App.css';
import React from "react";
import Header from './Components/Header/Header';
import Workspace from './Workspace/Workspace';
import PageRoute from './Components/Router/PageRouter'
import People from './Components/Peopleanduser/People'

function App() {
  return (
    <PageRoute/>
    // <div className="Main">
    //   <Header />  
    //   <Workspace />
    //   {/* <People /> */}
    // </div>
  );
}

export default App;
