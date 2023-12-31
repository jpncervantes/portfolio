import React from "react";
import Navbar from "./components/navbar/navbar";
import SideBar from "./components/navbar/components/SideBar";
import AboutMe from "./pages/about-me/AboutMe";
import InfoRow from "./pages/info";
import InfoCol from "./pages/info/info-col";
import WorkExperience from "./pages/work-experience";
import UiWorks from "./pages/ui-works";
import ArtWorks from "./pages/art-works";
import Footer from "./components/footer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
const Main = () => {
    return (
        <div>
            <div className="sticky top-0 bg-gradient-to-b from-white from-60% to-transparent h-[150px] pl-10 pr-10 pt-2 z-10">
                <Navbar />
            </div>
            <div className="flex ml-50 flex-col pl-10 pr-10 w-full">
                {/* <div className="h-[1000px] bg-slate-500 ">test</div> */}
                <div className="mb-0 md:mb-96" id="intro">
                    <AboutMe />
                </div>
                <div className="hidden lg:flex w-full pt-32 pb-20" id="information">
                    <InfoRow />
                </div>
                <div className="flex lg:hidden pt-72" id="information">
                    <InfoCol />
                </div>
            </div>
            <div className="pt-72">
                <div className="w-full pt-36" id="workexp">
                    <WorkExperience />
                </div>
            </div>
            <div className="pt-60">
                <div className="w-full pt-36" id="uiworks">
                    <UiWorks />
                </div>
            </div>
            <div className="mt-[400px]" id="artworks">
                <div className="w-full pt-36" id="artworks">
                    <ArtWorks />
                </div>
            </div>
            <div className="mt-80">
                <Footer />
            </div>
        </div>
    );
};

export default Main;
