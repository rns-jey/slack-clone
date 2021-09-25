import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import FormSignUp from '../Components/CreateUser/FormSignUp';
import Login from  './Login';
import useForm from '../Components/CreateUser/useForm';


export default function CreateUser() {
    let history = useHistory();

    const [userSubmit, setUserSubmit] = useState(false)

    // function submitForm() {
    //     setUserSubmit(true);
    //   }
    //   useEffect(() => {
    //     console.log(userSubmit)
    // }, [userSubmit]);

    return (
        <>
        {!userSubmit ? (<FormSignUp></FormSignUp>) : (
            history.push("/login")
        )}
        </>
    )
};

