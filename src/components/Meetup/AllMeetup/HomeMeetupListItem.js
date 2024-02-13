import React from "react";

const HomeMeetupListItem = ({ image, description, name, address }) => {
  return (
    <div className="flex w-2/3 max-sm:w-full xl:m-8 transition duration-300 ease-in-out transform hover:scale-105 pb-5 mb-3 ">
      <img
        src={image}
        alt={name}
        className="w-[395px] h-[171px] rounded-md xl:mb-5 max-sm:h-[150px] max-sm:w-[150px]"
      ></img>
      <div className="w-2/3 ml-5 pl-5 flex-col justify-between items-center">
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
    </div>
  );
};

export default HomeMeetupListItem;
