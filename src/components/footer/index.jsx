import React from "react";
import "./styles.css";
import { FaCopyright } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className="footer w-100 flex flex-col justify-center pl-12 pr-12">
            <span className="thanks text-6xl">thanks!</span>
            <div className="flex flex-col lg:flex-row mt-2 lg:items-center ">
                <div className="barline w-full lg:w-[75%] bg-white h-[2px] "></div>
                <div className="lg:ml-3 mt-4 lg:mt-0 flex text-white justify-between lg:w-[50%]">
                    <div className="flex items-center">
                        <FaCopyright fill="white" />
                        <span className=" flex items-center ml-1">JP Cervantes 2023</span>
                    </div>
                    <div className="flex items-center">
                        <BsLinkedin />
                        <MdEmail size={24} />
                    </div>
                    <div>
                        <span>made with React.JS</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
