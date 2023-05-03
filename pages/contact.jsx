import React, { useState } from "react"
import Link from "next/link"
import "devicon/devicon.min.css"
import { motion as m } from "framer-motion"

const Contact = () => {
  const [linkText, setLinkText] = useState("discord")

  return (
    <m.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      className="w-full h-screen pt-[75px]"
    >
      <div className="flex w-full">
        <div className="w-[50%] h-full">
          <div className="flex">
            <h2
              style={{ height: "calc(100vh - 75px)" }}
              className="writing-vertical font-cyber rotate-180 h-full text-zinc-500 uppercase text-3xl text-center transform duration-300 bg-[#3c3d42] group-hover:text-[#ff577d] px-2"
            >
              Contact
            </h2>
            <div>Resume section here</div>
          </div>
          <div></div>
        </div>
        <div className="w-[50%]">
          <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-2 font-phudu w-full h-full justify-center text-center font-semibold uppercase tracking-wider">
            <Link
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 items-center justify-center hover:bg-zinc-800 hover:text-[#63698E] transform duration-300"
            >
              Github
              <div className="devicon-github-plain text-3xl"></div>
            </Link>
            <Link
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 items-center justify-center hover:bg-zinc-800 hover:text-[#007ACC] transform duration-300"
            >
              linkedin
              <div className="devicon-linkedin-plain text-3xl"></div>
            </Link>
            <Link
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 items-center justify-center hover:bg-zinc-800 hover:text-[#f0db4f] transform duration-300"
            >
              Twitter
              <div className="devicon-twitter-plain text-3xl"></div>
            </Link>
            <Link
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 items-center justify-center hover:bg-zinc-800 hover:text-[#37bcf8] transform duration-300"
            >
              Instagram
            </Link>
            <Link
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 items-center justify-center hover:bg-zinc-800 hover:text-[#3E863E] transform duration-300"
            >
              Email
            </Link>
            <Link
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 items-center justify-center hover:bg-zinc-800 hover:text-white transform duration-300"
            >
              Discord
            </Link>
          </div>
        </div>
      </div>
    </m.div>
  )
}

export default Contact
