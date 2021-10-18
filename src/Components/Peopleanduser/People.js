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
import avatar from "../assets/avatar.png"

//get keys from localstorage
export default function GetUsers (props) {
  const [users,setUsers] = useState([]);
  const [filteredUser, filterUser] = useState(users);
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

  //filter database to search users upon typing on searchbox
 const handleSearch = (event) => {
   let value = event.target.value.toLowerCase();
   let result = [];
   result = users.filter((data) => {
     return data.email.search(value) != -1;
   });

   filterUser(result);  
 }
  //access to database and lets data results appear
  useEffect(() => {
    axios
    .get(baseURL, config)
    .then((res) => {
      setUsers(res.data.data);
      filterUser(res.data.data);
    })
    .catch((err) => {
      console.log(err)  
    });
  }, []);

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
                    className="people_search_input"
                    placeholder="Search by name, role or team" onChange={(event) =>handleSearch(event)}>
                    </input>
                </div>
                <div className="people_users">
                <div className="users_container">
                {filteredUser.slice(0,16).map(({ email }) => (
                      <div className="users">
                      <img src={avatar} id="avatar"/>
                      <div className="email">{email}
                      </div>
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </Router>
    );
}