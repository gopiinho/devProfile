import React from "react"
import "devicon/devicon.min.css"
import { motion as m } from "framer-motion"
import Image from "next/image"
import { stackBG } from "../public/assets/backgrounds/index"

const Skills = () => {
  return (
    <m.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full h-screen bg-zinc-800 pt-[75px] font-cyber"
    >
      <div className="flex flex-col w-full">
        <div className="flex flex-col sm:flex-row w-full h-1/2">
          <div
            className="w-1/2 sm:w-full flex justify-center items-center border-r border-zinc-500 hover:bg-zinc-300 hover:text-black transform duration-300"
            style={{ height: "calc(50vh - 75px)" }}
          >
            Design
          </div>
          <div
            className="w-1/2 sm:w-full flex justify-center items-center hover:bg-zinc-300 hover:text-black transform duration-300"
            style={{ height: "calc(50vh - 75px)" }}
          >
            Webapps
          </div>
        </div>
        <div
          className="w-full h-1/2 flex justify-center items-center border-t border-zinc-500 hover:bg-zinc-300 hover:text-black transform duration-300"
          style={{ height: "calc(50vh)" }}
        >
          Blockchain
        </div>
      </div>
    </m.div>
  )
}

export default Skills
