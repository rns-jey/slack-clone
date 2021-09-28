import React from "react";
import axios from 'axios';
import "./People.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search"

export default function getUsersChannel () {
    const baseURL = "http://206.189.91.54//api/v1/channels";
  const config = {
    headers : {
      "access-token": "haXWCLr264GN4T2F5qSSug",
      client: "_690jUPp79Ik24mMmKlQJA",
      expiry: "haXWCLr264GN4T2F5qSSug",
      uid: "user1@example.com"
    }
  }

  axios
    .get(baseURL, config)
    .then((response) => {
      console.log(response)
    })
    .catch((err) => {
      console.log(err)  
    });

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
                </div>
            </div>
        </Router>
    );
}