import React from "react"
import Link from "next/link"
import Image from "next/image"

const ProjectsItems = ({
  title,
  backgroundImg,
  stack,
  projectUrl,
  description,
}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full group rounded-sm p-1 transition duration-300 text-white pb-6">
      <div className="relative flex flex-col justify-center items-center ease-in border-2 border-slate-600 hover:border-[#ff2a6d] duration-300 hover:shadow-neon-main rounded-md border-opacity-40">
        <Image
          className="relative rounded-md group-hover:opacity-70 hover:bg-slate-900 transition duration-300 blur-sm "
          src={backgroundImg}
          alt="/"
        />
        <div className="hidden lg:block md:block bg-black w-full ease-in border-2 border-[#ff2a6d] hover:border-[#ff2a6d] duration-200 rounded-md border-opacity-40 p-2 text-center font-robot h-auto">
          <p>{description}</p>
        </div>
      </div>
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-cyber">
        <h3 className="text-2xl tracking-wider text-center ">{title}</h3>

        <p className="pb-4 pt-2 text-center">{stack}</p>

        <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
          <p className="neonH2 text-center py-2 mx-8 border-2 border-zinc-600 hover:border-[#ff2a6d] bg-zinc-800 text-[#ff2a6d] text-lg cursor-pointer transition duration-700 hover:shadow-neon-main rounded-md border-opacity-40">
            Info
          </p>
        </Link>
      </div>
    </div>
  )
}

export default ProjectsItems
