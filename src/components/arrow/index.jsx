import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { BsChevronDown } from "react-icons/bs";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Arrow = () => {
    const arrowRef = useRef(null);
    let arrowTL = gsap.timeline({ repeat: -1, repeatDelay: 2 });
    useEffect(() => {
        const el = arrowRef.current;

        arrowTL.to(el, { y: 5, duration: 0.3, repeat: 1, yoyoEase: true, ease: "power2.out" });
    }, []);

    return (
        <div className="flex flex-col items-center" ref={arrowRef}>
            <div className="grid grid-cols-2 mt-4">
                <div className="h-[200px] border-r  border-gray-900"></div>
                <div className="h-[200px] border-l  border-gray-900"></div>
            </div>
            <div className="flex items-center justify-center relative">
                <div className="absolute -top-[16px]">
                    <BsChevronDown size={"24px"} stroke={"100px"} />
                </div>
            </div>
        </div>
    );
};

export default Arrow;
