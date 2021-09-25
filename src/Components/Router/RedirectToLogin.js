import React from "react"
import { Redirect } from "react-router"

export default function RedirectToLogin() {
  const user = (localStorage.getItem('uid') ? localStorage.getItem('uid') : '')

  return (
    <>
      {user ? <Redirect to="/home" /> : <Redirect to="/login" />}
    </>
  )
}