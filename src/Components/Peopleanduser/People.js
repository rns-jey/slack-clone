import React, { useEffect, useState } from "react";
import axios from "axios";
import "./People.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search"

export default function GetUsers () {
  const [users,setUsers] = useState([]);
  const userExpiry = localStorage.getItem('expiry');
  const userUID = localStorage.getItem('uid');
  const userAt = localStorage.getItem('at');
  const userClient = localStorage.getItem('client');
  const baseURL = "http://206.189.91.54//api/v1/users";
  const config = {
    headers : {
      "access-token": userAt,
      client: userClient,
      expiry: userExpiry,
      uid: userUID
    }
  }
  
  useEffect(() => {
    axios
    .get(baseURL, config)
    .then((res) => {
      setUsers(res.data.data);
    })
    .catch((err) => {
      console.log(err)  
    });
  })
  
    return (
        <Router>
            <div className="people_container">
                <div className="people_header">
                    <h1>People</h1>
                </div>
                <div className="people_subheader">
                    <h3>Members</h3>
                </div>
                <div className="people_search">
                    <SearchIcon />
                    <input type="text"
                    placeholder="Search by name, role or team"></input>
                </div>
                <div className="people_users">
                {users.map(({ email }) => (
                    <div>{email}</div>
                    ))}
                </div>
            </div>
        </Router>
    );
}