import { useState } from "react";

const SignUpForm = (props) => {
    return (<div style={{ marginTop: 20 }}>

        <div className="form-group">
            <label>FULL NAME</label>
            <input type="text" placeholder="Enter your full name" />
        </div>

        <div className="form-group">
            <label>PASSWORD</label>
            <input type="text" placeholder="Enter your full name" />
        </div>

        <div className="form-group">
            <label>E-MAIL ADDRESS</label>
            <input type="text" placeholder="Enter your full name" />
        </div>
        <button>Sign Up</button>
    </div >)
};
export default SignUpForm;