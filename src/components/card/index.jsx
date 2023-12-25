import React from "react";
import "./style.css";
import { BsArrowUpRight } from "react-icons/bs";

const Card = (props) => {
    return (
        <a href={props.link} target="_blank" rel="noreferrer" className="">
            <div className="w-fit main-container mb-2">
                <img src={props.image} alt="work" className="sm:h-[200px] lg:h-[250px] border border-black w-full" />
                <div className="card-subtext border border-t-0 border-black w-full p-1 flex justify-between items-center">
                    {props.text}
                    <div className="icon-container">
                        <BsArrowUpRight className="top-2 right-4 card-icon" size={15} />
                    </div>
                </div>
            </div>
        </a>
    );
};

export default Card;
