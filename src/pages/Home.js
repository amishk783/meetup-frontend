import { Fragment } from "react";
import { Link,useNavigate } from "react-router-dom";
import groupImage from "../assests/group-img.jpg";
import signUpImage from "../assests/signUpImage.jpg";
import MeetupCard from "../components/ui/MeetupCard";

import { categoriesDetails } from "../constants/constant";
import { meetupBlog } from "../constants/constant";
import MeetupBlogCard from "../components/ui/MeetupBlogCard";
import useGet from "../Hooks/useGet";
import FeedBackToast from "../components/common/Functionality/FeedBackToast";

const Home = () => {
  const navigate = useNavigate();

  const {data:meetupDetails,isLoading,error} = useGet("meetup/get-all-meetups");


  return (
    <Fragment>
      {error && <FeedBackToast isOpen={true} message="Something went wrong, please try again later" code="failure" />}
      {/* hero section */}
      <section className="w-full flex md:flex-row flex-col items-center xl:gap-10 max-container pt-12 pl-4 md:mb-8 ">
        <div className="relative pt-5 xl:w-3/5 flex flex-col items-start w-full max-xl:padding-x md:mt-10 ">
          <h1 className="mt-10 font-palaquin text-4xl max-sm:leading-[3.25rem] font-bold max-xl:text-[42px]">
            The Community Hub — Where Passions Turn into Connections.
          </h1>
          <p className="text-xl font-montserrat text-slate-gray inline-block mt-5 px-2">
            Whether you're into trekking, literature, professional networking,
            or sharing skills, countless like-minded individuals await on
            Meetup. Daily events are unfolding — become a part of the
            excitement.
          </p>
          <button className="pr-4 mt-5 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">
            <Link to="/signup">Join Meetup</Link>
          </button>
        </div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0  z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#801542] to-[#9089fc] opacity-1 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
        <div className="relative mt-8 xl:flex-1 w-full max-xl:padding-x ">
          <img
            src={groupImage}
            alt="group"
            width={500}
            height={500}
            className="relative hover:opacity-90"
          />
        </div>
      </section>

      {/* upcoming meetup */}
      <section className="max-container max-xl:mt-5  ">
        <div className="flex flex-col justify-start gap-5 border-b-2z border-slate-800 max-xl:mx-5  ">
          <div className="flex flex-row justify-between items-baseline">
            <h2 className="text-3xl  font-palanquin font-bold">
              Upcoming online events
            </h2>
            <Link
              className=" text-xl mr-16 max-sm:hidden text-red-600 hover:transition hover:opacity-95 hover:scale-105 hover:border-b-2 hover:border-red-500"
              to="/AllMeetup"
            >
              See all events
            </Link>
          </div>
        </div>
        <div className="mt-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14 max-xl:mx-10">
          {meetupDetails.map((meetup) => (
            <Link key={meetup.id} to={`meetups/${meetup.id}`}>
              <MeetupCard
                key={meetup.id}
                title={meetup.title}
                img={meetup.image}
                date={meetup.date}
                hostedby={meetup.hostBy}
              />
            </Link>
          ))}
        </div>
      </section>

      {/* signup block */}
      <section className="w-full flex sm:flex-row flex-col  xl:gap-9  max-container pt-5 pl-4 xl:pl-20">
        <div className="relative xl:w-3/5 flex flex-col justify-center items-start  w-full max-xl:padding-x">
          <h2 className="mt-10 font-palaquin text-2xl max-sm:text-[42px] max-sm:leading-[3.25rem] font-bold">
            Join Meetup
          </h2>
          <p className="text-xl font-montserrat text-slate-gray inline-block mt-5 max-lg:mr-8">
            People use Meetup to meet new people, learn new things, find
            support, get out of their comfort zones, and pursue their passions,
            together. Membership is free.
          </p>
          <button
            onClick={() => navigate("/signup")}
            className="mr-4 mt-5 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
          >
            Sign Up
          </button>
        </div>
        <div className="relative mt-8 xl:flex-1 w-full max-xl:padding-x ">
          <img
            src={signUpImage}
            alt="group"
            width={250}
            height={200}
            className="relative z-10 hover:opacity-90"
          />
        </div>
      </section>
      {/* categories */}
      <section className="max-container mt-12 max-sm:mt-12 max-xl:sm:px-8">
        <div className="flex flex-col justify-start gap-5">
          <h2 className="text-3xl font-palanquin font-semibold max-sm:text-[35px] max-sm:ml-5 ">
            Explore top categories
          </h2>
          <div className="mt-5 grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 sm:gap-6 gap-14">
            {categoriesDetails.map((category) => (
              <div
                key={category.title}
                className="flex flex-col justify-center items-center m-3"
              >
                <img
                  src={category.icon}
                  alt={category.title}
                  width={60}
                  className="mb-2"
                ></img>
                <h3 className=" text-center text-lg font-semibold mt-2 flex-wrap text">
                  {category.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* meetup blog */}
      <section className="max-container mt-16 ">
        <div className="flex flex-col justify-between max-sm:text-[35px] max-sm:pl-8 max-xl:sm:px-8">
          <h1 className="text-3xl font-semibold mb-5 ">
            Friendships are made on Meetup
          </h1>
          <p className=" text-lg text-clip w-full text-gray6 sm:w-3/4 md:mb-2">
            Since 2002, members have used Meetup to make new friends, meet
            like-minded people, spend time on hobbies, and connect with locals
            over shared interests. Learn how.
          </p>
        </div>
        <div className="mt-8 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14 max-xl:mx-10">
          {meetupBlog.map((blog) => (
            <MeetupBlogCard
              key={blog.title}
              name={blog.title}
              description={blog.description}
              img={blog.image}
            />
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
