import { useEffect } from "react"

export default function ChatContent({ id, type }) {

  useEffect(() => {
    let isMounted = true;

    return () => {
      isMounted = false;
    };
  });

  return (
    <div className="chat-body">
      
    </div>
  )
}