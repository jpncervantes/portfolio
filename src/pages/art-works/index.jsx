import React, { useEffect } from "react";
import "./styles.css";
import render2 from "../../assets/road render 4 post.png";
import render3 from "../../assets/road.png";
import titlerender from "../../assets/bird.png";
// import Badge from "../../components/badge";
import SocialBadge from "../../components/socials/SocialBadge";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const ArtWorks = () => {
    useEffect(() => {
        gsap.fromTo(
            ".art-card",
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                duration: 1,
                y: 0,
                scrollTrigger: {
                    trigger: ".art-card",
                    toggleActions: "play reset play reverse",
                    // markers: true,
                    start: "top: 90%",
                    // end: "bottom: 10%",
                },
                ease: "linear",
                stagger: 0.1,
            }
        );
    }, []);

    return (
        <div className="ml-20 mr-20">
            <div className="hidden lg:flex flex-col">
                <div className="grid-cols-4 flex w-100 gap-0 2xl:h-[350px] xl:h-[250px] lg:h-[250px]">
                    <div className="bg-cell title border border-l-0 border-r-0 border-b-0 border-black w-[25%] overflow-hidden flex flex-col p-3 art-card">
                        <span className="title-text">Design</span>
                        <span className="title-text">Works</span>
                    </div>
                    <div className="border border-black w-[25%]"></div>
                    <div className="bg-cell render2 border border-r-0 border-l-0 border-black w-[25%] overflow-hidden art-card"></div>
                    <div className="border border-r-0 border-black w-[25%] flex items-end flex-col justify-center 2xl:text-base xl:text-sm">
                        <span className="text-end 2xl:w-[75%] xl:w-[85%] mb-8 ">
                            Aside from designing websites and web applications, I always have had a passion and fascination for art.
                        </span>
                        <span className="text-end 2xl:w-[75%] xl:w-[85%] ">I view software design as a new canvas for my self expression </span>
                    </div>
                </div>
                <div className="grid-cols-4 flex w-100 gap-0 2xl:h-[350px] xl:h-[250px] lg:h-[250px]">
                    <div className="border border-l-0 border-black w-[25%] flex xl:flex-row lg:flex-col pt-3 gap-2 ">
                        <div className="2xl:w-[40%] xl:w-[50%] lg:mr-1 xl:mr-0">
                            <SocialBadge social="Behance" />
                        </div>
                        <div className="2xl:w-[40%] xl:w-[50%] mr-1">
                            <SocialBadge social="Instagram" />
                        </div>
                    </div>
                    <div className="bg-cell render3 border border-t-0 border-r-0 border-black w-[25%] overflow-hidden art-card"></div>
                    <div className="border  border-black w-[25%] flex flex-col justify-end pl-4 2xl:text-base xl:text-sm">
                        <span className="text-start w-[75%] mb-8">Recently, I have been branching out to 3D design using Blender</span>
                    </div>
                    <div className="bg-cell render4 border border-t-0 border-r-0 border-l-0 border-black w-[25%] art-card"></div>
                </div>
            </div>
            <div className="flex flex-col lg:hidden">
                <div className="grid-cols-2 flex w-full gap-0 2xl:h-[350px] xl:h-[250px] lg:h-[250px] sm:h-[250px] h-[250px]">
                    <div className="bg-cell title border border-l-0 border-r-0 border-black w-[50%] overflow-hidden flex flex-col p-3">
                        <span className="title-text">Design</span>
                        <span className="title-text">Works</span>
                    </div>
                    <div className="border border-r-0 border-black w-[50%]"></div>
                </div>
                <div className="grid-cols-2 flex w-full gap-0 2xl:h-[350px] xl:h-[250px] lg:h-[250px] sm:h-[250px] h-[250px]">
                    <div className="border border-l-0 border-black w-[50%] flex items-end flex-col justify-center 2xl:text-base xl:text-sm sm:text-sm">
                        <span className="text-end 2xl:w-[75%] xl:w-[85%] mb-8 mr-2 ">
                            Aside from designing websites and web applications, I always have had a passion and fascination for art.
                        </span>
                        <span className="text-end 2xl:w-[75%] xl:w-[85%] mr-2">I view software design as a new canvas for my self expression </span>
                    </div>
                    <div className="bg-cell render2 border border-r-0 border-black w-[50%] overflow-hidden"></div>
                </div>
                <div className="grid-cols-2 flex w-full gap-0 2xl:h-[350px] xl:h-[250px] lg:h-[250px] sm:h-[250px] h-[250px]">
                    <div className="bg-cell render3 border border-t-0 border-r-0 border-black w-[50%] overflow-hidden"></div>
                    <div className="border border-t-0 border-l-0 border-r-0 border-black w-[50%] flex items-end mt-3 gap-2 pb-2">
                        <div className="2xl:w-[40%] xl:w-[50%] lg:mr-1 xl:mr-0 ml-4">
                            <SocialBadge social="Behance" />
                        </div>
                        <div className="2xl:w-[40%] xl:w-[50%] mr-1">
                            <SocialBadge social="Instagram" />
                        </div>
                    </div>
                </div>
                <div className="grid-cols-2 flex w-full gap-0 2xl:h-[350px] xl:h-[250px] lg:h-[250px] sm:h-[250px] h-[250px]">
                    <div className="border border-t-0 border-l-0 border-r-0 border-black w-[50%] flex flex-col justify-end pl-4 2xl:text-base xl:text-sm">
                        <span className="text-start text-sm w-[75%] mb-8">Recently, I have been branching out to 3D design using Blender</span>
                    </div>
                    <div className="bg-cell render4 border border-t-0 border-r-0 border-black w-[50%]"></div>
                </div>
            </div>
        </div>
    );
};

export default ArtWorks;
