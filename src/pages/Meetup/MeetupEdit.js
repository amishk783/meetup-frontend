import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";

import MeetUpForm from "../../components/Meetup/MeetupForm";
import { Loader } from "lucide-react";
import useApi from "../../Hooks/useGet";
import { host } from "../../constants/constant";
const MeetupEdit = () => {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  // const [meetup, setMeetup] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleLoadingChange = (newLoading) => {
    setIsLoading(newLoading);
    console.log("loading" + newLoading);
  };
  console.log(host);
  const url = `meetups/${id}`;
  const fetchUrl = `meetup/get-meetup`;
  const { meetup } = useApi(fetchUrl, token, id);

  return (
    <Fragment>
      {isLoading && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 animate-bounce">
          <Loader
            className="w-[55px] h-[55px] animate-spin"
            aria-label="loading"
          />
          <span class="">Sending...</span>
        </div>
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
        {/* <div className="w-full xl:w-2/5 relative m-4">
          <div className="flex items-center justify-center mt-40 p-20  border-2 border-orange-700 ">
            <div className="w-[100px] h-[100px] border-2 border-orange-700 m-auto"></div>
          </div>
        </div> */}
      </div>
    </Fragment>
  );
};

export default MeetupEdit;
