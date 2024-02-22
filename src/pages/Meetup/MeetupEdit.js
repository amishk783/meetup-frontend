import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";


import MeetUpForm from "../../components/Meetup/MeetupForm";
import { Loader } from "lucide-react";
import useApi from "../../Hooks/useGet";

const MeetupEdit = () => {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  // const [meetup, setMeetup] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleLoadingChange = (newLoading) => {
    setIsLoading(newLoading);
    console.log("loading" + newLoading);
  };
  const url = "meetup/get-meetup";
  const { meetup } = useApi(url, token, id);

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
        <div className=" w-full xl:w-4/5 flex flex-col justify-center items-center gap-10  ">
          <div className="flex flex-col my-20">
            <div className="m-3 justify-end ">
              <img
                className="w-[500px] h-[200px] rounded-lg"
                alt="meetup"
                src={meetup.image}
              />
            </div>
            <div className="m-4">
              <MeetUpForm
                url={url}
                isEdit={true}
                meetup={meetup}
                handleLoadingChange={handleLoadingChange}
              />
            </div>
          </div>
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
