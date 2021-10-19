import './App.css';
import React from "react";
import { Redirect, Route, Switch } from 'react-router';
import Register from './Components/Register/RegisterPage/Register'
import Login from './Components/Login/Login'
import Home from './Components/Home/Homepage/Home';

function App() {
  const user = (localStorage.getItem('uid') ? localStorage.getItem('uid') : '')

  return (
    <div className="App">
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login">
          <Login User={user} />
        </Route>
        <Route path="/">
        { 
          localStorage.getItem('uid')
          ? <Home /> 
          : <Redirect to="/login" />
        }
        </Route>
      </Switch>
    </div>
  );
}

export default App;
