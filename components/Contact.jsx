import React from "react"

const Contact = () => {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16  w-full">
        <div className="neonH2 flex items-center justify-center cursor-default">
          <h2 className="text-4xl tracking-widest uppercase text-center my-12 font-cyber">
            Contact
          </h2>
        </div>
        <div className="w-full h-full p-8  text-center items-center">
          <p className="text-slate-400 max-w-[70%] m-auto">
            I'm seeking out opportunities to collaborate with companies /
            agencies / individuals, not just work for them. I want to bring my
            collective design experience to the table where we can work together
            to solve real business-problems in a way that optimizes all of our
            respective experience and knowledge.
          </p>
          <div className="p-2"></div>
          <p className="text-slate-400 max-w-[70%] m-auto">
            I want to avoid subjective pissing-matches, and favor open-minded
            collaborators where egos are out of the equation. If that all sounds
            about right, then lets for sure chat about how we can work together.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
