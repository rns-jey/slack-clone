import React from 'react';
import Bottomlinks from '../Components/assets/Bottomlinks';
import FormSignUp from '../Components/CreateUser/FormSignUp';
import { Redirect } from "react-router"


export default function Register({User}) {
    return (
        <>
            {
                User.length > 0 ?
                <Redirect to="/home" /> :
                <>
                    <FormSignUp />
                    <Bottomlinks/>
                </>
            }
        </>
    )
};

