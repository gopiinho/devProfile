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
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full h-screen pt-[75px] group text-zinc-300 bg-[#1D1E20]"
    >
      <div className="flex flex-row md:flex-row sm:flex-col w-full h-full"></div>
    </m.div>
  )
}

export default Main
