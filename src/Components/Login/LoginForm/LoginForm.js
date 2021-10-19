import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import "./loginForm.css";
import SideModule from '../../assets/sideModule';
import { Link } from "react-router-dom";
import configAPI from '../../assets/config';

export default function LoginForm() {
  const [email, setEmail] = useState('postman@test.com')
  const [password, setPassword] = useState('test123456')
  const [logErr, setErr] = useState(null)
  const history = useHistory();
  const baseURL = "http://206.189.91.54//api/v1/auth/sign_in";

  //Error will return to null after 8 seconds
  useEffect(() => {
    setTimeout(function () {
      setErr(prevErr => null)
    }, 8000)
  }, [logErr == true])

  //on submit, if success all headers info are place at localStorage else show Error
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email: email, password: password }

    axios
      .post(baseURL, data)
      .then((resp) => {
        localStorage.setItem('at', resp.headers["access-token"]);
        localStorage.setItem('client', resp.headers["client"]);
        localStorage.setItem('expiry', resp.headers["expiry"]);
        localStorage.setItem('uid', resp.headers["uid"]);
        setErr(prevErr => null)
        configAPI();
        history.push("/");
      })
      .catch((err) => {
        setErr(prevErr => "Invalid username or password!")
      });
  }

  return (
    <div className="loginRegisPage">
      <SideModule isThisLogIn={true} />
      <div className="LoginCard">
        <form onSubmit={handleSubmit} className='FormLogin'>
          {logErr ? (<div className="error">{logErr}</div>) : ""}
          <div className="form-inner">
            <div className="form-group">
              <input
                className="form-input w-100"
                type="text"
                name="email"
                id="email"
                placeholder="name@work-email.com"
                onChange={e => setEmail(e.target.value)} value={email}
              />
            </div>
            <div className="form-group">
              <input
                className="form-input w-100"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)} value={password}
              />
            </div>
            <input className="loginRegisbtn" type="submit" value="Sign in" />
          </div>
          <hr className="line" />
          <div className="linktoLogInorRegister">
            <span>New to Slack? </span>
            <Link to="/register" className="toLogorRegislink">Create an account</Link>
          </div>
        </form>
      </div>
    </div>
  )
};

