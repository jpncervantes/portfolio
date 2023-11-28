import React from "react";
import ExperienceTitle from "./components/title/experienceTitle";
import Bullet from "./components/bullet/Bullet";
import BadgeComponent from "./components/badge/badgeComponent";

const Complex = () => {
    return (
        <div className="pr-40 pl-8 flex flex-col justify-center h-full">
            <div className="flex-col flex">
                <div className="border-b border-black flex justify-between">
                    <span>May 2018 - June 2018</span>
                    <div className="flex gap-1 pb-1">
                        <BadgeComponent tech={"Photoshop"} />
                    </div>
                </div>
                <div className="flex justify-between">
                    <span>Malolos, Bulacan</span>
                    <div className="flex gap-1 pt-1"></div>
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
