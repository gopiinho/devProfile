import React, { useEffect } from "react"
import { motion as m } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

// Internal Imports
import { avatar, mainBG } from "../public/assets/backgrounds/index"

const Main = () => {
    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="group w-full pt-[64px] text-zinc-100 sm:h-full md:h-screen lg:h-screen"
        >
            <Image
                src={mainBG}
                alt="/"
                className="pointer-events-none fixed inset-0 z-[-1] h-full w-full object-cover opacity-10"
                priority
                unoptimized={true}
            />
            <div
                style={{ height: "calc(100%)" }}
                className="flex h-screen w-full justify-between p-1 sm:flex-col"
            >
                <div className="flex h-full gap-1 sm:flex-col md:flex-row ">
                    <div className="flex flex-col gap-4 border border-[#ff2a6d] bg-[#ff2a6d]/5 p-1 text-left font-electro sm:h-full sm:w-full md:w-[40%] lg:w-[35%]">
                        <h1 className="mb-8 mt-4 text-center font-electro text-4xl text-[#ff2a6d]">
                            User
                        </h1>
                        <Image
                            src={avatar}
                            alt="/"
                            className="flex h-[170px] w-[170px] transform cursor-pointer items-center justify-center border border-[#ff2a6d] opacity-40 duration-300 hover:opacity-60"
                            priority
                            unoptimized={true}
                            style={{ margin: "0 auto" }}
                        />
                        <p className="mb-4 text-center text-xs text-[#ff2a6d] underline">
                            avatar
                        </p>
                        <div className="mx-4">
                            <h2 className="flex justify-between text-2xl tracking-tighter">
                                Name:{" "}
                                <span className="text-right text-[#ff2a6d]">
                                    Gurpreet Singh
                                </span>
                            </h2>
                            <h2 className="flex justify-between text-2xl tracking-tighter">
                                Version:{" "}
                                <span className="text-right">v.1998</span>
                            </h2>
                            <h2 className="flex justify-between text-2xl tracking-tighter">
                                Location:{" "}
                                <span className="text-right">Manitoba, CA</span>
                            </h2>
                            <h2 className="flex justify-between text-2xl tracking-tighter">
                                Alias:{" "}
                                <span className="text-right">Gopinho</span>
                            </h2>
                        </div>
                        <Link
                            href="https://drive.google.com/file/d/1OExEROBqbM1LBC46ofQPJSkYKOnuLYC4/view?usp=share_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-16 flex-grow transform items-center justify-center border border-[#ff2a6d] bg-[#ff2a6d]/30 duration-300 hover:bg-[#ff2a6d]/60 sm:text-xl md:h-full md:text-2xl lg:text-4xl"
                        >
                            resume
                        </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1 bg-[#ff2a6d]/5 font-electro sm:w-full md:flex-row">
                        <div className="flex h-full w-full border border-[#ff2a6d] bg-[#ff2a6d]/10 text-white">
                            <p>Developer journey so far!</p>
                        </div>
                        <div className="sm flex h-full w-full flex-col justify-stretch gap-2 text-center font-electro tracking-wider md:w-60 ">
                            <Link
                                href="/projects"
                                className="flex h-full transform items-center justify-center border border-[#ff2a6d] bg-[#ff2a6d]/30 py-4 duration-300 hover:bg-[#ff2a6d]/60"
                            >
                                work
                            </Link>
                            <Link
                                href="/skills"
                                className=" flex h-full transform items-center justify-center border border-[#ff2a6d] bg-[#ff2a6d]/30 py-4 duration-300 hover:bg-[#ff2a6d]/60"
                            >
                                skills
                            </Link>
                            <Link
                                href="/contact"
                                className=" flex h-full transform items-center justify-center border border-[#ff2a6d] bg-[#ff2a6d]/30 py-4 duration-300 hover:bg-[#ff2a6d]/60"
                            >
                                contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </m.div>
    )
}

export default Main
