const MeetupCard = ({ title, img, date, hostedby }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full max-sm:flex-row-reverse max-sm:justify-between">
      <img
        src={img}
        alt={title}
        className="w-[282px] h-[153px] max-xl:w-[150px] rounded-md"
      ></img>
      <div className="ml-4 pt-5">
        <h1 className=" font-montserrat text-xl leading-normal font-medium mr-5">
          {title}
        </h1>
        <p className="mt-2 text-sm leading-normal font-normal  text-slate-gray font-palanquin">
          Hosted by : {hostedby}
        </p>

        <p className="mt-2 text-sm leading-normal font-light font-palanquin">
          {date}
        </p>
      </div>
    </div>
  );
};

export default MeetupCard;
