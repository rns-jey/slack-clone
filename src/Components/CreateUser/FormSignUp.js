import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import "./signUp.css";
import img from './slackLogo.png'


const baseUrl = "http://206.189.91.54//api/v1/auth/"


function FormSignUp(){
    const history = useHistory();
    const [values, setValues] = useState({
        email: '',
        password: '',
        password_confirmation:'',
    })
    const [verify, setVerify] = useState(false)
    const [errors, setErrors] = useState({})
    const [commit, setCommit] = useState(false)
    const apiCatch = "This email is taken"
    function handleChange(e){
        const {name,value} = e.target
        setValues({
            ...values, 
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        let setofErrors = validateInfo(values)
        setErrors(setofErrors)
    }

//check if the input values follow correct syntax, show error on html
    function validateInfo(values) {
        let errors = {}
        if(!values.email){
            errors.email = "Email required"
        }else if (!/\S+@\S+\.\S+/.test(values.email)){
            errors.email = "Email address is invalid"
        }else if (!values.password){
            errors.password = "Password is required"
        }else if (values.password.length < 6){
            errors.password = "Passwords needs to be 6 characters or more"
        } else if (!values.password_confirmation){
            errors.password_confirmation = "Password is required"
        } else if (values.password_confirmation !== values.password){
            errors.password_confirmation = "Passwords do not match"
        } else {
            setVerify(true)
            CreateUser()
        }
        return errors;
    };
    
    useEffect(()=>{
        setTimeout(function() {
            setVerify(false)
        },8000)
    }, [verify === true])
    
//post the user values to API, change value of commit to true
    function CreateUser() {
        console.log(baseUrl, values)
        axios
        .post(baseUrl, values)
        .then((response) =>{
            setCommit(true)
            console.log('then', response)
        }).catch(error =>{
            console.log(error, "catch");
        });
    };
    
//switch to LogIn page, once the user values pushed/posted to API
    if (commit){
        history.push('./login')
        return null
    } else {
    return (
    <>
        <div className="FormSignUp">
            <img src={img} id="slackLogo"/>
            <h1>Create your Slack Account</h1>
            <p className="subheading">We suggest using the <b>email address you use at work.</b></p>
        <form onSubmit={handleSubmit}>
            {verify?<div className="catch">{`${apiCatch}`}</div>:null}
            <div className="form-inputs">
                <label htmlFor="email" className="form-label">
                Email
                </label>
                <input 
                className="form-input" 
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="name@work-email.com"
                />
                <p className="errorinput">{errors.email}</p>
            </div>

            <div className="form-inputs">
                <label htmlFor="password" className="form-label">
                Password
                </label>
                <input type="password" className="form-input" id="password" 
                name="password" placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                
                />
                {errors.password && <p className="errorinput">{errors.password}</p>}
            </div>

            <div className="form-inputs">
                <label htmlFor="password_confirmation" className="form-label">
                Confirm password
                </label>
                <input type="password" className="form-input" id="password_confirmation" 
                name="password_confirmation" placeholder="Re-type your password"
                value={values.password_confirmation}
                onChange={handleChange}
                />
                {errors.password_confirmation && <p className="errorinput">{errors.password_confirmation}</p>}
            </div>

            <button  className="signUpBtn" type="submit">Sign Up</button>

            <div className="emailBox">
                    <input 
                    type='Checkbox'
                    id="Checkbox"
                    name="Checkbox"
                    />
                    <label htmlFor="Checkbox">  It's okay to send me email about Slack</label>
            </div>
            <div className="terms">
            By continuing, you're agreeing to our Customer Terms of Service, Privacy Policy, and Cookie Policy.
            </div>

            </form>
        </div>
        <span className="linktoLogin">
            <p>Already have an account?</p><a href="./login" id="signinLink">Sign in instead</a> 
        </span>
        <div className="bottomlinks">
            <a href="#" className="bLinks">Privacy & Terms</a>
            <a href="#" className="bLinks">Contact Us</a>
        </div>
    </>
    )};
};

export default FormSignUp;
