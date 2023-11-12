import React from "react";
import Navbar from "./components/navbar/navbar";
import SideBar from "./components/navbar/components/SideBar";
import AboutMe from "./pages/about-me/AboutMe";
import Info from "./pages/info";

const Main = () => {
  return (
    <div className="flex ml-50 flex-col pl-10 pr-10 w-full">
      <div className="sticky top-0 bg-gradient-to-b from-white from-60% to-transparent h-[100px]">
        <Navbar />
      </div>
      {/* <div className="h-[1000px] bg-slate-500 ">test</div> */}
      <div className="mb-96">
        <AboutMe />
      </div>
      <Info />
    </div>
  );
};

export default Main;
