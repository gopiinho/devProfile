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
        <div className="group relative flex h-full w-full items-center justify-center  text-white">
            <div className="relative flex flex-col items-center justify-center border border-[#ff2a6d] duration-300 ease-in hover:bg-[#ff2a6d]">
                <Image
                    className="relative transform duration-300 group-hover:opacity-70 group-hover:blur-md"
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
                    <p className="m-1 flex transform items-center justify-center gap-4 border border-[#ff2a6d] bg-[#ff2a6d]/10 py-4  duration-300 hover:bg-[#ff2a6d]/50">
                        Visit
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default ProjectsItems
