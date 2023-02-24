import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./home.css";
import SignUpForm from "./sign-up-form-ant";
import SignInForm from "./sign-in-form-ant";

const HomePage = (props) => {

    const navigate = useNavigate();

    // 2 modes. "sign-in" or "sign-up"
    const [pageMode, setPageMode] = useState("sign-up")

    const tabOnClick = (mode) => {
        setPageMode(mode)
    }

    return (<div className="page-wrapper">
        <div className="div-section left-div">
        </div>
        <div className="div-section right-div">
            <div className="form-wrapper">
                <div>
                    <div className="link-wrapper">
                        <a onClick={() => { tabOnClick("sign-in") }} className={`tab-link ${pageMode === "sign-in" && "active"}`}>Sign In</a>
                        <span className="or">or</span>
                        <a onClick={() => { tabOnClick("sign-up") }} className={`tab-link ${pageMode === "sign-up" && "active"}`}>Sign Up</a>
                    </div>
                    {pageMode === "sign-in" &&<SignInForm />}
                    {pageMode === "sign-up" &&<SignUpForm />}
                </div>

            </div>
        </div>
    </div >)
};
export default HomePage;