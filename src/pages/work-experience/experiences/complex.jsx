import React from "react";
import ExperienceTitle from "./components/title/experienceTitle";
import Bullet from "./components/bullet/Bullet";
import BadgeComponent from "./components/badge/badgeComponent";

const Complex = () => {
    return (
        <div className="2xl:pr-40 xl:pr-30 lg:pr-16 md:pr-20 sm:pr-10 pl-8 flex flex-col justify-center h-full">
            <div className="flex-col flex">
                <div className="border-b border-black flex justify-between">
                    <span>May 2018 - June 2018</span>
                    <span className="flex sm:flex md:flex lg:hidden">Malolos, Bulacan</span>
                    <div className="hidden sm:hidden lg:flex gap-1 pb-1 flex-wrap">
                        <BadgeComponent tech={"Photoshop"} />
                    </div>
                </div>
                <div className="flex justify-between">
                    <span className="hidden sm:hidden lg:flex">Malolos, Bulacan</span>
                    <div className="flex gap-1 pt-1 sm:flex lg:hidden">
                        <BadgeComponent tech={"Photoshop"} />
                    </div>
                </div>
                <div className="mt-8">
                    <ExperienceTitle>Graphic Designer</ExperienceTitle>
                    <ExperienceTitle.Subtitles>
                        <b>Malolos Sports Complex</b>
                    </ExperienceTitle.Subtitles>
                </div>
                <div>
                    <Bullet>Crafted visually appealing and effective tarpaulins for the sports complex during a summer job.</Bullet>
                </div>
            </div>
        </div>
    );
};

export default Complex;
