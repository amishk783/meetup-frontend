import SHOWMAP from "../components/common/Functionality/Map";

const ContactUs = () => {
  return (
    <section className="w-full max-container py-36 px-20">
      <h1 className="px-10 text-3xl text-red-600 py-5 ">Contact Us</h1>
      <div className=" p-10 flex flex-col md:flex-row md:gap-28 md:justify-between space-y-5">
        <div className="text-lg py-10">
          <div className="flex flex-col gap-4">
            <p>
              <strong>Email:</strong> support@ctachup.com
            </p>
            <p>
              <strong>Phone:</strong> +1 234 567 890
            </p>
            <p>
              <strong>Address:</strong> 123 Meetup Street, City, Country
            </p>
          </div>
        </div>
        <div className="">
          <SHOWMAP address={"lucknow"} w={350} h={250} />
        </div>
      </div>
      <p className="text-xl pt-10 leading-7">
        We are always open to feedback and suggestions. Your input helps us make
        our platform better and more user-friendly. Don't hesitate to reach out
        to us with your ideas and thoughts.
      </p>
      <p className="pt-5 text-xl text-green-700">
        Thank you for being a part of our community. We look forward to hearing
        from you!
      </p>
    </section>
  );
};

export default ContactUs;
