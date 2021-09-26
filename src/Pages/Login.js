import React from "react";
import LoginForm from "../Components/Login/LoginForm";
import RedirectToLogin from "../Components/Router/RedirectToLogin";
export default function LogUser(){
  return (
    <>
      <RedirectToLogin />
      <LoginForm />
    </>
  )
}

