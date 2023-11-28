import React, { useState } from "react";
import Hooli from "./experiences/hoolisoftware";
import SaaSConsole from "./experiences/saas";
import Carbonetes from "./experiences/carbonetes";
import Erovoutika from "./experiences/erovoutika";
import PLDT from "./experiences/pldt";
import Complex from "./experiences/complex";

const WorkExperience = () => {
    const [isSelected, setisSelected] = useState("Hooli");

    const getRenderedColumn = (selected) => {
        switch (selected) {
            case "Hooli":
                return <Hooli />;
            case "SaaS":
                return <SaaSConsole />;
            case "Carbo":
                return <Carbonetes />;
            case "Ero":
                return <Erovoutika />;
            case "PLDT":
                return <PLDT />;
            case "Complex":
                return <Complex />;
            default:
                return <></>;
        }
    };
    return (
        <div className="flex flex-row w-100">
            <div className="bg-black ml-40 w-[30%] text-white flex flex-col justify-end items-end pl-4 pr-4 pt-6">
                <span style={{ fontFamily: "Unbounded", lineHeight: "30px" }} className="text-[30px]">
                    Work
                </span>
                <span style={{ fontFamily: "Unbounded", lineHeight: "30px" }} className="text-[30px]">
                    Experiences
                </span>
                <div className="border-r border-white flex flex-col items-end mt-11 mb-8 pb-8 space-y-4" style={{ fontFamily: "Poppins" }}>
                    <span
                        className={`mt-24 cursor-pointer pr-4 ${isSelected === "Hooli" && "border-white border-r-4 pr-4 "}`}
                        onClick={() => setisSelected("Hooli")}
                    >
                        {" "}
                        Hooli Software{" "}
                    </span>
                    <span
                        className={`text-xs pr-7 cursor-pointer ${isSelected === "SaaS" && "border-white border-r-4 pr-4"}`}
                        onClick={() => setisSelected("SaaS")}
                    >
                        Saas Console
                    </span>

                    <span
                        className={`text-xs pr-7 cursor-pointer ${isSelected === "Carbo" && "border-white border-r-4 pr-4"}`}
                        onClick={() => setisSelected("Carbo")}
                    >
                        Carbonetes
                    </span>
                    <span
                        className={`mt-24 cursor-pointer pr-4 ${isSelected === "Ero" && "border-white border-r-4 pr-4"}`}
                        onClick={() => setisSelected("Ero")}
                    >
                        Erovoutika Robotics and Automation
                    </span>
                    <span
                        className={`mt-24 cursor-pointer pr-4 ${isSelected === "PLDT" && "border-white border-r-4 pr-4"}`}
                        onClick={() => setisSelected("PLDT")}
                    >
                        PLDT Malolos
                    </span>
                    <span
                        className={`mt-24 cursor-pointer pr-4  ${isSelected === "Complex" && "border-white border-r-4 pr-4"}`}
                        onClick={() => setisSelected("Complex")}
                    >
                        Malolos Sports Complex
                    </span>
                </div>
            </div>
            <div className="w-[70%] border-b border-t border-black">{getRenderedColumn(isSelected)}</div>
        </div>
    );
};

export default WorkExperience;
