import { useState } from "react";
import { useEffect } from "react"
import { getChannelDetail } from "../../API/API"

export default function ChatHeader({ id, type }) {
  const [chatDetails, setChatDetails] = useState([]);

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
    }

    return () => {
      isMounted = false;
    };
  }, [])

  return (
    <>
      <div className="chat-header">
        <h2 className="channelTitle"></h2>
      </div>
    </>
  )
}