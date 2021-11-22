import { useCallback, useState } from "react";
import axios from "axios";

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleFetch = useCallback(async (url, method = "get", body, config) => {
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
      setError(error);
      setLoading(false);
    }
  }, []);

  return {
    loading,
    data,
    error,
    handleFetch,
  };
};

export default useFetch;
