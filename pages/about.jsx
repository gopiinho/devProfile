import React from "react"
import { motion as m } from "framer-motion"
import Image from "next/image"
import { storyBG, devBG, designBG } from "../public/assets/backgrounds/index"

const vision = () => {
    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="font-robot h-full w-full text-center "
        >
            <div>
                <div className="font-robot flex flex-col justify-between pt-16  sm:h-screen sm:flex-col  sm:justify-center sm:pt-16 md:h-screen md:flex-row md:justify-center md:pt-16 lg:flex-row lg:justify-center">
                    <div className=" h-full transform bg-[#e2dddf]/40 text-slate-700/90 duration-300 hover:bg-[#e2dddf] hover:text-slate-700 sm:w-full md:w-full lg:w-1/3">
                        <Image
                            src={storyBG}
                            alt="/"
                            className="z--1 pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
                            priority
                            unoptimized={true}
                        />

                        <div className="flex h-full w-full justify-between">
                            <h2 className="writing-vertical h-full transform cursor-default bg-[#E4E1E3]/50 px-3 font-electro text-4xl uppercase tracking-titleWide text-slate-700   duration-1000 hover:tracking-titleDefault">
                                Storyteller
                            </h2>
                            <p className="mx-2  transform font-electro text-2xl text-zinc-600 duration-300">
                                Been inspired from great medium like movies,
                                video games and anime. I love creating media
                                that tells a meaningful story. Each project is a
                                labor of love for me, and I'm always striving to
                                make it professional and impactful.
                            </p>
                        </div>
                    </div>
                    <div className=" h-full transform bg-[#ff2a6d]/40 text-slate-700/90 duration-300 hover:bg-[#ff2a6d] hover:text-slate-800 sm:w-full md:w-full lg:w-1/3">
                        <Image
                            src={devBG}
                            alt="/"
                            className="z--1 pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
                            priority
                            unoptimized={true}
                        />
                        <div className="flex h-full w-full justify-between">
                            <h2 className="writing-vertical h-full transform cursor-default bg-[#CD3769]/50 px-3 font-electro text-4xl uppercase  tracking-titleWide text-slate-100  duration-1000 hover:tracking-titleDefault">
                                Developer
                            </h2>
                            <p className="mx-2  transform font-electro text-2xl text-slate-100 duration-300">
                                Filler text for developer section. Will update
                                with something personal.
                            </p>
                        </div>
                    </div>
                    <div className="h-full transform bg-[#ADD8E6]/40 text-slate-700/90 duration-300 hover:bg-[#ADD8E6]  hover:text-slate-700 sm:w-full md:w-full lg:w-1/3">
                        <Image
                            src={designBG}
                            alt="/"
                            className="z--1 pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
                            priority
                            unoptimized={true}
                        />
                        <div className="flex h-full w-full justify-between">
                            <h2 className="writing-vertical h-full transform cursor-default bg-[#79AFC0]/50 px-3 font-electro text-4xl uppercase tracking-titleWide  text-slate-700 duration-1000 hover:tracking-titleDefault">
                                Designer
                            </h2>
                            <p className="mx-2  transform font-electro text-2xl text-zinc-600 duration-300">
                                Filler text for developer section. Will update
                                with something personal.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </m.div>
    )
}

export default vision
