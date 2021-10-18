import React from "react";
import checkLogo from './check-circle-bold.png'
import './ModalSuccess.css';
import avatar from "../assets/avatar.png"

export default function ModalSuccess({ emails, channelName, modalopen, isAdduser }) {

    return (
        <div className="CCContainer">
            <div className="CCTitleSubCont">
                <p className="SuccessTitle noWrap">Request status:</p>
                <button className="CCcloseBtn" onClick={() => modalopen(false)}>X</button>
            </div>
            <div className="modalSuccessCont">
                <img src={checkLogo} className="checkLogo" />
                <div className="SuccessMsgName">
                    <span className="channelName">#{channelName}</span> channel created
                </div>
                <span className="form-label">Members:</span>
                <div className="existListCont">
                    {emails.map((elem) =>
                        <div className="usersList existList" id={elem}>
                            <img src={avatar} className="listAvatar" id={`a${elem}`} />
                            <div className="Email" id={`e${elem}`}>{elem}
                            </div>
                        </div>)}
                </div>

            </div>
        </div>

    )
}