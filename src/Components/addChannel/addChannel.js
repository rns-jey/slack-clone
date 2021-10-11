import React, { useRef, useState, useEffect } from "react";
import configAPI from "../assets/config";
import axios from 'axios';
import './addChannel.css';
import ModalSuccess from "../assets/ModalSuccess";
import SearchIcon from "@material-ui/icons/Search";
import avatar from "../assets/avatar.png"

//nC -> new Channel
//uIDs -> uIDs
const config = configAPI();
const baseURLChannels = 'http://206.189.91.54//api/v1/channels';
const baseURLUsers = 'http://206.189.91.54//api/v1/users';
export default function CreateChannel({ isCCModalopen }) {
    const channelNameRef = useRef(null);
    const uEmailRef = useRef(null);
    const [success, setSuccess] = useState(false)
    const [nCName, setChannelName] = useState();
    const [uEmails, setuEmails] = useState([]);
    const [emailIDs, setemailIDs] = useState([]);
    const [nCErrMsg, setnCEMsg] = useState(false);
    const [pushedEmails, setpEmails] = useState([])

    //take user inputs, remove spaces, convert to array, sent to state, remove API error
    function handleUserInput(e) {
        const userNameInput = channelNameRef.current.value;
        const uEmailsRawInput = uEmailRef.current.value;
        const uEmailsArr = uEmailsRawInput.split(';');
        const uEmailsArrTrim = uEmailsArr.map(ids => ids.trim())
        setChannelName(userNameInput);
        setuEmails(uEmailsArrTrim);
        setnCEMsg(false);
    };

    function getIdfromEmail() {
        axios
            .get(baseURLUsers, config)
            .then((resp) => {
                let apiArray = resp.data.data;
                uEmails.forEach(elem => {
                    apiArray.find(({ email, id }) => {
                        if (email == elem) {
                            setemailIDs(emailIDs.push(id))
                            pushedEmails.push(email)
                        }
                    })
                })
                console.log(pushedEmails);
            })
    }

    function idToChannel() {
        getIdfromEmail();
        setTimeout(() => {
            AddChannel()
        }, 1000);
    }


    //get tokens from local storage, add channel post to API
    function AddChannel() {
        const nCData = {
            name: nCName,
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
                    }, 5000);
                }
            })
            .catch((err) => {
                console.log('catch', err)
            });
    };

    const [users, setUsers] = useState([]);
    const [filteredUser, filterUser] = useState(users);
    const handleSearch = (event) => {
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
        <div className={`CCBg ${!isCCModalopen ? 'hide' : 'show'}`}>
            {success && <ModalSuccess modalopen={isCCModalopen} emails={pushedEmails} channelName={nCName} isAdduser={false} />}
            <div className={`CCContainer ${success ? 'hide' : 'show'}`}>
                <div className="CCTitleCont">
                    <div className="CCTitleSubCont">
                        <p className="CCTitle noWrap">Create a channel</p>
                        <button className="CCcloseBtn" onClick={() => isCCModalopen(false)}>X</button>
                    </div>
                    <p className="CCSubtitle">Channels are where your team communicates. They're best when organized around a topic.</p>
                </div>
                {nCErrMsg ? (<div className='error'>{nCErrMsg}</div>) : null}
                <div className="form-inputs">
                    <label className="form-label">Name</label>
                    <input
                        ref={channelNameRef}
                        className={`forminput ${nCErrMsg ? 'errorValue' : null}`}
                        type="text"
                        placeholder="# e.g. Code-Planning"
                        onChange={handleUserInput}
                    />
                </div>
                <div className="form-inputs">
                    <label className="form-label">Add People
                        <span className="CCSubtitle"> (optional)</span>
                    </label>
                    <textarea
                        ref={uEmailRef}
                        id="userIDsTxtbx"
                        onChange={handleUserInput}
                        className="forminput"
                        placeholder="Enter their email, separated by ;" />
                </div>

                <div className="searchListinputCont">
                    <label className="form-label">Search users</label>
                    <input type="text"
                        className="form-input"
                        placeholder="Search by name, role or team" onChange={(event) => handleSearch(event)}>
                    </input>
                </div>
                <div className="searchListCont">
                    {filteredUser.slice(0, 5).map(({ email, id }) => (
                        // <div className="usersList" id={id}
                        //     onClick={() => uEmailRef.current.value = `${uEmailRef.current.value};${email}`}>
                        //     <img src={avatar} className='listAvatar' id={`avatar ${id}`} />
                        //     <div className="Email" id={`email ${id}`}>
                        //         {email}
                        //     </div>
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
        </div >
    );
};

// function SearchUserBar() {
//     const [users, setUsers] = useState([]);
//     const [filteredUser, filterUser] = useState(users);
//     const handleSearch = (event) => {
//         let value = event.target.value.toLowerCase();
//         let result = [];
//         result = users.filter((data) => {
//             return data.email.search(value) != -1
//         });

//         filterUser(result);
//     }
//     useEffect(() => {
//         axios
//             .get(baseURLUsers, config)
//             .then((res) => {
//                 setUsers(res.data.data)
//                 filterUser(res.data.data);
//                 // makeChecklist(res.data.data)
//             })
//             .catch((err) => {
//                 console.log(err)
//             });
//     }, []);

//     // function makeChecklist(users) {
    //     users.map((data) => {
    //         checkList.push({
    //             email: data.email,
    //             userid: data.id,
    //             isChecked: false,
    //         })
    //     })
    // }

    // function handleOnCheck(isChecked, userid, index) {
    //     filteredUser[index].isChecked = isChecked ? false : true;

    //     if (isChecked === true) {
    //         checked.push(userid)
    //     } else {
    //         console.log('false')
    //     }
    // //     console.log(filteredUser, 'check');
    // // }
    // return (<div>
    //     <div className="people_search">
    //         <SearchIcon />
    //         <input type="text"
    //             className="people_search_input"
    //             placeholder="Search by name, role or team" onChange={(event) => handleSearch(event)}>
    //         </input>
    //     </div>
    //     <div className="terms">
    //         {filteredUser.slice(0, 5).map(({ email, id }) => (
    //             <div className="users" id={id} onClick={ }>
    //                 <img src={avatar} id={`avatar ${id}`} />
    //                 <div className="Email" id={`email ${id}`}>
    //                     {email}
    //                 </div>
    //             </div>
    //         ))}
    //         <button onClick={() => console.log(checkList)}>here</button>
    //     </div>
    // </div>
    // )
