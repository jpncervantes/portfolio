import React from "react";
import "./styles.css";
import Subtitle from "./subtitle";

const ExperienceTitle = (props) => {
    return (
        <div>
            <span className="title ">{props.children}</span>
        </div>
    );
};

ExperienceTitle.Subtitles = Subtitle;

export default ExperienceTitle;
