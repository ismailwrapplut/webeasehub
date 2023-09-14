"use client"
import React from 'react'
import heroSvg from "../assets/hero.svg"
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className=''>
    <div className='mt-10 flex flex-col justify-center items-center  '>
    <div className="px-8">
    <h1 className="text-center text-white text-3xl lg:text-5xl font-semibold z-10">Helping Fitnesspreneurs</h1>
    <h1 className="text-center text-white text-3xl lg:text-5xl font-semibold mt-2 lg:mt-4">Elevate Their Online Presence</h1>

    <p className='text-center text-gray-500 mt-10'>Elevate your fitness brand online with Webeasehub.</p>
    <p className='text-center text-gray-500 mt-1'>Empowering fitnesspreneurs to reach new heights.</p>
    <div className="text-center"> <Link href={"/contact"}> <button
    className="border-2  hover:bg-black hover:text-white border-black text-black bg-white font-semibold px-10 rounded-3xl py-2 mt-10"
  >
Start Project  </button></Link>
    </div>
    </div>
  
    
    <div className="mt-10 lg:p-0 p-5">
    <Image src={heroSvg} height={"100%"} width={"auto"}/>
    
    </div>
    </div>
    
    
    </div>
    
  )
}

export default Hero
