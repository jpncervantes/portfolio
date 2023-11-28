import React from "react";
import BadgeComponent from "./components/badge/badgeComponent";
import ExperienceTitle from "./components/title/experienceTitle";
import Bullet from "./components/bullet/Bullet";

const Erovoutika = () => {
    return (
        <div className="pr-40 pl-8 flex flex-col justify-center h-full">
            <div className="flex-col flex">
                <div className="border-b border-black flex justify-between">
                    <span>Aug 2021 - Sep 2021</span>
                    <div className="flex gap-1 pb-1">
                        <BadgeComponent tech={"Photoshop"} />
                        <BadgeComponent tech={"Illustrator"} />
                    </div>
                </div>
                <div className="flex justify-between">
                    <span>Makati, NCR</span>
                    <div className="flex gap-1 pt-1">
                        <BadgeComponent tech={"Premiere Pro"} />
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
