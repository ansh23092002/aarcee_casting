import React from "react";

const Product = () => {
  const ProductItem = [
    {
      id: "1",
      img: "/assets/image/RollingMill_cupling.jpg",
      title: "Rolling Mill cupling",
      description: "A Rolling Mill Coupling is a mechanical device used to connect two shafts together in rolling mills, ensuring efficient power transmission and smooth operation during metal forming processes.",
    },
    {
      id: "2",
      img: "/assets/image/farns_rail.jpg",
      title: "fernus rail",
      description: "Our Fernus Rail is engineered for durability and high thermal resistance, making it ideal for use in industrial furnaces and heavy-duty rail applications. It ensures reliable performance under extreme conditions and supports efficient material handling.",
    },
    {
      id: "3",
      img: "/assets/image/HB_wire.jpg",
      title: "HB wire",
      description: "HB wire is a high-quality, versatile wire widely used in construction and industrial applications for binding, reinforcement, and fabrication due to its strength and flexibility.",
    },
    {
      id: "4",
      img: "/assets/image/Binding_wire.jpg",
      title: "Binding wire",
      description: "Binding wire is commonly used in construction for tying and securing rebar, mesh, and other structural elements, providing flexibility and strength for various binding applications.",
    },
    {
      id: "5",
      img: "/assets/image/Binding_wire.jpg",
      title: "Binding wire",
      description: "Binding wire is commonly used in construction for tying and securing rebar, mesh, and other structural elements, providing flexibility and strength for various binding applications.",
    },
    {
      id: "6",
      img: "/assets/image/Binding_wire.jpg",
      title: "Binding wire",
      description: "Binding wire is commonly used in construction for tying and securing rebar, mesh, and other structural elements, providing flexibility and strength for various binding applications.",
    },
  ];
  return (
    <div className=" w-full  ">
      <div className=" flex-center flex-col itmes-center justify-center ">
        <h2 className="font-bold text-3xl p-4">
          Our <span className="text-heading">Products</span>
        </h2>
        <p className="w-1/2 text-center">
          We specialize in manufacturing high-quality products tailored to meet
          diverse industry needs, ensuring reliability, precision, and customer
          satisfaction at every stage.
        </p>
      </div>
      <div className=" grid grid-cols-3  p-10 ">
        {ProductItem.map((items) => (
          <div
            key={items.id}
            className="  m-4  flex flex-col gap-3 rounded  relative bg-black text-white"
          >
            <img src={items.img} alt="porduct image" className=" mask-b-from-5% mask-b-to-100% h-70" />
            <div className="absolute top-35 p-5 ">
              <h3 className="font-bold">{items.title}</h3>
              <p className="text-[11px] my-2"> {items.description}</p>
          </div>
          </div>

          
        ))}
      </div>
    </div>
  );
};

export default Product;
