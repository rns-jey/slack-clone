import React, { useRef, useState, useEffect } from 'react';
import AddUsers from '../AddUsers/AddUsers'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import configAPI from '../assets/config';
import axios from 'axios';
import avatar from "../assets/avatar.png"

export default function MembersTab({ ChanID, ChanTitle, isMembers, Users }) {
    const [AUopen, setAU] = useState(false)
    const [existRef, setSearch] = useState('')
    const [existID, setExistID] = useState([]);
    const [existEmail, setExistEmail] = useState([])
    const [filterExist, setFilter] = useState(existEmail);
    const [refreshState, refreshMember] = useState(true)
    const [members, setMembers] = useState([]);
    const [filteredMembers, filterMembers] = useState([]);

    const config = configAPI();

    function getUsersInChannel() {
        const baseURL = `http://206.189.91.54//api/v1/channels/${ChanID}`

        setMembers([])
        
        axios
            .get(baseURL, config)
            .then((resp) => {
                let rawExist = resp.data.data.channel_members;
                
                rawExist.map((info) => {
                    setMembers(oldArray => [...oldArray, Users.filter(data => data.id === info.user_id)[0]])
                })
            })
            .catch((err) => {
                console.log(err.data, `catch`)
            })
    }

    function getvalue(event) {
        let value = event.target.value.toLowerCase()
        setSearch(value);
        filterMembers(members.filter(data => data.email.includes(value)))
    }

    function refreshMemberList() {
        console.log("Toggle side nav refresh")
        refreshMember(!refreshState);
    }

    //load all API getters upon open of Channel Details
    useEffect(() => {
        getUsersInChannel()
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
                {   
                    existRef.length > 0
                    ?
                        filteredMembers.map(({ id, uid }) => (
                            <div className="usersList existList" id={id}>
                                <img src={avatar} className="listAvatar" id={`av ${uid}`} />
                                <div className="Email" id={`em ${uid}`}>
                                    {uid}
                                </div>
                            </div>
                        ))
                    :
                        members.map(({ id, uid }) => (
                            <div className="usersList existList" id={id}>
                                <img src={avatar} className="listAvatar" id={`av ${uid}`} />
                                <div className="Email" id={`em ${uid}`}>
                                    {uid}
                                </div>
                            </div>
                    )) 
                }
            </div>
            {AUopen && <AddUsers isAUModalopen={setAU} channelID={ChanID} channelTitle={ChanTitle} RefreshMemberList={refreshMemberList} />}
        </div>
    )
}