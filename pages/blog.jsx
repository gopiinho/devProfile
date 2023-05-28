import React, { useState } from "react"
import { motion as m } from "framer-motion"

const Blog = () => {
    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="h-screen w-full pt-[75px]"
        >
            <div className="flex h-full w-full items-center justify-center text-center">
                <p className="font-phudu text-4xl text-zinc-300">
                    Coming soon...
                </p>
            </div>
        </m.div>
    )
}

export default Blog
