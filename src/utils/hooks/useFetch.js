import { useState } from "react";
import axios from "axios";

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleQuery = async (method = "get", url, body, config) => {
    setLoading(true);

    try {
      const res = await axios({
        method,
        url,
        body,
        config,
      });
      setData(res.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return {
    loading,
    data,
    error,
    handleQuery,
  };
};

export default useFetch;
