import React from "react"
import Icon from "./Icon"

// Icons
import { MdContactMail } from "react-icons/md"
import { BsFileCodeFill } from "react-icons/bs"
import { GiAbstract029 } from "react-icons/gi"
import { TiThMenuOutline } from "react-icons/ti"
import { IoIosPaper } from "react-icons/io"
import { FaToolbox } from "react-icons/fa"

const MainMenu = () => {
    return (
        <div className="flex h-full w-full flex-col justify-between text-white">
            <div className="flex w-full gap-6 p-2">
                <Icon
                    icon={<MdContactMail />}
                    title="contact"
                    href="/contact"
                />
                <Icon icon={<BsFileCodeFill />} title="work" />
                <Icon icon={<TiThMenuOutline />} title="menu" />
                <Icon icon={<GiAbstract029 />} title="about" />
                <Icon icon={<IoIosPaper />} title="resume" />
                <Icon icon={<FaToolbox />} title="skills" />
            </div>
            <div>Something else</div>
        </div>
    )
}

export default MainMenu
