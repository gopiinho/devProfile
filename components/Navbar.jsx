import React, { useState } from "react"
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

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className="fixed w-full h-25 shadow-md  z-[100]">
      <div className="flex justify-between items-center w-full h-full p-6 2xl:px-16 font-cyber text-[#ff2a6d] bg-white">
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-lg  hover:border-b">home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-lg  hover:border-b">about</li>
            </Link>
          </ul>
        </div>
        <h1> Gopinho </h1>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-lg  hover:border-b">projects</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-lg  hover:border-b">vision</li>
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
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-red-400 p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <h1 className=""> Gopinho </h1>
              <div
                onClick={handleNav}
                className="rounded-full shadow-md shadow-gray-300 p-3 cursor-pointer"
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="my-5 ">
              <p className="w-[85%] md:w-[90%] py-4">
                Building the decentralised web.
              </p>
            </div>
          </div>
          <div className="p-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Vision</li>
              </Link>
            </ul>
            <div className="pt-20">
              <p className="uppercase text-white tracking-widest">Links</p>
              <div className="flex items-center justify-between my-4 w-full sm:[80%]">
                <div className="rounded-full shadow-md shadow-gray-300 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-md shadow-gray-300 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiFillLinkedin />
                </div>
                <div className="rounded-full shadow-md shadow-gray-300 cursor-pointer hover:scale-105 ease-in duration-300">
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
