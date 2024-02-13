import { Fragment, useState } from "react";
import { Loader } from "lucide-react";

import groupImage from "../../assests/images/group-img.jpg";
import MeetUpForm from "../../components/Meetup/MeetupForm";
import Header from "../../components/common/Header/Header";
import Footer from "../../components/common/Footer/Footer";

const Meetup = () => {
  const url = "http://localhost:3003/meetup/add-meetup";
  const initialMeetup = { name: "", address: "", description: "" };
  const [isLoading, setIsLoading] = useState(false);
  const handleLoadingChange = (newLoading) => {
    setIsLoading(newLoading);
    console.log("loading" + newLoading);
  };

  return (
    <Fragment>
      <Header />
      {isLoading && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 animate-bounce">
          <Loader
            className="w-[55px] h-[55px] animate-spin"
            aria-label="loading"
          />
          <span class="">Sending...</span>
        </div>
      )}
      <div className="w-full gap-10 max-container pt-16 bg-white mb-40 ">
        <div className="my-20">
          <div className="flex xl:flex-row flex-col pt-12 z-0">
            <img
              className="pt-15 "
              src={groupImage}
              alt="event"
              height={500}
              width={500}
            ></img>
            <MeetUpForm
              url={url}
              meetup={initialMeetup}
              handleLoadingChange={handleLoadingChange}
            />
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Meetup;
