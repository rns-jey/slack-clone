import React, {useState, useEffect} from 'react';
import "./Sidebar.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment"
import SidebarOption from './SidebarOption';
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import { useEffect, useState } from "react";

export default function Sidebar() {
    return (
        <Router>
        <div className="Sidebar">
            <div className="sidebar_header">
                <div className="sidebar_info">
                    <h2>Avion School</h2>
                </div>
                <CreateIcon />
            </div>
            <div className="sidebar_options">
                <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
                <SidebarOption Icon={InboxIcon} title="Mentions & Reactions"/>
                <SidebarOption Icon={DraftsIcon} title="Saved Items"/>
                <SidebarOption Icon={PeopleAltIcon} title="People & user groups"/>
                <SidebarOption Icon={FileCopyIcon} title="File browser"/>
                <SidebarOption Icon={ExpandLessIcon} title="Show less"/>
                <SidebarOption Icon={ExpandMoreIcon} title="Channels"/>
                <SidebarOption Icon={AddIcon} title="Add Channels"/>
                <SidebarOption Icon={ExpandMoreIcon} title="Direct Messages"/>
            </div>
        </div>
        </Router>
    );
}