import axios from 'axios';
import React, { useRef, useState } from 'react';
import configAPI from '../assets/config';

export default function AddUsers({isAUModalopen}) {
    const channelIDRef = useRef(null);
    const uEmailRef = useRef(null);
    const [uEmails, setuEmails] = useState();
    const [channelID, setChannelID] = useState();
    const config = configAPI();

    function handleUserInput(e) {
        const channelInput = channelIDRef.current.value;
        const uIDsRawInput = uEmailRef.current.value;
        const uIDsArr = uIDsRawInput.split(';');
        const uIDsArrTrim = uIDsArr.map(ids => ids.trim())
        setChannelID(channelInput);
        setuEmails(uIDsArrTrim);
        console.log(uEmails, channelID)
    };

    function getUserId(){
        const baseURL = 'http://206.189.91.54//api/v1/users';

        axios
        .get(baseURL, config)
        .then((resp) => {
            let array = resp.data.data;
            array.find(({email, id}) =>{
                if (email == uEmails){
                    console.log(id, email)}
            })
        })
    }

    // function getChannelId(){

    //     axios
    //     .get(baseURL, config)
    //     .then((resp) => {
    //         let array = resp.data.data;
    //         array.find(({}))
    //     })
    // }

    function test(){
        console.log(uEmailRef)
    }
    return(
        <div className={`ModalBG ${!isAUModalopen ? 'hide': 'show' }`}>
            <div className="ModalCont">
                <div className="MTitle">
                <button className="CCcloseBtn" onClick={() => isAUModalopen(false)}>X</button>
                </div>
                <div className="MFG">
                    <label className="inputLabel">
                        Channel ID:
                    </label>
                    <input type="text" className='MtextInput'
                    ref={channelIDRef}
                    onChange={handleUserInput}
                    placeholder="Enter channel Name"/>
                </div>
                <div className="MFG">
                    <label className="inputLabel">
                        Email:
                    </label>
                    <input type="text" className='MtextInput'
                    ref={uEmailRef}
                    onChange={handleUserInput}
                    placeholder="Enter Email address"/>
                </div>
                <button onClick={getUserId}>Add me</button>
            </div>
        </div>
    )
}