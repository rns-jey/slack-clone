import React, {useState} from "react";
import CreateChannel from "./addChannel";


export default function Test(){
  const [CCModal, setCCModal] = useState(true)
  return (
    <>
    <button onClick={()=> setCCModal(true)}>click</button>
    {CCModal && <CreateChannel isCCModalopen={setCCModal}/>}
    </>
  )
}