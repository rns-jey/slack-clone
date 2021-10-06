import './App.css';
import React from "react";
import Header from './Components/Header/Header';
import Workspace from './Components/Workspace/Workspace';
import PageRoute from './Components/Router/PageRouter'

function App() {
  return (
    <div className="Main">
      <Header />  
      <Workspace />
    </div>
  );
}

export default App;
