import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../Components/Login/LoginForm";
import RedirectToLogin from "../Components/Router/RedirectToLogin";

export default function LogUser(){
  return (
    <>
      <RedirectToLogin />
      <LoginForm />
      <div className="linktoCreateUser">
          <span>New to Slack? </span>
          <Link to="/register">Create an account</Link>
      </div>
    </>
  )
}

