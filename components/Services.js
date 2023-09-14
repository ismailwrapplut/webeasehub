"use client"

import Link from "next/link";
import React from "react";


const Services = () => {
  return (
    <div id="services" className=" md:mb-[20rem] mb-[60rem]  flex lg:flex-row flex-col justify-center   h-[600px]">
      <div className="lg:w-[50%] lg:pr-[10%] lg:mt-10 mt-10 lg:ml-[10%] flex flex-col lg:p-0 p-0 ">
        <div className="text-center text-white text-xl font-regular lg:text-left">
          Our Services
        </div>
        <h1 className="text-center mt-5 text-white text-4xl lg:text-5xl lg:text-left font-semibold">
        Unlock Your
        </h1>
        <h1 className="text-center text-white text-4xl lg:text-left lg:text-5xl font-semibold">
          Potential
        </h1>

        <p className="text-white mt-5 text-center lg:text-left lg:text-lg lg:p-0 p-5">
        Explore the power of WebeaseHub's tailored digital solutions. Elevate your fitness business with captivating websites, user-friendly apps, and seamless online coaching platforms. Your journey to online fitness success starts here.
        </p>

        <div className=" text-center lg:text-center flex lg:justify-normal justify-center">
        <Link href={"/contact"} ><button className="border-2  hover:bg-black hover:text-white border-black text-black bg-white font-semibold px-10 rounded-3xl py-2 mt-10">
        Book A Meeting
      </button></Link>

        
        </div>
      </div>
      <div className="mt-10 lg:pl-[5%] lg:w-[50%] h-[100%] flex-row items-center justify-center  lg:justify-start lg:p-0 ">
        <div className="flex flex-col md:flex-row items-center md:items-start   md:w-[100%] h-max justify-center lg:justify-start">
          <div className=" border-[0.2px] rounded-3xl border-gray-600 flex flex-col w-fit justify-center items-center p-10 md:mr-5">
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="50" fill="#E2E2E2" />
              <path
                d="M64 34.25H36C34.067 34.25 32.5 35.817 32.5 37.75V55.25C32.5 57.183 34.067 58.75 36 58.75H64C65.933 58.75 67.5 57.183 67.5 55.25V37.75C67.5 35.817 65.933 34.25 64 34.25Z"
                stroke="#0B0F15"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M43 65.75H57"
                stroke="#0B0F15"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M50 58.75V65.75"
                stroke="#0B0F15"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-white mt-6">Customization</p>
          </div>
          <div className=" border-[0.2px] rounded-3xl mt-5 md:mt-0 border-gray-600 flex w-fit flex-col justify-center items-center p-10">
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="50" fill="#FF4646" />
              <g clip-path="url(#clip0_122_44)">
                <path
                  d="M50 55.25C52.8995 55.25 55.25 52.8995 55.25 50C55.25 47.1005 52.8995 44.75 50 44.75C47.1005 44.75 44.75 47.1005 44.75 50C44.75 52.8995 47.1005 55.25 50 55.25Z"
                  stroke="#0B0F15"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M62.95 55.25C62.717 55.7778 62.6476 56.3633 62.7505 56.931C62.8534 57.4987 63.1241 58.0226 63.5275 58.435L63.6325 58.54C63.9579 58.8651 64.2161 59.2511 64.3922 59.676C64.5683 60.1009 64.659 60.5563 64.659 61.0163C64.659 61.4762 64.5683 61.9316 64.3922 62.3565C64.2161 62.7814 63.9579 63.1674 63.6325 63.4925C63.3074 63.8179 62.9214 64.0761 62.4965 64.2522C62.0716 64.4283 61.6162 64.519 61.1562 64.519C60.6963 64.519 60.2409 64.4283 59.816 64.2522C59.3911 64.0761 59.0051 63.8179 58.68 63.4925L58.575 63.3875C58.1626 62.9841 57.6387 62.7134 57.071 62.6105C56.5033 62.5076 55.9178 62.577 55.39 62.81C54.8724 63.0318 54.431 63.4002 54.12 63.8697C53.8091 64.3392 53.6422 64.8894 53.64 65.4525V65.75C53.64 66.6783 53.2713 67.5685 52.6149 68.2249C51.9585 68.8813 51.0683 69.25 50.14 69.25C49.2117 69.25 48.3215 68.8813 47.6651 68.2249C47.0087 67.5685 46.64 66.6783 46.64 65.75V65.5925C46.6265 65.0133 46.439 64.4515 46.1019 63.9802C45.7648 63.509 45.2938 63.15 44.75 62.95C44.2222 62.717 43.6367 62.6476 43.069 62.7505C42.5013 62.8534 41.9774 63.1241 41.565 63.5275L41.46 63.6325C41.1349 63.9579 40.7489 64.2161 40.324 64.3922C39.8991 64.5683 39.4437 64.659 38.9837 64.659C38.5238 64.659 38.0684 64.5683 37.6435 64.3922C37.2186 64.2161 36.8326 63.9579 36.5075 63.6325C36.1821 63.3074 35.9239 62.9214 35.7478 62.4965C35.5717 62.0716 35.481 61.6162 35.481 61.1562C35.481 60.6963 35.5717 60.2409 35.7478 59.816C35.9239 59.3911 36.1821 59.0051 36.5075 58.68L36.6125 58.575C37.0159 58.1626 37.2866 57.6387 37.3895 57.071C37.4924 56.5033 37.423 55.9178 37.19 55.39C36.9682 54.8724 36.5998 54.431 36.1303 54.12C35.6608 53.8091 35.1106 53.6422 34.5475 53.64H34.25C33.3217 53.64 32.4315 53.2713 31.7751 52.6149C31.1187 51.9585 30.75 51.0683 30.75 50.14C30.75 49.2117 31.1187 48.3215 31.7751 47.6651C32.4315 47.0087 33.3217 46.64 34.25 46.64H34.4075C34.9867 46.6265 35.5485 46.439 36.0198 46.1019C36.491 45.7648 36.85 45.2938 37.05 44.75C37.283 44.2222 37.3524 43.6367 37.2495 43.069C37.1466 42.5013 36.8759 41.9774 36.4725 41.565L36.3675 41.46C36.0421 41.1349 35.7839 40.7489 35.6078 40.324C35.4317 39.8991 35.341 39.4437 35.341 38.9837C35.341 38.5238 35.4317 38.0684 35.6078 37.6435C35.7839 37.2186 36.0421 36.8326 36.3675 36.5075C36.6926 36.1821 37.0786 35.9239 37.5035 35.7478C37.9284 35.5717 38.3838 35.481 38.8438 35.481C39.3037 35.481 39.7591 35.5717 40.184 35.7478C40.6089 35.9239 40.9949 36.1821 41.32 36.5075L41.425 36.6125C41.8374 37.0159 42.3613 37.2866 42.929 37.3895C43.4967 37.4924 44.0822 37.423 44.61 37.19H44.75C45.2676 36.9682 45.709 36.5998 46.02 36.1303C46.3309 35.6608 46.4978 35.1106 46.5 34.5475V34.25C46.5 33.3217 46.8687 32.4315 47.5251 31.7751C48.1815 31.1187 49.0717 30.75 50 30.75C50.9283 30.75 51.8185 31.1187 52.4749 31.7751C53.1313 32.4315 53.5 33.3217 53.5 34.25V34.4075C53.5022 34.9706 53.6691 35.5208 53.98 35.9903C54.291 36.4598 54.7324 36.8282 55.25 37.05C55.7778 37.283 56.3633 37.3524 56.931 37.2495C57.4987 37.1466 58.0226 36.8759 58.435 36.4725L58.54 36.3675C58.8651 36.0421 59.2511 35.7839 59.676 35.6078C60.1009 35.4317 60.5563 35.341 61.0163 35.341C61.4762 35.341 61.9316 35.4317 62.3565 35.6078C62.7814 35.7839 63.1674 36.0421 63.4925 36.3675C63.8179 36.6926 64.0761 37.0786 64.2522 37.5035C64.4283 37.9284 64.519 38.3838 64.519 38.8438C64.519 39.3037 64.4283 39.7591 64.2522 40.184C64.0761 40.6089 63.8179 40.9949 63.4925 41.32L63.3875 41.425C62.9841 41.8374 62.7134 42.3613 62.6105 42.929C62.5076 43.4967 62.577 44.0822 62.81 44.61V44.75C63.0318 45.2676 63.4002 45.709 63.8697 46.02C64.3392 46.3309 64.8894 46.4978 65.4525 46.5H65.75C66.6783 46.5 67.5685 46.8687 68.2249 47.5251C68.8813 48.1815 69.25 49.0717 69.25 50C69.25 50.9283 68.8813 51.8185 68.2249 52.4749C67.5685 53.1313 66.6783 53.5 65.75 53.5H65.5925C65.0294 53.5022 64.4792 53.6691 64.0097 53.98C63.5402 54.291 63.1718 54.7324 62.95 55.25V55.25Z"
                  stroke="#0B0F15"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_122_44">
                  <rect
                    width="42"
                    height="42"
                    fill="white"
                    transform="translate(29 29)"
                  />
                </clipPath>
              </defs>
            </svg>

            <p className="text-white mt-6">Engaging UI/UX</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start  mt-5 md:w-[100%] h-max  justify-center lg:justify-start">
          <div className="border-[0.2px] rounded-3xl border-gray-600 w-fit flex flex-col justify-center items-center p-10 md:mr-5">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" fill="#8EEA77"/>
          <path d="M50 62.25L62.25 50L67.5 55.25L55.25 67.5L50 62.25Z" stroke="#0B0F15" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M60.5 51.75L57.875 38.625L32.5 32.5L38.625 57.875L51.75 60.5L60.5 51.75Z" stroke="#0B0F15" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M32.5 32.5L45.7755 45.7755" stroke="#0B0F15" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M48.25 51.75C50.183 51.75 51.75 50.183 51.75 48.25C51.75 46.317 50.183 44.75 48.25 44.75C46.317 44.75 44.75 46.317 44.75 48.25C44.75 50.183 46.317 51.75 48.25 51.75Z" stroke="#0B0F15" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          
<p className="text-white mt-6">Scalability</p>
            

          </div>
          <div className="  border-[0.2px] rounded-3xl mt-5 md:mt-0 border-gray-600 w-fit  flex flex-col justify-center items-center p-10">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" r="50" fill="#FFB31A"/>
<path d="M64 41.25H36C34.067 41.25 32.5 42.817 32.5 44.75V64C32.5 65.933 34.067 67.5 36 67.5H64C65.933 67.5 67.5 65.933 67.5 64V44.75C67.5 42.817 65.933 41.25 64 41.25Z" stroke="#0B0F15" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M58.75 32.5L50 41.25L41.25 32.5" stroke="#0B0F15" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<p className="text-white mt-6">Performance</p>
<p className="text-white ">Optimization</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
