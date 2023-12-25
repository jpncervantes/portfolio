import React from "react";
import Card from "../../components/card";
import work1 from "../../assets/Frame 23.png";
import work2 from "../../assets/Frame 2.png";
import work3 from "../../assets/Frame 15.png";
import "./style.css";

const UiWorks = () => {
    return (
        <div className="flex flex-col w-full justify-center items-center pt-14">
            <div className="sm:w-[100%] md:w-[70%] sm:justify-center flex mb-10">
                <span className="title">What I've worked on:</span>
            </div>
            <div className="xs:flex-col md:flex sm:gap-1 lg:gap-4">
                <Card image={work1} text="Vitaband Dashboard" link="https://www.behance.net/gallery/164691369/Vitaband-Dashboard" />
                <Card
                    image={work2}
                    text="Skillit Book a Demo Feature"
                    link="https://www.behance.net/gallery/178831025/Calendar-Feature-for-Skillit11"
                />
                <Card image={work3} text="UNI-ADJ Web App" link="https://www.behance.net/gallery/157600641/UNI-ADJ-Website-Design-Proposal" />
            </div>
        </div>
    );
};

export default UiWorks;
