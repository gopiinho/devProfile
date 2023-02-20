import React from "react"
import { motion as m } from "framer-motion"
import storyBg from "../public/assets/backgrounds/cyber.gif"
const vision = () => {
  return (
    <m.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full h-screen text-center font-robot "
    >
      <div className="flex flex-col justify-between lg:flex-row md:flex-row h-full sm:flex-col md:h-screen  sm:h-screen sm:justify-center md:justify-center lg:justify-center font-robot pt-20 sm:pt-20 md:pt-20">
        <div className="p-4 bg-[#e2dddf] lg:w-1/3 md:w-full h-full sm:w-full">
          <div className="flex lg:flex-col md:flex-col sm:flex-row sm:w-full justify-between h-full py-24  text-slate-700 ">
            <h1 className="">Storyteller</h1>
            <p>Test</p>
          </div>
        </div>
        <div className="p-4 bg-[#ff2a6d]  lg:w-1/3 md:w-full h-full sm:w-full">
          <div className="flex lg:flex-col md:flex-col sm:flex-row sm:w-full justify-between h-full py-24 text-slate-700">
            <h1>Developer</h1>
            <p>Test</p>
          </div>
        </div>
        <div className="p-4 bg-[#ADD8E6]  lg:w-1/3 md:w-full h-full sm:w-full">
          <div className="flex lg:flex-col md:flex-col sm:flex-row sm:w-full justify-between h-full py-24">
            <h1>Designer</h1>
            <p>Test</p>
          </div>
        </div>
      </div>
    </m.div>
  )
}

export default vision
