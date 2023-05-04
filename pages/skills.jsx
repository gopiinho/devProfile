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
      transition={{ duration: 0.5 }}
      className="w-full h-screen bg-zinc-800 pt-[75px] text-zinc-200 font-robot"
    >
      <div className="flex flex-col w-full">
        <div className="flex flex-row md:flex-row sm:flex-col w-full h-1/2">
          <div
            className="w-1/2 group pr-6 sm:w-full justify-between flex items-center border-r border-zinc-700 hover:bg-[#3c3d42] transform duration-300"
            style={{ height: "calc(50vh - 75px)" }}
          >
            <h2 className="writing-vertical font-cyber rotate-180 h-full text-zinc-500 uppercase text-3xl text-center transform duration-300 cursor-default bg-[#3c3d42] group-hover:text-[#ff577d] px-2">
              Blockchain
            </h2>
            <div className="grid grid-cols-1 font-phudu w-[40%] h-full justify-center text-center font-semibold uppercase tracking-lighter ">
              <div className="flex flex-col gap-1 items-center justify-center hover:bg-zinc-800 hover:text-white transform duration-300">
                <h3>Development</h3>
                <p className="font-robot text-sm tracking-tight">
                  Hardhat • Foundry
                </p>
              </div>
              <div className="flex flex-col gap-1 items-center justify-center hover:bg-zinc-800 hover:text-white transform duration-300">
                <h3>Standards</h3>
                <p className="font-robot text-sm tracking-tight">
                  Chainlink • Openzeppelin
                </p>
              </div>
              <div className="flex flex-col gap-1 items-center justify-center hover:bg-zinc-800 hover:text-white transform duration-300">
                <h3>API's</h3>
                <p className="font-robot text-sm tracking-tight">
                  Ethers.js • web3.js
                </p>
              </div>
              <div className="flex flex-col gap-1 items-center justify-center hover:bg-zinc-800 hover:text-white transform duration-300">
                <h3>Testing</h3>
                <p className="font-robot text-sm tracking-tight">
                  Anvil • Foundry
                </p>
              </div>
            </div>
            <div className="w-[60%] h-full grid grid-cols-1 py-8 font-bold text-sm text-center justify-center">
              <p>
                • Solid grasp of cryptography and security principles and
                understanding of blockchain technology and why it is necessary
              </p>
              <p>
                • Proficiency in Solidity, with understanding of its
                Vulnerabilities and the abilidity to write gas effective code
              </p>
              <p>
                • Experience with frameworks like Foundry, Hardhat, Truffle for
                development, deployment and testing of smart contracts
              </p>
              <p>
                • Working experience of libraries like ethers.js/web3.js,
                openZeppelin, wagmi.sh,
              </p>
              <p>• zkRollups and Zero Knowledge Proofs</p>
            </div>
          </div>
          <div
            className="w-1/2 group pl-6 sm:w-full justify-between flex items-center border-r border-t border-zinc-700 hover:bg-[#3c3d42]  transform duration-300"
            style={{ height: "calc(50vh - 75px)" }}
          >
            <div className="w-[60%] h-full grid grid-cols-1 py-8 font-bold text-sm text-center">
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
              <p>• Ability to write clean, maintainable, and scalable code</p>
            </div>
            <div className="grid grid-cols-1 font-phudu w-[40%] h-full justify-center text-center font-semibold uppercase tracking-lighter ">
              <div className="flex flex-col gap-1 items-center justify-center hover:bg-zinc-800  hover:text-white transform duration-300">
                <h3>Framework</h3>
                <p className="font-robot text-sm tracking-tight">
                  React • Next.js
                </p>
              </div>
              <div className="flex flex-col gap-1 items-center justify-center hover:bg-zinc-800 hover:text-white transform duration-300">
                <h3>Styling</h3>
                <p className="font-robot text-sm tracking-tight">
                  Tailwindcss • CSS5
                </p>
              </div>
              <div className="flex flex-col gap-1 items-center justify-center hover:bg-zinc-800 hover:text-white transform duration-300">
                <h3>Backend</h3>
                <p className="font-robot text-sm tracking-tight">
                  PostgreSQL • Firebase
                </p>
              </div>
              <div className="flex flex-col gap-1 items-center justify-center hover:bg-zinc-800 hover:text-white transform duration-300">
                <h3>Deployment</h3>
                <p className="font-robot text-sm tracking-tight">
                  Netlify • AWS
                </p>
              </div>
            </div>

            <h2 className="writing-vertical font-cyber h-full text-zinc-500 uppercase text-3xl text-center transform duration-300 cursor-default bg-[#3c3d42] group-hover:text-[#ff577d] px-2">
              Web
            </h2>
          </div>
        </div>
        <div
          className="w-full group h-1/2 flex flex-col items-center border-t border-zinc-700 hover:bg-[#3c3d42] transform duration-300"
          style={{ height: "calc(50vh)" }}
        >
          <div className="grid grid-cols-4 md:grid-cols-4 sm:grid-cols-2 font-phudu w-full h-full justify-center text-center font-semibold uppercase tracking-wider">
            <Link
              href="https://soliditylang.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 items-center justify-center hover:bg-zinc-800 hover:text-[#63698E] transform duration-300"
            >
              Solidity
              <div className="devicon-solidity-plain text-3xl"></div>
            </Link>
            <Link
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 items-center justify-center hover:bg-zinc-800 hover:text-[#007ACC] transform duration-300"
            >
              Typescript
              <div className="devicon-typescript-plain text-3xl"></div>
            </Link>
            <Link
              href="https://www.javascript.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 items-center justify-center hover:bg-zinc-800 hover:text-[#f0db4f] transform duration-300"
            >
              Javascript
              <div className="devicon-javascript-plain text-3xl"></div>
            </Link>
            <Link
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 items-center justify-center hover:bg-zinc-800 hover:text-[#37bcf8] transform duration-300"
            >
              Tailwindcss
              <div className="devicon-tailwindcss-plain text-3xl"></div>
            </Link>
            <Link
              href="https://nodejs.org/en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 items-center justify-center hover:bg-zinc-800 hover:text-[#3E863E] transform duration-300"
            >
              Node.js
              <div className="devicon-nodejs-plain text-3xl"></div>
            </Link>
            <Link
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 items-center justify-center hover:bg-zinc-800 hover:text-white transform duration-300"
            >
              Next.js
              <div className="devicon-nextjs-plain text-3xl"></div>
            </Link>
            <Link
              href="https://firebase.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 items-center justify-center hover:bg-zinc-800 hover:text-[#F2BD03] transform duration-300"
            >
              Firebase
              <div className="devicon-firebase-plain text-3xl"></div>
            </Link>
            <Link
              href="https://www.docker.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 items-center justify-center hover:bg-zinc-800 hover:text-[#2496ED] transform duration-300"
            >
              Docker
              <div className="devicon-docker-plain text-3xl"></div>
            </Link>
          </div>
          <div className="w-full rotate-180 font-cyber uppercase text-3xl text-zinc-500 text-center transform duration-300 cursor-default bg-[#3c3d42] group-hover:text-[#ff577d] py-2">
            Stack
          </div>
        </div>
      </div>
    </m.div>
  )
}

export default Skills
