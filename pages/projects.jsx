import React from "react"
import ProjectsItems from "../components/ProjectsItems"
import { motion as m } from "framer-motion"
import Image from "next/image"
import { projectBG } from "../public/assets/backgrounds/index"
import {
    sibylImage,
    dexImage,
    nftImage,
    untitledImage,
} from "../public/assets/projects/index"
const Projects = () => {
    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="h-full w-full justify-center pt-[64px] sm:w-full"
        >
            <Image
                src={projectBG}
                alt="/"
                className="pointer-events-none fixed inset-0 z-[-1] h-full w-full object-cover opacity-20"
                priority
                unoptimized={true}
            />

            <div className="grid gap-4 md:grid-cols-2">
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
                    stack="NextJS / Solidity / TailWindCSS"
                    projectUrl="https://singular-parfait-06cfa7.netlify.app/"
                    description="Defi Exchange build using Solidity smart contracts. Follows Uniswap AMM, hardhat for contract development."
                />
                <ProjectsItems
                    title="untitled"
                    backgroundImg={untitledImage}
                    stack="NextJS / TailWindCSS"
                    projectUrl="https://boisterous-hamster-73490e.netlify.app/"
                    description="As the title says, this project is still untitled. This may or may not change later on."
                />
                <ProjectsItems
                    title="NFT SHOWCASE"
                    backgroundImg={nftImage}
                    stack="NextJS / Ethers"
                    projectUrl="https://scintillating-monstera-c20172.netlify.app/"
                    description="NFT showcase page, where it indexes all nft's from a certain address and displays them with link to opensea."
                />
            </div>
        </m.div>
    )
}

export default Projects
