import React from "react";

const BadgeComponent = (props) => {
    return <div className="border border-black px-3 py-[0px] rounded-xl flex justify-center text-center text-sm">{props.tech}</div>;
};

export default BadgeComponent;
