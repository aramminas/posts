import { useEffect, useState } from "react";
import axios from "axios";

const serverApi = import.meta.env.VITE_SERVER_API || "";

export const usePosts = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await axios.get(serverApi);
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { data, loading, error };
};
