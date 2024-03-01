import { Link, useNavigate } from "react-router-dom";

import { ArrowLeft } from "lucide-react";
import UserMeetupCard from "../components/ui/UserMeetupCard";
import { host } from "../constants/constant";
import noMeetupfound from "../assests/images/meetupnotfound.jpg";
import useGet from "../Hooks/useGet";

import SkeletonLoader from "../components/ui/SkeletoonLoader";
import FeedBackToast from "../components/common/Functionality/FeedBackToast";

const UserEvent = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const url = `meetup/get-meetups`;

  const { data: meetups, isLoading, error } = useGet(url, token);

  const meetupClickHandler = (id) => {
    console.log("clicked");
    navigate(`${id}`);
  };
  const meetupEditHandler = (id) => {
    navigate(`edit/${id}`);
  };

  const meetupRemoveHandler = async (id) => {
    console.log("click" + id);
    meetups((prevMeetup) => prevMeetup.filter((meetup) => meetup.id !== id));

    try {
      const url = `${host}/meetup/delete-meetup`;
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
    <div className="flex flex-col">
      <div className="flex-1 my-20 ">
        <div className="max-container pt-12 pb-40">
          <div className="flex flex-col xl:flex-row justify-between items-start pb-40">
            {error &&
              FeedBackToast(
                "Something went wrong, please try again later",
                true,
                "failure"
              )}
            <div className="mx-4 xl:m-1 xl:block xl:w-1/3">
              <div className="flex items-center bg-slate-400 px-3 py-2 rounded-md text-xl gap-1  xl:m-20 xl:pl-10 xl:text-3xl">
                <ArrowLeft />
                <Link to="/home" className="">
                  Back
                </Link>
              </div>
            </div>
            <div className="w-full pb-48 xl:max-container max-sm:pr-8 overflow-hidden">
              <h1 className="text-3xl p-4 mt-2">Your Events</h1>
              {meetups &&
                meetups.map((meetup) =>
                  isLoading ? (
                    <SkeletonLoader />
                  ) : (
                    <UserMeetupCard
                      key={meetup.id}
                      id={meetup.id}
                      title={meetup.title}
                      description={meetup.description}
                      address={meetup.address}
                      image={meetup.image}
                      date={meetup.date}
                      onClick={meetupClickHandler}
                      onRemove={meetupRemoveHandler}
                      onEdit={meetupEditHandler}
                    />
                  )
                )}
              {!meetups && (
                <div className="flex flex-col items-center  py-10  ">
                  <img
                    className=" w-48"
                    src={noMeetupfound}
                    alt="no meetup found"
                  />
                  <h1>No Meetup Found</h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserEvent;
