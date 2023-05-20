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
      className="w-full min-h-screen pt-[64px] group text-zinc-100"
      style={{ height: "100%" }}
    >
      <Image
        src={mainBG}
        alt="/"
        className="fixed inset-0 w-full h-full object-cover z-[-1] opacity-10 pointer-events-none"
        priority
        unoptimized={true}
      />
      <div className="flex lg:flex-col md:flex-col sm:flex-col w-full h-full justify-between">
        <div className="flex h-full lg:flex-row md:flex-row sm:flex-col">
          <div className="lg:w-[65%] md:w-[65%] sm:w-full flex flex-col items-center justify-center gap-4 m-1 font-electro bg-[#ff2a6d]/5 border border-[#ff2a6d]">
            <h1 className="text-4xl font-electro text-white mt-4 ">
              i build <span className="text-[#ff2a6d]">web3</span> apps and
              design things
            </h1>
            <h1 className="text-xl font-electro text-white">
              best friends with <span className="text-[#ff2a6d]">solidity</span>{" "}
              and <span className="text-[#ff2a6d]">typescript</span>
            </h1>
          </div>
          <div className="flex lg:w-[35%] md:w-[40%] sm:w-full sm:h-full flex-col gap-4 m-1 font-electro text-left bg-[#ff2a6d]/5 border border-[#ff2a6d]">
            <h1 className="text-4xl font-electro text-[#ff2a6d] mb-8 mt-4">
              Data
            </h1>
            <Image
              src={avatar}
              alt="/"
              className="w-[170px] h-[170px] border border-[#ff2a6d] flex items-center justify-center opacity-40 hover:opacity-60 transform duration-300 cursor-pointer"
              priority
              unoptimized={true}
              style={{ margin: "0 auto" }}
            />
            <p className="text-center text-[#ff2a6d] text-xs mb-4 underline">
              avatar
            </p>
            <div className="mx-4">
              <h2 className="text-2xl tracking-tighter flex justify-between">
                Name:{" "}
                <span className="text-right text-[#ff2a6d]">
                  Gurpreet Singh
                </span>
              </h2>
              <h2 className="text-2xl tracking-tighter flex justify-between">
                Version: <span className="text-right">v.1998</span>
              </h2>
              <h2 className="text-2xl tracking-tighter flex justify-between">
                Location: <span className="text-right">Manitoba, CA</span>
              </h2>
              <h2 className="text-2xl tracking-tighter flex justify-between">
                Alias: <span className="text-right">Gopinho</span>
              </h2>
            </div>
            <Link
              href="https://drive.google.com/file/d/1OExEROBqbM1LBC46ofQPJSkYKOnuLYC4/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 py-4 m-1 h-full lg:text-4xl md:text-2xl sm:text-xl items-center justify-center bg-[#ff2a6d]/30 hover:bg-[#ff2a6d]/60 border border-[#ff2a6d] transform duration-300"
            >
              blockchain cv
            </Link>
            <Link
              href="https://drive.google.com/file/d/1OExEROBqbM1LBC46ofQPJSkYKOnuLYC4/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 py-4 m-1 h-full lg:text-4xl md:text-2xl sm:text-xl items-center justify-center bg-[#ff2a6d]/30 hover:bg-[#ff2a6d]/60 border border-[#ff2a6d] transform duration-300"
            >
              cv
            </Link>
          </div>
        </div>
        <div>
          <div className="w-full h-full lg:text-4xl md:text-2xl sm:text-base">
            <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 h-full font-electro w-full justify-center text-center tracking-wider">
              <Link
                href="/projects"
                className="flex gap-4 py-4 m-1 items-center justify-center bg-[#ff2a6d]/30 hover:bg-[#ff2a6d]/60 border border-[#ff2a6d] transform duration-300"
              >
                projects
              </Link>
              <Link
                href="/skills"
                className="flex gap-4 py-4 m-1 items-center justify-center bg-[#ff2a6d]/30 hover:bg-[#ff2a6d]/60 border border-[#ff2a6d] transform duration-300"
              >
                skills
              </Link>
              <Link
                href="/contact"
                className="flex gap-4 py-4 m-1 items-center justify-center bg-[#ff2a6d]/30 hover:bg-[#ff2a6d]/60 border border-[#ff2a6d] transform duration-300"
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
