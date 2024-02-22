import React from "react";
import NotFoundImage from "../assests/notfound.jpg";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
const NotFound = () => {
  return (
    <>
      <Header />
      <div className="m-auto bg-[#ffeed4]">
        <div className=" flex items-center justify-center ">
          <img src={NotFoundImage} alt="not-found" className="w-[800px]" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
