import {useState} from "react";
import {Link} from "react-router-dom";
import "../styles/login.css";

function Login(){

    const [username, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const displayButton = () => {
        return (
            <>
                <Link to="/chat"
                className={username == "" ? "none": "block"}
                >Chatting</Link>
            </>
        )
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="Write your name"
            onChange={e => setName(e.target.value)}
            />
            <button>Login in</button>
            {displayButton()}
        </form>
        </>
    )
}

export default Login;