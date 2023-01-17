import React from "react"
import "devicon/devicon.min.css"

const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full ">
        <div className="neonH2 flex items-center justify-center cursor-default">
          <h2 className="text-3xl tracking-widest uppercase text-center my-12 font-cyber">
            Tech Stack
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg-grid-cols-4 gap-8 tracking-widest">
          <div className="px-4">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ease-in duration-300 rounded-md border-slate-500 border-2 hover:shadow-neon-white ">
              <div className="m-auto">
                <div className="py-6 devicon-solidity-plain text-6xl text-[#d1f7ff] hover:text-[#616161] hover:scale-110 transform duration-700"></div>
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h2 className="text-3xl">Solidity</h2>
              </div>
            </div>
          </div>

          <div className=" px-4">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ease-in duration-300 rounded-md border-slate-500 border-2 hover:shadow-neon-white ">
              <div className="m-auto">
                <div className="py-6 devicon-javascript-plain text-6xl text-[#d1f7ff] hover:text-[#f0db4f] hover:scale-110 transform duration-700"></div>
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h2 className="text-3xl">JavaScript</h2>
              </div>
            </div>
          </div>

          <div className="px-4">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ease-in duration-300 rounded-md border-slate-500 border-2 hover:shadow-neon-white ">
              <div className="m-auto">
                <div className=" py-6 devicon-typescript-original text-6xl text-[#d1f7ff] hover:text-[#007ACC] hover:scale-110 transform duration-700"></div>
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h2 className="text-3xl">TypeScript</h2>
              </div>
            </div>
          </div>

          <div className="px-4 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ease-in duration-300 rounded-md border-slate-500 border-2 hover:shadow-neon-white ">
              <div className="m-auto">
                <div className="py-6 devicon-tailwindcss-plain text-6xl text-[#d1f7ff] hover:text-[#37bcf8] hover:scale-110 transform duration-700"></div>
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h2 className="text-3xl">Tailwind</h2>
              </div>
            </div>
          </div>

          <div className="px-4">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ease-in duration-300 rounded-md border-slate-500 border-2 hover:shadow-neon-white ">
              <div className="m-auto">
                <div className=" py-6 devicon-react-original text-6xl text-[#d1f7ff] hover:text-[#61d9fb] hover:scale-110 transform duration-700"></div>
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h2 className="text-3xl">React</h2>
              </div>
            </div>
          </div>

          <div className="px-4">
            <div className="grid grid-cols-2 gap-4 justify-center items-center ease-in duration-300 rounded-md border-slate-500 border-2 hover:shadow-neon-white ">
              <div className="m-auto">
                <div className=" py-6 devicon-nodejs-plain text-6xl text-[#d1f7ff] hover:text-[#3E863E] hover:scale-110 transform duration-700"></div>
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h2 className="text-3xl">NodeJS</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
