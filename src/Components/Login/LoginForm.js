import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import "./loginForm.css";
import SideModule from './sideModule';
import { Link } from "react-router-dom";
export default function LoginForm(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [logErr, setErr] = useState(null)
  const history = useHistory();

  const baseURL = "http://206.189.91.54//api/v1/auth/sign_in";

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {email: email, password: password}

    axios
      .post(baseURL, data)
      .then((resp) => {
        localStorage.setItem('at', resp.headers["access-token"]);
        localStorage.setItem('client', resp.headers["client"]);
        localStorage.setItem('expiry', resp.headers["expiry"]);
        localStorage.setItem('uid', resp.headers["uid"]);
        setErr(prevErr => null)
        history.push("/home");
      })
      .catch((err) => {
        setErr(prevErr => "Invalid username or password!")
      });
  }

  return (
    <div className="loginPage">
    <SideModule/>
    <div className="LoginCard">
    <form onSubmit={handleSubmit} className='FormLogin'>
      {logErr ? (<div className="error">{logErr}</div>) : ""}
      <div className="form-inner">
        <div className="form-group">
          <input
            className="forminput"
            type="text" 
            name="email" 
            id="email"
            placeholder="name@work-email.com"
            onChange={e => setEmail(e.target.value)} value={email}
          />
        </div>
        <div className="form-group">
          <input 
            className="forminput"
            type="password" 
            name="password"
            id="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)} value={password}
          />
        </div>
        <input className="loginbtn"type="submit" value="Sign in"/>
      </div>
      <hr className="line"/>
      <div className="linktoCreateUser">
          <span>New to Slack? </span>
          <Link to="/register" className="toRegisterlink">Create an account</Link>
      </div>
    </form>
    </div>
    </div>
  )
};

