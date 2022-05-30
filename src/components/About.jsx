import React from "react";
import Exemplu2 from "../assets/bf3.jpeg";
import Exemplu3 from "../assets/bf2.jpeg";
import Exemplu4 from "../assets/bf1.jpeg";
import Exemplu5 from "../assets/bf4.jpeg";
import Exemplu6 from "../assets/bf6.jpeg";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-r from-sky-500 to-indigo-500 text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Buna
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl font-bold">
            <p>
              Suntem o echipa devotata curateniei si indeplinirii tuturor
              nevoilor clientilor. Vezi exemple cu lucrari facute ca la carte.
              Curat murdar ar fi mandrii de noi.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${Exemplu2})` }}
        className=" min-h-screen bg-no-repeat bg-center"
      ></div>
      <div
        style={{ backgroundImage: `url(${Exemplu3})` }}
        className="min-h-screen bg-no-repeat bg-center"
      ></div>
      <div
        style={{ backgroundImage: `url(${Exemplu4})` }}
        className="min-h-screen bg-no-repeat bg-center"
      ></div>
      <div
        style={{ backgroundImage: `url(${Exemplu5})` }}
        className="min-h-screen bg-no-repeat bg-center"
      ></div>
      <div
        style={{ backgroundImage: `url(${Exemplu6})` }}
        className="min-h-screen bg-no-repeat bg-center"
      ></div>
    </div>
  );
};

export default About;
