import React from "react";
import img from '../assets/slackLogo.png';

function SideModule({isThisLogIn}) {
        const logIn = `Transform the way you work with one place for everyone and everything you need to get stuff done`
        const regis = `We’ve seen what the future can be. Now is your moment to build a better tomorrow`
    return(
    <div className="SideMod">
        <img src={img} id="slacklogo"/>
        <p className="Sideheading">{isThisLogIn ? `${logIn}` : `${regis}`}.</p>
    </div>
    )
}

export default SideModule;