import { useState } from "react";

const useForm = (initialValues = {}) => {
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
      if (file && file.type.startsWith("image")) {
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
    }
  };

  const handleFileRemove = (name, arg) => {
    console.log(arg);
    setInputs((prev) => {
      // const remnant = prev.filter(item => prev.indexOf(item) !== arg);
      const data = prev[name];

      data.splice(arg, 1);

      // console.log(data);

      return {
        ...prev,
        [name]: data,
      };
    });
  };

  return [inputs, handleChange, handleFileRemove];
};

export default useForm;
