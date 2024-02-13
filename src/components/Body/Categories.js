import { categoriesDetails } from "../../constants";

const Categories = () => {

  
  return (
    <section className="max-container mt-12 max-sm:mt-12 max-xl:sm:px-8">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-3xl font-palanquin font-semibold max-sm:text-[35px] max-sm:ml-5 ">
          Explore top categories
        </h2>
        <div className="mt-5 grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 sm:gap-6 gap-14">
          {categoriesDetails.map((category) => (
            <div
              key={category.title}
              className="flex flex-col justify-center items-center m-3"
            >
              <img
                src={category.icon}
                alt={category.title}
                width={60}
                className="mb-2"
              ></img>
              <h3 className=" text-center text-lg font-semibold mt-2 flex-wrap text">
                {category.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories