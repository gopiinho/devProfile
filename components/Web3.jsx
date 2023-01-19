import React from "react"

const Web3 = () => {
  return (
    <div className="w-full h-full p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full ">
        <div className="neonH2 flex items-center justify-center cursor-default">
          <h2 className="text-3xl tracking-widest uppercase text-center my-12 font-cyber">
            Web3 Stack
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg-grid-cols-3 gap-8 tracking-widest font-robot">
          <div className="px-4">
            <div className=" justify-center items-center ease-in border-2 border-slate-600 hover:border-[#ff2a6d] duration-300">
              <div className=" flex flex-col items-center justify-center py-4">
                <h2 className="text-3xl ">Frameworks</h2>
              </div>
              <div className="text-center text-slate-400 py-4">
                <p>Hardhat - Foundry </p>
              </div>
            </div>
          </div>

          <div className="px-4">
            <div className=" justify-center items-center ease-in  border-x-2 ">
              <div className=" flex flex-col items-center justify-center py-4">
                <h2 className="text-3xl">Standards</h2>
              </div>
              <div className="text-center text-slate-400">
                <p>OpenZeppelin - Chainlink </p>
              </div>
            </div>
          </div>

          <div className="px-4">
            <div className=" justify-center items-center ease-in  border-x-2 ">
              <div className=" flex flex-col items-center justify-center py-4">
                <h2 className="text-3xl ">Querying</h2>
              </div>
              <div className="text-center text-slate-400">
                <p>EtherScan - Alchemy - Moralis</p>
              </div>
            </div>
          </div>

          <div className="px-4">
            <div className=" justify-center items-center ease-in  border-x-2 ">
              <div className=" flex flex-col items-center justify-center py-4">
                <h2 className="text-3xl ">API's</h2>
              </div>
              <div className="text-center text-slate-400">
                <p>Ethers.js - Wagmi.sh - Web3.js</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Web3
