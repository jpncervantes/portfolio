import React, { useState } from "react";
import NavLink from "./components/NavLink";
import Brand from "../brand/Brand";
import SocialBadge from "../socials/SocialBadge";
import CVDownload from "../download-cv/CVDownload";
import { Tooltip } from "flowbite-react";
import { CgMenu } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import SideBar from "./components/SideBar";
import { Transition } from "@headlessui/react";

const Navigation = () => {
    const [isSelected, setIsSelected] = useState("About Me");
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    return (
        <div>
            <div className="w-100 grid-cols-2 gap-1 mt-5 hidden md:grid lg:grid xl:grid">
                <div className="grid grid-cols-4 gap-1 border border-solid border-[#1F1F1F] rounded-full lg:mr-44 h-[35px]">
                    <Brand />
                    <NavLink link={"About Me"} isSelected={isSelected} setIsSelected={() => setIsSelected("About Me")} />
                    <NavLink link={"Experiences"} isSelected={isSelected} setIsSelected={() => setIsSelected("Experiences")} />
                    <NavLink link={"Work"} isSelected={isSelected} setIsSelected={() => setIsSelected("Work")} />
                </div>
                <div className="h-[40px] flex space-x-4 sm:space-x-1 ml-10">
                    <div className="w-[30%]">
                        <SocialBadge social={"LinkedIn"} />
                    </div>
                    <div className="w-[30%]">
                        <SocialBadge social={"Facebook"} />
                    </div>
                    <div className="w-[30%]">
                        <SocialBadge social={"GitHub"} />
                    </div>
                    <div className="w-[10%] flex">
                        <CVDownload />
                    </div>
                </div>
            </div>

            {/* small screen */}
            <div className="md:hidden lg:hidden xl:hidden grid grid-cols-3 mt-5">
                <div className="cursor-pointer">
                    <CgMenu
                        size={"25px"}
                        onClick={() => {
                            setIsSideBarOpen(true);
                        }}
                    />
                </div>
                <div className="flex items-center justify-center">
                    <Brand />
                </div>
                <div></div>
            </div>

            <Transition
                show={isSideBarOpen}
                enter="transition-opacity duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <SideBar setIsSideBarOpen={(value) => setIsSideBarOpen(value)} />
            </Transition>
        </div>
    );
};

export default Navigation;
