import { useState } from "react";
import { useEffect } from "react"
import { getChannelDetail, getUserDetail } from "../../API/API"
import ChannelDetails from "../channelDetails/ChannelDetails";

export default function ChatHeader({ id, type }) {
  const [chatDetails, setChatDetails] = useState([]);
  const [CDetModal, setCDetModal] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const chatCredentials = {
      id: parseInt(id),
      headers: {
        token: localStorage.getItem("at"),
        client: localStorage.getItem("client"),
        expiry: localStorage.getItem("expiry"),
        uid: localStorage.getItem("uid"),
      },
    };

    if (type === "Channel") {
      getChannelDetail(chatCredentials).then((res) => {
        if (isMounted) setChatDetails(res.data.data);
      });
    } else {
      getUserDetail(chatCredentials).then((data) => {
        if (isMounted) setChatDetails(data[0])
      });
    }

    return () => {
      isMounted = false;
    };
  }, [id])

  return (
    <>
      <div className="chat-header">
        {/* <h2 className={`channelTitle ${type === 'Channel' ? '' : 'noClick'}`} onClick={() => type === 'Channel' ? setCDetModal(true) : null}> */}
        {
          chatDetails
            ?
            parseInt(id) === chatDetails.id
              ?
              type === "Channel"
                ?
                chatDetails.name
                :
                chatDetails.uid
              :
              null
            :
            null
        }
      </h2>
    </div>
      {
    CDetModal && (
      <ChannelDetails
        isCDetsopen={setCDetModal}
        channelID={id}
        channelTitle={
          chatDetails
            ?
            parseInt(id) === chatDetails.id
              ?
              type === "Channel"
                ?
                chatDetails.name
                :
                chatDetails.uid
              :
              null
            :
            null
        }
      />
    )
  }
    </>
  )
}