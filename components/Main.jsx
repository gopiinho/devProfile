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
    <div className="w-full h-full text-center font-robot pb-16 justify-center">
      <Image
        src={mainBG}
        alt="/"
        className="fixed inset-0 w-full h-full object-cover z-[-1] opacity-20 pointer-events-none"
        priority
        unoptimized={true}
      />
      <div className="max-w-[1240px] w-full pt-40 h-full mx-auto p-2 flex justify-center items-center">
        <div className="pt-8">
          <p className="uppercase text-sm tracking-widest text-slate-200">
            Building decentralized internet
          </p>
          <h1 className=" p-8 cursor-default font-cyber text-[#ff2a6d] tracking-titleWide hover:tracking-titleDefault transform duration-1000">
            WEB3 DEVELOPER
          </h1>

          <div className="flex space-between justify-center m-auto py-4 gap-8 tracking-widest font-phudu text-2xl mt-8 ">
            <h3>Frontend </h3>
            <h3>Smart Contracts </h3>
            <h3>Devops</h3>
          </div>
          <p className="py-4 text-slate-300 max-w-[80%] m-auto">
            As an avid supporter of digital assets, I am passionate about
            utilizing blockchain technology to facilitate the growth of the
            digital economy. With my expertise in developing smart contracts and
            frontends, I am dedicated to contributing to the adoption of
            blockchain in business and gaming. My ultimate goal is to empower
            individuals and organizations to leverage the benefits of this
            innovative technology in a secure and efficient manner.
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
