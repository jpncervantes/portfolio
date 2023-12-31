import React, { useEffect, useRef } from "react";
import "./styles.css";
import Arrow from "../../components/arrow";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
    const responsivePosition = () => {
        return "md:top-10";
    };

    const upperArrow = useRef(null);
    let arrowTL = gsap.timeline({ repeat: -1, repeatDelay: 2 });
    useEffect(() => {
        const el = upperArrow.current;
        arrowTL.to(el, { y: 2, duration: 0.3, repeat: 1, yoyoEase: true, ease: "power2.out" });
        gsap.to(".aboutme-name", {
            y: 80,
            scale: 1.2,
            opacity: 0,
            scrollTrigger: {
                trigger: ".aboutme-name",
                toggleActions: "play pause pause reverse",
                // markers: true,
                start: "bottom: 20%",
            },
        });
    }, []);

    return (
        <div>
            <div className="grid grid-cols-2" ref={upperArrow}>
                <div className="h-[100px] arrow right"></div>
                <div className="h-[100px] arrow left"></div>
            </div>
            <div className="flex items-center justify-center w-full">
                <span className="text-center w-[750px] mt-4 text-sm">
                    Highly skilled and adaptable Software Engineer with <b>more than 1 year </b>
                    of experience in both front-end and back-end development. Proficient in <b>JavaScript, ReactJS, Go, PostgreSQL, and DynamoDB.</b>
                </span>
            </div>
            <Arrow />

            <div className="flex flex-col items-center justify-center mt-8 ">
                <span className="text-lg mb-12">Hello I am</span>
                <div className="aboutme-name">
                    <div className="flex items-center justify-center">
                        <span className={`firstname `}>JOHN PAUL</span>
                    </div>
                    <div className="flex items-center justify-center">
                        <span className={`lastname`}>CERVANTES</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
