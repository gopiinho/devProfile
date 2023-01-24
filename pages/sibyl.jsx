import React from "react"

const sibyl = () => {
  return (
    <div className="w-full h-screen text-center font-cyber">
      <div className="flex flex-col">
        <div className=" h-40 background-tile border-2 border-blue-500 z-0"></div>
        <div className="w-full border-t-2 border-neon-main">
          <div className="max-w-[1240px] w-full pt-28 h-full mx-auto p-2 flex justify-center items-center ">
            <div className="pt-8">
              <h1 className="py-4 neonH2 ">NFT MINT PAGE </h1>
              <h2 className=" tracking-widest uppercase text-center my-12 font-cyber ">
                React - Solidity - ethersjs - ChakraUI
              </h2>

              <p>
                {" "}
                The Sibyl system sees it all, only seeks the unexampled minds.
                Become a part of the hive mind and oversee the human desires.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default sibyl
