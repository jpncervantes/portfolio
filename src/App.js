import React from "react";
import Navbar from "./components/navbar/navbar";

const Main = () => {
  return (
    <div className="flex ml-50 flex-col pl-10 pr-10">
      <div className="sticky top-0 bg-gradient-to-b from-white from-40% to-transparent h-[100px]">
        <Navbar />
      </div>
      <div className="h-[1000px] bg-slate-500 ">test</div>
    </div>
  );
};

export default Main;