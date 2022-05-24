import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-r from-sky-500 to-indigo-500"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Be Clean
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-indigo-200">
          Servicii Profesionale de Curatenie in Timisoara
        </h2>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:indigo-700 hover:indigo-700">
            Ce oferim
            <span className="group-hover:rotate-180 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
