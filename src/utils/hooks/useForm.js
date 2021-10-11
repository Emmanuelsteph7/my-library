import { useState } from "react";

const useForm = (initialValues = {}, callback) => {
  const [inputs, setInputs] = useState(initialValues);

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    callback();
  };

  return [inputs, handleChange, handleSubmit];
};

export default useForm;
