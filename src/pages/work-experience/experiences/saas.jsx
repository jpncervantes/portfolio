import React from "react";
import BadgeComponent from "./components/badge/badgeComponent";
import ExperienceTitle from "./components/title/experienceTitle";
import Bullet from "./components/bullet/Bullet";

const SaaSConsole = () => {
    return (
        <div className="pr-40 pl-8 flex flex-col justify-center h-full">
            <div className="flex-col flex">
                <div className="border-b border-black flex justify-between">
                    <span>July 2022 - Present</span>
                    <div className="flex gap-1 pb-1">
                        <BadgeComponent tech={"React.JS"} />
                        <BadgeComponent tech={"Go"} />
                        <BadgeComponent tech={"Bootstrap"} />
                        <BadgeComponent tech={"Redux"} />
                    </div>
                </div>
                <div className="flex justify-between">
                    <span>Marilao, Bulacan</span>
                    <div className="flex gap-1 pt-1">
                        <BadgeComponent tech={"Javascript"} />
                        <BadgeComponent tech={"HTML & CSS"} />
                        <BadgeComponent tech={"DynamoDB"} />
                        <BadgeComponent tech={"Revel"} />
                    </div>
                </div>
                <div className="mt-8">
                    <ExperienceTitle>SaaS Console</ExperienceTitle>
                    <ExperienceTitle.Subtitles>
                        at <b>Hooli Software</b>
                    </ExperienceTitle.Subtitles>
                </div>
                <div>
                    <Bullet>
                        Spearheaded the implementation of the "Getting Started Guide" feature, designed to facilitate user navigation within one of
                        our application's core modules.
                    </Bullet>
                    <Bullet>
                        Resolved multiple bug and improvement tickets in our project. Exercising my ability to prioritize tasks, troubleshoot issues,
                        and ensure timely delivery of high-quality code.
                    </Bullet>
                    <Bullet>Single-handedly, incorporated accessibility features across all modules of the application.</Bullet>
                    <Bullet>Utilized Redux to establish a structured approach for managing the state among components in our project.</Bullet>
                </div>
            </div>
        </div>
    );
};

export default SaaSConsole;
