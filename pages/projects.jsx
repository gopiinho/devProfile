import React from "react"
import sibylImage from "../public/assets/projects/sibyl.png"
import cyberImage from "../public/assets/projects/cyber.png"
import ProjectsItems from "../components/ProjectsItems"

const Projects = () => {
  return (
    <div className="max-w-[1240px] mx-auto p-8 h-screen justify-center pt-28">
      <div className="neonH2 flex items-center justify-center cursor-default">
        <h2 className="text-3xl tracking-widest uppercase text-cyber text-center my-12 font-cyber opacity-60 hover:opacity-100 duration-200">
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
          title="NFT MARKETPLACE"
          backgroundImg={cyberImage}
          stack="NextJS / Solidity"
          projectUrl="/"
          description="NFT project based on anime psycho pass. Each NFT is supposed to be an access token to every member in Sibyl system"
        />
      </div>
    </div>
  )
}

export default Projects
