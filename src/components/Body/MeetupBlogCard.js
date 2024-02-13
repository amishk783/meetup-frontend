
const MeetupBlogCard = ({ name, img, description }) => {
  return (
    <div className="flex-1 justify-between flex-col w-full max-sm:w-full">
      <img
        src={img}
        alt={name}
        className="w-[395px] h-[171px] rounded-md mb-5"
      ></img>
      <div className="mr-14">
        <h1 className=" font-montserrat text-lg font-semibold leading-normal mr-3 text-slate-gray">
          {name}
        </h1>
        <p className="mt-2 text-lg leading-normal font-normal font-palanquin">
          {description}
        </p>

        <p className="mt-2 text-base leading-normal font-semibold font-palanquin">
          Read More
        </p>
      </div>
    </div>
  );
}

export default MeetupBlogCard