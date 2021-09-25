import React from 'react'
import useForm from './useForm';
import validateInfo from './validateInfo';

function FormSignUp(submitForm){
    const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validateInfo);
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
                <label htmlFor="password2" className="form-label">
                </label>Confirm password
                <input type="password" className="form-input" id="password2" 
                name="password2" placeholder="Confirm your password"
                value={values.password2}
                onChange={handleChange}
                />
                {errors.password2 && <p>{errors.password2}</p>}
            </div>
            <button className="signUpBtn" type="submit">Sign Up</button>
            <span className="linktoLogin">
                Already have an account? Login <a href='/login'>here</a>
            </span>
            </form>
        </div>
    )
};

export default FormSignUp
