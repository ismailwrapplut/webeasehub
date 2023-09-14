import React from 'react'
import gym1 from "../assets/gym1.jpg"
import gym2 from "../assets/gym2.jpg"
import gym3 from "../assets/gym3.jpg"
import gym4 from "../assets/gym4.jpg"
import gym5 from "../assets/gym5.jpg"
import gym6 from "../assets/gym6.jpg"
import Image from 'next/image'


const Portfolio = () => {
  return (
    <div className=' flex flex-col justify-center items-center mb-48' id='projects'>
    <h1 className="text-center text-white text-xl font-regular ">
    Our Portfolio  </h1>
  <h1 className="text-center mt-5 text-white text-4xl lg:text-5xl t font-semibold">
  What do we do
  </h1>
  <p className=" mt-5 text-center text-gray-800 lg:text-lg">
These are some tip of ice berg of what we do</p>

<div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24 mt-5">
  <div className="-m-1 flex flex-wrap md:-m-2">
    <div className="flex w-1/2 flex-wrap">
      <div className="w-1/2 p-1 md:p-2">
        <Image alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src={gym1} />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <Image alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src={gym2} />
      </div>
      <div className="w-full p-1 md:p-2">
        <Image alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src={gym3} />
      </div>
    </div>
    <div className="flex w-1/2 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <Image alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src={gym4} />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <Image alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src={gym5} />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <Image alt="gallery" className="block h-full w-full rounded-lg object-cover object-center" src={gym6} />
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default Portfolio
