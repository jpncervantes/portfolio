import React from "react";
import BadgeComponent from "./components/badge/badgeComponent";
import ExperienceTitle from "./components/title/experienceTitle";
import Bullet from "./components/bullet/Bullet";

const Carbonetes = () => {
    return (
        <div className="pr-40 pl-8 flex flex-col justify-center h-full">
            <div className="flex-col flex">
                <div className="border-b border-black flex justify-between">
                    <span>July 2022 - Present</span>
                    <div className="flex gap-1 pb-1">
                        <BadgeComponent tech={"React.JS"} />
                        <BadgeComponent tech={"Go"} />
                        <BadgeComponent tech={"gRPC"} />
                    </div>
                </div>
                <div className="flex justify-between">
                    <span>Marilao, Bulacan</span>
                    <div className="flex gap-1 pt-1">
                        <BadgeComponent tech={"Jotai"} />
                        <BadgeComponent tech={"Tailwind"} />
                        <BadgeComponent tech={"PostgreSQL"} />
                    </div>
                </div>
                <div className="mt-8">
                    <ExperienceTitle>Carbonetes</ExperienceTitle>
                    <ExperienceTitle.Subtitles>
                        at <b>Hooli Software</b>
                    </ExperienceTitle.Subtitles>
                </div>
                <div>
                    <Bullet>
                        Leveraged Jotai and Tanstack Query in our current project to ensure efficient state management and optimized data retrieval
                        from our backend servers.
                    </Bullet>
                    <Bullet>
                        Implemented additional API endpoints within the backend architecture, enabling seamless retrieval of essential data from the
                        database.
                    </Bullet>
                    <Bullet>Lended my expertise as support to other software developers on the project.</Bullet>
                </div>
            </div>
        </div>
    );
};

export default Carbonetes;
