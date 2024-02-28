import { useState, useEffect } from "react";
import { host } from "../constants/constant";
const useGet = (url, token = null, id = null) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const Fetch = async () => {
      const fetchUrl = `${host}/${url}`;
      try {
        const response = await fetch(fetchUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token} `,
          },
        });
        const data = await response.json();

        if (!response.ok) throw new Error("Something went wrong!");

        setData(data.meetup);
        setIsLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    Fetch();
  }, [token, id, url]);
  return {
    data,
    isLoading,
    error,
  };
};

export default useGet;
