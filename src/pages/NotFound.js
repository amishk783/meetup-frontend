import React from "react";
import NotFoundImage from "../assests/notfound.jpg";
const NotFound = () => {
  return (
    <>
      <div className="m-auto bg-[#ffeed4] ">
        <div className=" flex items-center justify-center ">
          <img src={NotFoundImage} alt="not-found" className="w-[800px]" />
        </div>
      </div>
    </>
  );
};

export default NotFound;
