import React from "react";
import "./styles.css";
import { BsFillTelephoneFill, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Info = () => {
  return (
    <div
      className="grid grid-cols-2 pl-16 pr-16 "
      style={{ fontFamily: "Poppins" }}
    >
      <div className="flex justify-between flex-col pt-20 pb-20">
        <div>
          <span className="title">About Me</span>
          <div className="w-[450px] bio">
            I have a burning interest for film. My second option for a course to
            take in college was BA Film. My love for tech influenced my love for
            scifi movies.
          </div>
        </div>
        <div className="flex space-x-6">
          <span className="flex items-center">
            <BsFillTelephoneFill />{" "}
            <span className="ml-2 text-sm"> 09183252038</span>
          </span>
          <span className="flex items-center">
            <MdEmail />
            <span className="ml-2 text-sm"> johnpaulncervantes@gmail.com</span>
          </span>
          <span className="flex items-center">
            <BsLinkedin />
            <span className="ml-2 text-sm"> johnpaulncervantes</span>
          </span>
        </div>
      </div>
      <div className="pr-12 pl-32">
        <div className="border-b border-t border-black flex flex-col pt-12 pb-12">
          <span className="heading">Education</span>
          <div className="flex justify-between text-lg mt-4">
            <span>Bulacan State University</span>
            <span>2018-2022</span>
          </div>
          <span className="text-sm">BS Computer Engineering</span>
          <span className="text-sm font-light">President's Lister</span>
          <div className="flex justify-between text-lg mt-5">
            <span>Bulacan State University</span>
            <span>2018-2022</span>
          </div>
          <span className="text-sm">BS Computer Engineering</span>
          <span className="text-sm font-light">President's Lister</span>
        </div>
        <div className="border-b border-black flex flex-col pt-12 pb-12">
          <span>I am based on</span>
          <span className="heading">Hagonoy, Bulacan</span>
        </div>
        <div className=" border-black flex pt-12 pb-12">
          <span>an only child</span>
          <span className="ml-16">
            born on April 7, 2000. I'm an <b>Aries</b>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Info;
