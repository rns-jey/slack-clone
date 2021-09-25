export default function validateInfo(values) {
    let errors = {}

    if(!values.email){
        errors.email = "Email required"
    } else if (!/(.).*?\1/.test(values.email)){
        errors.email = "Email address is invalid"
    }

    if (!values.password){
        errors.password = "Password is required"
    } else if (values.password.length < 6){
        errors.password = "Passwords needs to be 6 characters or more"
    }

    if (!values.password2){
        errors.password2 = "Password is required"
    } else if (values.password2 !== values.password){
        errors.password2 = "Passwords do not match"
    }
    return errors;
}