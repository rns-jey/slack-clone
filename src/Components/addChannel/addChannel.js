import React, { useRef, useState} from "react";
import axios from 'axios';
import './addChannel.css';

//nC -> new Channel
//uIDs -> uIDs
export default function CreateChannel({isCCModalopen}) {
    const channelNameRef = useRef(null);
    const uIDsRef = useRef(null);
    const [nCName, setChannelName] = useState();
    const [nCIDs, setChannelIDs] = useState([]);
    const [nCErrMsg, setnCEMsg] = useState(false);
    // const [CCModal, setCCModal] = useState(true)

    //take user inputs, remove spaces, convert to array, sent to state, remove API error
    function handleUserInput(e) {
        const userNameInput = channelNameRef.current.value;
        const uIDsRawInput = uIDsRef.current.value;
        const uIDsArr = uIDsRawInput.split(';');
        const uIDsArrTrim = uIDsArr.map(ids => ids.trim())
        setChannelName(userNameInput);
        setChannelIDs(uIDsArrTrim);
        setnCEMsg(false);
    };

    //get tokens from local storage, add channel post to API
    function AddChannel() {
        const userExpiry = localStorage.getItem('expiry');
        const userUID = localStorage.getItem('uid');
        const userAt = localStorage.getItem('at');
        const userClient = localStorage.getItem('client');
        const baseURL = 'http://206.189.91.54//api/v1/channels';
        const config = {
            headers : {
              "access-token": userAt,
              client: userClient,
              expiry: userExpiry,
              uid: userUID
            }
          }
        const nCData = {
            name: nCName,
            user_ids:nCIDs
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
                <div className="CCFormGroup">
                    <label className="CCLabel">Name</label>
                    <input 
                    ref={channelNameRef}
                    className={`form-input ${nCErrMsg ? 'errorValue':null }`}
                    type="text"
                    placeholder="# e.g. Code-Planning"
                    onChange={handleUserInput}
                    />
                </div>
                <div className="CCFormGroup">
                    <label className="CCLabel">Add People
                    <span className="CCSubtitle"> (optional)</span> 
                    </label>
                    <textarea 
                    ref={uIDsRef}
                    id="userIDsTxtbx" 
                    onChange={handleUserInput}
                    className="forminput"
                    placeholder="Enter their email, separated by ;"/>
                </div>
                <div className="CCFormGroup">
                    <label className="CCLabel">Make Private
                    </label>
                    <div className="CCSubFormGroup">
                        <div className="CCSubLabel">
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
                        <input type="checkbox"/>
                    </div>
                <button onClick={AddChannel} className="CreateBtn">Create</button>
                </div>
            </div>
        </div>
    );
};
