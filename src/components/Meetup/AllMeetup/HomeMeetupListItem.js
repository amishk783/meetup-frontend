import React from "react";

const HomeMeetupListItem = ({ image, description, name, address }) => {
  return (
    <div className="flex  max-sm:w-full xl:m-8 transition duration-300 ease-in-out transform hover:scale-105 pb-5 mb-3 max-sm:bg-zinc-300 max-sm:rounded-md max-sm:p-2 ">
      <img
        src={image}
        alt={name}
        className="w-[395px] h-[171px] rounded-md xl:mb-5 max-sm:h-[170px] max-sm:w-[150px]"
      ></img>
      <div className="ml-5 pl-5 flex-col justify-between items-center">
        <h1 className="font-montserrat text-base xl:text-lg font-semibold leading-normal mr-3 text-slate-gray">
          {name}
        </h1>
        <p className="mt-2 text-sm xl:text-base leading-normal font-normal font-palanquin">
          {description?.substring(0, 70)}...
        </p>
        <p className="mt-2 text-xs xl:text-sm leading-normal font-normal font-palanquin">
          Address : {address}
        </p>
      </div>
    </div>
  );
};

export default HomeMeetupListItem;
