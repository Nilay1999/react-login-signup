import { useState, useEffect } from "react";
import validation from "./validation";

const useForm = () => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        password2: "",
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validation(values));
        setIsSubmitting(true);
    };

    return { handleChange, values, handleSubmit, errors };
};

export default useForm;