import { useState } from "react";

export default function useForm(submitHandler, initialValues) {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState([]);

  const onChange = (event) => {
    setValues((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {

      setError(null);

      const result = await submitHandler(values);
      if (result && !result.success) {
        setError(result.error);
        console.log("Request failed:", result.data);
      } else {
        console.log('Request success !');
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      setError(error);
    }
  };

  return {
    values,
    onChange,
    onSubmit,
    error,
  };
}
