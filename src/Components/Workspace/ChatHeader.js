import { useEffect } from "react"
import { getChannelDetail } from "../../../^/untitled/Untitled-1";

export default function ChatHeader({ id, type }) {

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
        
      });
    }

    return () => {
      isMounted = false;
    };
  })

  return (
    <>
    </>
  )
}