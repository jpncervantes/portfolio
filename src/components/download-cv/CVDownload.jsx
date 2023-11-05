import {Tooltip} from "flowbite-react"
import React from "react"
import {BsArrowUpRight, BsDownload} from "react-icons/bs"

const CVDownload = () => {
    const handleTooltip = () => {
        return(
            <span className="w-[200px]">Download my CV</span>
        )
    }
    return (
        <div className="col-span-1 bg-[#1F1F1F] rounded-full text-white flex items-center justify-center relative h-[35px] gap-3 p-2 lg:text-xs xl:text-sm w-full">
            <Tooltip content={handleTooltip()} className="mt-2 w-[150px] flex item-center justify-center">
                <span>
                    <BsDownload />
                </span>
            </Tooltip>
        </div>
    )
}

export default CVDownload
