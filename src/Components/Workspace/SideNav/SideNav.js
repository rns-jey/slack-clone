import './SideNav.css'
import SidebarOption from '../../Sidebar/SidebarOption';
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import React, { useState } from 'react';
import CreateChannel from '../../addChannel/addChannel';
import ToPeople from '../toPeople';
import NavLink from '../NavLink';

export default function SideNav({ Channels, Recents, RefreshSideNav }) {
  const [toggle, setToggle] = useState(false);
  const [CCModal, setCCModal] = useState(false);
  const [toggleSubmenu, setToggleSubmenu] = useState(false);
  const [toggleDM, setToggleDM] = useState(false);

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_info">
          <h3>Avion School</h3>
        </div>
        <CreateIcon />
      </div>
      <nav className="sidebar_options">
        <SidebarOption Icon={InsertCommentIcon} title="Threads" />
        <SidebarOption Icon={MoreVertIcon} title="More" state={setToggleSubmenu} />
        {toggleSubmenu &&
          <ul className="sub_menu">
            <SidebarOption Icon={InboxIcon} title="Mentions & Reactions" />
            <SidebarOption Icon={DraftsIcon} title="Saved Items" />
            <SidebarOption Icon={FileCopyIcon} title="File Browser" />
          </ul>}
        <ToPeople />
        <SidebarOption Icon={ExpandMoreIcon} title="Channels" state={setToggle} />
        {toggle &&
          <div className="sidebar_options">
            {Channels.data.data
              ?
              Channels.data.data.map(({ id, name }) => (
                <NavLink key={id} type="Channel" activeClassName="sidebarOptionActive" className="sidebarChannel" to={id}>
                  <LockOutlinedIcon /> {name}
                </NavLink>
              ))
              : null
            }
          </div>
        }
        <SidebarOption Icon={AddIcon} title="Add Channels" state={setCCModal} />
        {CCModal && <CreateChannel isCCModalopen={setCCModal} RefreshSideNav={RefreshSideNav} />}
        <SidebarOption Icon={ExpandMoreIcon} title="Direct Messages" state={setToggleDM} />
        {
          toggleDM &&
          <div className="sidebar_options">
            {
              Recents
                ?
                Recents.map(({ id, email }) => (
                  <NavLink key={id} type="User" activeClassName="sidebarOptionActive" className="sidebarChannel" to={id}>
                    <AccountCircleIcon /> {email}
                  </NavLink>
                ))
                : null
            }
          </div>
        }
      </nav >
    </div >
  )
}