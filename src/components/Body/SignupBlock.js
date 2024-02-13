import { useNavigate } from "react-router-dom";
import signUpImage from "./signUpImage.jpg";

const SignupBlock = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full flex sm:flex-row flex-col  xl:gap-9  max-container pt-5 pl-4 xl:pl-20">
      <div className="relative xl:w-3/5 flex flex-col justify-center items-start  w-full max-xl:padding-x">
        <h2 className="mt-10 font-palaquin text-2xl max-sm:text-[42px] max-sm:leading-[3.25rem] font-bold">
          Join Meetup
        </h2>
        <p className="text-xl font-montserrat text-slate-gray inline-block mt-5 max-lg:mr-8">
          People use Meetup to meet new people, learn new things, find support,
          get out of their comfort zones, and pursue their passions, together.
          Membership is free.
        </p>
        <button
          onClick={() => navigate("/signup")}
          className="mr-4 mt-5 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
        >
          Sign Up
        </button>
      </div>
      <div className="relative mt-8 xl:flex-1 w-full max-xl:padding-x ">
        <img
          src={signUpImage}
          alt="group"
          width={250}
          height={200}
          className="relative z-10 hover:opacity-90"
        />
      </div>
    </section>
  );
};
export default SignupBlock;
