import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGet from "../../Hooks/useGet";
import SHOWMAP from "../../components/common/Functionality/Map";
import FeedBackToast from "../../components/common/Functionality/FeedBackToast";
const MeetupDetails = () => {
  let { id } = useParams();

  const { data: meetups, isLoading, error } = useGet(`meetup/get-meetup/${id}`);

  return (
    <Fragment>
      {isLoading && <div>Loading...</div>}
      {error && (
        <FeedBackToast
          isOpen={true}
          message="Something went wrong"
          code="failure"
        />
      )}
      <div className="flex flex-grow flex-col py-20 max-container ">
        <main className="flex flex-grow flex-col items-center justify-between pt-5">
          <div className="px-5 w-full  bg-white py-2 lg:py-6">
            <div className="md:max-w-screen mx-auto py-10">
              <div className="flex flex-col border-b  gap-3 pb-5 ">
                <h1 className="text-3xl font-medium w-[40%] border-b-2 border-slate-500 pb-2">
                  {meetups.title}
                </h1>
                <div className="flex flex-col gap-1 mx-2">
                  <p className="text-lg">Hosted by</p>
                  <p className="text-lg font-medium">{meetups.hostBy}</p>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-between  pb-6 lg:px-5">
              <div className="md:max-w-screen w-full ">
                <div className="flex flex-col lg:flex-row">
                  <div className="flex flex-grow flex-col lg:mt-5">
                    <div className="lg:max-w-2xl"></div>
                    <div className="mt-0 w-full lg:mt-8">
                      <img
                        src={meetups.image}
                        className="h-[210px] rounded-md mb-5"
                        width={375}
                        alt="meetup"
                      />
                    </div>
                    <div className="px-6 sm:px-4 xl:px-0 md:max-w-screen my-5 w-full">
                      <div className="mb-5 flex items-center justify-between">
                        <h2 class="text-3xl pt-2 font-semibold">Details</h2>
                      </div>
                      <h3 className="text-base">{meetups.description}</h3>
                    </div>
                  </div>
                  <div className="w-100 lg:mx-0 lg:ml-28 lg:mt-10 lg:w-90">
                    <div className="top-24 sticky flex flex-col ">
                      <div className=" bg-amber-100 px-5 pb-3 pt-6 sm:pb-4.5 lg:py-5 lg:rounded-b-2xl lg:rounded-t-2xl ">
                        <div className="flex flex-col leading-normal gap-8 py-5">
                          <h2 className="text-lg">Date : {meetups.date}</h2>
                          <h2 className="text-lg">
                            Address :{meetups.address}
                          </h2>
                        </div>
                      </div>
                      <div className="my-10 flex-1">
                        <SHOWMAP address={meetups.address} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
};

export default MeetupDetails;
