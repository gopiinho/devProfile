import React from "react"
import "devicon/devicon.min.css"
import { motion as m } from "framer-motion"
import Link from "next/link"

const Skills = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full h-screen bg-zinc-900 pt-[64px] text-zinc-200 font-robot"
    >
      <div className="flex flex-col w-full">
        <div className="flex flex-row md:flex-row sm:flex-col w-full h-1/2 lg:h-1/2 md:h-1/2 sm:h-full">
          <div
            className="w-1/2 group pr-6 sm:w-full justify-between flex items-center border-r border-zinc-700 hover:bg-[#3c3d42] transform duration-300"
            style={{ height: "calc(50vh - 75px)" }}
          >
            <h2 className="writing-vertical font-cyber rotate-180 h-full text-zinc-500  text-3xl text-center transform duration-300 cursor-default bg-[#3c3d42] group-hover:text-[#ff577d] px-2">
              Blockchain
            </h2>
            <div className="grid grid-cols-1 font-electro w-[40%] h-full justify-center text-center   tracking-lighter md:text-lg sm:text-xs">
              <div className="flex flex-col gap-1 items-center justify-center hover:bg-zinc-800 hover:text-white transform duration-300">
                <h3 className="tracking-wider text-[#ff2a6d] uppercase">
                  Development
                </h3>
                <p className="sm:text-xs md:text-base tracking-tight">
                  Hardhat • Foundry
                </p>
              </div>
              <div className="flex flex-col gap-1 items-center justify-center hover:bg-zinc-800 hover:text-white transform duration-300">
                <h3 className="tracking-wider text-[#ff2a6d] uppercase">
                  Standards
                </h3>
                <p className="sm:text-xs md:text-base tracking-tight">
                  Chainlink • Openzeppelin
                </p>
              </div>
              <div className="flex flex-col gap-1 items-center justify-center hover:bg-zinc-800 hover:text-white transform duration-300">
                <h3 className="tracking-wider text-[#ff2a6d] uppercase">
                  API's
                </h3>
                <p className="sm:text-xs md:text-base tracking-tight">
                  Ethers.js • web3.js
                </p>
              </div>
              <div className="flex flex-col gap-1 items-center justify-center hover:bg-zinc-800 hover:text-white transform duration-300">
                <h3 className="tracking-wider text-[#ff2a6d] uppercase">
                  Testing
                </h3>
                <p className="sm:text-xs md:text-base tracking-tight">
                  Anvil • Foundry
                </p>
              </div>
            </div>
            <div className="w-[60%] font-electro h-full grid grid-cols-1 py-8 text-center uppercase items-center tracking-tight lg:text-2 xl md:text-2xl sm:text-md justify-center">
              <p>Smart Contracts Security</p>
              <p>Scripted Deployments</p>
              <p>Deployment and Scripting</p>
              <p>Deployment and Scripting</p>
            </div>
          </div>
          <div
            className="w-1/2 group pl-6 sm:w-full justify-between flex items-center border-r border-t border-zinc-700 hover:bg-[#3c3d42]  transform duration-300"
            style={{ height: "calc(50vh - 75px)" }}
          >
            <div className="w-[60%] h-full grid grid-cols-1 py-8 text-sm text-center">
              <p>
                • Proficiency in HTML, CSS, Javascript and their respective
                libraries like tailwindcss, Typescript
              </p>
              <p>
                • Experience working with component based frameworks like React,
                Nextjs to develop full stack webapps
              </p>
              <p>
                • Using tools like Adobe photoshop, Figma to create designs.
              </p>
              <p>• Ability to use version control systems such as Git</p>
            </div>
            <div className="grid grid-cols-1 font-electro w-[40%] h-full justify-center text-center   tracking-lighter md:text-base sm:text-xs">
              <div className="flex flex-col gap-1 items-center justify-center hover:bg-zinc-800  hover:text-white transform duration-300">
                <h3 className="tracking-wider text-[#ff2a6d] uppercase">
                  Framework
                </h3>
                <p className="font-robot sm:text-xs md:text-base tracking-tight">
                  React • Next.js
                </p>
              </div>
              <div className="flex flex-col gap-1 items-center justify-center hover:bg-zinc-800 hover:text-white transform duration-300">
                <h3 className="tracking-wider text-[#ff2a6d] uppercase">
                  Styling
                </h3>
                <p className="font-robot sm:text-xs md:text-base tracking-tight">
                  Tailwindcss • CSS5
                </p>
              </div>
              <div className="flex flex-col gap-1 items-center justify-center hover:bg-zinc-800 hover:text-white transform duration-300">
                <h3 className="tracking-wider text-[#ff2a6d] uppercase">
                  Backend
                </h3>
                <p className="font-robot sm:text-xs md:text-base tracking-tight">
                  PostgreSQL • Firebase
                </p>
              </div>
              <div className="flex flex-col gap-1 items-center justify-center hover:bg-zinc-800 hover:text-white transform duration-300">
                <h3 className="tracking-wider text-[#ff2a6d] uppercase">
                  Deployment
                </h3>
                <p className="font-robot sm:text-xs md:text-base tracking-tight">
                  Netlify • AWS
                </p>
              </div>
            </div>

            <h2 className="writing-vertical font-cyber h-full text-zinc-500  text-3xl text-center transform duration-300 cursor-default bg-[#3c3d42] group-hover:text-[#ff577d] px-2">
              Web
            </h2>
          </div>
        </div>
        <div
          className="w-full group h-1/2 lg:h-1/2 md:h-1/2 sm:h-full flex flex-col items-center transform duration-300"
          style={{ height: "calc(50vh)" }}
        >
          <div className="grid grid-cols-5 md:grid-cols-5 sm:grid-cols-2 font-electro w-full h-full justify-center text-center  tracking-wider">
            <Link
              href="https://soliditylang.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 m-1 items-center justify-center text-2xl bg-[#ff2a6d]/30  hover:text-[#63698E] hover:bg-[#ff2a6d]/50 border border-[#ff2a6d] transform duration-300"
            >
              solidity
              <div className="devicon-solidity-plain text-3xl"></div>
            </Link>
            <Link
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 m-1 items-center justify-center text-2xl bg-[#ff2a6d]/30  hover:text-[#007ACC] hover:bg-[#ff2a6d]/50 border border-[#ff2a6d] transform duration-300"
            >
              typescript
              <div className="devicon-typescript-plain text-3xl"></div>
            </Link>
            <Link
              href="https://www.javascript.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 m-1 items-center justify-center text-2xl bg-[#ff2a6d]/30  hover:text-[#f0db4f] hover:bg-[#ff2a6d]/50 border border-[#ff2a6d] transform duration-300"
            >
              javascript
              <div className="devicon-javascript-plain text-3xl"></div>
            </Link>
            <Link
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 m-1 items-center justify-center text-2xl bg-[#ff2a6d]/30  hover:text-[#37bcf8] hover:bg-[#ff2a6d]/50 border border-[#ff2a6d] transform duration-300"
            >
              tailwindcss
              <div className="devicon-tailwindcss-plain text-3xl"></div>
            </Link>
            <Link
              href="https://nodejs.org/en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 m-1 items-center justify-center text-2xl bg-[#ff2a6d]/30  hover:text-[#3E863E] hover:bg-[#ff2a6d]/50 border border-[#ff2a6d] transform duration-300"
            >
              node.js
              <div className="devicon-nodejs-plain text-3xl"></div>
            </Link>
            <Link
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 m-1 items-center justify-center text-2xl bg-[#ff2a6d]/30  hover:text-white hover:bg-[#ff2a6d]/60 border border-[#ff2a6d] transform duration-300"
            >
              next.js
              <div className="devicon-nextjs-plain text-3xl"></div>
            </Link>
            <Link
              href="https://firebase.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 m-1 items-center justify-center text-2xl bg-[#ff2a6d]/30  hover:text-[#F2BD03] hover:bg-[#ff2a6d]/50 border border-[#ff2a6d] transform duration-300"
            >
              firebase
              <div className="devicon-firebase-plain text-3xl"></div>
            </Link>
            <Link
              href="https://www.docker.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 m-1 items-center justify-center text-2xl bg-[#ff2a6d]/30  hover:text-[#2496ED] hover:bg-[#ff2a6d]/50 border border-[#ff2a6d] transform duration-300"
            >
              docker
              <div className="devicon-docker-plain text-3xl"></div>
            </Link>
            <Link
              href="https://expressjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 m-1 items-center justify-center text-2xl bg-[#ff2a6d]/30  hover:text-white hover:bg-[#ff2a6d]/60 border border-[#ff2a6d] transform duration-300"
            >
              express.js
              <div className="devicon-express-original text-3xl"></div>
            </Link>
            <Link
              href="https://www.postgresql.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 m-1 items-center justify-center text-2xl bg-[#ff2a6d]/30  hover:text-[#336791] hover:bg-[#ff2a6d]/50 border border-[#ff2a6d] transform duration-300"
            >
              postgreSQL
              <div className="devicon-postgresql-plain text-3xl"></div>
            </Link>
          </div>
          <div className="w-full rotate-180 font-cyber text-3xl text-zinc-500 text-center transform duration-300 cursor-default bg-[#3c3d42] group-hover:text-[#ff577d] py-2">
            Stack
          </div>
        </div>
      </div>
    </m.div>
  )
}

export default Skills
