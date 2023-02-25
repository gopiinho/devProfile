import React, { useEffect } from "react"
import { FaGithub } from "react-icons/fa"
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"

import Image from "next/image"
import { mainBG } from "../public/assets/backgrounds/index"
const Main = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <div className="w-full h-screen text-center font-robot pb-16">
      <Image
        src={mainBG}
        alt="/"
        className="absolute inset-0 w-full h-full object-cover z--1 opacity-30 pointer-events-none"
        priority
        unoptimized={true}
      />
      <div className="max-w-[1240px] w-full pt-28 h-full mx-auto p-2 flex justify-center items-center">
        <div className="pt-8">
          <p className="uppercase text-sm tracking-widest  text-slate-200">
            Building decentralized internet
          </p>
          <h1 className=" py-8 cursor-default font-phudu text-[#ff2a6d] tracking-titleWide hover:tracking-titleDefault transform duration-1000">
            WEB3 DEVELOPER
          </h1>
          <p className="py-4 text-slate-300 max-w-[70%] m-auto">
            I am deeply enthralled by the boundless potential of the internet,
            and the endless opportunities it presents for creativity and
            innovation. As an artistic and technologically-inclined individual,
            I am driven by a desire to bridge the gap between the worlds of
            gaming and blockchain, leveraging the strengths of both to create
            truly unique and immersive experiences.
          </p>
          <div className="flex items-center  justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-sm p-4 shadow-gray-300 cursor-pointer hover:scale-105 ease-in duration-300 hover:shadow-[#ff2a6d] hover:text-[#ff2a6d]">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-sm p-4 shadow-gray-300 cursor-pointer hover:scale-105 ease-in duration-300 hover:shadow-[#ff2a6d] hover:text-[#ff2a6d]">
              <AiFillTwitterCircle />
            </div>
            <div className="rounded-full shadow-sm p-4 shadow-gray-300 cursor-pointer hover:scale-105 ease-in duration-300 hover:shadow-[#ff2a6d] hover:text-[#ff2a6d]">
              <AiFillLinkedin />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
