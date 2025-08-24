"use client";
import { useState,useEffect } from "react";
const GetIntouch = () => {
  const [years, setyears] = useState(0);
  const [clients, setclients] = useState(430);
  const [projects, setprojects] = useState(970);

  useEffect(() => {
    
  setTimeout(() => {
    if (years < 35) {
      setyears(years + 1);
    }
    if (clients < 500) {
      setclients(clients + 1);
    }
    if (projects < 1000) {
      setprojects(projects + 1);
    }
  }, 30);
  },    );
  
  return (
    <section className="w-full  ">
      <ul className="flex items-center w-screen justify-around p-2 ">
        <li className=" items-center flex flex-col ">
          <p className="font-bold text-yellow-300 lg:text-4xl">{years + "+"}</p>{" "}
          <p>years of Experience</p>
        </li>
        <li className="items-center flex flex-col ">
          <p className="font-bold text-yellow-300 lg:text-4xl">{clients + "+"}</p>{" "}
          <p>clients</p>
        </li>
        <li className="items-center flex flex-col">
          {" "}
          <p className="font-bold text-yellow-300 lg:text-4xl">
            {projects + "+"}{" "}
          </p>{" "}
          <p>projects completed</p>
        </li>
      </ul>

      <div className=" w-full relative ">
        <img src="/assets/companyimage.jpg" alt="company image" 
        className="w-screen h-70 lg:h-100 " />
        <div className="absolute  text-center text-white top-1/2 m-5">
            <h4 className="font-bold lg:text-3xl"> Ready to Discuss  Your Projects</h4>
            <p className="max-md:text-[10px]">Contact our team of experts to discuss your steel casting requirements and discover how Aarcee Casting can 
                deliver the perfect solution for your needs. </p>
        </div>
      </div>
    </section>
  );
};

export default GetIntouch;
