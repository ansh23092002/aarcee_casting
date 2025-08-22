import React from "react";
import { IoLogoBuffer } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";

const Services = () => {
  const contents = [
    {
      id: "1",
      icon: <IoLogoBuffer style={{color:'yellow'}}/>,
      title: "Design & Engineering",
      description:
        "our engineering team works closely with clients to optimize designe for castability, structural integrity, and cost-efficiency.",
      list: [
        "3D modeling and simulation",
        "design for manufacturability",
        "prototyping solution",
      ],
    },
    {
      id: "2",
      icon: <IoLogoBuffer style={{color:'yellow'}}/>,
      title: "Design & Engineering",
      description:
        "our engineering team works closely with clients to optimize designe for castability, structural integrity, and cost-efficiency.",
      list: [
        "3D modeling and simulation",
        "design for manufacturability",
        "prototyping solution",
      ],
    },
    {
      id: "3",
      icon: <IoLogoBuffer style={{color:'yellow'}}/>,
      title: "Design & Engineering",
      description:
        "our engineering team works closely with clients to optimize designe for castability, structural integrity, and cost-efficiency.",
      list: [
        "3D modeling and simulation",
        "design for manufacturability",
        "prototyping solution",
      ],
    },
  ];
  return (
    <div className=" w-full  p-6 md:p-20 ">
      <div className=" flex-center flex-col itmes-center justify-center ">
        <h2 className="font-bold text-3xl p-4">
          Our <span className="text-heading">Services</span>
        </h2>
        <p className="w-1/2 text-center">
          From making and Prototyping to final Prduction, we offer
          comprehancsive steel casting Services tailored to your specific
          requrements.
        </p>
      </div>
      <div className="flex p-5 overflow-x-scroll w-sceen ">
        {contents.map((items) => (
          <div
            key={items.id}
            className="  m-4 p-10 flex flex-col gap-3 rounded  bg-zinc-200  "
          >
            <div>{items.icon}</div>
            <h3 className="font-bold ">{items.title}</h3>
            <p>{items.description}</p>

            <ul>
              {items.list.map((data, index) => (
                <li key={index} className="flex items-center gap-4">
                  <FaCircle style={{color:'yellow'}} />
                  {data}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
