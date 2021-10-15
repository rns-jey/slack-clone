import { useEffect } from "react"

export default function ChatHeader({ id, type }) {

  useEffect(() => {
    let isMounted = true;
    
    return () => {
      isMounted = false;
    };
  })

  return (
    <>
    </>
  )
}