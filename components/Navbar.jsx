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
          ? "fixed w-full h-30  shadow-md shadow-slate-400 z-[100] transform duration-700"
          : "fixed w-full h-30 z-[100] transform duration-700"
      }
    >
      <div className="navBar flex justify-between items-center w-full h-full p-6 2xl:px-16 font-cyber text-[#ff2a6d] cursor-pointer justify-content:space-evenly">
        <div className="justify-between items-center">
          <ul className="hidden md:flex">
            <Link href="/#home">
              <li className="ml-10 text-lg  hover:border-b border-[#05d9e8]">
                home
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-lg  hover:border-b border-[#05d9e8]">
                about
              </li>
            </Link>
          </ul>
        </div>
        <div className="justify-between items-center">
          <h1> Gopinho </h1>
        </div>
        <div className=" justify-between items-center">
          <ul className="hidden md:flex">
            <Link href="/#projects">
              <li className="ml-10 text-lg  hover:border-b border-[#05d9e8]">
                projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-lg  hover:border-b border-[#05d9e8]">
                vision
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <BiCode size={30} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/75" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-black p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className=" navBar flex w-full items-center justify-between font-cyber">
              <h1 className="text-[#ff2a6d]"> Gopinho </h1>
              <div
                onClick={handleNav}
                className="rounded-full shadow-md shadow-gray-300 p-3 cursor-pointer"
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="my-5 ">
              <p className="w-[85%] md:w-[90%] py-4 text-slate-400">
                Building the decentralised web.
              </p>
            </div>
          </div>
          <div className="p-4 flex flex-col">
            <ul className="font-cyber text-[#ff2a6d]">
              <Link href="/">
                <li className="py-4 text-sm hover:border-b border-[#05d9e8] w-[30%] transform duration-300">
                  home
                </li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm hover:border-b border-[#05d9e8] w-[30%] transform duration-300">
                  about
                </li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm hover:border-b border-[#05d9e8] w-[30%] transform duration-300">
                  projects
                </li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm hover:border-b border-[#05d9e8] w-[30%] transform duration-300">
                  vision
                </li>
              </Link>
            </ul>
            <div className="pt-20">
              <p className="uppercase text-white tracking-widest">Links</p>
              <div className="flex items-center justify-between my-4 w-full sm:[80%] text-white">
                <div className="rounded-full shadow-md shadow-gray-300 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-[#ff2a6d] hover:text-[#ff2a6d]">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-md shadow-gray-300 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-[#ff2a6d] hover:text-[#ff2a6d]">
                  <AiFillLinkedin />
                </div>
                <div className="rounded-full shadow-md shadow-gray-300 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-[#ff2a6d] hover:text-[#ff2a6d]">
                  <AiFillTwitterCircle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar
