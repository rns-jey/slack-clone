import React, { useRef, useState, useEffect } from "react";
import configAPI from "../assets/config";
import axios from 'axios';
import './addChannel.css';
import ModalSuccess from "../assets/ModalSuccess";
import avatar from "../assets/avatar.png"
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

//nC -> new Channel

export default function CreateChannel({ isCCModalopen, RefreshSideNav }) {
    const channelNameRef = useRef(null);
    const [success, setSuccess] = useState(false)
    const [nCErrMsg, setnCEMsg] = useState(false);
    const [pushedEmails, setpEmails] = useState([])
    const [emailIDs, setemailIDs] = useState([])
    const [removed, setRemove] = useState([]);
    const [refreshState, refresh] = useState(true)
    const baseURLChannels = 'http://206.189.91.54//api/v1/channels';
    const baseURLUsers = 'http://206.189.91.54//api/v1/users';
    let config = configAPI();

    //updates headers for API
    function updateConfig() {
        config = configAPI()
        return (config)
    }


    function getEmailsIDs(id, email, item) {
        if (!pushedEmails.includes(email)) {
            let filterArray = [...filteredUser];
            let clicked = pushedEmails.concat(email);
            let eIDS = emailIDs.concat(id)
            let remove = removed.concat(filterArray.splice(item, 1))
            setpEmails(clicked)
            setemailIDs(eIDS)
            filterUser(filterArray)
            setRemove(remove);
        } else {
            setnCEMsg(`${email} is already on the list`)
        }
    }

    function removeFromList(index) {
        let addfilter = [...filteredUser];
        let reclicked = [...pushedEmails];
        let reeIDS = [...emailIDs];
        let readd = [...removed];
        let adding = addfilter.concat(readd.splice(index, 1))
        reclicked.splice(index, 1);
        reeIDS.splice(index, 1);
        setpEmails(reclicked)
        setemailIDs(reeIDS)
        filterUser(adding)
        setRemove(readd);
    }

    //createChannel button function: updates config, setTimeout as Async 
    function idToChannel() {
        updateConfig()
        setTimeout(() => {
            AddChannel()
        }, 1000);
    }

    //get tokens from local storage, add channel post to API
    function AddChannel() {
        const nCData = {
            name: channelNameRef.current.value,
            user_ids: emailIDs
        }
        axios
            .post(baseURLChannels, nCData, config)
            .then((resp) => {
                console.log(resp.data);
                if ('errors' in resp.data) {
                    const { errors: [msg] } = resp.data;
                    setnCEMsg(msg)
                } else {
                    setSuccess(true)
                    setTimeout(() => {
                        isCCModalopen(false)
                        setSuccess(false)
                    }, 8000);
                }
                RefreshSideNav()
            })
            .catch((err) => {
                console.log('catch', err)
            });
    };

    // function of searchbar, find the emails that passes the criteria of searched value
    const [users, setUsers] = useState([]);
    const [filteredUser, filterUser] = useState(users);
    const handleSearch = (event) => {
        refresh(!refreshState)
        let value = event.target.value.toLowerCase();
        let result = [];
        result = users.filter((data) => {
            return data.email.search(value) != -1
        });
        // removed.forEach(({ email }) => {
        //     result.forEach(({ uid }, index) => {
        //         if (email == uid) {
        //             return result.splice(index, 1)
        //         }
        //     })
        // })
        filterUser(result)
    }

    //renders the emails that passes the search value realtime

    useEffect(() => {
        axios
            .get(baseURLUsers, config)
            .then((res) => {
                setUsers(res.data.data)
                filterUser(res.data.data);
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);


    return (
        <div className={`CCBg ${!isCCModalopen ? 'hide' : 'show'}`}>
            {success && <ModalSuccess modalopen={isCCModalopen} emails={pushedEmails} channelName={channelNameRef.current.value} />}
            <div className={`CCContainer ${success ? 'hide' : 'show'}`}>
                <div className="CCTitleCont">
                    <div className="CCTitleSubCont">
                        <p className="CCTitle noWrap">Create a channel</p>
                        <HighlightOffOutlinedIcon className="CCcloseBtn" onClick={() => isCCModalopen(false)} />
                    </div>
                    <p className="CCSubtitle">Channels are where your team communicates. They're best when organized around a topic.</p>
                </div>
                {nCErrMsg ? (<div className='error'>{nCErrMsg}</div>) : null}
                <div className="form-inputs">
                    <label className="form-label">Name</label>
                    <input
                        ref={channelNameRef}
                        className="form-input"
                        type="text"
                        placeholder="# e.g. Code-Planning"
                    />
                </div>
                <div className="searchListinputCont">
                    <label className="form-label">Add People
                        <span> (optional)</span>
                    </label>
                    <input type="text"
                        className="form-input"
                        placeholder="Search by name, role or team" onChange={(event) => handleSearch(event)}>
                    </input>
                </div>
                <div className="searchListCont">
                    {pushedEmails.map((email, index) => {
                        return (<div className="usersList">
                            <RemoveCircleOutlineIcon className="CCcloseBtn"
                                onClick={() => removeFromList(index)}
                            />
                            <div className="cEmail">{email}</div>
                        </div>)
                    })}
                    {filteredUser.map(({ email, id }, item) => (
                        <div className="usersList" id={id} value={item}
                            onClick={() => getEmailsIDs(id, email, item)}
                            onMouseEnter={() => setnCEMsg(false)}>
                            <img src={avatar} className='listAvatar' id={`avatar ${id}`} />
                            <div className="Email" id={`email ${id}`}>
                                {email}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="CCFormGroup">
                    <label className="form-label">Make Private
                    </label>
                    <div className="CCSubFormGroup">
                        <div className="terms">
                            When a channel is set to private. It can only be viewed or joined by invitation.
                        </div>
                        <label className="slider-group">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
                <div className="CCBottom">
                    <div className="shareOthers">
                        <label className="CCSubLabel noWrap">
                            Share outside
                        </label>
                        <input type="checkbox" className="addChannelCheckbox" />
                    </div>
                    <button onClick={idToChannel} className="CreateBtn">Create</button>
                </div>
            </div>
        </div>
    );
};

