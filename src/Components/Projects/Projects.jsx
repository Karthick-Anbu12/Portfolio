import React from "react";
import ProjectCard from "./ProjectCard";
import ecommerce from "../../assets/webpage.png";
import todo from "../../assets/Screenshot (5).png"
import recipe from "../../assets/recipeapp.png"

const Projects = () => {
  return (
    <div id="Projects" className=" md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-5 px-2 flex flex-wrap gap-5">
        <ProjectCard
          title="E-Commerce Site"
          desc="Shoppers can purchase products from anywhere, at any time, without the need to visit a physical store. 
          Variety: Access to a wide range of products and brands, often more than what's available in local stores."
          demo="https://my-shopping-web-site.netlify.app"
          code="https://github.com/Karthick-Anbu12/E-Commerce-frontend"
          frontend="HTML,CSS,Bootstrap,Contextapi"
          backend="JavaScript,NodeJs,MongooDB,Payment Gateway"
          img={ecommerce}
        />
        <ProjectCard
          title="My Recipe Book"
          desc="The Recipe Book website is an online platform where users can store, manage their favorite recipes. 
          It offers a secure login feature, allowing users to create personal accounts, save their favorite recipes. The website provides
           easy access to detailed cooking instructions, ingredients, and preparation steps. "
          demo="https://recipe-application-mern.netlify.app/"
          code="https://github.com/Karthick-Anbu12/Recipe-frontend"
          frontend="HTML,CSS,Bootstrap,Axios"
          backend="JavaScript,NodeJs,MongoDB,JWT"
          img={recipe}
        />
        <ProjectCard
          title="My Todos"
          desc="A CRUD todos project typically refers to a task management or to-do list application. 
          It allows users to create, organize, and track tasks they need to complete. Features often include adding,
           deleting, and marking tasks as completed."
          demo="https://todo-crud-full-stack.netlify.app/"
          code="https://github.com/Karthick-Anbu12/Todo-Frontend"
          frontend="HTML,CSS,TailwindCSS,Contextapi"
          backend="JavaScript,NodeJs,Mongoose,JWT"
          img={todo}
        />

      </div>
    </div>
  );
};

export default Projects;
