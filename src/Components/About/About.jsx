import React from "react";
import AboutImg from "../../assets/niq-logo-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white mb-3 md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg"
    >
      <div>
        <h2 className="text-2xl mt-1 md:text-4xl font-bold">Experience</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80 p-2" src={AboutImg} alt="About img" />
          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Data Processing Analyst
                </h1>
                <h4>
                  2022-Present
                </h4>
                <p className="text-xs md:text-md leading-tight">    
                &emsp; A Data Processing Analyst manages, cleans, and transforms large datasets to ensure they are accurate, structured, and ready for analysis.
                  They use various tools and techniques to optimize data workflows and support data-driven decision-making.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
