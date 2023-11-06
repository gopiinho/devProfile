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
    donateImage,
    ender,
    enderApp,
} from "../public/assets/projects/index"
const Projects = () => {
    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="h-full w-full justify-center py-8 pt-[64px] sm:w-full"
        >
            <Image
                src={projectBG}
                alt="/"
                className="pointer-events-none fixed inset-0 z-[-1] h-full w-full object-cover opacity-20"
                priority
                unoptimized={true}
            />

            <div className="grid gap-2 p-2 md:grid-cols-2">
                <ProjectsItems
                    title="Ender Protocol - Landing"
                    backgroundImg={ender}
                    stack="next.js / tailwindcss"
                    projectUrl="https://www.enderprotocol.io/"
                />

                <ProjectsItems
                    title="Ender Protocol - App"
                    backgroundImg={enderApp}
                    stack="next.js / wagmi.sh / tailwindcss"
                    projectUrl="https://app.enderprotocol.io/"
                />

                <ProjectsItems
                    title="NFT MINT PAGE"
                    backgroundImg={sibylImage}
                    stack="react / soldity / ethers.js"
                    projectUrl="/sibyl"
                    description="NFT project based on anime psycho pass. Each NFT is supposed to be an access token to every member in Sibyl system"
                />

                <ProjectsItems
                    title="DEFI EXCHANGE"
                    backgroundImg={dexImage}
                    stack="next.js / solidity / tailwindcss"
                    projectUrl="https://singular-parfait-06cfa7.netlify.app/"
                    description="Defi Exchange build using Solidity smart contracts. Follows Uniswap AMM, hardhat for contract development."
                />
                <ProjectsItems
                    title="ETH DONATION"
                    backgroundImg={donateImage}
                    stack="nextjs / solidity / wagmi.sh"
                    projectUrl="https://github.com/igopib/eth-donate"
                    description="Simple nextjs app powered by smart contract. Makes it easier for anyone to deploy and start receiving funds."
                />
                <ProjectsItems
                    title="untitled"
                    backgroundImg={untitledImage}
                    stack="nextjs / tailwindcss"
                    projectUrl="https://boisterous-hamster-73490e.netlify.app/"
                    description="As the title says, this project is still untitled. This may or may not change later on."
                />
                <ProjectsItems
                    title="NFT SHOWCASE"
                    backgroundImg={nftImage}
                    stack="nextjs / ethersjs / tailwindcss"
                    projectUrl="https://scintillating-monstera-c20172.netlify.app/"
                    description="NFT showcase page, where it indexes all nft's from a certain address and displays them with link to opensea."
                />
            </div>
        </m.div>
    )
}

export default Projects
