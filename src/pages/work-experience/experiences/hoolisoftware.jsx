import React from "react";

const Hooli = () => {
    return (
        <div className="h-full ml-4 flex flex-col justify-center" style={{ fontFamily: "Unbounded" }}>
            <span className="flex items-center text-[35px]" style={{ lineHeight: "35px" }}>
                Full Stack
            </span>
            <span className="flex items-center text-[35px]" style={{ lineHeight: "35px" }}>
                Software Engineer
            </span>
            <span>at Hooli Software</span>
            <span style={{ fontFamily: "Poppins" }} className="text-xs mt-5">
                During my tenure at my current company, I successfully contributed to two key projects: SaaS Console and Carbonetes.
            </span>
        </div>
    );
};

export default Hooli;
