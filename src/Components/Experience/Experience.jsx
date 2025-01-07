import React from "react";
import { FaCss3,  FaHtml5, FaJs,FaBootstrap ,FaReact,FaNode,FaGithub } from "react-icons/fa";
import {RiTailwindCssFill,RiFileExcel2Fill} from "react-icons/ri"
import { SiMongodb,SiMysql,SiPostman,SiRender,SiExpress,SiRedux } from "react-icons/si";
import {BiLogoNetlify} from "react-icons/bi"
const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Skills</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaNode color="#3c873a" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiExpress color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiRedux color="#00a7e5" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMysql color="#f29111" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaBootstrap color="#602C50" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
          <RiTailwindCssFill color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
          <FaGithub color="#FFFFFF" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
          <SiPostman color=" #EF5B25" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
          <BiLogoNetlify color="#20C6B7" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiRender color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <RiFileExcel2Fill color="#47A248" size={50} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Experience;
