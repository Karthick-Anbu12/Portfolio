import React from "react";
import bannerImg from "../../assets/webpage.png";
const ProjectCard = ({ title, main,demo,code }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <a href="https://my-shopping-web-site.netlify.app/" target="_blank">
      <img className="p-4 h-48  " src={bannerImg} alt="" />
      </a>
      <h3 className="px-4  text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="px-4 flex">
        <div className="mr-8">
      <h5 className=" px-1 bg-cyan-900 text-center rounded-2xl mb-1">HTML</h5>
      <h5 className="px-1 bg-cyan-900 text-center rounded-2xl mb-1">CSS</h5>
      <h5 className="px-1 bg-cyan-900 text-center rounded-2xl mb-1">Reactjs</h5>
      <h5 className="px-1 bg-cyan-900 text-center rounded-2xl mb-1">ContextApi</h5>
      <h5 className="px-1 bg-cyan-900 text-center rounded-2xl mb-1">Bootstrap</h5>
      </div>
      <div>
        
        <h5 className="px-1 bg-cyan-900 text-center rounded-2xl mb-1">JavaScript</h5>
        <h5 className="px-1 bg-cyan-900 text-center rounded-2xl mb-1">Node.js</h5>
        <h5 className="px-1 bg-cyan-900 text-center rounded-2xl mb-1">JWT</h5>
        <h5 className="px-1 bg-cyan-900 text-center rounded-2xl mb-1">MongoDB</h5>
        <h5 className="px-1 bg-cyan-900 text-center rounded-2xl mb-1">Mongoose</h5>
        </div>
      
      </div>
      
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        <a href={`${demo}`} target="_blank">
        <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"   >
          Live
        </button>
        </a>
        <a href={`${code}`} target="_blank">
        <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Source Code
        </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
