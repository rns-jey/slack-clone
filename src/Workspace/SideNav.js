import './SideNav.css'
import SideNavOpt from './SideNavOpt';
import SidebarOption from '../Components/Sidebar/SidebarOption';
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import React, {useState} from 'react';
import CreateChannel from '../Components/addChannel/addChannel';

export default function SideNav(props) {
 const [toggle, setToggle] = useState(true)
 const [CCModal, setCCModal] = useState(false)
 const [subMenu, setSubMenu] = useState(false)

  return (
    <div className="sidebar">
      <div className="sidebar_header">
          <div className="sidebar_info">
              <h2>Avion School</h2>
          </div>
          <CreateIcon />
      </div>
      <nav className="sidebar_options">
        <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
        <SidebarOption Icon={MoreVertIcon} title="More" />

        <div className="sub_menu" state={setToggle}>
          {/* {toggle && (
          <ul>
          <SidebarOption Icon={InboxIcon} title="Mentions & Reactions"/>
          <SidebarOption Icon={DraftsIcon} title="Saved Items"/>
          <SidebarOption Icon={FileCopyIcon} title="File browser"/>
          </ul>
          )} */}
        </div>
        <SidebarOption Icon={PeopleAltIcon} title="People & user groups"/>
        <SidebarOption Icon={ExpandMoreIcon} title="Channels" state={setToggle}/>
        {toggle && <>{props.children}</>}
        <SidebarOption Icon={AddIcon} title="Add Channels" state={setCCModal}/>
        {CCModal && <CreateChannel isCCModalopen={setCCModal}/>}
        <SidebarOption Icon={ExpandMoreIcon} title="Direct Messages"/>
      </nav>
    </div>
  )
}