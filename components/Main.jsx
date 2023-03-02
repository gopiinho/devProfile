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
    <div className="w-full h-screen text-center font-robot pb-16">
      <Image
        src={mainBG}
        alt="/"
        className="fixed inset-0 w-full h-full object-cover z--1 opacity-30 pointer-events-none"
        priority
        unoptimized={true}
      />
      <div className="max-w-[1240px] w-full pt-28 h-full mx-auto p-2 flex justify-center items-center">
        <div className="pt-8">
          <p className="uppercase text-sm tracking-widest  text-slate-200">
            Building decentralized internet
          </p>
          <h1 className=" py-8 cursor-default font-phudu text-[#ff2a6d] tracking-titleWide hover:tracking-titleDefault transform duration-1000">
            WEB3 DEVELOPER
          </h1>
          <p className="py-4 text-slate-300 max-w-[70%] m-auto">
            I am deeply enthralled by the boundless potential of the internet,
            and the endless opportunities it presents for creativity and
            innovation. As an artistic and technologically-inclined individual,
            I am driven by a desire to bridge the gap between the worlds of
            gaming and blockchain, leveraging the strengths of both to create
            truly unique and immersive experiences.
          </p>
          <div className="flex items-center  justify-between max-w-[330px] m-auto py-4">
            <Link
              href="https://github.com/igopib"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl p-4 cursor-pointer hover:scale-125 ease-in duration-300 hover:shadow-[#ff2a6d] hover:text-[#ff2a6d]"
            >
              <SlSocialGithub />
            </Link>
            <Link
              href="https://twitter.com/gopiinho"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl p-4 cursor-pointer hover:scale-125 ease-in duration-300 hover:shadow-[#ff2a6d] hover:text-[#ff2a6d]"
            >
              <SlSocialTwitter />
            </Link>
            <Link
              href="https://www.linkedin.com/in/gopinho/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl p-4 cursor-pointer hover:scale-125 ease-in duration-300 hover:shadow-[#ff2a6d] hover:text-[#ff2a6d]"
            >
              <SlSocialLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
