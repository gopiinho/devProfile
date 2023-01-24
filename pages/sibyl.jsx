import React from "react"
import Link from "next/link"

const sibyl = () => {
  return (
    <div className="w-full h-screen text-center font-cyber">
      <div className="flex flex-col">
        <div className=" h-40 background-tile border-2 border-blue-500 z-0"></div>
        <div className="w-full border-t-2 border-neon-main">
          <div className="max-w-[1240px] w-full h-full mx-auto  flex justify-center items-center ">
            <div className="">
              <h1 className="py-4 neonH2 pt-8">NFT MINT PAGE </h1>
              <h2 className=" tracking-widest uppercase text-center my-12 font-cyber ">
                React - Solidity - ethersjs - ChakraUI
              </h2>

              <p>
                The Sibyl system sees it all, only seeks the unexampled minds.
                Become a part of the hive mind and oversee the human desires.
                Deployed on Georli.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 links items-center  justify-between max-w-[470px] m-auto p-4 font-cyber text-[#ff2a6d] mobile-center">
            <div className=" flex flex-col items-center justify-between ">
              <Link href="https://whimsical-kheer-5221bd.netlify.app/">
                <p className="neonH2 text-center py-2  px-6 border-2 border-slate-600  hover:border-[#ff2a6d] bg-black text-[#ff2a6d] text-lg cursor-pointer opacity-75 hover:opacity-100 transition duration-700 hover:shadow-neon-main rounded-md border-opacity-40">
                  Visit
                </p>
              </Link>
            </div>

            <div className=" flex flex-col items-center justify-center">
              <Link href="https://github.com/igopib/sibyl-access">
                <p className="neonH2 text-center py-2  px-6 border-2 border-slate-600  hover:border-[#ff2a6d] bg-black text-[#ff2a6d] text-lg cursor-pointer opacity-75 hover:opacity-100 transition duration-700 hover:shadow-neon-main rounded-md border-opacity-40">
                  Source Code
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default sibyl
