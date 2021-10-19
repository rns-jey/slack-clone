import React, { useEffect } from "react";
import Bottomlinks from "../Components/assets/Bottomlinks";
import LoginForm from "../Components/Login/LoginForm";
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

