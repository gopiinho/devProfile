import React, { useState, useEffect } from "react"
import Link from "next/link"
import { ImMenu } from "react-icons/im"
import { AiOutlineClose } from "react-icons/ai"

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
    }, [])

    return (
        <div
            className={
                shadow
                    ? "fixed z-[100] h-16  w-full transform bg-[#3c3d42] shadow-md shadow-slate-400 duration-700  "
                    : "fixed z-[100] h-16 w-full transform bg-[#3c3d42] shadow-md  shadow-black/30 duration-700"
            }
        >
            <div className="navBar flex h-full w-full items-center justify-center p-6 font-cyber text-[#ff2a6d] 2xl:px-16">
                <div className=" items-center justify-between">
                    <ul className="hidden md:flex">
                        <Link href="/projects">
                            <li className="mx-10 text-lg">projects</li>
                        </Link>
                        <Link href="/skills">
                            <li className="mx-10 text-lg">skills</li>
                        </Link>
                        <Link href="/" className="neonH2">
                            <h2 className=" mx-10 text-xl text-white">menu</h2>
                        </Link>
                        <Link href="/about">
                            <li className="mx-10 text-lg">about</li>
                        </Link>
                        <Link href="/contact">
                            <li className="mx-10 text-lg">contact</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className="md:hidden">
                        <ImMenu
                            size={30}
                            className="transform cursor-pointer duration-300 hover:text-[#ff2a6d]/50"
                        />
                    </div>
                </div>
            </div>
            <div
                className={
                    nav
                        ? "fixed left-0 top-0 h-screen w-full bg-black/50 md:hidden"
                        : ""
                }
            >
                <div
                    className={
                        nav
                            ? " fixed left-0 top-0 h-screen w-[75%] bg-[#3c3d42] p-10 shadow  shadow-[#ff577d] duration-500 ease-in sm:w-[60%] md:w-[45%]"
                            : "fixed left-[-100%] top-0  p-10 duration-500 ease-in"
                    }
                >
                    <div>
                        <div className=" navBar flex w-full items-center justify-between font-cyber ">
                            <h1 className="font-phudu cursor-default text-[#ff2a6d]">
                                {" "}
                                WEB3{" "}
                            </h1>
                            <div
                                onClick={handleNav}
                                className="shadow-full cursor-pointer rounded-full p-3 shadow-gray-300 duration-300 ease-in hover:scale-105 hover:text-[#ff2a6d] hover:shadow-[#ff2a6d] "
                            >
                                <AiOutlineClose size={15} />
                            </div>
                        </div>
                        <div className="my-5 ">
                            <p className="font-robot w-[85%] py-4 uppercase text-slate-400 md:w-[90%]">
                                Building the decentralised web.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col p-4">
                        <ul className="font-cyber text-[#ff2a6d]">
                            <Link
                                href="/"
                                onClick={() => setNav(false)}
                                className="neonH2"
                            >
                                <h2 className=" py-4 text-sm text-white ">
                                    menu
                                </h2>
                            </Link>
                            <Link
                                href="/projects"
                                onClick={() => setNav(false)}
                            >
                                <li className="py-4 text-sm hover:text-white">
                                    projects
                                </li>
                            </Link>
                            <Link href="/skills" onClick={() => setNav(false)}>
                                <li className="py-4 text-sm hover:text-white">
                                    skills
                                </li>
                            </Link>
                            <Link href="/about" onClick={() => setNav(false)}>
                                <li className="py-4 text-sm hover:text-white">
                                    about
                                </li>
                            </Link>
                            <Link href="/contact" onClick={() => setNav(false)}>
                                <li className="py-4 text-sm hover:text-white">
                                    contact
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar
