import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MeetupCard from "./MeetupCard";

const UpcomigMeetup = () => {
  const [meetupDetails, setmeetupList] = useState([]);

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
    <section className="max-container max-xl:mt-5  ">
      <div className="flex flex-col justify-start gap-5 border-b-2z border-slate-800 max-xl:mx-5  ">
        <div className="flex flex-row justify-between items-baseline">
          <h2 className="text-3xl  font-palanquin font-bold">
            Upcoming online events
          </h2>
          <Link
            className=" text-xl mr-16 max-sm:hidden text-red-600 hover:transition hover:opacity-95 hover:scale-105 hover:border-b-2 hover:border-red-500"
            to="/AllMeetup"
          >
            See all events
          </Link>
        </div>
      </div>
      <div className="mt-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14 max-xl:mx-10">
        {meetupDetails.map((meetup) => (
          <Link key={meetup.id} to={`meetups/${meetup.id}`}>
            <MeetupCard
              key={meetup.id}
              name={meetup.name}
              img={meetup.image}
              date={meetup.date}
              hostedby={meetup.name}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default UpcomigMeetup;
