import { Fragment } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import HomeMeetupList from "../components/Meetup/AllMeetup/HomeMeetupList";
import DatePicker from "../components/common/DatePicker";
import Map from "../components/common/Functionality/Map";

const HomeLogin = () => {
  const user = useSelector((state) => state.user.isUser);
  const username = user.name;
  return (
    <Fragment>
      <Header />
      <div className="max-container pt-12 flex flex-grow flex-col z-10 ">
        <div className="relative flex flex-grow flex-col items-center pt-12">
          <div className=" sm:px-4 xl:px-4 mx-auto mt-6 w-full px-4 pb-14 md:max-w-screen-xl lg:px-10 ">
            <div className="mb-5 mt-8 flex flex-col justify-between sm:mt-4 gl:flex-row">
              <div className="w-full">
                <h1 className="text-3xl font-bold leading-10 gl:text-heading">
                  Welcome,{username}
                </h1>
                <h2 className="mt-10 hidden text-2xl font-semibold leading-9 gl:block">
                  Upcoming Events
                </h2>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gl:flex-row gl:gap-10 pt-10 xl:space-x-10">
              <div className="w-[368px]">
                <div className="date">
                  <DatePicker />
                </div>
                <div className="mt-16 rounded-lg bg-gray1 px-4 py-6"></div>
              </div>
              <div className="flex-1">
                <div className="mb-16">
                  <h3 className="border-b-2 border-gray5 pb-3 text-xl font-medium capitalize md:text-xl">
                    Today
                  </h3>
                  <HomeMeetupList />
                  
                </div>
              </div>
              <div className="sticky top-24 hidden h-[652px] w-[160px] pt-4 xl:block">
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </Fragment>
  );
};

export default HomeLogin;
