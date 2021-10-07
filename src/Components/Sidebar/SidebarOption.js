import React from "react";
import { useHistory } from "react-router";
import "./SidebarOption.css";

function SidebarOption({Icon, title, id, state}) {
    return ( <div className="sidebarOption" onClick={() => state(prev => !prev)}>
        {Icon && <Icon className="sidebarOption_icon"/>}
        {Icon ? 
        (<div className="nav_title">{title}</div>) : 
        (<div className="sidebarOption_channel">
            <span className="sidebarOption_hash">#
            </span>{title}</div>)
        }
    </div>
    );
  }

export default SidebarOption;