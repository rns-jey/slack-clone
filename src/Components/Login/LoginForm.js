import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

export default function LoginForm(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [logErr, setErr] = useState(null)

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
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {logErr ? (<div className="error">{logErr}</div>) : ""}
      <div className="form-inner">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="text" 
            name="email" 
            id="email"
            onChange={e => setEmail(e.target.value)} value={email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            name="password"
            id="password"
            onChange={e => setPassword(e.target.value)} value={password}
          />
        </div>
        <input type="submit" value="LOGIN"/>
      </div>
    </form>
  )
};

