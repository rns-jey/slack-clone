import './App.css';
import React from "react";
import Header from './Components/Header/Header';
import Workspace from './Workspace/Workspace';

function App() {
  return (
    <div className="Main">
      <Header />
      <Workspace />
    </div>
  );
}

export default App;
