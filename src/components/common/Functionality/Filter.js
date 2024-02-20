import React from "react";

const Filter = ({handleFilter}) => {



  const handleChange = (e) => {

    handleFilter(e);


   };

  return (
    <div className="w-full bg-zinc-100 rounded-lg">
      <div className="flex gap-5   ">
        <select onChange={handleChange} className="py-4 px-6 rounded-lg text-lg mx-4 my-2 gap-2">
          <option>Today</option>
          <option>Near</option>
          <option>Far</option>
        </select>
        <select className="py-4 px-6 rounded-lg text-lg mx-4 my-2">
          <option>Today</option>
          <option>Near</option>
          <option>Far</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
