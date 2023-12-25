import React from "react";
import "./styles.css";
import render2 from "../../assets/road render 4 post.png";
import render3 from "../../assets/road.png";
import titlerender from "../../assets/bird.png";
// import Badge from "../../components/badge";
import SocialBadge from "../../components/socials/SocialBadge";

const ArtWorks = () => {
    return (
        <div className="ml-20 mr-20">
            <div className="grid-cols-4 flex w-100 gap-0 h-[350px]">
                <div className="bg-cell title border border-l-0 border-r-0 border-black w-[25%] overflow-hidden flex flex-col p-3">
                    <span className="title-text">Design</span>
                    <span className="title-text">Works</span>
                </div>
                <div className="border border-r-0 border-black w-[25%]"></div>
                <div className="bg-cell render2 border border-r-0 border-black w-[25%] overflow-hidden"></div>
                <div className="border border-r-0 border-black w-[25%] flex items-end flex-col justify-center">
                    <span className="text-end w-[75%] mb-8">
                        Aside from designing websites and web applications, I always have had a passion and fascination for art.
                    </span>
                    <span className="text-end w-[55%]">I view software design as a new canvas for my self expression </span>
                </div>
            </div>
            <div className="grid-cols-4 flex w-100 gap-0 h-[350px]">
                <div className="border border-t-0 border-l-0 border-r-0 border-black w-[25%] flex mt-3 gap-2">
                    <div className="w-[40%]">
                        <SocialBadge social="Behance" />
                    </div>
                    <div className="w-[40%]">
                        <SocialBadge social="Instagram" />
                    </div>
                </div>
                <div className="bg-cell render3 border border-t-0 border-r-0 border-black w-[25%] overflow-hidden"></div>
                <div className="border border-t-0 border-r-0 border-black w-[25%] flex flex-col justify-end pl-4">
                    <span className="text-start w-[75%] mb-8">Recently, I have been branching out to 3D design using Blender</span>
                </div>
                <div className="bg-cell render4 border border-t-0 border-r-0 border-black w-[25%]"></div>
            </div>
        </div>
    );
};

export default ArtWorks;
