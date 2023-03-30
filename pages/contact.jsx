import React, { useState } from "react"
import Link from "next/link"
import { motion as m } from "framer-motion"
import Image from "next/image"
import { contactBG } from "../public/assets/backgrounds/index"
const Contact = () => {
  const [linkText, setLinkText] = useState("discord")

  return (
    <m.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full lg:h-screen "
    >
      <Image
        src={contactBG}
        alt="/"
        className="fixed inset-0 w-full h-full object-cover z-[-1] opacity-30 pointer-events-none"
        priority
        unoptimized={true}
      />
      <div className="w-full m-auto py-28">
        <div className="">
          <div className="neonH2 flex items-center justify-center cursor-default">
            <h2 className="text-3xl tracking-widest uppercase text-cyber text-center my-12 font-cyber duration-200">
              Contact
            </h2>
          </div>
          <div className="bg-zinc-300 border-y-2 py-8 text-zinc-800 hover:text-zinc-200 hover:bg-zinc-800 border-zinc-600 hover:border-[#EA9931] hover:border-opacity-100 duration-300 border-opacity-40">
            <div className="w-full h-full p-8  text-center items-center font-robot">
              <div>
                <p className="text-2xl font-robot uppercase max-w-[700px] m-auto items-center justify-center">
                  Focused on improving daily and connecting with like minded
                  people. Hit me up, lets design future together!
                </p>
              </div>
              <div className="py-8 mt-4">
                <div className="max-w-[200px] m-auto justify-center items-center ease-in border-2 bg-zinc-800 text-[#ff2a6d] hover:text-white border-zinc-600 hover:border-[#ff2a6d] duration-300 hover:shadow-neon-main rounded-md border-opacity-40">
                  <Link
                    href="https://drive.google.com/file/d/12WNCNpQlSO1jyVFVxrmuQx1IWbH1PgCV/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" flex flex-col items-center justify-center py-3 font-cyber"
                  >
                    <h2 className="text-xl ">resume</h2>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 links items-center  justify-between max-w-[370px] m-auto p-4 font-cyber text-[#ff2a6d] mobile-center">
                <div className=" flex flex-col items-center justify-between ">
                  <Link
                    href="https://github.com/igopib"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="text-lg hover:text-white">github</h3>
                  </Link>
                </div>

                <div className=" flex flex-col items-center justify-center">
                  <Link
                    href="https://www.linkedin.com/in/gopinho/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="text-lg hover:text-white">linkedin</h3>
                  </Link>
                </div>

                <div className=" flex flex-col items-center justify-center">
                  <Link
                    href="https://twitter.com/gopiinho"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="text-lg hover:text-white">twitter</h3>
                  </Link>
                </div>

                <div className=" flex flex-col items-center justify-between ">
                  <Link
                    href="https://www.instagram.com/gopiinho/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="text-lg  hover:text-white">instagram</h3>
                  </Link>
                </div>

                <div className=" flex flex-col items-center justify-center">
                  <Link
                    href="mailto:gopinho@protonmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="text-lg hover:text-white">email</h3>
                  </Link>
                </div>

                <div className=" flex flex-col items-center justify-center">
                  <h3
                    className="text-lg cursor-pointer hover:text-white select-text"
                    onClick={() => setLinkText("Gopinho#6037")}
                  >
                    {linkText}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  )
}

export default Contact
