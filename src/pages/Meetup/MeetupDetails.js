import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import SHOWMAP from "../../components/common/Functionality/Map";
import { host } from "../../constant/constant";
const MeetupDetails = () => {
  const [meetup, setMeetup] = useState(null);
  const token = localStorage.getItem("token");

  let id = useParams();
  console.log("hello");
  useEffect(() => {
    const fetchMeetup = async () => {
      const url = `${host}/meetup/get-meetup`;
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token} `,
          },
          body: JSON.stringify(id),
        });
        const data = await response.json();
        if (!response.ok) console.log(data.message);

        setMeetup(data.meetup);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMeetup().catch((error) => {
      console.log(error);
    });
  }, [token, id]);
  if (!meetup) {
    return null; // or a loading indicator or any other suitable content
  }

  return (
    <Fragment>
      <div className="flex flex-grow flex-col py-20 max-container ">
        <main className="flex flex-grow flex-col items-center justify-between pt-5">
          <div className="px-5 w-full border-b border-shadowColor bg-white py-2 lg:py-6">
            <div className="md:max-w-screen mx-auto">
              <h1 class="overflow-hidden overflow-ellipsis text-3xl font-bold leading-snug">
                Stories of Sourcing from the World
              </h1>
              <div className="border-b px-5">
                <h1 className="text-3xl">{meetup.name}</h1>
                <div className="flex flex-col">
                  <h2>Hosted by</h2>
                  <h2>{meetup.name}</h2>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-between border-t border-gray2 bg-gray1 pb-6 lg:px-5">
              <div className="md:max-w-screen w-full bg-gray1">
                <div className="flex flex-col-reverse lg:flex-row">
                  <div className="flex flex-grow flex-col lg:mt-5">
                    <div className="lg:max-w-2xl"></div>
                    <div className="mt-0 w-full lg:mt-8">
                      <img
                        src={meetup.image}
                        className="h-[210px] rounded-md mb-5"
                        width={375}
                        // height={100}
                        alt="meetup"
                      />
                    </div>
                    <div className="px-6 sm:px-4 xl:px-0 md:max-w-screen mt-5 w-full">
                      <div className="mb-5 flex items-center justify-between">
                        <h2 class="text-xl font-semibold">Details</h2>
                      </div>
                      <div className="">{meetup.description}</div>
                    </div>
                  </div>
                  <div className="w-100 lg:mx-0 lg:ml-28 lg:mt-10 lg:w-90">
                    <div className="top-24 sticky flex flex-col ">
                      <div className=" bg-slate-300 px-5 pb-3 pt-6 sm:pb-4.5 lg:py-5 lg:rounded-b-2xl lg:rounded-t-2xl ">
                        <div className="px-5 py-2 bg-red-600 rounded-md text-center text-white text-lg">
                          Date:{meetup.date}
                        </div>
                        <div className="flex flex-col max-w-xs justify-around bg-zinc-300  mx-5 mt-8 px-5 pb-3 pt-6 sm:pb-4.5 lg:py-5 lg:rounded-b-2xl lg:rounded-t-2xl">
                          <div className="leading-normal">
                            <h2>Date:{meetup.date}</h2>
                            <h2 className="">Addrress:{meetup.address}</h2>
                          </div>
                        </div>
                      </div>
                      <div className="my-10 flex-1">
                        <SHOWMAP address={meetup.address} />
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
