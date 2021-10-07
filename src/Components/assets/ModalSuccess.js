import React from "react";
import checkLogo from './check-circle-bold.png'
import './ModalSuccess.css';

export default function ModalSuccess({emails, channelName, modalopen, isAdduser}) {

    return (
        <div className="CCContainer">
        <div className="CCTitleSubCont">
        <p className="SuccessTitle noWrap">Request status:</p>
        <button className="CCcloseBtn" onClick={() => modalopen(false)}>X</button>
        </div>
        <div className="modalSuccessCont">
            <img src={checkLogo} className="checkLogo"/>
            <div className="SuccessMsgName">
                <span className="channelName">{channelName}</span> {isAdduser ? 'users added' : 'channel created'}
            </div>
            <div className="SuccessEmails">
                {emails.map((elem) =>
                    <span className="userEmails" id={elem}>{elem}<br/></span> )}
            </div>
            
        </div>
        </div> 

    )
}