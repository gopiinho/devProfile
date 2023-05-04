import React, { useState } from "react"
import { motion as m } from "framer-motion"

const Blog = () => {
  return (
    <m.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      className="w-full h-screen pt-[75px]"
    >
      <div className="w-full h-full flex justify-center items-center text-center">
        <p className="font-phudu text-4xl text-zinc-300">Coming soon...</p>
      </div>
    </m.div>
  )
}

export default Blog
