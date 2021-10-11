import { useState, useEffect } from "react";

const useLocalStorage = (key, val) => {
  const [value, setValue] = useState(localStorage.getItem(key) || val);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);

  const removeItem = () => {
    localStorage.removeItem(key);
  };
  return [value, setValue, removeItem];
};

export default useLocalStorage;
