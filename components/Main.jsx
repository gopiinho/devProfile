import React, { useEffect } from "react"
import { motion as m } from "framer-motion"
import {
  SlSocialGithub,
  SlSocialTwitter,
  SlSocialLinkedin,
} from "react-icons/sl"
import Link from "next/link"
import Image from "next/image"

// Internal Import
import { mainBG, mainBG2 } from "../public/assets/backgrounds/index"

const Main = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full h-screen pt-[75px] group text-zinc-300"
    >
      <Image
        src={mainBG2}
        alt="/"
        className="fixed inset-0 w-full h-full object-cover z-[-1] opacity-10 pointer-events-none"
        priority
        unoptimized={true}
      />
      <div className="flex flex-col justify-center text-center items-center w-full h-full">
        <div>
          <h2>Gurpreet Singh</h2>
        </div>
      </div>
    </m.div>
  )
}

export default Main
