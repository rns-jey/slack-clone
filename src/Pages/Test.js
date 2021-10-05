import React, {useState} from "react";
import CreateChannel from "../Components/addChannel/addChannel";
import AddUsers from "../Components/AddUsers/AddUsers";


export default function Test(){
  const [CCModal, setCCModal] = useState(false)
  const [AUModal, setAUModal] = useState(true)
  return (
    <>
    <button onClick={()=> setCCModal(true)}>click</button>
    {CCModal && <CreateChannel isCCModalopen={setCCModal}/>}
    <button onClick={()=> setAUModal(true)}>addUser</button>
    {AUModal && <AddUsers isAUModalopen={setAUModal}/>}
    </>
  )
}