import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeMeetupListItem from "./HomeMeetupListItem";

const HomeMeetupList = () => {
  //   const token = localStorage.getItem("token");
  const [meetupList, setmeetupList] = useState([]);

  useEffect(() => {
    const fetchMeetup = async () => {
      const url =
        "https://meetup-backend-d94fd9d78c46.herokuapp.com/meetup/get-all-meetups";
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        console.log(data);
        setmeetupList(data.meetup);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMeetup().catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div className="grid grid-rows-4 pt-12 md:mx-5">
      {meetupList.map((meetup) => (
        <Link key={meetup.id} to={`meetups/${meetup.id}`}>
          <HomeMeetupListItem
            key={meetup.id}
            name={meetup.name}
            description={meetup.description}
            address={meetup.address}
            image={meetup.image}
            date={meetup.date}
          />
        </Link>
      ))}
    </div>
  );
};

export default HomeMeetupList;
