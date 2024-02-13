import { meetupBlog } from "../../constants";
import MeetupBlogCard from "./MeetupBlogCard";

const MeetupBlog = () => {

  
  return (
    <div className="max-container mt-16 ">
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
    </div>
  );
};

export default MeetupBlog;
