import React, { useState } from "react";
import "./Form.css";
//import Axios from "axios";
import { FaGripfire } from "react-icons/fa";
import { FaGithub, FaGoogle } from "react-icons/fa";
import ErrorNotice from "./ErrorNotice";

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const submit = async (e) => {
        e.preventDefault();
        if ((password || email) == null) {
            setError("Please fill all the Field");
        }
        // try {
        //     const loginRes = await Axios.post(
        //         "http://localhost:7000/users/login",
        //         {
        //             email,
        //             password,
        //         }
        //     );
        //     setUserData({
        //         token: loginRes.data.token,
        //         user: loginRes.data.user,
        //     });
        //     localStorage.setItem("auth-token", loginRes.data.token);
        //     history.push("/header");
        // } catch (err) {
        //     err.response.data.msg && setError(err.response.data.msg);
        // }
    };

    return (
        <>
            <span className="login-header">
                <FaGripfire />
                Login
            </span>
            <span className="login-account">
                Don't have an account ?{" "}
                <a href="/signup" className="link">
                    Sign Up
                </a>
            </span>
            <form onSubmit={submit}>
                <div className="form-group">
                    <div className="row">
                        <label className="formLabel">Email</label>
                    </div>
                    <input
                        className="form-control"
                        placeholder="name@example.com"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}></input>
                    {error && (
                        <ErrorNotice
                            message={error}
                            clearError={() => setError(undefined)}
                        />
                    )}
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <label className="formLabel">Password</label>
                        </div>
                        <div className="col-7">
                            <a href="/forgot-password">Forgot password?</a>
                        </div>
                    </div>
                    <input
                        className="form-control"
                        placeholder="Enter Your password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}></input>
                    {error && (
                        <ErrorNotice
                            message={error}
                            clearError={() => setError(undefined)}
                        />
                    )}
                </div>
                <button className="btn form-button">Sign In</button>
                <h3 className="divider">OR</h3>
                <button className="btn git-button">
                    <FaGithub className="icon" />
                    Login with Github
                </button>
                <button className="btn google-button">
                    <FaGoogle className="icon" />
                    Login with Google
                </button>
            </form>
        </>
    );
}

export default Login;
