import React from "react"
import "devicon/devicon.min.css"

const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2 ">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full ">
        <div className="neonH2 flex items-center justify-center cursor-default">
          <h2 className="text-3xl tracking-widest uppercase text-center my-12 font-cyber">
            Tech Stack
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 tracking-widest font-cyber">
          <div className="px-4 text-white hover:text-[#63698E]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ease-in duration-300 rounded-md border-[#63698E]  hover:bg-black border-2 hover:shadow-neon-sol border-opacity-40 hover:border-opacity-100">
              <div className="m-auto">
                <div className="py-6 devicon-solidity-plain text-6xl hover:text-slate-400 hover:scale-110 transform duration-300"></div>
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h2 className="text-xl transform duration-300">Solidity</h2>
              </div>
            </div>
          </div>

          <div className=" px-4 text-white hover:text-[#f0db4f]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ease-in duration-300 rounded-md border-[#f0db4f]  border-2 hover:shadow-neon-yellow border-opacity-40 hover:border-opacity-100">
              <div className="m-auto">
                <div className="py-6 devicon-javascript-plain text-6xl  hover:text-slate-400 hover:scale-110 transform duration-300"></div>
              </div>
              <div className=" flex flex-col items-center justify-center ">
                <h2 className="text-xl transform duration-300">JavaScript</h2>
              </div>
            </div>
          </div>

          <div className="px-4 text-white hover:text-[#007ACC]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ease-in duration-300 rounded-md border-[#007ACC]  hover:bg-black border-2 hover:shadow-neon-type border-opacity-40 hover:border-opacity-100">
              <div className="m-auto">
                <div className=" py-6 devicon-typescript-original text-6xl hover:text-slate-400 hover:scale-110 transform duration-300"></div>
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h2 className="text-xl transform duration-300">TypeScript</h2>
              </div>
            </div>
          </div>

          <div className="px-4 text-white hover:text-[#37bcf8]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ease-in duration-300 rounded-md border-[#37bcf8]  hover:bg-black border-2 hover:shadow-neon-tailwind border-opacity-40 hover:border-opacity-100">
              <div className="m-auto">
                <div className="py-6 devicon-tailwindcss-plain text-6xl hover:text-slate-400 hover:scale-110 transform duration-300"></div>
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h2 className="text-xl transform duration-300">Tailwind</h2>
              </div>
            </div>
          </div>

          <div className="px-4  text-white hover:text-[#61d9fb]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ease-in duration-300 rounded-md border-[#61d9fb]  hover:bg-black border-2 hover:shadow-neon-blue border-opacity-40 hover:border-opacity-100">
              <div className="m-auto">
                <div className=" py-6 devicon-react-original text-6xl hover:text-slate-400 hover:scale-110 transform duration-300"></div>
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h2 className="text-xl transform duration-300">React</h2>
              </div>
            </div>
          </div>

          <div className="px-4 text-white hover:text-[#3E863E]">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ease-in duration-300 rounded-md border-[#3E863E]  hover:bg-black border-2 hover:shadow-neon-green border-opacity-40 hover:border-opacity-100">
              <div className="m-auto">
                <div className=" py-6 devicon-nodejs-plain text-6xl  hover:text-slate-400  hover:scale-110 transform duration-300"></div>
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h2 className="text-xl transform duration-300">NodeJS</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
