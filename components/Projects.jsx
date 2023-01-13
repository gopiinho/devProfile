import React from "react";
import Image from "next/image";
import sibylImage from "../public/assets/projects/sibyl.png";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto p-8 ">
        <div className="neonH2 flex items-center justify-center cursor-default">
          <h2 className="text-3xl tracking-widest uppercase text-cyber text-center my-12">
            Projects
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative flex items-center justify-center h-auto w-full group rounded-sm p-1 opacity-75 hover:opacity-100 transition duration-700">
            <div className="absolute -inset-0.5 opacity-75 bg-gradient-to-r from-[#ff2a6d] to-[#05d9e8] rounded-lg blur group-hover:opacity-0 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Image
              className="relative rounded-md group-hover:opacity-10 transition duration-500"
              src={sibylImage}
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-cyber">
              <h3 className="text-2xl tracking-wider text-center">
                NFT Mint Page
              </h3>

              <p className="pb-4 pt-2 text-white text-center">
                React JS / Solidty
              </p>

              <Link href="/">
                <p className="neonH2 text-center py-2 mx-8 rounded-md bg-white text-[#ff2a6d] text-lg cursor-pointer opacity-75 hover:opacity-100 transition duration-00">
                  Visit
                </p>
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center h-auto w-full group rounded-sm p-1 opacity-75 hover:opacity-100 transition duration-700">
            <div className="absolute -inset-0.5 opacity-75 bg-gradient-to-r from-[#ff2a6d] to-[#05d9e8] rounded-lg blur group-hover:opacity-0 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Image
              className="relative rounded-md group-hover:opacity-10 transition duration-500"
              src={sibylImage}
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-cyber">
              <h3 className="text-2xl tracking-wider text-center">
                NFT Mint Page
              </h3>

              <p className="pb-4 pt-2 text-white text-center">
                React JS / Solidty
              </p>

              <Link href="/">
                <p className="neonH2 text-center py-2 mx-8 rounded-md bg-white text-[#ff2a6d] text-lg cursor-pointer opacity-75 hover:opacity-100 transition duration-00">
                  Visit
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
