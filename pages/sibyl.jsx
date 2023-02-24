import React from "react"
import Link from "next/link"
import { motion as m } from "framer-motion"

const sibyl = () => {
  return (
    <m.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full h-screen text-center font-cyber"
    >
      <div className=" h-20 background-tile "></div>
      <div className="w-full ">
        <div className="max-w-[1240px] w-full h-full mx-auto   ">
          <div className="pt-20">
            <div className="neonH2 flex items-center justify-center cursor-default">
              <h2 className="text-3xl tracking-widest uppercase text-center  font-cyber opacity-70 hover:opacity-100 duration-200">
                NFT MINT PAGE
              </h2>
            </div>
            <h2 className=" tracking-widest uppercase text-center my-8 font-cyber text-slate-400">
              React - Solidity - ethersjs - ChakraUI
            </h2>

            <p className="text-slate-400">
              The Sibyl system sees it all, only seeks the unexampled minds.
              Become a part of the hive mind and oversee the human desires.
            </p>
            <p className="text-slate-400 py-4">
              NFT project based on anime psycho pass. Each NFT is supposed to be
              an access token to every member in Sibyl system
            </p>
          </div>
        </div>
        <div className="pt-8 max-w-[350px] m-auto">
          <div className="border-2 border-neon-main">
            <h2 className="border-b-2 border-slate-400 mx-4 py-2">Rules</h2>
            <div className="text-slate-400 py-2">
              <p>Max Members - 247</p>
              <p>Max Per Person - 1</p>
              <p>Mint Amount - 0.05 ether</p>
              <p className="text-red-600">Network - Georli</p>
            </div>
          </div>
        </div>
        <div className=" grid md:grid-cols-2 gap-4 links items-center  justify-between max-w-[470px] m-auto p-8 font-cyber text-[#ff2a6d] mobile-center">
          <div className=" flex flex-col items-center justify-between ">
            <Link
              href="https://whimsical-kheer-5221bd.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="neonH2 text-center py-2  px-16 border-2 border-slate-600  hover:border-[#ff2a6d] bg-black text-[#ff2a6d] hover:text-white text-lg cursor-pointer opacity-75 hover:opacity-100 transition duration-700 hover:shadow-neon-main rounded-md border-opacity-40">
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
              <p className="neonH2 text-center py-2  px-6 border-2 border-slate-600  hover:border-[#ff2a6d] bg-black text-[#ff2a6d] hover:text-white text-lg cursor-pointer opacity-75 hover:opacity-100 transition duration-700 hover:shadow-neon-main rounded-md border-opacity-40">
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
