import React, { useRef, useState, useEffect } from 'react';
import AddUsers from '../AddUsers/AddUsers'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import configAPI from '../assets/config';
import axios from 'axios';
import avatar from "../assets/avatar.png"

export default function MembersTab({ ChanID, ChanTitle, isMembers }) {
    const [AUopen, setAU] = useState(false)
    const [existRef, setSearch] = useState(null)
    const [existID, setExistID] = useState([]);
    const [existEmail, setExistEmail] = useState([])
    const [filterExist, setFilter] = useState(existEmail);
    const [refreshState, refreshMember] = useState(true)

    const config = configAPI();
    function getUsersInChannel() {
        const baseURL = `http://206.189.91.54//api/v1/channels/${ChanID}`
        axios
            .get(baseURL, config)
            .then((resp) => {
                let rawExist = resp.data.data.channel_members;
                rawExist.map((info) => {
                    setExistID(existID.push(info.user_id))

                })
            })
            .catch((err) => {
                console.log(err.data, `catch`)
            })
    }

    function getEmailfromID() {
        const baseURLUsers = 'http://206.189.91.54//api/v1/users';
        axios
            .get(baseURLUsers, config)
            .then((resp) => {
                let allUsersArray = resp.data.data;
                existID.forEach(eID => {
                    allUsersArray.find(({ id, email }) => {
                        if (id == eID) {
                            setExistEmail(existEmail.push(email))
                        }
                    })
                })
            })
    }
    function getvalue(event) {
        let value = event.target.value.toLowerCase()
        setSearch(value);
    }

    function refreshMemberList() {
        console.log("Toggle side nav refresh")
        refreshMember(!refreshState);
    }

    useEffect(() => {
        getUsersInChannel()
        getEmailfromID()
    }, [refreshState]);

    return (
        <div className={`tabPage ${isMembers ? 'show' : 'hide'}`}>
            <input
                className="form-input"
                placeholder="Find members"
                onChange={getvalue}
            />
            <div className="addUserbtn" onClick={() => setAU(true)}>
                <PersonAddIcon className="AddUserIcon" />
                <span>Add people</span>
            </div>
            <div className="existListCont">
                {filterExist.filter((email) => {
                    if (existRef == "" || existRef == null) {
                        return email;
                    } else if (email.toLowerCase().includes(existRef)) {
                        return email
                    }
                }).map((email) => (
                    <div className="usersList existList" id={email}>
                        <img src={avatar} className="listAvatar" id={`av ${email}`} />
                        <div className="Email" id={`em ${email}`}>{email}
                        </div>
                    </div>
                ))}
            </div>
            {AUopen && <AddUsers isAUModalopen={setAU} channelID={ChanID} channelTitle={ChanTitle} RefreshMemberList={refreshMemberList} />}
        </div>
    )
}