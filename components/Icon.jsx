import Link from "next/link"

const Icon = ({ icon, title, href }) => {
    return (
        <div className="cursor-pointer text-center font-cyber text-white/80 duration-300 hover:scale-105 hover:text-[#ff2a6d]/70">
            <Link
                href={{ href }}
                alt="icon-image"
                className="flex flex-col items-center gap-2"
            >
                <span className="text-3xl">{icon}</span>
                <span>{title}</span>
            </Link>
        </div>
    )
}

export default Icon
