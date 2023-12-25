import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsArrowUpRight, BsFacebook, BsInstagram } from "react-icons/bs";
import { FaBehance, FaBehanceSquare, FaInstagramSquare } from "react-icons/fa";
import "./styles.css";
const SocialBadge = (props) => {
    const { social } = props;

    const responsiveClasses = "xs:text-xs sm:text-xs md:text-xs lg:text-xs xl:text-sm";

    const handleSocialIcon = (social) => {
        switch (social) {
            case "LinkedIn":
                return (
                    <span className="h-[20px]">
                        <AiFillLinkedin className="h-full" size={"20px"} />
                    </span>
                );
            case "Facebook":
                return (
                    <span className="h-[20px]">
                        <BsFacebook className="h-full" size={"20px"} />
                    </span>
                );
            case "GitHub":
                return (
                    <span className="h-[25px]">
                        <AiFillGithub size={"25px"} />
                    </span>
                );
            case "Behance":
                return (
                    <span className="h-[25px] flex items-center">
                        <FaBehanceSquare size={"20px"} />
                    </span>
                );
            case "Instagram":
                return (
                    <span className="h-[25px] flex items-center">
                        <BsInstagram size={"20px"} />
                    </span>
                );
            default:
                return <></>;
        }
    };

    const handleRedirectLink = (social) => {
        switch (social) {
            case "LinkedIn":
                return "https://www.linkedin.com/in/johnpaulncervantes/";
            case "Facebook":
                return "https://www.facebook.com/cervantesjohnpauln/";
            case "GitHub":
                return "https://github.com/jpncervantes?tab=repositories";
            case "Behance":
                return "https://www.behance.net/cervantesjp";
            case "Instagram":
                return "https://www.instagram.com/_cervantesjp/?hl=en";
            default:
                return <></>;
        }
    };
    return (
        <a href={handleRedirectLink(social)} target="_blank" rel="noreferrer">
            <div
                className={`bg-[#1F1F1F] rounded-full text-white flex items-center justify-center cursor-pointer relative h-[35px] gap-3 p-2 ${responsiveClasses} badge-container`}
            >
                {handleSocialIcon(social)}
                <span className="hidden md:flex">{social}</span>
                <div className="hidden lg:flex arrow-icon">
                    <BsArrowUpRight className="top-2 right-4" size={15} />
                </div>
            </div>
        </a>
    );
};

export default SocialBadge;
