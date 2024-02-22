import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeMeetupListItem from "./HomeMeetupListItem";
import SkeletonLoader from "../../common/Functionality/SkeletoonLoader";
import { host } from "../../../constant/constant";
import FeedBackToast from "../../common/Functionality/FeedBackToast";

const HomeMeetupList = ({ selectedFilter }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [meetupList, setmeetupList] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchMeetup = async () => {
      setIsLoading(true);
      const url = `${host}/meetup/get-all-meetups`;
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
        setError(true);

      }
      setIsLoading(false);
    };

    fetchMeetup().catch((error) => {
      console.log(error);
    });
  }, []);

  const sortedArray = [...meetupList];

  if (selectedFilter === "Today") {
    sortedArray.filter(
      (meetup) => new Date(meetup.date).getDate() === new Date().getDate()
    );
  } else if (selectedFilter === "Near") {
    sortedArray.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (selectedFilter === "Far") {
    sortedArray.sort((a, b) => new Date(b.date) - new Date(a.date));
  }
  console.log(meetupList.length);

  console.log(sortedArray);

  return (
    <div className="grid grid-rows-4 pt-12 md:mx-5">
      {sortedArray &&
        sortedArray.map((meetup) =>
          isLoading ? (
            <SkeletonLoader />
          ) : (
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
          )
        )}
      {error && (
        <FeedBackToast
          message={"Smomething went wrong, please try again later"}
          isOpen={true}
          code={"failure"}
        />
      )}
    </div>
  );
};

export default HomeMeetupList;
