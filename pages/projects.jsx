import React from "react"
import ProjectsItems from "../components/ProjectsItems"
import { motion as m } from "framer-motion"
import Image from "next/image"
import { projectBG } from "../public/assets/backgrounds/index"
import {
  sibylImage,
  cyberImage,
  dexImage,
  nftImage,
} from "../public/assets/projects/index"
const Projects = () => {
  return (
    <m.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="max-w-[1240px] mx-auto p-8 h-screen justify-center pt-28"
    >
      <Image
        src={projectBG}
        alt="/"
        className="fixed inset-0 w-full h-full object-cover z--1 opacity-30 pointer-events-none"
        priority
        unoptimized={true}
      />
      <div className="neonH2 flex items-center justify-center cursor-default">
        <h2 className="text-3xl tracking-widest uppercase text-cyber text-center my-12 font-cyber  duration-200">
          Projects
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <ProjectsItems
          title="NFT MINT PAGE"
          backgroundImg={sibylImage}
          stack="ReactJS / Solidity / Ethers"
          projectUrl="/sibyl"
          description="NFT project based on anime psycho pass. Each NFT is supposed to be an access token to every member in Sibyl system"
        />

        <ProjectsItems
          title="DEFI EXCHANGE"
          backgroundImg={dexImage}
          stack="NextJS / Solidity / TailWind"
          projectUrl="https://singular-parfait-06cfa7.netlify.app/"
          description="Defi Exchange build using Solidity smart contracts. Follows Uniswap AMM, hardhat for contract development."
        />

        <ProjectsItems
          title="NFT SHOWCASE"
          backgroundImg={nftImage}
          stack="NextJS / Ethers"
          projectUrl="https://scintillating-monstera-c20172.netlify.app/"
          description="NFT showcase page, where it indexes all nft's from a certain address and displays them with link to opensea."
        />

        <ProjectsItems
          title="NFT MARKETPLACE"
          backgroundImg={cyberImage}
          stack="NextJS / Solidity"
          projectUrl="/"
          description="NFT Marketplace smart contract to trade any kind of ERC721's. Creates several funds to Add/remove items."
        />
      </div>
    </m.div>
  )
}

export default Projects
