import groupImage from "./group-img.jpg";
const Slider = () => {
  return (
    <section className="w-full flex md:flex-row flex-col items-center xl:gap-10 max-container pt-12 pl-4 md:mb-8 ">
      <div className="relative pt-5 xl:w-3/5 flex flex-col items-start w-full max-xl:padding-x md:mt-10 ">
        <h1 className="mt-10 font-palaquin text-4xl max-sm:leading-[3.25rem] font-bold max-xl:text-[42px]">
          The Community Hub — Where Passions Turn into Connections.
        </h1>
        <p className="text-xl font-montserrat text-slate-gray inline-block mt-5 px-2">
          Whether you're into trekking, literature, professional networking, or
          sharing skills, countless like-minded individuals await on Meetup.
          Daily events are unfolding — become a part of the excitement.
        </p>
        <button className="pr-4 mt-5 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">
          Join Meetup
        </button>
      </div>
      <div className="relative isolate">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0  z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#801542] to-[#9089fc] opacity-1 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
      <div className="relative mt-8 xl:flex-1 w-full max-xl:padding-x ">
        <img
          src={groupImage}
          alt="group"
          width={500}
          height={500}
          className="relative hover:opacity-90"
        />
      </div>
    </section>
  );
};

export default Slider;
