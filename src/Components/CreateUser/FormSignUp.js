import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const baseUrl = "http://206.189.91.54//api/v1/auth/"

function FormSignUp(){
    let history = useHistory();
    const [values, setValues] = useState({
        email: '',
        password: '',
        password_confirmation:'',
    })
    const [errors, setErrors] = useState({})
    const [verified, setVerify] = useState(false)
    function handleChange(e){
        const {name,value} = e.target
        setValues({
            ...values, 
            [name]: value
        })
    }
    let uploadUser;
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null)


    const handleSubmit = e => {
        e.preventDefault();
        let setofErrors = validateInfo(values)
        setErrors(setofErrors)
        CreateUser();
    }

    function validateInfo(values) {
        let errors = {}
        if(!values.email){
            errors.email = "Email required"
        }else if (!/(.).*?\1/.test(values.email)){
            errors.email = "Email address is invalid"
        }else if (!values.password){
            errors.password = "Password is required"
        }else if (values.password.length < 6){
            errors.password = "Passwords needs to be 6 characters or more"
        }
        else if (!values.password_confirmation){
            errors.password_confirmation = "Password is required"
        }else if (values.password_confirmation !== values.password){
            errors.password_confirmation = "Passwords do not match"
        } else {
            setVerify(true)
            uploadUser = JSON.stringify(values)
        }
        return errors;
    };
    useEffect(() =>{
        axios.get(`${baseUrl}/1`).then((response) =>{
            setPost(response.data)
            console.log(response.data)
        })
    },[]);

    function CreateUser() {
        // const api = axios.create(baseUrl)
        function testing(uploadUser) {
            axios
            .post(baseUrl, values)
            .then((response) =>{
                setPost(response.data)
                testing2()
            }).catch(error =>{
                setError(error);
                console.log(error);
            });
        }
    
        function testing2() {
            if (!post) {return console.log("no post")}
            else {return console.log("with post")}
        }
    if (verified){
    testing(uploadUser);
    testing2()} else {
        console.log(verified)
    }
    }


    // if (verified){
    //     history.push('./login')
    // } else {
    return (
        <div className="FormSignUp">
            <h1>First, enter your email</h1>
            <p>We suggest using the <b>email address you use at work.</b></p>
        <form onSubmit={handleSubmit}>
            <div className="form-inputs">
                <label htmlFor="email" className="form-label">
                </label>Email
                <input 
                type="email" className="form-input" id="email" 
                name="email" placeholder="name@work-email.com"
                value={values.email}
                onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
            </div>

            <div className="form-inputs">
                <label htmlFor="password" className="form-label">
                </label>Password
                <input type="password" className="form-input" id="password" 
                name="password" placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                />
                {errors.password && <p>{errors.password}</p>}
            </div>

            <div className="form-inputs">
                <label htmlFor="password_confirmation" className="form-label">
                </label>Confirm password
                <input type="password" className="form-input" id="password_confirmation" 
                name="password_confirmation" placeholder="Confirm your password"
                value={values.password_confirmation}
                onChange={handleChange}
                />
                {errors.password_confirmation && <p>{errors.password_confirmation}</p>}
            </div>
            <button className="signUpBtn" type="submit">Sign Up</button>
            <span className="linktoLogin">
                Already have an account? Login <a href='/login'>here</a>
            </span>
            </form>
        </div>
    );
};

export default FormSignUp;
