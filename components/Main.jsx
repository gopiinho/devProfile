import React from "react"
import { FaGithub } from "react-icons/fa"
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="pt-8">
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Building the decentralized internet
          </p>
          <h1 className="py-4 ">Hi, I'm Gurpreet Singh</h1>
          <h1 className=" py-2 text-slate-500">
            A Full Stack BlockChain Developer
          </h1>
          <p className="py-4 text-slate-500 max-w-[70%] m-auto">
            I have a strong understanding of the principles of blockchain
            technology and a passion for creating decentralized solutions to
            real-world problems. I am a collaborative team player with excellent
            communication skills and a dedication to continuously learning and
            staying up-to-date with the latest industry developments.
          </p>
          <div className="flex items-center  justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-md p-4 shadow-gray-300 cursor-pointer hover:scale-105 ease-in duration-300 hover:shadow-[#ff2a6d] hover:text-[#ff2a6d]">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-md p-4 shadow-gray-300 cursor-pointer hover:scale-105 ease-in duration-300 hover:shadow-[#ff2a6d] hover:text-[#ff2a6d]">
              <AiFillTwitterCircle />
            </div>
            <div className="rounded-full shadow-md p-4 shadow-gray-300 cursor-pointer hover:scale-105 ease-in duration-300 hover:shadow-[#ff2a6d] hover:text-[#ff2a6d]">
              <AiFillLinkedin />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
