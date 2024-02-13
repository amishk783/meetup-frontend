import { Link } from "react-router-dom";

const PreFooter = () => {
  return (
    <div className="flex justify-start items-start sm:gap-3 flex-wrap max-lg:flex-col w-full mt-5 pt-2 bg-transparent font-semibold border-b border-solid border-slate-50 ">
          <h1 className=" text-[25px] leading-[3.25rem] lg:max-w-md font-palanquin font-bold mx-5 mb-2 text-slate-100 ">
            Create your own Meetup
          </h1>
          <div className="mx-5 mb-5 pb-5 sm:mt-5 items-start">
            <Link
              to=""
              className="align-middle mr-4 bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-md "
            >
              Get Started
            </Link>
          </div>
        </div>
  )
}

export default PreFooter;