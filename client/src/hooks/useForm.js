import { useState } from "react";

export default function useForm(submitHandler, initialValues, validatorSettings) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const validate = () => {
    if (!validatorSettings) {
      return true; // if there is no special validation settings ( Like in register form  :D )
    }

    let validationErrors = {};

    Object.keys(validatorSettings).forEach((fieldName) => {
      const errorMessage = validatorSettings[fieldName](values[fieldName]);
      if (errorMessage) {
        validationErrors[fieldName] = errorMessage;
      } else {
        validationErrors[fieldName] = '';
      }
    });

    setErrors(validationErrors);
    return Object.values(validationErrors).every((error) => !error);
  };

  const onChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setValues((state) => ({
      ...state,
      [fieldName]: fieldValue,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: undefined,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const isValid = validate();
      if (isValid) {
        const result = await submitHandler(values);
        if (result && !result.success) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            form: result.error,
          }));
          console.log("Request failed:", result.data);
        } else {
          console.log("Request success!");
        }
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      setErrors({ form: error.message });
    }
  };

  return {
    values,
    onChange,
    onSubmit,
    errors,
    setValues
  };
}