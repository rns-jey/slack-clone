import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../Components/Login/LoginForm";

export default function LogUser(){
  return (
    <>
      <LoginForm />
      <div className="linktoCreateUser">
          <span>New to Slack? </span>
          <Link to="/register">Create an account</Link>
      </div>
    </>
  )
}

