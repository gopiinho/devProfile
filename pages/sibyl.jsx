import React from "react"
import Link from "next/link"
import { motion as m } from "framer-motion"
import Image from "next/image"
import { sibylBG } from "../public/assets/backgrounds/index"

const sibyl = () => {
    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="h-screen w-full pt-20 text-center font-cyber"
        >
            <Image
                src={sibylBG}
                alt="/"
                className="pointer-events-none fixed inset-0 z-[-1] h-full w-full object-cover opacity-10"
                priority
                unoptimized={true}
            />
            <div className="w-full ">
                <div className="mx-auto mt-20 h-full w-full max-w-[1240px] py-4">
                    <div>
                        <div className="neonH2 flex cursor-default items-center justify-center">
                            <h2 className="text-center font-cyber text-3xl uppercase  tracking-widest opacity-70 duration-200 hover:opacity-100">
                                NFT MINT PAGE
                            </h2>
                        </div>
                        <h2 className=" my-8 text-center font-cyber uppercase tracking-widest text-slate-400">
                            React - Solidity - ethersjs - ChakraUI
                        </h2>

                        <p className="text-slate-400">
                            The Sibyl system sees it all, only seeks the
                            unexampled minds. Become a part of the hive mind and
                            oversee the human desires.
                        </p>
                        <p className="py-4 text-slate-400">
                            NFT project based on anime psycho pass. Each NFT is
                            supposed to be an access token to every member in
                            Sibyl system
                        </p>
                    </div>
                </div>
                <div className="m-auto my-8 max-w-[350px]">
                    <div className="rounded-md border-2 border-neon-main bg-zinc-800">
                        <h2 className="mx-4 border-b-2 border-slate-400 py-2">
                            Rules
                        </h2>
                        <div className="py-2 text-slate-400">
                            <p>Max Members - 247</p>
                            <p>Max Per Person - 1</p>
                            <p>Mint Amount - 0.05 ether</p>
                            <p className="my-3 text-[#ff2a6d]">
                                Network - Georli
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" links mobile-center m-auto grid max-w-[470px]  items-center justify-between gap-4 p-8 font-cyber text-[#ff2a6d] md:grid-cols-2">
                    <div className=" flex flex-col items-center justify-between ">
                        <Link
                            href="https://whimsical-kheer-5221bd.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <p className="neonH2 cursor-pointer rounded-md  border-2 border-zinc-600 border-opacity-40 bg-zinc-900 px-16 py-2 text-center text-lg text-[#ff2a6d] opacity-75 transition duration-700 hover:border-[#ff2a6d] hover:text-white hover:opacity-100 hover:shadow-neon-main">
                                visit
                            </p>
                        </Link>
                    </div>

                    <div className=" flex flex-col items-center justify-center">
                        <Link
                            href="https://github.com/igopib/sibyl-access"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <p className="neonH2 cursor-pointer rounded-md  border-2 border-zinc-600 border-opacity-40  bg-zinc-900 px-6 py-2 text-center text-lg text-[#ff2a6d] opacity-75 transition duration-700 hover:border-[#ff2a6d] hover:text-white hover:opacity-100 hover:shadow-neon-main">
                                source code
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </m.div>
    )
}

export default sibyl
