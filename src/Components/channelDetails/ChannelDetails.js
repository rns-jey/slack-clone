import React, { useState } from 'react';
import { ReactComponent as UnFave } from '../assets/unFave.svg'
import { ReactComponent as Fave } from '../assets/fave.svg'
export default function ChannelDetails({ isCDetsopen, channelID, channelTitle }) {
    const [fave, setFave] = useState(false)
    return (
        <div className={`CCBg ${isCDetsopen ? `show` : `hide`}`}>
            <div className="CCContainer">
                <div className="MTitle">
                    <div className="title">
                        {`#${channelTitle}`}
                    </div>
                    <button className="CCcloseBtn" onClick={() => isCDetsopen(false)}>X</button>
                </div>
                <div className="decor1">
                    {!fave ? <UnFave width="25" height="25" onClick={() => setFave(true)} /> : <Fave width="25" height="25" onClick={() => setFave(false)} />}
                </div>
            </div>
        </div>
    )
}