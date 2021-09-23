import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from  './Pages/Home';
import Login from  './Pages/Login';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
    <div className="App">
      <Sidebar/>
    </div>
  );
}

export default App;

