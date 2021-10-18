import React, { useEffect, useState } from 'react';
import { ReactComponent as UnFave } from '../assets/unFave.svg'
import { ReactComponent as Fave } from '../assets/fave.svg'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import PhoneIcon from '@material-ui/icons/Phone';
import './ChannelDetails.css'
import AboutChannel from './AboutChannel';
import MembersTab from './MembersTab';

export default function ChannelDetails({ Users, isCDetsopen, channelID, channelTitle }) {
    const [isAbout, setAbout] = useState(true);
    const [isMembers, setMember] = useState(false);
    const [fave, setFave] = useState(false);

    function tabToggler(tabA, tabB) {
        tabA(true);
        tabB(false);
    }

    return (
        <div className={`CCBg ${isCDetsopen ? `show` : `hide`}`}>
            <div className="tablModalCont">

                <div className="MTitle padtop15">
                    <div className="title">
                        {`#${channelTitle}`}
                    </div>
                    <button className="CCcloseBtn" onClick={() => isCDetsopen(false)}>X</button>
                </div>

                <div className="decor1 padmid15">
                    {!fave ? <UnFave width="20" height="20" className="fave" onClick={() => setFave(true)} /> : <Fave width="20" height="20" className="fave" onClick={() => setFave(false)} />}
                    <button className="decorBtn ablebtn">
                        <NotificationsNoneIcon className="decorIcon" />
                        Enable Notifications
                    </button>
                    <button className="decorBtn" disabled={true}>
                        <PhoneIcon
                            className="decorIcon" /> Start a Call
                    </button>
                </div>

                <div className="decor1 padmid15">
                    <div className={`tab ${isAbout ? 'openTab' : null}`}
                        onClick={() => tabToggler(setAbout, setMember)}>
                        About
                    </div>
                    <div className={`tab ${isMembers ? 'openTab' : null}`}
                        onClick={() => tabToggler(setMember, setAbout)}>
                        Members
                    </div>
                </div>

                <AboutChannel channelTitle={channelTitle} isAbout={isAbout} ChanID={channelID} />
                <MembersTab ChanID={channelID} isMembers={isMembers} ChanTitle={channelTitle} Users={Users} />
            </div>
        </div >
    )
}