import React from "react";
import { FaCircle } from "react-icons/fa";

const Bullet = (props) => {
    return (
        <div className="flex items-start mt-3">
            <div className="h-[10px]">
                <FaCircle size={"10px"} className="mr-8 mt-2" />
            </div>
            {props.children}
        </div>
    );
};

export default Bullet;
