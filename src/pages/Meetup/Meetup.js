import { Fragment, useState } from "react";
import { Loader } from "lucide-react";
import { host } from "../../constants/constant"

import MeetUpForm from "../../components/Meetup/MeetupForm";

const Meetup = () => {
  const url = `${host}/meetup/add-meetup`;
  const initialMeetup = { name: "", address: "", description: "" };
  const [isLoading, setIsLoading] = useState(false);
  const handleLoadingChange = (newLoading) => {
    setIsLoading(newLoading);
  };

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
      <div
        className={` flex flex-col w-full gap-10 max-container   pt-10 mb-20   bg-cente`}
      >
        <div className="w-full  bg-meetup-bg  bg-contain xl:bg-bottom bg-no-repeat h-full pt-20 mt-20   fixed -z-10  "></div>
        <div className="mt-20 z-10  ">
          <div className="flex flex-col-reverse justify-center items-center xl:items-start xl:flex-row gap-10  xl:pt-10 xl:gap-40">
            <MeetUpForm
              url={url}
              meetup={initialMeetup}
              handleLoadingChange={handleLoadingChange}
            />
            <div className="w-[350px] md:w-[450px] py-2  xl:w-[600px] rounded-md ">
              <div className="px-4 py-4 bg-amber-100 flex-col rounded-lg">
                <h1 className="text-xl font-medium my-3">
                  {" "}
                  Tips for Awesome event
                </h1>
                <div className="">
                  <h2 className="text-base font-medium">Be Descriptive</h2>
                  <p className="w-[90%]">
                    A good title immediately gives people an idea of what the
                    event is about.
                  </p>
                </div>
                <div className="py-2">
                  <h2 className="text-base my-3 font-medium">Get organized</h2>
                  <p className="w-[90%]">
                    Describe things in a clear order so it's easy to digest.
                    Start with an overall description of the event and include a
                    basic agenda, before you move into really specific details.
                  </p>
                </div>
                <div className="py-2">
                  <h2 className="text-base my-3 font-medium">Featured photo</h2>
                  <p className="w-[90%]">
                    Upload a photo or image to give members a better feel for
                    the event.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Meetup;
