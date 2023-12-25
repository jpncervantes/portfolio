import React from "react";
import BadgeComponent from "./components/badge/badgeComponent";
import ExperienceTitle from "./components/title/experienceTitle";
import Bullet from "./components/bullet/Bullet";

const Carbonetes = () => {
    return (
        <div className="2xl:pr-40 xl:pr-30 lg:pr-16 md:pr-20 sm:pr-10 pl-8 flex flex-col justify-center h-full">
            <div className="flex-col flex">
                <div className="border-b border-black flex justify-between md:mt-2 lg:mt-0">
                    <span>July 2022 - Present</span>
                    <span className="flex sm:flex md:flex lg:hidden">Marilao, Bulacan</span>
                    <div className="hidden sm:hidden lg:flex gap-1 pb-1 flex-wrap">
                        <BadgeComponent tech={"React.JS"} />
                        <BadgeComponent tech={"Go"} />
                        <BadgeComponent tech={"gRPC"} />
                    </div>
                </div>
                <div className="flex justify-between">
                    <span className="hidden sm:hidden lg:flex">Marilao, Bulacan</span>
                    <div className="flex flex-col">
                        <div className="flex gap-1 pt-1 flex-wrap mb-1">
                            <BadgeComponent tech={"Jotai"} />
                            <BadgeComponent tech={"Tailwind"} />
                            <BadgeComponent tech={"PostgreSQL"} />
                        </div>
                        <div className="flex sm:flex lg:hidden gap-1 pb-1 pt-1 flex-end">
                            <BadgeComponent tech={"React.JS"} />
                            <BadgeComponent tech={"Go"} />
                            <BadgeComponent tech={"gRPC"} />
                        </div>
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
