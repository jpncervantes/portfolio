import React from "react";
import BadgeComponent from "./components/badge/badgeComponent";
import ExperienceTitle from "./components/title/experienceTitle";
import Bullet from "./components/bullet/Bullet";

const Erovoutika = () => {
    return (
        <div className="2xl:pr-40 xl:pr-30 lg:pr-16 md:pr-20 sm:pr-10 pl-8 flex flex-col justify-center h-full">
            <div className="flex-col flex">
                <div className="border-b border-black flex justify-between md:mt-2 lg:mt-0">
                    <span>Aug 2021 - Sep 2021</span>
                    <span className="flex sm:flex md:flex lg:hidden">Makati, NCR</span>
                    <div className="hidden sm:hidden lg:flex gap-1 pb-1 flex-wrap">
                        <BadgeComponent tech={"Photoshop"} />
                        <BadgeComponent tech={"Illustrator"} />
                    </div>
                </div>
                <div className="flex justify-between">
                    <span className="hidden sm:hidden lg:flex">Makati, NCR</span>
                    <div className="flex">
                        <div className="flex gap-1 pt-1">
                            <BadgeComponent tech={"Premiere Pro"} />
                        </div>
                        <div className="flex sm:flex lg:hidden gap-1 pb-1 flex-end pt-1 ml-1">
                            <BadgeComponent tech={"Photoshop"} />
                            <BadgeComponent tech={"Illustrator"} />
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <ExperienceTitle>Graphic Designer and Video Editor</ExperienceTitle>
                    <ExperienceTitle.Subtitles>
                        <i>Intern</i> at <b>Erovoutika Robotics and Automation</b>
                    </ExperienceTitle.Subtitles>
                </div>
                <div>
                    <Bullet>Utilized my creative skills to design eye-catching advertisement posters for tutorial sessions.</Bullet>
                    <Bullet>Edited tutorial videos to ensure a professional look and feel while ensuring their great video and audio.</Bullet>
                </div>
            </div>
        </div>
    );
};

export default Erovoutika;
