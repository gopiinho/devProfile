import React from "react"
import Image from "next/image"
import solLogo from "../public/assets/projects/sol.svg"

const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full ">
        <div className="neonH2 flex items-center justify-center cursor-default">
          <h2 className="text-3xl tracking-widest uppercase text-center my-12 font-cyber">
            Skills
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg-grid-cols-4 gap-8">
          <div className="p-6 shadow-md rounded-lg hover-scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
