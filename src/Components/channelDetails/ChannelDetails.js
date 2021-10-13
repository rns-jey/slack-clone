import React, { useState } from 'react';
import { ReactComponent as UnFave } from '../assets/unFave.svg'
import { ReactComponent as Fave } from '../assets/fave.svg'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import PhoneIcon from '@material-ui/icons/Phone';
import AboutChannel from './AboutChannel';
import MembersTab from './MembersTab';

export default function ChannelDetails({ isCDetsopen, channelID, channelTitle }) {


    const [isAbout, setAbout] = useState(true);
    const [isMembers, setMember] = useState(false);
    const [fave, setFave] = useState(false);
    return (
        <div className={`CCBg ${isCDetsopen ? `show` : `hide`}`}>
            <div className="CCContainer">

                <div className="MTitle">
                    <div className="title">
                        {`#${channelTitle}`}
                    </div>
                    <button className="CCcloseBtn" onClick={() => isCDetsopen(false)}>X</button>
                </div>

                <div className="decor1">
                    {!fave ? <UnFave width="15" height="15" onClick={() => setFave(true)} /> : <Fave width="15" height="15" onClick={() => setFave(false)} />}
                    <button className="EnNotif">
                        <NotificationsNoneIcon />
                        Enable Notifications
                    </button>
                    <button className="callbtn deact">
                        <PhoneIcon /> Start a Call
                    </button>
                </div>

                <div className="tabCont">
                    <div className={`tab ${isAbout ? 'openTab' : null}`}
                        onClick={() => (setAbout(true), setMember(false))}>
                        About
                    </div>
                    <div className={`tab ${isMembers ? 'openTab' : null}`}
                        onClick={() => (setAbout(false), setMember(true))}>
                        Members
                    </div>
                </div>

                <AboutChannel channelTitle={channelTitle} isAbout={isAbout} />
                <MembersTab ChanID={channelID} isMembers={isMembers} ChanTitle={channelTitle} />
            </div>
        </div>
    )
}