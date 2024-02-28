import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="mb-2 animate-pulse flex w-2/3 max-sm:w-full">
      <div className=" bg-[#E5E4E2] w-[395px] h-[171px] rounded-md mb-5  ml-5 "></div>
      <div className="flex flex-col  mt-2">
        <div className=" xl:w-2/3 xl:ml-5 xl:pl-5 mb-4  flex-col xl:justify-between xl:items-center  ml-5">
          <p className="bg-[#E5E4E2] w-30 h-2 mt-2 "></p>
        </div>
        <div className="xl:ml-5 xl:pl-5">
          <p className="bg-[#E5E4E2] w-60 h-2 mt-4"></p>
          <p className="bg-[#E5E4E2] w-60 h-2 mt-4"></p>
          <p className="bg-[#E5E4E2] w-60 h-2 mt-4"></p>
          <p className="bg-[#E5E4E2] w-60 h-2 mt-4"></p>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
