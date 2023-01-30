import React, { useState, useEffect } from "react"
import Link from "next/link"
import { BiCode } from "react-icons/bi"
import {
  AiOutlineClose,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai"
import { FaGithub } from "react-icons/fa"

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
          ? "fixed w-full h-30  shadow-md shadow-slate-400 z-[100] transform duration-700 bg-[#0E1117]"
          : "fixed w-full h-30 z-[100] transform duration-700 bg-[#e2dddf] bg-opacity-60 shadow-md shadow-[#ff577d] pr-10"
      }
    >
      <div className="navBar flex justify-center items-center w-full h-full p-6 2xl:px-16 font-cyber text-[#ff2a6d] ">
        <div className=" justify-between items-center">
          <ul className="hidden md:flex">
            <Link href="/projects">
              <li className="mx-10 text-lg hover:text-white">projects</li>
            </Link>
            <Link href="/vision">
              <li className="mx-10 text-lg hover:text-white">vision</li>
            </Link>
            <Link href="/#home" className="neonH2">
              <h2 className=" text-white text-xl mx-10">menu</h2>
            </Link>
            <Link href="/stack">
              <li className="mx-10 text-lg hover:text-white">tech</li>
            </Link>
            <Link href="/contact">
              <li className="mx-10 text-lg hover:text-white">contact</li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden pl-8">
            <BiCode size={30} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/50" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#0E1117] p-10 ease-in duration-500 "
              : "fixed left-[-100%] top-0  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className=" navBar flex w-full items-center justify-between font-cyber ">
              <h1 className="text-[#ff2a6d]"> Gopinho </h1>
              <div
                onClick={handleNav}
                className="rounded-full shadow-full shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:shadow-[#ff2a6d] hover:text-[#ff2a6d] "
              >
                <AiOutlineClose size={15} />
              </div>
            </div>
            <div className="my-5 ">
              <p className="w-[85%] md:w-[90%] py-4 text-slate-400 font-robot">
                Building the decentralised web.
              </p>
            </div>
          </div>
          <div className="p-4 flex flex-col">
            <ul className="font-cyber text-[#ff2a6d]">
              <Link href="/" className="neonH2">
                <h2 className=" py-4 text-sm text-white ">menu</h2>
              </Link>
              <Link href="/projects">
                <li className="py-4 text-sm hover:text-white">projects</li>
              </Link>
              <Link href="/vision">
                <li className="py-4 text-sm hover:text-white">vision</li>
              </Link>
              <Link href="/stack">
                <li className="py-4 text-sm hover:text-white">tech</li>
              </Link>
              <Link href="/contact">
                <li className="py-4 text-sm hover:text-white">contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar
