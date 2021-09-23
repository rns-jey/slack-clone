import React from 'react';
import "./Sidebar.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Sidebar() {
    return (
        <Router>
        <div className="Sidebar">
           <nav>
               <ul>
                   <li>
                       <Link to="/channels">Channels</Link>
                   </li>
                   <li>
                       <Link to="/addchannel">Add Channels</Link>
                   </li>
                   <li>
                       <Link to="/directmessages">Direct Messages</Link>
                   </li>
               </ul>
           </nav>
           <Switch>
               <Route path="/directmessages">
                   <DirectMessages />
               <Route path="/addchannel">
                   <AddChannel />
               </Route>
               <Route path="/channels">
                   <Channels />
               </Route>
           </Switch>
        </div>
        </Router>
    );
}
