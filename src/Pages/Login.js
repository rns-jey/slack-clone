import LoginForm from "../Components/Login/LoginForm";
import React, {useState} from "react";
import Register from "./Register";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default function LogUser(){
  const adminUser = {
      email:"admin@admin.a",
      password: "admin123",  
  }

  const [user,SetUser] = useState({name:"", email:""});
  const [error, SetError] = useState("");

  function Login(details) {
      console.log(details);
      if (details.email == adminUser.email && details.password == adminUser.password){
        console.log(`we in`)
        SetUser({
          name: details.name,
          email: details.email
        });
      } else {
        console.log(`details dont match`);
        SetError("details dont match");
      }
  }

  function Logout() {
      SetUser({name:"", email:""});
  }

  function handleCreateUserbtn() {
    return(
      <>
        <Router>
          <Switch>
            <Route exact path="/CreateUser" component={CreateUser} />
          </Switch>
        </Router>
      </>
    )
  }

  return (
    <>
      <div className="App">
         {(user.email !="") ? (
             <div className="welcome">
                 <h2>Welcome, 
                   <span>{user.name}</span>
                </h2>
                 <button onClick={Logout}>LogOut</button>
             </div>
         ) : (
          <LoginForm Login={Login} error={error}/>
         )}
          <div className="linktoCreateUser">
              <span>New to Slack?</span>
              <a href="./register">Create an account</a>
          </div>
      </div>
    </>
      );
}

