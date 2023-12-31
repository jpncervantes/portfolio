import React, { useEffect } from "react";
import Card from "../../components/card";
import work1 from "../../assets/Frame 23.png";
import work2 from "../../assets/Frame 2.png";
import work3 from "../../assets/Frame 15.png";
import "./style.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const UiWorks = () => {
    useEffect(() => {
        gsap.fromTo(
            ".work-card",
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                duration: 1,
                y: 0,
                scrollTrigger: {
                    trigger: ".work-card",
                    toggleActions: "play reset play reverse",
                    // markers: true,
                    start: "top: 90%",
                    // end: "bottom: 10%",
                },
                ease: "power2.inOut",
                stagger: 0.1,
            }
        );
    }, []);

    return (
        <div className="flex flex-col w-full justify-center items-center pt-14">
            <div className="sm:w-[100%] md:w-[70%] sm:justify-center flex mb-10">
                <span className="title">What I've worked on:</span>
            </div>
            <div className="xs:flex-col md:flex sm:gap-1 lg:gap-4">
                <div className="work-card">
                    <Card image={work1} text="Vitaband Dashboard" link="https://www.behance.net/gallery/164691369/Vitaband-Dashboard" />
                </div>
                <div className="work-card">
                    <Card
                        image={work2}
                        text="Skillit Book a Demo Feature"
                        link="https://www.behance.net/gallery/178831025/Calendar-Feature-for-Skillit11"
                    />
                </div>
                <div className="work-card">
                    <Card image={work3} text="UNI-ADJ Web App" link="https://www.behance.net/gallery/157600641/UNI-ADJ-Website-Design-Proposal" />
                </div>
            </div>
        </div>
    );
};

export default UiWorks;
