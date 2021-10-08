import axios from 'axios';
import React, { useRef, useState } from 'react';
import configAPI from '../assets/config';

export default function AddUsers({isAUModalopen, channelID, channelTitle}) {
    const uEmailRef = useRef(null);
    const [uEmails, setuEmails] = useState();
    const [emailStats, setEmailStats] = useState({
        success: [],
        IDs:[],
    })
    const config = configAPI();

    function handleUserInput(e) {
        const uIDsRawInput = uEmailRef.current.value;
        const uIDsArr = uIDsRawInput.split(';');
        const uIDsArrTrim = uIDsArr.map(ids => ids.trim())
        setuEmails(uIDsArrTrim);
    };

    function getUserId(){
        const baseURL = 'http://206.189.91.54//api/v1/users';

        axios
        .get(baseURL, config)
        .then((resp) => {
            let array = resp.data.data;
            uEmails.forEach(element => {
                array.find(({email,id})=>{
                    if (email == element){
                        setEmailStats(emailStats.IDs.push(id), 
                        emailStats.success.push(email))}
                })
            }); 
            // console.log(emailStats,'getuserID then')              
                })
        .catch((err) =>{
            console.log(err.data, 'getuserId catch')
        })
        }
    
    function userToChannel() {
        getUserId();
        setTimeout(() => {
            emailStats.IDs.map((eIds) =>{
                const baseURL = 'http://206.189.91.54//api/v1/channel/add_member'
                const data = {
                    "id": channelID,
                    "member_id": eIds
                }
                axios
                .post(baseURL,data,config)
                .then((resp) =>{
                    console.log(resp.data, 'usertochannel then')
                })
                .catch((err)=>{
                    console.log(err, 'usertochannel catch')
                })
        })
        }, 3000);
        }

    return(
        <div className={`CCBg ${!isAUModalopen ? 'hide': 'show' }`}>
            <div className="CCContainer">
                <div className="MTitle">
                <button className="CCcloseBtn" onClick={() => isAUModalopen(false)}>X</button>
                </div>
                <div className="MFG">
                    <h3>{channelTitle}</h3>
                <div className="MFG">
                    <label className="inputLabel">
                        Email:
                    </label>
                    <input type="text" className='MtextInput'
                    ref={uEmailRef}
                    onChange={handleUserInput}
                    placeholder="Enter Email address"/>
                </div>
                <button onClick={userToChannel}>Add me</button>
            </div>
            </div>
        </div>
    )
}