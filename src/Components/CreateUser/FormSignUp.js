import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import "./signUp.css";
import SideModule from '../assets/sideModule';
import { Link } from "react-router-dom";


const baseUrl = "http://206.189.91.54//api/v1/auth/"


function FormSignUp() {
    const history = useHistory();
    const [values, setValues] = useState({
        email: '',
        password: '',
        password_confirmation: '',
    })
    const [apiErr, setapiErr] = useState(false)
    const [errors, setErrors] = useState({})
    const [commit, setCommit] = useState(false)

    //handle the user inputs in forms
    function handleChange(e) {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
        setapiErr(null);
        setErrors({})
    }

    //on submit, run validateInfo for the user inputs
    const handleSubmit = e => {
        e.preventDefault();
        let setofErrors = validateInfo(values)
        setErrors(setofErrors)
    }

    //check if the input values follow correct syntax, show error on html
    function validateInfo(values) {
        let errors = {}
        if (!values.email) {
            errors.email = "Email required"
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = "Email address is invalid"
        } else if (!values.password) {
            errors.password = "Password is required"
        } else if (values.password.length < 6) {
            errors.password = "Passwords needs to be 6 characters or more"
        } else if (!values.password_confirmation) {
            errors.password_confirmation = "Password is required"
        } else if (values.password_confirmation !== values.password) {
            errors.password_confirmation = "Passwords do not match"
        } else {
            CreateUser()
            setapiErr(null)
        }
        return errors;
    };

    //post the user values to API, change value of commit to true
    function CreateUser() {
        axios
            .post(baseUrl, values)
            .then((response) => {
                setCommit(true)
                setapiErr(null)
                console.log('then', response)
            }).catch(error => {
                setapiErr(`This email already has an account`)
            });
    };

    //switch to LogIn page, once the user values pushed/posted to API
    if (commit) {
        history.push('./login')
        return null
    } else {
        return (
            <div className="loginRegisPage">
                <SideModule isThisLogIn={false} />
                <div className="FormSignUp">
                    <p className="subheading mb-15">We suggest using the <b>email address you use at work.</b></p>
                    <form onSubmit={handleSubmit}>
                        {apiErr ? <div className="errorMsg catch">{`${apiErr}`}</div> : null}
                        <div className="form-inputs">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                className={`form-input w-100 ${errors.email ? 'errorValue' : null}`}
                                type="text"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                placeholder="name@work-email.com"
                            />
                            {errors.email && <p className="error alignLeft">{errors.email}</p>}
                        </div>

                        <div className="form-inputs">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input type="password"
                                className={`form-input w-100 ${errors.password ? 'errorValue' : null}`}
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                value={values.password}
                                onChange={handleChange}

                            />
                            {errors.password && <p className="error alignLeft">{errors.password}</p>}
                        </div>

                        <div className="form-inputs">
                            <label htmlFor="password_confirmation" className="form-label">
                                Confirm password
                            </label>
                            <input type="password"
                                className={`form-input w-100  mb-15 ${errors.password_confirmation ? 'errorValue' : null}`}
                                id="password_confirmation"
                                name="password_confirmation"
                                placeholder="Re-type your password"
                                value={values.password_confirmation}
                                onChange={handleChange}
                            />
                            {errors.password_confirmation && <p className="error alignLeft">{errors.password_confirmation}</p>}
                        </div>

                        <button className="loginRegisbtn" type="submit">Continue</button>

                        <div className="emailBox">
                            <input
                                type='Checkbox' id="Checkbox" name="Checkbox" />
                            <label htmlFor="Checkbox" className="form-label">  It's okay to send me email about Slack</label>
                        </div>
                        <div className="terms">
                            By continuing, you're agreeing to our Customer Terms of Service, Privacy Policy, and Cookie Policy.
                        </div>
                    </form>
                    <hr className="line" />
                    <div className="linktoLogInorRegister">
                        <span>Already have an account? </span>
                        <Link to="/login" className="toLogorRegislink">Sign in instead</Link>
                    </div>
                </div>
            </div>
        )
    };
};

export default FormSignUp;
