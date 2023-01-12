import React from "react"
import Image from "next/image"
import sibylImage from "../public/assets/projects/sibyl.png"

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto p-8 ">
        <div className="neonH2 flex items-center justify-center cursor-default">
          <h2 className="text-3xl tracking-widest uppercase text-cyber text-center my-12">
            Projects
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative flex items-center justify-center h-auto w-full group rounded-sm p-1 opacity-75 hover:opacity-100 transition duration-700">
            <div className="absolute -inset-0.5 opacity-75 bg-gradient-to-r from-[#ff2a6d] to-[#05d9e8] rounded-lg blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Image className="relative" src={sibylImage} alt="/" />
          </div>

          <div className="relative flex items-center justify-center h-auto w-full group rounded-sm p-1 opacity-75 hover:opacity-100 transition duration-700">
            <div className="absolute -inset-0.5 opacity-75 bg-gradient-to-r from-[#ff2a6d] to-[#05d9e8] rounded-lg blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Image className="relative" src={sibylImage} alt="/" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
