import { useEffect, useState } from "react";

export function useForm(initialValues, submitHandler) {
    const [values, setValues] = useState(initialValues);

    useEffect(() => {
        setValues(initialValues);

    }, [initialValues]);

    const onChange = (e) => {
        setValues((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        submitHandler(values);

        setValues(initialValues);
    };

    return {
        values,
        onChange,
        onSubmit,
    };
};