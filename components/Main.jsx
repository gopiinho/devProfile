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
import { mainBG, profilePic } from "../public/assets/backgrounds/index"

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
      <div className="flex justify-center text-center items-center h-full">
        <p>Web 3 Developer</p>
        <p>Another</p>
      </div>
    </m.div>
  )
}

export default Main
