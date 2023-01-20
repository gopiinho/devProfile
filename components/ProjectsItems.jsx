import React from "react"
import Link from "next/link"
import Image from "next/image"

const ProjectsItems = ({ title, backgroundImg, stack, projectUrl }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full group rounded-sm p-1 opacity-75 hover:opacity-100 transition duration-700">
      <div className="absolute -inset-0.5 opacity-75 bg-gradient-to-r from-[#ff2a6d] to-[#05d9e8] rounded-lg blur group-hover:opacity-0 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <Image
        className="relative rounded-md group-hover:opacity-10 transition duration-500"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-cyber ">
        <h3 className="text-2xl tracking-wider text-center ">{title}</h3>

        <p className="pb-4 pt-2 text-white text-center">{stack}</p>

        <Link href={projectUrl}>
          <p className="neonH2 text-center py-2 mx-8 border-2 border-slate-600  hover:border-[#ff2a6d] bg-black text-[#ff2a6d] text-lg cursor-pointer opacity-75 hover:opacity-100 transition duration-700 hover:shadow-neon-main rounded-md border-opacity-40">
            Visit
          </p>
        </Link>
      </div>
    </div>
  )
}

export default ProjectsItems
