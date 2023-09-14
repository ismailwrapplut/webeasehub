import React from "react";
import heroSvg from "../assets/about.svg";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="mt-[160px] mb-80 md:mb-[250px] lg:p-0 p-10">
      <h1 className="text-center text-white text-xl font-regular">About Us</h1>
      <h1 className="text-center text-white text-4xl lg:text-5xl font-semibold">
      What We Do
      </h1>

      <div className="mt-20 flex lg:flex-row flex-col justify-center items-center  ">
        <div className="mt-10 lg:pl-[5%] lg:w-[50%] flex items-center justify-end lg:mr-10">
          <Image src={heroSvg} height={"100%"} width={"auto"} />
        </div>
        <div className="lg:w-[50%] lg:pr-[10%] lg:mt-0 mt-10">
          <p className="text-white text-center lg:text-left mt-1 lg:text-lg">
          In today's fast-paced digital world, your fitness business's online presence isn't just a necessity; it's your ticket to success. At Webeasehub, we specialize in turning fitness ventures into digital triumphs. 🚀
          </p>

          <p className=" text-white lg:text-left text-center lg:text-lg mt-5">
          We're here to empower fitnesspreneurs for online success. As digital experts, we craft stunning websites and user-friendly apps that mirror your fitness ethos. Yet, we're more than creators; we're digital partners. We optimize your online strategy to turn your fitness business into an internet sensation. Ready to redefine fitness success in the digital age? Join us today! 💪🌐
          </p>

          <div className=" text-center lg:text-left flex lg:justify-normal justify-center">
         
          <Link href={"/contact"} ><button className="border-2  hover:bg-black hover:text-white border-black text-black bg-white font-semibold px-10 rounded-3xl py-2 mt-10">
Contact        </button></Link>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
