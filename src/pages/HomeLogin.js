import { Fragment } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeMeetupList from "../components/Meetup/AllMeetup/HomeMeetupList";
import DatePicker from "../components/common/DatePicker";
import Filter from "../components/common/Functionality/Filter";

const HomeLogin = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  const [filter, setFilter] = useState("Today");

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };
  if (!user) {
    navigate("/signup");
  }

  const username = user.name;

  return (
    <Fragment>
      <div className="max-container pt-12 flex flex-grow flex-col z-10 ">
        <div className="relative flex flex-grow flex-col items-center pt-12">
          <div className=" sm:px-4 xl:px-4 mx-auto mt-6 w-full px-4 pb-14 md:max-w-screen-xl lg:px-10 ">
            <div className="mb-5 mt-8 flex flex-col justify-between sm:mt-4 gl:flex-row">
              <div className="w-full px-5">
                <h1 className="text-3xl font-bold leading-10 gl:text-heading">
                  Welcome, {username}
                </h1>
                <h2 className="mt-5  text-xl font-medium leading-9 ">
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
                  <Filter handleFilter={handleFilter} />
                  <HomeMeetupList selectedFilter={filter} />
                </div>
              </div>
              <div className="sticky top-24 hidden h-[652px] w-[160px] pt-4 xl:block"></div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeLogin;
