import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className=" md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-5 px-2 flex flex-wrap gap-5">
        <ProjectCard
          title="E-Commerce Site"
          main="Shoppers can purchase products from anywhere, at any time, without the need to visit a physical store. 
          Variety: Access to a wide range of products and brands, often more than what's available in local stores."
          demo="https://my-shopping-web-site.netlify.app"
          code="https://github.com/Karthick-Anbu12/E-Commerce-frontend"
        />

      </div>
    </div>
  );
};

export default Projects;
