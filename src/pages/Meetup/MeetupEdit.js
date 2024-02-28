import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";

import MeetUpForm from "../../components/Meetup/MeetupForm";
import { Loader, Loader2 } from "lucide-react";
import useGet from "../../Hooks/useGet";
import FeedBackToast from "../../components/common/Functionality/FeedBackToast";
const MeetupEdit = () => {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);
  const handleLoadingChange = (newLoading) => {
    setLoading(newLoading);
    console.log("loading" + newLoading);
  };
  const url = `meetups/${id}`;
  console.log(id);
  const fetchUrl = `meetup/get-meetup/${id}`;
  const { data: meetup, isLoading, error } = useGet(fetchUrl, token, id);
  console.log(meetup);

  return (
    <Fragment>
      {loading && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 animate-bounce">
          <Loader
            className="w-[55px] h-[55px] animate-spin"
            aria-label="loading"
          />
          <span class="">Sending...</span>
        </div>
      )}
      {isLoading && (
        <div className="w-full h-screen bg-white z-10 absolute">
          <Loader2
            size={48}
            className="text-amber-600 animate-spin text-center z-20 absolute  top-1/2 left-1/2"
          />
        </div>
      )}
      {error && (
        <FeedBackToast
          message="Something went wrong, please try again later"
          isOpen={true}
          code={"failure"}
        />
      )}
      <div className="w-full flex xl:flex-row  gap-10 max-container pt-16 bg-white">
        <div className="flex flex-col my-20 w-full justify-center ">
          <div className="m-3 px-[4rem] ">
            <img
              className="w-[500px] h-[200px] rounded-lg"
              alt="meetup"
              src={meetup.image}
            />
          </div>

          <MeetUpForm
            url={url}
            isEdit={true}
            meetup={meetup}
            handleLoadingChange={handleLoadingChange}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default MeetupEdit;
