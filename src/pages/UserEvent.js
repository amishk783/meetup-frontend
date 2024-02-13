import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import UserMeetupCard from "../components/UserMeetup/UserMeetupCard";
import MeetupDetails from "./Meetup/MeetupDetails";
const UserEvent = () => {
  const [meetups, setMeetup] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://meetup-backend-d94fd9d78c46.herokuapp.com/meetup/get-meetups";
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token} `,
          },
        });
        if (!response.ok) {
          console.log("something went wrong");
        }
        const data = await response.json();
        setMeetup(data.allmeetup);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData().catch((error) => {
      console.log(error);
    });
  }, [token]);

  const meetupClickHandler = (id) => {
    console.log("clicked");
    navigate(`${id}`);
    // <Link to={`your-meetup/${id}`} />
  };
  const meetupEditHandler = (id) => {
    navigate(`edit/${id}`);
  };
  console.log(meetups);
  const meetupRemoveHandler = async (id) => {
    console.log("click" + id);
    setMeetup((prevMeetup) => prevMeetup.filter((meetup) => meetup.id !== id));
    console.log(meetups);
    try {
      const url = "http://localhost:3003/meetup/delete-meetup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id: id }),
      });
      const data = await response.json();

      if (!response.ok) {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col  h-screen">
      <Header />
      <div className="flex-1 my-20 ">
        <div className="max-container  pt-12 pb-8">
          <div className="flex flex-col xl:flex-row justify-between items-start">
            <div className="hidden xl:block xl:w-1/3">
              <div className="xl:m-20 xl:pl-10 text-3xl">
                <Link
                  to="/home"
                  className="bg-neutral-400 px-3 py-2 rounded-md"
                >
                  Back
                </Link>
              </div>
            </div>
            <div className="w-full max-sm:pr-8 overflow-hidden">
              <h1 className="text-3xl p-4 mt-2">Your Events</h1>
              {meetups.map((meetup) => (
                <UserMeetupCard
                  key={meetup.id}
                  id={meetup.id}
                  name={meetup.name}
                  description={meetup.description}
                  address={meetup.address}
                  image={meetup.image}
                  date={meetup.date}
                  onClick={meetupClickHandler}
                  onRemove={meetupRemoveHandler}
                  onEdit={meetupEditHandler}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserEvent;
