import { useNavigate } from "react-router-dom";


const HomePage = (props) => {

    const navigate = useNavigate();

    return (<div>
        <span>This is my home page</span>


        <button onClick={() => { navigate("/form")}}>Redirect to form</button>
    </div>)
};
export default HomePage;