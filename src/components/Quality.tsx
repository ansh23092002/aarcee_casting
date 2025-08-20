import React from "react";
import Image from "next/image";
import { FaMicroscope } from "react-icons/fa";
import { SiExoscale } from "react-icons/si";
import { GiDistressSignal } from "react-icons/gi";

const Quality = () => {
  const QualityList = [
    {
      id: "1",
      icon: <FaMicroscope style={{ color: "yellow" }} />,
      title: "Meterial Testing",
      description:
        "Machanical porperty testing, and microstructure evaluation to ensure material integrity.",
    },
    {
      id: "2",
      icon: <SiExoscale style={{ color: "yellow" }} />,
      title: "Dimensional Inspection",
      description:
        "Advanced CMM technology and 3d scanning to verify dimensional accuracy and geometric tolerances.",
    },
    {
      id: "3",
      icon: <GiDistressSignal style={{ color: "yellow" }} />,
      title: "Non-Destructive Testing",
      description:
        "Ultrasonic, radiographic, and  magnetic particle inspection to detect internal  and surface defects.",
    },
  ];

  return (
    <div className="min-sm:flex  w-sceen h-full   p-6 md:p-20 gap-10 items-center justify-around">
      <div className="  w-full flex flex-col gap-7">
        <h1 className="text-4xl font-bold">
          <span className="text-heading ">
            {" "}
            <u>Quality</u>
          </span>{" "}
          Aarcee Casting
        </h1>
        <div>
          At Aarcee Casting, quality is at the core of everything we do. Our
          comprehensive quality management system ensures that every casting
          meets or exceeds industry standeds and customer specifications.
          <br />
        </div>
        <div className=" ">
          We employ rigorous testing and inspection protocols throughout the
          production process, utilizing advanced technology to verify
          dimensional accuracy, material integrity, and surface quality.
        </div>
        <div className="flex flex-row  gap-10  justify-items-start">
          <div>
            {QualityList.map((list) => (
              <div
                key={list.id}
                className="p-2 flex bg-zinc-200  m-3  rounded-2xl "
              >
                <div className="m-3 size-5">{list.icon}</div>
                <div>
                  <h3 className="font-bold">{list.title}</h3>
                  <p className="text-[12px]">{list.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full   rounded-xl w-full overflow-hidden ">
        {/* image */}
        <Image
          src="/assets/image/Quality.jpg"
          width={600}
          height={600}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default Quality;
