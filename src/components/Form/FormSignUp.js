import React from "react";
import useForm from "./useForm";
import validation from "./validation";
import "./Form.css";

function FormSignUp({ submitForm }) {
    const { handleChange, values, handleSubmit, errors } = useForm(
        submitForm,
        validation
    );

    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Login Form</h1>
                <div className="form-inputs">
                    <label htmlFor="Username" className="form-label">
                        Username
                    </label>
                    <input
                        type="text"
                        name="username"
                        className="form-input"
                        placeholder="Enter Username"
                        onChange={handleChange}
                        value={values.username}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="Email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="Enter Email"
                        onChange={handleChange}
                        value={values.email}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>

                <div className="form-inputs">
                    <label htmlFor="Password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        className="form-input"
                        placeholder="Enter Password"
                        onChange={handleChange}
                        value={values.password}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="Password2" className="form-label">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        name="password2"
                        className="form-input"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        value={values.password2}
                    />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button className="form-input-btn" type="submit">
                    Sign Up
                </button>
                <span className="form-input-login">
                    Already have an account ?
                </span>
            </form>
        </div>
    );
}

export default FormSignUp;
