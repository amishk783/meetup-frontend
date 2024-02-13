import {useState,useEffect} from "react";

const useGetFetch = (url, token, id) => {
  const [meetup, setMeetup] = useState([]);
  console.log(url);
  useEffect(() => {
    const prepopulateFetch = async () => {
      const fetchUrl = `https://meetup-backend-d94fd9d78c46.herokuapp.com/${url}`;
      try {
        const response = await fetch(fetchUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token} `,
          },
          body: JSON.stringify({ id }),
        });
        const data = await response.json();
        console.log(data.meetup);
        if (!response.ok) console.log(data.message);

        setMeetup(data.meetup);
      } catch (error) {
        console.log(error);
      }
    };
    prepopulateFetch().catch((error) => {
      console.log(error);
    });
  }, [token, id, url]);

  return {
    meetup,
  };
};

export default useGetFetch;
