import React from "react";
import Bottomlinks from "../Components/assets/Bottomlinks";
import LoginForm from "../Components/Login/LoginForm";
import { Redirect } from "react-router"

export default function LogUser({ User }){
  return (
    <>
      {
        User.length > 0
        ? <Redirect to="/home" />
        : <>
            <LoginForm />
            <Bottomlinks/>
          </>
      }
    </>
  )
}

