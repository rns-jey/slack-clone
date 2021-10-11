import axios from 'axios';
import React, { useRef, useState, useEffect } from 'react';
import configAPI from '../assets/config';
import avatar from "../assets/avatar.png"

export default function AddUsers({ isAUModalopen, channelID, channelTitle }) {
    // const [uEmails, setuEmails] = useState();
    // const [emailStats, setEmailStats] = useState({
    //     success: [],
    //     IDs: [],
    // })
    const [errMsg, setErrMsg] = useState(null)
    const [sucMsg, setSucMsg] = useState(null)
    const config = configAPI();
    // const baseURLChannels = 'http://206.189.91.54//api/v1/channels';
    const baseURLUsers = 'http://206.189.91.54//api/v1/users';


    function userToChannel(id, email) {

        const baseURL = 'http://206.189.91.54//api/v1/channel/add_member'
        const data = {
            "id": channelID,
            "member_id": id,
        }
        axios
            .post(baseURL, data, config)
            .then((resp) => {
                if ('errors' in resp.data) {
                    const { errors: [msg] } = resp.data;
                    setErrMsg(`${msg}`)
                    setSucMsg(null)
                } else {
                    console.log(resp.data, 'usertochannel then')
                    setSucMsg(`${email} added`)
                    setErrMsg(null)
                }
            })
            .catch((err) => {
                console.log(err, 'usertochannel catch')
            })
    }

    const [users, setUsers] = useState([]);
    const [filteredUser, filterUser] = useState(users);
    const handleSearch = (event) => {
        setErrMsg(null)
        setSucMsg(null)
        let value = event.target.value.toLowerCase();
        let result = [];
        result = users.filter((data) => {
            return data.email.search(value) != -1
        });

        filterUser(result);
    }
    useEffect(() => {
        axios
            .get(baseURLUsers, config)
            .then((res) => {
                setUsers(res.data.data)
                filterUser(res.data.data);
                // makeChecklist(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);



    return (
        <div className={`CCBg ${!isAUModalopen ? 'hide' : 'show'}`}>
            <div className="CCContainer">
                <div className="MTitle">
                    <button className="CCcloseBtn" onClick={() => isAUModalopen(false)}>X</button>
                </div>
                {errMsg ? (<div className='error'>{errMsg}</div>) : null}
                {sucMsg ? (<div className='success'>{sucMsg}</div>) : null}
                <div className="searchListinputCont">
                    <label className="form-label">Search users</label>
                    <input type="text"
                        className="form-input"
                        placeholder="Search by name, role or team" onChange={(event) => handleSearch(event)}>
                    </input>
                </div>
                <div className="searchListCont">
                    {filteredUser.slice(0, 5).map(({ email, id }) => (
                        <div className="usersList" id={id}
                            onClick={() => userToChannel(id, email)}>
                            <img src={avatar} className='listAvatar' id={`avatar ${id}`} />
                            <div className="Email" id={`email ${id}`}>
                                {email}
                            </div>
                        </div>
                    ))}
                </div>

                <button onClick={userToChannel}>Add me</button>
            </div>
        </div>
    )
}