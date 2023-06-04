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
        <div className="group relative m-1 flex h-full w-full items-center justify-center px-2 text-white">
            <div className="relative flex flex-col items-center justify-center border border-[#ff2a6d] duration-300 ease-in hover:bg-[#ff2a6d]">
                <Image
                    className="relative transform blur-sm duration-300 group-hover:opacity-70"
                    src={backgroundImg}
                    alt="/"
                />
            </div>
            <div className="absolute left-[50%] top-[50%] hidden translate-x-[-50%] translate-y-[-50%] font-electro group-hover:block">
                <h3 className="md:-2xl text-center text-2xl tracking-wider sm:text-sm ">
                    {title}
                </h3>

                <p className="pb-4 pt-2 text-center sm:text-sm">{stack}</p>

                <Link
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p className=" mx-8 cursor-pointer rounded-md border-2 border-zinc-600 border-opacity-40 bg-zinc-800 py-2 text-center font-cyber text-lg text-[#ff2a6d] transition duration-700 sm:text-sm">
                        Visit
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default ProjectsItems
