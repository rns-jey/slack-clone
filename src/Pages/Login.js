import React from "react";
import Bottomlinks from "../Components/assets/Bottomlinks";
import LoginForm from "../Components/Login/LoginForm";
import { Redirect } from "react-router"

export default function LogUser(){
  const user = (localStorage.getItem('uid') ? localStorage.getItem('uid') : '')

  return (
    <>
      {
        user.length > 0 ?
        <Redirect to="/home" /> :
        <>
          <LoginForm />
          <Bottomlinks/>
        </>
      }
    </>
  )
}

