import React from "react"
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"
import {BsArrowUpRight, BsFacebook, BsGithub} from "react-icons/bs"
const SocialBadge = props => {
    const {social} = props

    const handleSocialIcon = social => {
        switch (social) {
            case "LinkedIn":
                return (
                    <span className="h-[20px]">
                        <AiFillLinkedin className="h-full" size={"20px"} />
                    </span>
                )
            case "Facebook":
                return (
                    <span className="h-[20px]">
                        <BsFacebook className="h-full" size={"20px"} />
                    </span>
                )
            case "GitHub":
              return (
                <span className="h-[25px]">
                    <AiFillGithub size={"25px"} />
                </span>
            )
            default:
                return <></>
        }
    }

    return (
        <div className="bg-[#1F1F1F] rounded-full text-white flex items-center justify-center relative h-[35px] gap-3 p-2 xs:text-xs sm:text-xs md:text-xs lg:text-xs xl:text-sm">
            {handleSocialIcon(social)}
            <span className="hidden md:flex">{social}</span>
            <span className="hidden lg:flex">
                <BsArrowUpRight className="top-2 right-4" size={15} />
            </span>
        </div>
    )
}

export default SocialBadge
