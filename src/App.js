import './App.css';
import React from "react";
import { Redirect, Route, Switch } from 'react-router';
import Register from './Pages/Register'
import Login from './Pages/Login'
import Home from './Pages/Home/Home';

function App() {
  const user = (localStorage.getItem('uid') ? localStorage.getItem('uid') : '')

  return (
    <div className="App">
      <Switch>
        <Route path="/register">
          <Register User={user} />
        </Route>
        <Route path="/login">
          <Login User={user} />
        </Route>
        <Route path="/">
        { 
          user.length > 0
          ? <Home /> 
          : <Redirect to="/login" />
        }
        </Route>
      </Switch>
    </div>
  );
}

export default App;
