import React from "react";

const UserMeetupCard = ({
  id,
  title,
  address,
  description,
  image,
  date,
  onClick,
  onRemove,
  onEdit,
}) => {
  return (
    <div className="flex flex-col xl:flex-row xl:w-[70%] max-sm:w-full xl:m-8 xl:gap-8 transition duration-300 ease-in-out transform hover:scale-105">
      <div className="flex xl:justify-between xl:items-center gap-7">
        <img
          onClick={() => onClick(id)}
          src={image}
          alt={title}
          className="w-[395px] h-[171px] rounded-md mb-5  ml-5  "
        ></img>
        <div className="flex flex-col mb-8">
          <h1 className="font-montserrat text-lg font-semibold leading-normal mr-3 text-slate-gray">
            {title}
          </h1>
          <p className="mt-2 text-base leading-normal font-normal font-palanquin">
            {description?.substring(0, 70)}...
          </p>
          <p className="mt-2 text-sm leading-normal font-normal font-palanquin">
            Address : {address}
          </p>
        </div>
      </div>
      <div className="flex flex-row  mr-8 xl:mr-0 max-lg:justify-end space-x-3 xl:space-x-0 lg:flex-col items-center">
        <button
          onClick={() => onRemove(id)}
          className="px-3 py-2 bg-red-500 rounded-md my-2"
        >
          Remove
        </button>
        <button
          onClick={() => onEdit(id)}
          className="px-7 py-2  bg-blue-200 rounded-md my-2"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default UserMeetupCard;
