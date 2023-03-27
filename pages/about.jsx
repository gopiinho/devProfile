import React from "react"
import { motion as m } from "framer-motion"
import Image from "next/image"
import { storyBG, devBG, designBG } from "../public/assets/backgrounds/index"

const vision = () => {
  return (
    <m.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full h-full text-center font-robot "
    >
      <div>
        <div className="flex flex-col justify-between lg:flex-row md:flex-row  sm:flex-col md:h-screen  sm:h-screen sm:justify-center md:justify-center lg:justify-center font-robot pt-20 sm:pt-20 md:pt-20">
          <div className=" bg-[#e2dddf]/40 hover:bg-[#e2dddf] hover:text-slate-700 text-slate-700/90 transform duration-300 lg:w-1/3 md:w-full h-full sm:w-full">
            <Image
              src={storyBG}
              alt="/"
              className="absolute inset-0 w-full h-full object-cover z--1 opacity-30 pointer-events-none"
              priority
              unoptimized={true}
            />

            <div className="flex justify-between w-full h-full">
              <h2 className="writing-vertical h-full text-slate-700 font-phudu uppercase text-4xl tracking-titleWide hover:tracking-titleDefault transform duration-1000 cursor-default   bg-[#E4E1E3]/50 px-3">
                Storyteller
              </h2>
              <p className="text-zinc-600  text-2xl font-phudu mx-2 transform duration-300">
                Been inspired from great medium like movies, video games and
                anime. I love creating media that tells a meaningful story. Each
                project is a labor of love for me, and I'm always striving to
                make it professional and impactful.
              </p>
            </div>
          </div>
          <div className=" bg-[#ff2a6d]/40 hover:bg-[#ff2a6d] hover:text-slate-800 text-slate-700/90 transform duration-300 lg:w-1/3 md:w-full h-full sm:w-full">
            <Image
              src={devBG}
              alt="/"
              className="absolute inset-0 w-full h-full object-cover z--1 opacity-30 pointer-events-none"
              priority
              unoptimized={true}
            />
            <div className="flex justify-between w-full h-full">
              <h2 className="writing-vertical h-full font-phudu uppercase text-4xl tracking-titleWide hover:tracking-titleDefault transform duration-1000  cursor-default text-slate-100  bg-[#CD3769]/50 px-3">
                Developer
              </h2>
              <p className="text-slate-100  text-2xl font-phudu mx-2 transform duration-300">
                Filler text for developer section. Will update with something
                personal.
              </p>
            </div>
          </div>
          <div className="bg-[#ADD8E6]/40 hover:bg-[#ADD8E6] hover:text-slate-700 text-slate-700/90 transform duration-300  lg:w-1/3 md:w-full h-full sm:w-full">
            <Image
              src={designBG}
              alt="/"
              className="absolute inset-0 w-full h-full object-cover z--1 opacity-30 pointer-events-none"
              priority
              unoptimized={true}
            />
            <div className="flex justify-between w-full h-full">
              <h2 className="writing-vertical h-full text-slate-700 font-phudu uppercase text-4xl tracking-titleWide hover:tracking-titleDefault transform duration-1000  cursor-default bg-[#79AFC0]/50 px-3">
                Designer
              </h2>
              <p className="text-zinc-600  text-2xl font-phudu mx-2 transform duration-300">
                Filler text for developer section. Will update with something
                personal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  )
}

export default vision
