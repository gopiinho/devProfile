import React, { useState } from "react"
import Link from "next/link"
import "devicon/devicon.min.css"
import { motion as m } from "framer-motion"

// React Icons Import
import { AiFillInstagram, AiFillMail } from "react-icons/ai"
import { BsDiscord } from "react-icons/bs"
import { ImBlog } from "react-icons/im"

const Contact = () => {
  const [linkText, setLinkText] = useState("discord")

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-screen pt-[64px] group bg-zinc-900 text-zinc-300"
    >
      <div className="flex flex-row md:flex-row sm:flex-col w-full overflow-hidden">
        <div className="w-1/2 sm:w-full h-full">
          <div className="flex">
            <h2
              style={{ height: "calc(100vh - 75px)" }}
              className="writing-vertical font-cyber rotate-180 h-full text-zinc-500  text-3xl text-center transform duration-300 bg-[#3c3d42] group-hover:text-[#ff577d] px-2"
            >
              Contact
            </h2>
            <div className="flex flex-col w-full">
              <div className="h-[70%] w-[80%] md:w-[90%] sm:w-[90%] m-auto font-rale text-center flex flex-col gap-12 justify-center items-center">
                <p className="lg:text-5xl md:text-3xl sm:text-2xl">
                  Have any questions or need to talk about anything tech or web3
                  related ?
                </p>
                <p className="lg:text-3xl md:text-3xl sm:text-lg text-[#ff2a6d]">
                  {" "}
                  We live in age of the Internet, please reach out!
                </p>
              </div>
              <div className="h-[30%] w-full grid grid-cols-1 border-t border-zinc-700  text-center items-center justify-center">
                <Link
                  href="/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4 h-full items-center justify-center hover:bg-zinc-800 text-6xl font-rale border border-zinc-700 hover:text-[#ff2a6d] transform duration-300"
                >
                  blog
                  <ImBlog size={35} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 sm:w-full ">
          <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-2 text-3xl font-rale w-full h-full justify-center text-center font-semibold tracking-wider">
            <Link
              href="https://github.com/igopib"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 py-4 items-center justify-center hover:bg-zinc-800 border border-zinc-700 hover:text-[#ff2a6d] transform duration-300"
            >
              github
              <div className="devicon-github-plain text-3xl"></div>
            </Link>
            <Link
              href="https://www.linkedin.com/in/gopinho/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 py-4 items-center justify-center hover:bg-zinc-800 border border-zinc-700 hover:text-[#ff2a6d] transform duration-300"
            >
              linkedin
              <div className="devicon-linkedin-plain text-3xl"></div>
            </Link>
            <Link
              href="https://twitter.com/gopiinho"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 py-4 items-center justify-center hover:bg-zinc-800 border border-zinc-700 hover:text-[#ff2a6d] transform duration-300"
            >
              twitter
              <div className="devicon-twitter-plain text-3xl"></div>
            </Link>
            <Link
              href="https://www.instagram.com/gopiinho/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 py-4 items-center justify-center hover:bg-zinc-800 border border-zinc-700 hover:text-[#ff2a6d] transform duration-300"
            >
              insta
              <AiFillInstagram size={35} />
            </Link>
            <Link
              href="mailto:gopinho@protonmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 py-4 items-center justify-center hover:bg-zinc-800 border border-zinc-700 hover:text-[#ff2a6d] transform duration-300"
            >
              email
              <AiFillMail size={35} />
            </Link>
            <h3
              onClick={() => setLinkText("Gopinho#6037")}
              className="flex gap-4 py-4 items-center justify-center cursor-pointer hover:bg-zinc-800 border border-zinc-700 select-text hover:text-[#ff2a6d] transform duration-300"
            >
              {linkText}
              <BsDiscord size={35} />
            </h3>
          </div>
        </div>
      </div>
    </m.div>
  )
}

export default Contact
