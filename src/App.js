import React from "react";
import Navbar from "./components/navbar/navbar";
import SideBar from "./components/navbar/components/SideBar";
import AboutMe from "./pages/about-me/AboutMe";
import InfoRow from "./pages/info";
import InfoCol from "./pages/info/info-col";
import WorkExperience from "./pages/work-experience";

const Main = () => {
    return (
        <div>
            <div className="sticky top-0 bg-gradient-to-b from-white from-60% to-transparent h-[150px] pl-10 pr-10 pt-2">
                <Navbar />
            </div>
            <div className="flex ml-50 flex-col pl-10 pr-10 w-full">
                {/* <div className="h-[1000px] bg-slate-500 ">test</div> */}
                <div className="mb-80 md:mb-96">
                    <AboutMe />
                </div>
                <div className="hidden lg:flex w-full">
                    <InfoRow />
                </div>
                <div className="flex lg:hidden">
                    <InfoCol />
                </div>
            </div>
            <div className="mt-96">
                <WorkExperience />
            </div>
        </div>
    );
};

export default Main;
