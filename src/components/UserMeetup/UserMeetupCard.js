import React from "react";

const UserMeetupCard = ({
  id,
  name,
  address,
  description,
  image,
  date,
  onClick,
  onRemove,
  onEdit,
}) => {
  const token = localStorage.getItem("token");

  return (
    <div className="flex flex-col xl:flex-row xl:w-2/3 max-sm:w-full xl:m-8 transition duration-300 ease-in-out transform hover:scale-105">
      <img
        onClick={() => onClick(id)}
        src={image}
        alt={name}
        className="w-[395px] h-[171px] rounded-md mb-5  ml-5  "
      ></img>
      <div className="xl:w-2/3 xl:ml-5 xl:pl-5 flex-col xl:justify-between xl:items-center  ml-5">
        <h1 className="font-montserrat text-2xl font-semibold leading-normal mr-3 text-slate-gray">
          {name}
        </h1>
        <p className="mt-2 text-base leading-normal font-normal font-palanquin">
          {description}
        </p>
        <p className="mt-2 text-lg leading-normal font-normal font-palanquin">
          {address}
        </p>
      </div>
      <div className="flex flex-row  mr-3 max-sm:justify-end space-x-3 lg:flex-col items-center">
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
