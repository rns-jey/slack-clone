import React from 'react';
import Bottomlinks from '../../assets/Bottomlinks';
import FormSignUp from '../../CreateUser/FormSignUp';
import { Redirect } from "react-router"


export default function Register() {
    const user = (localStorage.getItem('uid') ? localStorage.getItem('uid') : '')

    return (
        <>
            {
                user.length > 0 ?
                <Redirect to="/home" /> :
                <>
                    <FormSignUp />
                    <Bottomlinks/>
                </>
            }
        </>
    )
};

