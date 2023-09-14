"use client";

import { useState } from "react";
import logo from "../assets/logo.svg";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

export const NavbarDefault = () => {
  const [flyer, setFlyer] = useState(false);
  const [flyerTwo, setFlyerTwo] = useState(false);
  const screenWidth  = window.screen.width;
  const [isExpanded, toggleExpansion] = useState(false);
  console.log(screenWidth)

  return (
    <nav className="lg:mb-20 flex items-center justify-between flex-wrap  p-6">

      <Link href={"/"} className="flex items-center flex-shrink-0 text-white mr-6">
        <Image src={logo} height={50} width={50} />
        <span class="ml-3 text-xl text-white font-medium">WebEaseHub</span>
      </Link>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded hover:text-white hover:border-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-white h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow lg:block lg:text-center  lg:w-fit mr-16 `}
      >
        <Fade>
          <div className="text-sm lg:flex-grow">
            <Link
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
            >
              Home
            </Link>
            <a
              href="#about"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
            >
              About
            </a>
            <a
              href="#services"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white"
            >
              Services
            </a>
            <a
              href="#projects"
              className="block mt-4 lg:inline-block lg:ml-3 lg:mt-0 text-white hover:text-white"
            >
              Projects
            </a>
          </div>
        </Fade>

        <Fade>
        <Link href={"/contact"}>
         <button className=" lg:hidden border-2  hover:bg-white  hover:text-black border-white text-white text-sm  font-normal px-10 rounded-3xl py-2 mt-4">
            Contact Us
          </button>
        
        </Link>
         
        </Fade>
      </div>
      <Link href="/contact" className="lg:inline hidden"> <button className="  border-2 lg:mr-5  hover:bg-white  hover:text-black border-white text-white text-sm  font-normal px-10 rounded-3xl py-2 mt-4">
      
      Contact Us
      </button></Link>
     
      
    </nav>
  );
};
