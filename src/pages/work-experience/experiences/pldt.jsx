import React from "react";
import ExperienceTitle from "./components/title/experienceTitle";
import Bullet from "./components/bullet/Bullet";

const PLDT = () => {
    return (
        <div className="2xl:pr-40 xl:pr-30 lg:pr-16 md:pr-20 sm:pr-10 pl-8 flex flex-col justify-center h-full">
            <div className="flex-col flex">
                <div className="border-b border-black flex justify-between md:mt-2 lg:mt-0">
                    <span>Jan 2018 - Feb 2018</span>
                    <span className="lg:hidden">Malolos, Bulacan</span>
                    <div className="flex gap-1 pb-1"></div>
                </div>
                <div className="flex justify-between">
                    <span className="hidden sm:hidden lg:flex">Malolos, Bulacan</span>
                    <div className="flex gap-1 pt-1"></div>
                </div>
                <div className="mt-8">
                    <ExperienceTitle>Work Immersion Intern</ExperienceTitle>
                    <ExperienceTitle.Subtitles>
                        <i>Intern</i> at <b>PLDT Malolos</b>
                    </ExperienceTitle.Subtitles>
                </div>
                <div>
                    <Bullet>
                        As a work immersion intern, my role was primarily observational. I actively absorbed and assimilated the knowledge and skills
                        demonstrated by the employees, contributing to my personal growth
                    </Bullet>
                </div>
            </div>
        </div>
    );
};

export default PLDT;
