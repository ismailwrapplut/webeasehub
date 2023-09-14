"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";
import s1 from "../../assets/s1.svg";
import s2 from "../../assets/s2.svg";

const Page = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <div className="flex flex-col items-center space-y-2">
          <Image src={s1} width={200} height={200} />
          <h1 className="text-4xl font-bold text-white">Thank You !</h1>
          <p className="text-white">Stay Tuned! Our Team Will React Out to You Soon.</p>
          <Link
            href={"/"}
            className="inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-indigo-600 rounded rounded-full hover:bg-indigo-700 focus:outline-none focus:ring"
          >

            <span className="text-sm font-medium bg-indigo-600">Home</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Page
