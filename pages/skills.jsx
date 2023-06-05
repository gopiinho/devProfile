import React from "react"
import "devicon/devicon.min.css"
import { motion as m } from "framer-motion"
import Link from "next/link"

const Skills = () => {
    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="font-robot h-screen w-full bg-zinc-900 pt-[64px] text-zinc-200"
        >
            <div className="flex w-full flex-col">
                <div className="flex h-1/2 w-full flex-row sm:h-full sm:flex-col md:h-1/2 md:flex-row lg:h-1/2">
                    <div
                        className="group flex w-1/2 transform items-center justify-between border-r border-zinc-700 pr-6 duration-300 hover:bg-[#3c3d42] sm:w-full"
                        style={{ height: "calc(50vh - 75px)" }}
                    >
                        <h2 className="writing-vertical h-full rotate-180 transform cursor-default  bg-[#3c3d42] px-2 text-center font-cyber text-3xl text-zinc-500 duration-300 group-hover:text-[#ff577d]">
                            Blockchain
                        </h2>
                        <div className="tracking-lighter grid h-full w-[40%] grid-cols-1 justify-center text-center   font-electro sm:text-xs md:text-lg">
                            <div className="flex transform flex-col items-center justify-center gap-1 duration-300 hover:bg-zinc-800 hover:text-white">
                                <h3 className="uppercase tracking-wider text-[#ff2a6d]">
                                    Development
                                </h3>
                                <p className="tracking-tight sm:text-xs md:text-base">
                                    Hardhat • Foundry
                                </p>
                            </div>
                            <div className="flex transform flex-col items-center justify-center gap-1 duration-300 hover:bg-zinc-800 hover:text-white">
                                <h3 className="uppercase tracking-wider text-[#ff2a6d]">
                                    Standards
                                </h3>
                                <p className="tracking-tight sm:text-xs md:text-base">
                                    Chainlink • Openzeppelin
                                </p>
                            </div>
                            <div className="flex transform flex-col items-center justify-center gap-1 duration-300 hover:bg-zinc-800 hover:text-white">
                                <h3 className="uppercase tracking-wider text-[#ff2a6d]">
                                    API's
                                </h3>
                                <p className="tracking-tight sm:text-xs md:text-base">
                                    Ethers.js • web3.js
                                </p>
                            </div>
                            <div className="flex transform flex-col items-center justify-center gap-1 duration-300 hover:bg-zinc-800 hover:text-white">
                                <h3 className="uppercase tracking-wider text-[#ff2a6d]">
                                    Testing
                                </h3>
                                <p className="tracking-tight sm:text-xs md:text-base">
                                    Anvil • Foundry
                                </p>
                            </div>
                        </div>
                        <div className="lg:text-2 xl sm:text-md grid h-full w-[60%] grid-cols-1 items-center justify-center py-8 text-center font-electro uppercase tracking-tight md:text-2xl">
                            <p>Blockchain architecture</p>
                            <p>Smart Contracts Security</p>
                            <p>Solidity wizard</p>
                            <p>ERC 20,721,1155</p>
                        </div>
                    </div>
                    <div
                        className="group flex w-1/2 transform items-center justify-between border-r border-t border-zinc-700 pl-6 duration-300  hover:bg-[#3c3d42] sm:w-full"
                        style={{ height: "calc(50vh - 75px)" }}
                    >
                        <div className="lg:text-2 xl sm:text-md grid h-full w-[60%] grid-cols-1 items-center justify-center py-8 text-center font-electro uppercase tracking-tight md:text-2xl">
                            <p>Advanced Web Development</p>
                            <p>Unique Designs</p>
                            <p>Editing and maintaining</p>
                            <p>Modern JS Frameworks</p>
                        </div>
                        <div className="tracking-lighter grid h-full w-[40%] grid-cols-1 justify-center text-center   font-electro sm:text-xs md:text-base">
                            <div className="flex transform flex-col items-center justify-center gap-1  duration-300 hover:bg-zinc-800 hover:text-white">
                                <h3 className="uppercase tracking-wider text-[#ff2a6d]">
                                    Framework
                                </h3>
                                <p className="font-robot tracking-tight sm:text-xs md:text-base">
                                    React • Next.js
                                </p>
                            </div>
                            <div className="flex transform flex-col items-center justify-center gap-1 duration-300 hover:bg-zinc-800 hover:text-white">
                                <h3 className="uppercase tracking-wider text-[#ff2a6d]">
                                    Styling
                                </h3>
                                <p className="font-robot tracking-tight sm:text-xs md:text-base">
                                    Tailwindcss • CSS5
                                </p>
                            </div>
                            <div className="flex transform flex-col items-center justify-center gap-1 duration-300 hover:bg-zinc-800 hover:text-white">
                                <h3 className="uppercase tracking-wider text-[#ff2a6d]">
                                    Backend
                                </h3>
                                <p className="font-robot tracking-tight sm:text-xs md:text-base">
                                    PostgreSQL • Firebase
                                </p>
                            </div>
                            <div className="flex transform flex-col items-center justify-center gap-1 duration-300 hover:bg-zinc-800 hover:text-white">
                                <h3 className="uppercase tracking-wider text-[#ff2a6d]">
                                    Deployment
                                </h3>
                                <p className="font-robot tracking-tight sm:text-xs md:text-base">
                                    Netlify • AWS
                                </p>
                            </div>
                        </div>

                        <h2 className="writing-vertical h-full transform cursor-default  bg-[#3c3d42] px-2 text-center font-cyber text-3xl text-zinc-500 duration-300 group-hover:text-[#ff577d]">
                            Web
                        </h2>
                    </div>
                </div>
                <div
                    className="group flex h-1/2 w-full transform flex-col items-center duration-300 sm:h-full md:h-1/2 lg:h-1/2"
                    style={{ height: "calc(50vh)" }}
                >
                    <div className="grid h-full w-full grid-cols-5 justify-center text-center font-electro tracking-wider sm:grid-cols-2  md:grid-cols-5">
                        <Link
                            href="https://soliditylang.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="m-1 flex transform items-center justify-center gap-4 border  border-[#ff2a6d] bg-[#ff2a6d]/30 text-2xl duration-300 hover:bg-[#ff2a6d]/50 hover:text-[#63698E]"
                        >
                            solidity
                            <div className="devicon-solidity-plain text-3xl"></div>
                        </Link>
                        <Link
                            href="https://www.typescriptlang.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="m-1 flex transform items-center justify-center gap-4 border  border-[#ff2a6d] bg-[#ff2a6d]/30 text-2xl duration-300 hover:bg-[#ff2a6d]/50 hover:text-[#007ACC]"
                        >
                            typescript
                            <div className="devicon-typescript-plain text-3xl"></div>
                        </Link>
                        <Link
                            href="https://www.javascript.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="m-1 flex transform items-center justify-center gap-4 border  border-[#ff2a6d] bg-[#ff2a6d]/30 text-2xl duration-300 hover:bg-[#ff2a6d]/50 hover:text-[#f0db4f]"
                        >
                            javascript
                            <div className="devicon-javascript-plain text-3xl"></div>
                        </Link>
                        <Link
                            href="https://tailwindcss.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="m-1 flex transform items-center justify-center gap-4 border  border-[#ff2a6d] bg-[#ff2a6d]/30 text-2xl duration-300 hover:bg-[#ff2a6d]/50 hover:text-[#37bcf8]"
                        >
                            tailwindcss
                            <div className="devicon-tailwindcss-plain text-3xl"></div>
                        </Link>
                        <Link
                            href="https://nodejs.org/en"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="m-1 flex transform items-center justify-center gap-4 border  border-[#ff2a6d] bg-[#ff2a6d]/30 text-2xl duration-300 hover:bg-[#ff2a6d]/50 hover:text-[#3E863E]"
                        >
                            node.js
                            <div className="devicon-nodejs-plain text-3xl"></div>
                        </Link>
                        <Link
                            href="https://nextjs.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="m-1 flex transform items-center justify-center gap-4 border  border-[#ff2a6d] bg-[#ff2a6d]/30 text-2xl duration-300 hover:bg-[#ff2a6d]/60 hover:text-white"
                        >
                            next.js
                            <div className="devicon-nextjs-plain text-3xl"></div>
                        </Link>
                        <Link
                            href="https://firebase.google.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="m-1 flex transform items-center justify-center gap-4 border  border-[#ff2a6d] bg-[#ff2a6d]/30 text-2xl duration-300 hover:bg-[#ff2a6d]/50 hover:text-[#F2BD03]"
                        >
                            firebase
                            <div className="devicon-firebase-plain text-3xl"></div>
                        </Link>
                        <Link
                            href="https://www.docker.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="m-1 flex transform items-center justify-center gap-4 border  border-[#ff2a6d] bg-[#ff2a6d]/30 text-2xl duration-300 hover:bg-[#ff2a6d]/50 hover:text-[#2496ED]"
                        >
                            docker
                            <div className="devicon-docker-plain text-3xl"></div>
                        </Link>
                        <Link
                            href="https://expressjs.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="m-1 flex transform items-center justify-center gap-4 border  border-[#ff2a6d] bg-[#ff2a6d]/30 text-2xl duration-300 hover:bg-[#ff2a6d]/60 hover:text-white"
                        >
                            express.js
                            <div className="devicon-express-original text-3xl"></div>
                        </Link>
                        <Link
                            href="https://www.postgresql.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="m-1 flex transform items-center justify-center gap-4 border  border-[#ff2a6d] bg-[#ff2a6d]/30 text-2xl duration-300 hover:bg-[#ff2a6d]/50 hover:text-[#336791]"
                        >
                            postgreSQL
                            <div className="devicon-postgresql-plain text-3xl"></div>
                        </Link>
                    </div>
                    <div className="w-full rotate-180 transform cursor-default bg-[#3c3d42] py-2 text-center font-cyber text-3xl text-zinc-500 duration-300 group-hover:text-[#ff577d]">
                        Stack
                    </div>
                </div>
            </div>
        </m.div>
    )
}

export default Skills
