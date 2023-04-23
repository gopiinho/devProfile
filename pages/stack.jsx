import React from "react"
import "devicon/devicon.min.css"
import { motion as m } from "framer-motion"
import Image from "next/image"
import { stackBG } from "../public/assets/backgrounds/index"

const Skills = () => {
  return (
    <m.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full h-full lg:h-full"
    >
      <Image
        src={stackBG}
        alt="/"
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1] opacity-20 pointer-events-none"
        priority
        unoptimized={true}
      />

      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full py-28 ">
        <div className="neonH2 flex items-center justify-center cursor-default">
          <h2 className="text-3xl tracking-widest uppercase text-cyber text-center my-12 font-cyber duration-200">
            Tech Stack
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 tracking-widest font-phudu ">
          <div className="px-4 text-zinc-800 hover:text-[#63698E]">
            <div className="grid grid-cols-2 gap-4 bg-zinc-200 hover:bg-zinc-800 justify-center items-center ease-in duration-300 rounded-md border-[#63698E] opacity-100  border-2 hover:shadow-neon-sol border-opacity-40 hover:border-opacity-100 ">
              <div className="m-auto">
                <div className="py-6 devicon-solidity-plain text-6xl hover:scale-110 transform duration-300"></div>
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h2 className="text-xl transform duration-300">Solidity</h2>
              </div>
            </div>
          </div>

          <div className=" px-4 text-zinc-800 hover:text-[#f0db4f]/60">
            <div className="grid grid-cols-2 gap-4 bg-zinc-200 hover:bg-zinc-800 justify-center items-center ease-in duration-300 rounded-md border-[#f0db4f]  border-2 hover:shadow-neon-yellow border-opacity-40 hover:border-opacity-100">
              <div className="m-auto">
                <div className="py-6 devicon-javascript-plain text-6xl  hover:scale-110 transform duration-300"></div>
              </div>
              <div className=" flex flex-col items-center justify-center ">
                <h2 className="text-xl transform duration-300">JavaScript</h2>
              </div>
            </div>
          </div>

          <div className="px-4 text-zinc-800 hover:text-[#007ACC]">
            <div className="grid grid-cols-2 gap-4 bg-zinc-200 hover:bg-zinc-800 justify-center items-center ease-in duration-300 rounded-md border-[#007ACC]   border-2 hover:shadow-neon-type border-opacity-40 hover:border-opacity-100">
              <div className="m-auto">
                <div className=" py-6 devicon-typescript-original text-6xl hover:scale-110 transform duration-300"></div>
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h2 className="text-xl transform duration-300">TypeScript</h2>
              </div>
            </div>
          </div>

          <div className="px-4 text-zinc-800 hover:text-[#37bcf8]">
            <div className="grid grid-cols-2 gap-4 bg-zinc-200 hover:bg-zinc-800 justify-center items-center ease-in duration-300 rounded-md border-[#37bcf8]   border-2 hover:shadow-neon-tailwind border-opacity-40 hover:border-opacity-100">
              <div className="m-auto">
                <div className="py-6 devicon-tailwindcss-plain text-6xl hover:scale-110 transform duration-300"></div>
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h2 className="text-xl transform duration-300">Tailwind</h2>
              </div>
            </div>
          </div>

          <div className="px-4  text-zinc-800 hover:text-[#61d9fb]">
            <div className="grid grid-cols-2 gap-4 bg-zinc-200 hover:bg-zinc-800 justify-center items-center ease-in duration-300 rounded-md border-[#61d9fb]   border-2 hover:shadow-neon-blue border-opacity-40 hover:border-opacity-100">
              <div className="m-auto">
                <div className=" py-6 devicon-react-original text-6xl  hover:scale-110 transform duration-300"></div>
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h2 className="text-xl transform duration-300">React</h2>
              </div>
            </div>
          </div>

          <div className="px-4 text-zinc-800 hover:text-[#3E863E]">
            <div className="grid grid-cols-2 gap-4 bg-zinc-200 hover:bg-zinc-800 justify-center items-center ease-in duration-300 rounded-md border-[#3E863E]   border-2 hover:shadow-neon-green border-opacity-40 hover:border-opacity-100">
              <div className="m-auto">
                <div className=" py-6 devicon-nodejs-plain text-6xl  hover:scale-110 transform duration-300"></div>
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h2 className="text-xl transform duration-300">NodeJS</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full p-8">
          <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full ">
            <div className="neonH2 flex items-center justify-center cursor-default">
              <h2 className="text-3xl tracking-widest uppercase text-center my-12 font-cyber duration-200">
                Web3 Stack
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg-grid-cols-3 gap-8 tracking-widest font-robot">
              <div className="px-4">
                <div className=" justify-center items-center ease-in bg-zinc-200 hover:bg-zinc-800 text-zinc-800 hover:text-zinc-200 border-2 border-slate-600 hover:border-[#ff2a6d] duration-300 hover:shadow-neon-main rounded-md  border-opacity-40">
                  <div className=" flex flex-col items-center justify-center py-4 font-phudu">
                    <h2 className="text-xl">Frameworks</h2>
                  </div>
                  <div className="text-center  py-4">
                    <p>Hardhat - Foundry - Truffle</p>
                  </div>
                </div>
              </div>

              <div className="px-4">
                <div className=" justify-center items-center ease-in bg-zinc-200 hover:bg-zinc-800 text-zinc-800 hover:text-zinc-200 border-2 border-slate-600 hover:border-[#ff2a6d] duration-300 hover:shadow-neon-main rounded-md border-opacity-40">
                  <div className=" flex flex-col items-center justify-center py-4 font-phudu">
                    <h2 className="text-xl">Standards</h2>
                  </div>
                  <div className="text-center  py-4">
                    <p>OpenZeppelin - Chainlink - ERC 20/721A</p>
                  </div>
                </div>
              </div>

              <div className="px-4">
                <div className=" justify-center items-center ease-in bg-zinc-200 hover:bg-zinc-800 text-zinc-800 hover:text-zinc-200 border-2 border-slate-600 hover:border-[#ff2a6d] duration-300 hover:shadow-neon-main rounded-md border-opacity-40">
                  <div className=" flex flex-col items-center justify-center py-4 font-phudu">
                    <h2 className="text-xl">Querying</h2>
                  </div>
                  <div className="text-center  py-4">
                    <p>EtherScan - Alchemy - Moralis</p>
                  </div>
                </div>
              </div>

              <div className="px-4">
                <div className=" justify-center items-center ease-in bg-zinc-200 hover:bg-zinc-800 text-zinc-800 hover:text-zinc-200 border-2 border-slate-600  hover:border-[#ff2a6d] duration-300 hover:shadow-neon-main rounded-md border-opacity-40">
                  <div className=" flex flex-col items-center justify-center py-4 font-phudu">
                    <h2 className="text-xl">API's</h2>
                  </div>
                  <div className="text-center  py-4">
                    <p>Ethers.js - Wagmi.sh - Web3.js</p>
                  </div>
                </div>
              </div>

              <div className="px-4">
                <div className=" justify-center items-center ease-in bg-zinc-200 hover:bg-zinc-800 text-zinc-800 hover:text-zinc-200 border-2 border-slate-600  hover:border-[#ff2a6d] duration-300 hover:shadow-neon-main rounded-md border-opacity-40">
                  <div className=" flex flex-col items-center justify-center py-4 font-phudu">
                    <h2 className="text-xl">Analysis</h2>
                  </div>
                  <div className="text-center  py-4">
                    <p>Slither - Mythril - Securify</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  )
}

export default Skills
