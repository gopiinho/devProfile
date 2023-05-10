import React, { useEffect } from "react"
import { motion as m } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

// Internal Imports
import { avatar } from "../public/assets/backgrounds"

const Main = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full h-screen pt-[64px] group text-zinc-100 bg-zinc-900"
    >
      <div className="flex lg:flex-col md:flex-col sm:flex-col w-full h-full">
        <div className="max-w-[495px] h-[80%] flex flex-col gap-4 m-1 p-3 font-electro text-left bg-[#ff2a6d]/10 border border-[#ff2a6d]">
          <h1 className="text-5xl font-cyber text-[#ff2a6d] mb-8">Profile</h1>
          <Image
            src={avatar}
            alt="/"
            className="w-[170px] h-[170px] border border-[#ff2a6d] flex items-center justify-center opacity-40 pointer-events-none"
            priority
            unoptimized={true}
            style={{ margin: "0 auto" }} // Add this line
          />
          <p className="text-center text-[#ff2a6d] text-xs mb-4 underline">
            avatar
          </p>
          <div className="mx-4">
            <h2 className="text-2xl tracking-tighter flex justify-between">
              Name:{" "}
              <span className="text-right text-[#ff2a6d]">Gurpreet Singh</span>
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
            <p className="text-lg mt-4">
              I work with smart contracts and webapps.
            </p>
          </div>
          <Link
            href="https://github.com/igopib"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 py-4 m-1 h-full lg:text-4xl md:text-2xl sm:text-xl items-center justify-center bg-[#ff2a6d]/30 hover:bg-[#ff2a6d]/60 border border-[#ff2a6d] transform duration-300"
          >
            cv
          </Link>
        </div>

        <div className="w-full h-[20%]">
          <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-3 text-3xl font-electro w-full h-full justify-center text-center tracking-wider">
            <Link
              href="https://github.com/igopib"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 py-4 m-1 items-center justify-center bg-[#ff2a6d]/30 hover:bg-[#ff2a6d]/60 border border-[#ff2a6d] transform duration-300"
            >
              projects
            </Link>
            <Link
              href="https://www.linkedin.com/in/gopinho/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 py-4 m-1 items-center justify-center bg-[#ff2a6d]/30 hover:bg-[#ff2a6d]/60 border border-[#ff2a6d] transform duration-300"
            >
              skills
            </Link>
            <Link
              href="https://twitter.com/gopiinho"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 py-4 m-1 items-center justify-center bg-[#ff2a6d]/30 hover:bg-[#ff2a6d]/60 border border-[#ff2a6d] transform duration-300"
            >
              about
            </Link>
          </div>
        </div>
      </div>
    </m.div>
  )
}

export default Main
