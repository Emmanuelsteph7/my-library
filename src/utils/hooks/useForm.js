import { useState } from "react";

const useForm = (initialValues = {}, callback) => {
  const [inputs, setInputs] = useState(initialValues);

  const handleChange = (e) => {
    if (e.target.type === "file") {
      return handleFile(e);
    }
    setInputs((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.type === "checkbox"
          ? e.target.checked
          : e.target.type === "file"
          ? e.target.files
          : e.target.value,
    }));
  };

  const handleFile = (e) => {
    const file = e.target.files[0];

    if (file) {
      // if (file && file.type.startsWith("image")) {
      setInputs((prev) => ({
        ...prev,
        [e.target.name]: file,
      }));
    } else {
      setInputs((prev) => ({
        ...prev,
        [e.target.name]: null,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    callback();
  };

  return [inputs, handleChange, handleSubmit];
};

export default useForm;
