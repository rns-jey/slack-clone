import React, { useState, useRef } from "react";

export default function AboutChannel({ channelTitle, isAbout }) {
    const [isTopicEdit, setTopicEdit] = useState(false);
    const [isDescEdit, setDescEdit] = useState(false);
    const topicRef = useRef(null)
    // const initialmsg = `This channel is for.. well, everything else. It's a place for team jokes, spur-of-the-moment ideas, and funny GIFs. Go wild!`

    return (
        <div className={`aboutTab ${isAbout ? `show` : `hide`}`}>
            <div className="aboutTitle">
                <h3>Channel Name</h3>
                <span className="chanTitle">#{channelTitle}</span>
            </div>
            <div className="subAboutCont">
                <div className="aboutSubCont">
                    <div className="subContTitle">
                        <h3>Topic</h3>
                        <span className={isTopicEdit ? 'saveBtn' : 'editBtn'}
                            onClick={() => setTopicEdit(!isTopicEdit)}>
                            {isTopicEdit ? `Save` : `Edit`}
                        </span>
                    </div>
                    <input ref={topicRef}
                        className={`forminput ${isTopicEdit ? null : 'noEdit'}`}
                        placeholder='Add a topic'
                        readOnly={isTopicEdit ? false : true} />
                </div>

                <div className="aboutSubCont">
                    <div className="subContTitle">
                        <h3>Description</h3>
                        <span className={isDescEdit ? 'saveBtn' : 'editBtn'}
                            onClick={() => setDescEdit(!isDescEdit)}>
                            {isDescEdit ? `Save` : `Edit`}
                        </span>
                    </div>
                    <input ref={topicRef}
                        className={`forminput ${isDescEdit ? null : 'noEdit'}`}
                        placeholder={initialmsg}
                        readOnly={isDescEdit ? false : true} />
                </div>

            </div>
        </div>
    )
}