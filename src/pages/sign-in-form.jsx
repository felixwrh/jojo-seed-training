import { useEffect, useRef, useState } from "react";

const SignInForm = (props) => {

    const [isSubmitted, setSubmitted] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState();
    const [passwordErrorMessage, setPasswordErrorMessage] = useState();
    
    const emailAddressValue = useRef("")
    const passwordValue = useRef("")
   

    const onSignInClick = () => {
        setSubmitted(true)
        console.log(emailAddressValue.current)
        console.log(passwordValue.current)

        let isValid = true;
        isValid = isValid && validateEmailAddress(emailAddressValue.current)
        isValid = isValid && validatePassword(passwordValue.current)

        console.log(isValid)

        if (!isValid) return
        // Reset error messages
        setEmailErrorMessage(undefined)
        setPasswordErrorMessage(undefined)

        // Submit username and password to backend for sign in API operation
    }

    const validateEmailAddress = (value) => {
        if (value.length === 0){
            setEmailErrorMessage("Enail address is required")
            return false;
        }
        if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value))){
            setEmailErrorMessage("Invalid email format")
            return false;
        }
        return true
    }


    const validatePassword = (value) => {
        if (value.length === 0){
            setPasswordErrorMessage("Password is required")
            return false;
        }
        return true
    }

    return (<div style={{ marginTop: 20 }}>

        <div className="form-group">
            <label>E-MAIL ADDRESS</label>
            <input onChange={(event) => {emailAddressValue.current = event.target.value}} type="text" placeholder="Enter your full name" />
            {isSubmitted && emailErrorMessage && <span style={{display: "block", marginTop : 8, color : "red"}}>{emailErrorMessage}</span>}
        </div>

        <div className="form-group">
            <label>PASSWORD</label>
            <input onChange={(event) => {passwordValue.current = event.target.value}} type="text" placeholder="Enter your full name" />
            {isSubmitted && passwordErrorMessage && <span style={{display: "block", marginTop : 8, color : "red"}}>{passwordErrorMessage}</span>}
        </div>

        <button onClick={()=> {onSignInClick()}}>Sign In</button>
    </div >)
};
export default SignInForm;