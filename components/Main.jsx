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
                className="flex h-screen w-full justify-between sm:flex-col md:flex-col lg:flex-col"
            >
                <div className="flex h-full sm:flex-col md:flex-row lg:flex-row">
                    <div className="m-1 flex flex-col items-center justify-center gap-4 border border-[#ff2a6d] bg-[#ff2a6d]/5 font-electro sm:w-full md:w-[65%] lg:w-[65%]">
                        <h1 className="mt-4 font-electro text-4xl text-white ">
                            i build <span className="text-[#ff2a6d]">web3</span>{" "}
                            apps and design things
                        </h1>
                        <h1 className="font-electro text-xl text-white">
                            best friends with{" "}
                            <span className="text-[#ff2a6d]">solidity</span> and{" "}
                            <span className="text-[#ff2a6d]">typescript</span>
                        </h1>
                    </div>
                    <div className="m-1 flex flex-col gap-4 border border-[#ff2a6d] bg-[#ff2a6d]/5 text-left font-electro sm:h-full sm:w-full md:w-[40%] lg:w-[35%]">
                        <h1 className="mb-8 mt-4 font-electro text-4xl text-[#ff2a6d]">
                            Data
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
                            className="m-1 flex h-full transform items-center justify-center border border-[#ff2a6d] bg-[#ff2a6d]/30 py-2 duration-300 hover:bg-[#ff2a6d]/60 sm:text-xl md:text-2xl lg:text-4xl"
                        >
                            blockchain cv
                        </Link>
                        <Link
                            href="https://drive.google.com/file/d/1OExEROBqbM1LBC46ofQPJSkYKOnuLYC4/view?usp=share_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="m-1 flex h-full transform items-center justify-center border border-[#ff2a6d] bg-[#ff2a6d]/30 py-2 duration-300 hover:bg-[#ff2a6d]/60 sm:text-xl md:text-2xl lg:text-4xl"
                        >
                            cv
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="h-full w-full sm:text-base md:text-2xl lg:text-4xl">
                        <div className="grid h-full w-full grid-cols-3 justify-center text-center font-electro tracking-wider sm:grid-cols-1 md:grid-cols-3">
                            <Link
                                href="/projects"
                                className="m-1 flex transform items-center justify-center gap-4 border border-[#ff2a6d] bg-[#ff2a6d]/30 py-4 duration-300 hover:bg-[#ff2a6d]/60"
                            >
                                projects
                            </Link>
                            <Link
                                href="/skills"
                                className="m-1 flex transform items-center justify-center gap-4 border border-[#ff2a6d] bg-[#ff2a6d]/30 py-4 duration-300 hover:bg-[#ff2a6d]/60"
                            >
                                skills
                            </Link>
                            <Link
                                href="/contact"
                                className="m-1 flex transform items-center justify-center gap-4 border border-[#ff2a6d] bg-[#ff2a6d]/30 py-4 duration-300 hover:bg-[#ff2a6d]/60"
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
