import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import FormSignUp from '../Components/CreateUser/FormSignUp';
import Login from  './Login';
import useForm from '../Components/CreateUser/useForm';


export default function Register() {

    return (
        <>
        <FormSignUp></FormSignUp>
        </>
    )
};

