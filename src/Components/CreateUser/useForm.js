import {useState, useEffect} from 'react';
import validateInfo from './validateInfo';

function useForm() {
    const [values, setValues] = useState({
        email: '',
        password: '',
        password2:''
    })
    const [errors, setErrors] = useState({})
    const [userSubmit, setUserSubmit] = useState(false)
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
        setUserSubmit(true)
    }

    // useEffect(
    //     () => {
    //       if (Object.keys(errors).length === 0 && userSubmit) {
    //         callback();
    //       }
    //     },
    //     [errors]
    //   );

    return {handleChange, values, handleSubmit, errors};
}

export default useForm;