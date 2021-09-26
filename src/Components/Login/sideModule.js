import React from "react";
import img from '../CreateUser/slackLogo.png';

function SideModule() {
    return(
    <div className="SideMod">
        <img src={img} id="slackLogo"/>
        <p className="subheading">Transform the way you work with one place for everyone and everything you need to get stuff done.</p>
    </div>
    )
}

export default SideModule;