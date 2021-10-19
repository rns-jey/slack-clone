import React, { useEffect } from "react";
import Bottomlinks from "../assets/Bottomlinks";
import LoginForm from "./LoginForm/LoginForm";
import { useHistory } from "react-router"

export default function LogUser(){
  const history = useHistory();
  
  useEffect(() => {
    if (localStorage.getItem('uid')) { 
      history.push("/");
    }
  })

  return (
    <>
      <LoginForm />
      <Bottomlinks/>
    </>
  )
}

