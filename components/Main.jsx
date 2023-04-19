import React, { useEffect } from "react"
import {
  SlSocialGithub,
  SlSocialTwitter,
  SlSocialLinkedin,
} from "react-icons/sl"
import Link from "next/link"

import Image from "next/image"
import { mainBG } from "../public/assets/backgrounds/index"
const Main = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <div className="w-full h-screen  text-center font-robot justify-center">
      <Image
        src={mainBG}
        alt="/"
        className="fixed inset-0 w-full h-full object-cover z-[-1] opacity-20 pointer-events-none"
        priority
        unoptimized={true}
      />
      <div className="max-w-[1240px] w-full  h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="p-2 uppercase font-robot text-sm tracking-widest text-zinc-200">
            Building decentralized internet
          </p>
          <h1 className="p-5 m-8 bg-zinc-300/80 cursor-default font-robot text-black hover:text-[#ff2a6d] hover:bg-zinc-800/80 border border-zinc-300 hover:border-[#ff2a6d] tracking-tight transform duration-300">
            WEB3 DEVELOPER
          </h1>

          <div className="p-2 uppercase tracking-tight flex space-between justify-center m-auto gap-8 font-robot text-xl">
            <h3>Frontend </h3>
            <h3>Smart Contracts </h3>
            <h3>UI/UX</h3>
          </div>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link
              href="https://github.com/igopib"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl p-4 cursor-pointer hover:scale-125 ease-in duration-300 hover:shadow-[#ff2a6d] hover:text-[#ff2a6d]"
            >
              <SlSocialGithub />
            </Link>

            <Link
              href="https://www.linkedin.com/in/gopinho/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl p-4 cursor-pointer hover:scale-125 ease-in duration-300 hover:shadow-[#ff2a6d] hover:text-[#ff2a6d]"
            >
              <SlSocialLinkedin />
            </Link>
            <Link
              href="https://twitter.com/gopiinho"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl p-4 cursor-pointer hover:scale-125 ease-in duration-300 hover:shadow-[#ff2a6d] hover:text-[#ff2a6d]"
            >
              <SlSocialTwitter />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
