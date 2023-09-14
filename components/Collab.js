import React from "react";
import collabSvg from "../assets/collab.svg";
import Image from "next/image";
import Link from "next/link";

const Collab = () => {
  return (
    <div className="flex mb-16 flex-col lg:flex-row w-[100%] h-[100%]">
      <div className="flex flex-col p-5 lg:w-[50%] lg:p-20 lg:ml-[10%] lg:mb-0 mb-20">
        <h1 className="lg:text-left  mt-1 lg:mt-5 text-white text-3xl md:text-5xl font-semibold">
          Interesting 
          Collaboration
          With Us?
        </h1>
        <p className=" mt-5   lg:text-lg lg:text-left text-white">
          Reach Out To Us Now
        </p>
        <div className=" lg:text-left"><Link href={"/contact"} ><button className="border-2  hover:bg-black hover:text-white border-black text-black bg-white font-semibold px-10 rounded-3xl py-2 mt-10">
        Contact        </button></Link></div>
        
      </div>
      <div className="w-[100%] lg:w-[50%] flex justify-center  lg:justify-start items-center lg:mr-[10%] lg:p-0 p-5 ">
        <Image width={"100%"} height={"100%"} src={collabSvg} />
      </div>
    </div>
  );
};

export default Collab;
