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
        <div className="group relative flex h-auto w-full items-center justify-center rounded-sm p-1 pb-6 text-white transition duration-300">
            <div className="relative flex flex-col items-center justify-center rounded-md border-2 border-slate-600 border-opacity-40 duration-300 ease-in hover:border-[#ff2a6d] hover:shadow-neon-main">
                <Image
                    className="relative rounded-md blur-sm transition duration-300 group-hover:opacity-70 hover:bg-slate-900 "
                    src={backgroundImg}
                    alt="/"
                />
                <div className="hidden h-auto w-full rounded-md border-2 border-[#ff2a6d] border-opacity-40 bg-black p-2 text-center font-electro duration-200 ease-in hover:border-[#ff2a6d] md:block lg:block">
                    <p>{description}</p>
                </div>
            </div>
            <div className="absolute left-[50%] top-[50%] hidden translate-x-[-50%] translate-y-[-50%] font-electro group-hover:block">
                <h3 className="md:-2xl text-center text-2xl tracking-wider sm:text-sm ">
                    {title}
                </h3>

                <p className="pb-4 pt-2 text-center sm:text-xs">{stack}</p>

                <Link
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p className="neonH2 mx-8 cursor-pointer rounded-md border-2 border-zinc-600 border-opacity-40 bg-zinc-800 py-2 text-center font-cyber text-lg text-[#ff2a6d] transition duration-700 hover:border-[#ff2a6d] hover:shadow-neon-main sm:text-xs">
                        Visit
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default ProjectsItems
