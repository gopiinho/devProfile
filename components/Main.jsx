import React, { useEffect } from "react"
import { motion as m } from "framer-motion"
import Link from "next/link"

const Main = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full h-screen pt-[75px] group text-zinc-300 bg-zinc-900"
    >
      <div className="flex lg:flex-col md:flex-col sm:flex-col w-full h-full">
        <div className="w-full h-[80%] flex flex-col gap-4 font-rale justify-center items-center text-center">
          <h1 className=" tracking-tighter">
            {`I'm Gurpreet `}{" "}
            <span className="text-[#ff2a6d]">Web3 Developer</span>{" "}
          </h1>
          <p className="text-lg">I work with smart contracts and webapps.</p>
        </div>

        <div className="w-full h-[20%]">
          <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-3 text-3xl font-rale w-full h-full justify-center text-center font-semibold tracking-wider">
            <Link
              href="https://github.com/igopib"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 py-4 items-center justify-center hover:bg-zinc-800 border border-zinc-700 hover:text-[#ff2a6d] transform duration-300"
            >
              projects
              <div className="devicon-github-plain text-3xl"></div>
            </Link>
            <Link
              href="https://www.linkedin.com/in/gopinho/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 py-4 items-center justify-center hover:bg-zinc-800 border border-zinc-700 hover:text-[#ff2a6d] transform duration-300"
            >
              skills
              <div className="devicon-linkedin-plain text-3xl"></div>
            </Link>
            <Link
              href="https://twitter.com/gopiinho"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 py-4 items-center justify-center hover:bg-zinc-800 border border-zinc-700 hover:text-[#ff2a6d] transform duration-300"
            >
              about
              <div className="devicon-twitter-plain text-3xl"></div>
            </Link>
          </div>
        </div>
      </div>
    </m.div>
  )
}

export default Main
