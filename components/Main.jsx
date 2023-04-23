import React, { useEffect } from "react"
import {
  SlSocialGithub,
  SlSocialTwitter,
  SlSocialLinkedin,
} from "react-icons/sl"
import Link from "next/link"
import Image from "next/image"

// Internal Import
import { mainBG, profilePic } from "../public/assets/backgrounds/index"

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
          <p className="p-2 bg-zinc-300/80 font-robot text-black uppercase border border-zinc-300/0 hover:border-[#ff2a6d] transform duration-300 text-sm tracking-widest">
            Building decentralized internet
          </p>
          <h1 className="p-5 bg-zinc-300/80 font-robot text-black hover:text-[#ff2a6d] hover:bg-zinc-800/80 hover:border-[#ff2a6d] transform duration-500 border border-zinc-300 tracking-tight">
            WEB3 DEVELOPER
          </h1>

          <div className="flex items-center justify-between p-5 bg-zinc-300/80 font-robot text-black border border-zinc-300/0 hover:border-[#ff2a6d] transform duration-300">
            <Image
              src={profilePic}
              alt="/"
              width={130}
              className="rounded-full grayscale hover:grayscale-0 transform duration-300 ml-6"
            ></Image>
            <div className="max-w-[60%] flex-col">
              <p className="uppercase text-lg tracking-tight font-semibold">
                Hi, I'M Gurpreet
              </p>
            </div>
          </div>

          <div className="p-5 bg-zinc-300/80 font-robot text-black border border-zinc-300/0  hover:border-[#ff2a6d] transform duration-300 uppercase tracking-tight flex space-between justify-center m-auto gap-10 text-xl">
            <h3>Frontend </h3>
            <h3>Smart Contracts </h3>
            <h3>UI/UX</h3>
          </div>
          <div className="p-5 bg-zinc-300/80 font-robot text-black border border-zinc-300/0  hover:border-[#ff2a6d] transform duration-300 flex items-center justify-between ">
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
