import React, { useState } from "react"
import Link from "next/link"
import "devicon/devicon.min.css"
import { motion as m } from "framer-motion"

// React Icons Import
import { AiFillInstagram, AiFillMail } from "react-icons/ai"
import { BsDiscord } from "react-icons/bs"
import { ImBlog } from "react-icons/im"

const Contact = () => {
    const [linkText, setLinkText] = useState("discord")

    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="group h-screen w-full bg-zinc-900 pt-[64px] text-zinc-300"
        >
            <div className="flex w-full flex-row overflow-hidden sm:flex-col md:flex-row">
                <div className="h-full w-1/2 sm:w-full">
                    <div className="flex">
                        <h2
                            style={{ height: "calc(100vh - 75px)" }}
                            className="writing-vertical h-full rotate-180 transform bg-[#3c3d42]  px-2 text-center font-cyber text-3xl text-zinc-500 duration-300 group-hover:text-[#ff577d]"
                        >
                            Contact
                        </h2>
                        <div className="flex w-full flex-col">
                            <div className="m-1 flex h-[70%] flex-col items-center justify-center gap-12 border border-[#ff2a6d]/40 bg-[#ff2a6d]/5 px-4 text-center font-electro">
                                <p className="sm:text-2xl md:text-3xl lg:text-5xl">
                                    Have any questions or need to talk about
                                    anything tech or web3 related ?
                                </p>
                                <p className="text-[#ff2a6d] sm:text-lg md:text-3xl lg:text-3xl">
                                    {" "}
                                    We live in age of the Internet, please reach
                                    out!
                                </p>
                            </div>
                            <div className="grid h-[30%] w-full grid-cols-1 items-center justify-center text-center">
                                <Link
                                    href="/blog"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="m-1 flex h-full transform items-center justify-center gap-4 border border-[#ff2a6d] bg-[#ff2a6d]/30 font-electro text-6xl  duration-300 hover:bg-[#ff2a6d]/50"
                                >
                                    blog
                                    <ImBlog size={35} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 sm:w-full ">
                    <div className="grid h-full w-full grid-cols-2 justify-center text-center font-electro text-3xl tracking-wider sm:grid-cols-2 md:grid-cols-2">
                        <Link
                            href="https://github.com/igopib"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="m-1 flex transform items-center justify-center gap-4 border border-[#ff2a6d] bg-[#ff2a6d]/30 py-4  duration-300 hover:bg-[#ff2a6d]/50"
                        >
                            github
                            <div className="devicon-github-plain text-3xl"></div>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/gopinho/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="m-1 flex transform items-center justify-center gap-4 border border-[#ff2a6d] bg-[#ff2a6d]/30 py-4  duration-300 hover:bg-[#ff2a6d]/50"
                        >
                            linkedin
                            <div className="devicon-linkedin-plain text-3xl"></div>
                        </Link>
                        <Link
                            href="https://twitter.com/gopiinho"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="m-1 flex transform items-center justify-center gap-4 border border-[#ff2a6d] bg-[#ff2a6d]/30 py-4  duration-300 hover:bg-[#ff2a6d]/50"
                        >
                            twitter
                            <div className="devicon-twitter-plain text-3xl"></div>
                        </Link>
                        <Link
                            href="https://www.instagram.com/gopiinho/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="m-1 flex transform items-center justify-center gap-4 border border-[#ff2a6d] bg-[#ff2a6d]/30 py-4  duration-300 hover:bg-[#ff2a6d]/50"
                        >
                            insta
                            <AiFillInstagram size={35} />
                        </Link>
                        <Link
                            href="mailto:gopinho@protonmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="m-1 flex transform items-center justify-center gap-4 border border-[#ff2a6d] bg-[#ff2a6d]/30 py-4  duration-300 hover:bg-[#ff2a6d]/50"
                        >
                            email
                            <AiFillMail size={35} />
                        </Link>
                        <h3
                            onClick={() => setLinkText("Gopinho#6037")}
                            className="m-1 flex transform cursor-pointer select-text items-center justify-center gap-4 border border-[#ff2a6d] bg-[#ff2a6d]/30 py-4  duration-300 hover:bg-[#ff2a6d]/50"
                        >
                            {linkText}
                            <BsDiscord size={35} />
                        </h3>
                    </div>
                </div>
            </div>
        </m.div>
    )
}

export default Contact
