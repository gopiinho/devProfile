import React from "react"
import Image from "next/image"
import sibylImage from "../public/assets/projects/sibyl.png"

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-4xl tracking-widest uppercase text-cyber text-center py-4">
          Projects
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative flex items-center justify-center h-auto w-full group rounded-sm p-1">
            <div className="absolute -inset-0.5 opacity-75 bg-gradient-to-r from-[#ff2a6d] to-[#0a9cf5] rounded-lg blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <Image className="relative" src={sibylImage} alt="/" />
          </div>
          <Image className="relative" src={sibylImage} alt="/" />
        </div>
      </div>
    </div>
  )
}

export default Projects
