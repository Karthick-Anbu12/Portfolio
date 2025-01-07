import React from "react";
import avatarImg from "../../assets/Designer-removebg-preview.png";
import TextChange from "../TextChange";
import { CiLinkedin } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
        I’m a driven full-stack developer, eager to showcase my skills in creating dynamic web solutions. Ready to seize opportunities and make an impact through innovative projects.</p>
        <div className="flex">
          <div>
        <a  href="https://drive.google.com/file/d/1zR1Jnc4ABROJtmDCa0C5RTAV14kYXX0C/view?usp=sharing">
        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">Resume</button>
        </a>
        </div>
        <div className="mx-5 mt-1"> 
          <a href="https://www.linkedin.com/in/karthick-a-6b2232294/">
        <button className="mt-5 mx-5 linkedin" ><CiLinkedin color=" #0077B5" size={40}/></button>
        </a>
        </div>
        </div>
      </div>
      <div>
        <img className="" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
