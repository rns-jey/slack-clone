import React, { useRef, useState} from "react";
import configAPI from "../assets/config";
import axios from 'axios';
import './addChannel.css';

//nC -> new Channel
//uIDs -> uIDs
export default function CreateChannel({isCCModalopen}) {
    const channelNameRef = useRef(null);
    const uEmailRef = useRef(null);
    const [nCName, setChannelName] = useState();
    const [uEmails, setuEmails] = useState([]);
    const [emailIDs, setemailIDs] = useState([]);
    const [nCErrMsg, setnCEMsg] = useState(false);
    const config = configAPI();
    // const [CCModal, setCCModal] = useState(true)

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
        const baseURL = 'http://206.189.91.54//api/v1/users';

        axios
        .get(baseURL, config)
        .then((resp) => {
            let apiArray = resp.data.data;
            uEmails.forEach(elem =>{
                apiArray.find(({email, id}) =>{
                    if (email == elem){
                        setemailIDs(emailIDs.push(id))
                    }
                })
            })
        })
        console.log(emailIDs)
    }

    function idToChannel() {
        getIdfromEmail();
        setTimeout(() => {
            AddChannel()
        }, 1000);
    }

    
    //get tokens from local storage, add channel post to API
    function AddChannel() {
        const baseURL = 'http://206.189.91.54//api/v1/channels';
        const nCData = {
            name: nCName,
            user_ids:emailIDs
        }
        axios
        .post(baseURL, nCData, config)
        .then((resp) => {
            console.log(resp.data);
            if ('errors' in resp.data){
            const {errors: [msg]} = resp.data;
            setnCEMsg(msg)} else{
            isCCModalopen(false)
            }
        })
        .catch((err) => {
            console.log('catch', err)
        });
    };

    return ( 
        <div className={`CCBg ${!isCCModalopen ? 'hide': 'show' }`}>
            <div className="CCContainer">                
                <div className="CCTitleCont">
                    <div className="CCTitleSubCont">
                        <p className="CCTitle noWrap">Create a channel</p>
                        <button className="CCcloseBtn" onClick={() => isCCModalopen(false)}>X</button>
                    </div>
                <p className="CCSubtitle">Channels are where your team communicates. They're best when organized around a topic.</p>
                </div>
                {nCErrMsg ? (<div className='error'>{nCErrMsg}</div>):null}
                <div className="form-inputs">
                    <label className="form-label">Name</label>
                    <input 
                    ref={channelNameRef}
                    className={`forminput ${nCErrMsg ? 'errorValue':null }`}
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
                    placeholder="Enter their email, separated by ;"/>
                </div>
                <div className="CCFormGroup">
                    <label className="form-label">Make Private
                    </label>
                    <div className="CCSubFormGroup">
                        <div className="terms">
                            When a channel is set to private. It can only be viewed or joined by invitation.
                        </div>
                        <label className="slider-group">
                            <input type="checkbox"/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
                <div className="CCBottom">
                    <div className="shareOthers">
                        <label className="CCSubLabel noWrap">
                            Share outside
                        </label>
                        <input type="checkbox" className="addChannelCheckbox"/>
                    </div>
                <button onClick={idToChannel} className="CreateBtn">Create</button>
                </div>
            </div>
        </div>
    );
};
