import React, {useState} from 'react';
import FormSignUp from '../Components/CreateUser/FormSignUp';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from  './Login';

export default function CreateUser() {
    const [userSubmit, setUserSubmit] = useState(false);

    function submitForm() {
      setUserSubmit(true)  
    }
    return (
        <>
        {!userSubmit ? (<FormSignUp submitForm={submitForm}/>) : 
        (<Router>
          <switch>
            <Route exact path="/login" component={Login} />
          </switch>
        </Router>)}
        </>
    )
};

