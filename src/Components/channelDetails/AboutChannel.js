import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import configAPI from "../assets/config";

export default function AboutChannel({ channelTitle, isAbout, ChanID }) {
    const [isTopicEdit, setTopicEdit] = useState(false);
    const [isDescEdit, setDescEdit] = useState(false);
    const topicRef = useRef(null)
    const [userEmail, setUserEmail] = useState();
    const [datemade, setdate] = useState()
    const config = configAPI()
    const initialmsg = `This channel is for.. well, everything else. It's a place for team jokes, spur-of-the-moment ideas, and funny GIFs. Go wild!`
    let userID;

    function getUsersInChannel() {
        const baseURL = `http://206.189.91.54//api/v1/channels/${ChanID}`
        axios
            .get(baseURL, config)
            .then((resp) => {
                let raw = resp.data.data
                let rawdate = (`${raw.created_at}`).slice(0, 10)
                setdate(rawdate)
                return userID = raw.owner_id;
            })
            .catch((err) => {
                console.log(err, `catch`)
            })
    }

    function getEmailfromID() {
        const baseURLUsers = 'http://206.189.91.54//api/v1/users';
        axios
            .get(baseURLUsers, config)
            .then((resp) => {
                let rawarray = resp.data.data;
                rawarray.find(({ email, id }) => {
                    if (id == userID) {
                        setUserEmail(email)
                    }
                })

            })
            .catch((err) => {
                console.log(err, `catch`)
            })
    }


    useEffect(() => {
        getUsersInChannel()
        getEmailfromID()
    }, [])

    return (
        <div className={`tabPage aboutTab ${isAbout ? `show` : `hide`}`}>
            <div className="subAboutCont set1">
                <h4>Channel Name</h4>
                <span className="chanTitle">#{channelTitle}</span>
            </div>
            <div className="subAboutCont">
                <div className="aboutSubCont set2">
                    <div className="subContTitle">
                        <h4>Topic</h4>
                        <span className={isTopicEdit ? 'saveBtn' : 'editBtn'}
                            onClick={() => setTopicEdit(!isTopicEdit)}>
                            {isTopicEdit ? `Save` : `Edit`}
                        </span>
                    </div>
                    <input ref={topicRef}
                        className={`tabInput ${isTopicEdit ? null : 'noEdit'}`}
                        placeholder='Add a topic'
                        readOnly={isTopicEdit ? false : true} />
                </div>
                <div className="aboutSubCont">
                    <div className="subContTitle">
                        <h4>Description</h4>
                        <span className={isDescEdit ? 'saveBtn' : 'editBtn'}
                            onClick={() => setDescEdit(!isDescEdit)}>
                            {isDescEdit ? `Save` : `Edit`}
                        </span>
                    </div>
                    <textarea ref={topicRef}
                        className={`tabInput tabTextArea ${isDescEdit ? null : 'noEdit'}`}
                        placeholder={initialmsg}
                        readOnly={isDescEdit ? false : true} />
                </div>

                <div className="aboutSubCont">
                    <div className="subContTitle">
                        <h4>Created by</h4>
                        <span />
                    </div>
                    <div className="chanTitle">{`${userEmail} on ${datemade}`}</div>
                </div>
            </div>
        </div>
    )
}