import React from "react"
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"
import {BsArrowUpRight, BsFacebook, BsGithub} from "react-icons/bs"
const SocialBadge = props => {
    const {social} = props

    const responsiveClasses = "xs:text-xs sm:text-xs md:text-xs lg:text-xs xl:text-sm"

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

    const handleRedirectLink = social => {
        switch (social) {
            case "LinkedIn":
                return "https://www.linkedin.com/in/johnpaulncervantes/"
            case "Facebook":
                return "https://www.facebook.com/cervantesjohnpauln/"
            case "GitHub":
                return "https://github.com/jpncervantes?tab=repositories"
            default:
                return <></>
        }
    }
    return (
        <a href={handleRedirectLink(social)} target="_blank">
            <div
                className={`bg-[#1F1F1F] rounded-full text-white flex items-center justify-center cursor-pointer relative h-[35px] gap-3 p-2 ${responsiveClasses}`}
            >
                {handleSocialIcon(social)}
                <span className="hidden md:flex">{social}</span>
                <span className="hidden lg:flex">
                    <BsArrowUpRight className="top-2 right-4" size={15} />
                </span>
            </div>
        </a>
    )
}

export default SocialBadge
