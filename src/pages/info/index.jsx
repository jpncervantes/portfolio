import React, { useEffect, useRef } from "react";
import "./styles.css";
import { BsFillTelephoneFill, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const InfoRow = () => {
    const infoRef = useRef(null);

    useEffect(() => {
        const infoElement = infoRef.current;
        gsap.fromTo(
            infoElement,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1.5,
                scrollTrigger: {
                    trigger: infoElement,
                    toggleActions: "play reset play reset",
                    // markers: true,
                    // start: "top: 90%",
                    // end: "bottom: 10%",
                },
                ease: "linear",
            }
        );
        gsap.fromTo(
            ".info-row",
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: infoElement,
                    toggleActions: "play reset play reset",
                    // markers: true,
                },
                ease: "linear",
                stagger: 0.2,
            }
        );
    }, []);
    return (
        <div className="grid grid-cols-2 pl-16 pr-16 w-full" style={{ fontFamily: "Poppins" }} ref={infoRef}>
            <div className="flex flex-col justify-center">
                <div className="flex justify-between flex-col h-[75%]">
                    <div>
                        <span className="info-title">About Me</span>
                        <div className="xl:w-[450px] lg:w-[400px] bio lg:text-xs xl:text-sm">
                            I have a burning interest for film. My second option for a course to take in college was BA Film. My love for tech
                            influenced my love for scifi movies.
                        </div>
                    </div>
                    <div className="flex flex-col xl:space-x-6 xl:flex-row">
                        <span className="flex items-center">
                            <BsFillTelephoneFill /> <span className="ml-2 text-sm"> 09183252038</span>
                        </span>
                        <span className="flex items-center">
                            <MdEmail />
                            <span className="ml-2 text-sm"> johnpaulncervantes@gmail.com</span>
                        </span>
                        <span className="flex items-center">
                            <BsLinkedin />
                            <span className="ml-2 text-sm"> johnpaulncervantes</span>
                        </span>
                    </div>
                </div>
            </div>

            <div className="pr-12 pl-32 lg:pr-0">
                <div className="border-b border-t border-black flex flex-col pt-12 pb-12 ">
                    <div className="info-row">
                        <span className="heading">Education</span>
                        <div className="flex justify-between text-lg mt-4">
                            <span className="text-sm lg:text-sm xl:text-lg lg:font-bold">Bulacan State University</span>
                            <span className="text-sm lg:text-sm xl:text-lg">2018-2022</span>
                        </div>
                        <span className="text-sm">BS Computer Engineering</span>
                        <span className="text-sm font-light">President's Lister</span>
                        <div className="flex justify-between text-lg mt-5">
                            <span className="text-sm lg:text-sm xl:text-lg lg:font-bold">Bulacan State University</span>
                            <span className="text-sm lg:text-sm xl:text-lg">2018-2022</span>
                        </div>
                        <span className="text-sm">BS Computer Engineering</span>
                        <span className="text-sm font-light">President's Lister</span>
                    </div>
                </div>
                <div className="border-b border-black flex flex-col pt-12 pb-12">
                    <div className="info-row flex flex-col">
                        <span>I am based on</span>
                        <span className="heading">Hagonoy, Bulacan</span>
                    </div>
                </div>
                <div className=" border-black flex pt-12 pb-12">
                    <div className="info-row">
                        <span className="w-fit xl:w-fit lg:w-fit md:w-fit sm:w-fit xs:w-fit">an only child</span>
                        <span className="ml-16">
                            born on April 7, 2000. I'm an <b>Aries</b>{" "}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoRow;
