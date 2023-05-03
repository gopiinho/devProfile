import React, { useState } from "react"
import Link from "next/link"
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
      <div className="flex w-full ">
        <div className="w-[50%] h-full">
          <div className="flex">
            <h2
              style={{ height: "calc(100vh - 75px)" }}
              className="writing-vertical font-cyber rotate-180 h-full text-zinc-500 uppercase text-3xl text-center transform duration-300 bg-[#3c3d42] group-hover:text-[#ff577d] px-2"
            >
              Contact
            </h2>
          </div>
          <div></div>
        </div>
        <div className="w-[50%]">Links</div>
      </div>
    </m.div>
  )
}

export default Contact
