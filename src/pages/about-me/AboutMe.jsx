import React from "react";
import { BsChevronDown } from "react-icons/bs";
import "./styles.css";

const AboutMe = () => {
  const responsivePosition = () => {
    return "md:top-10";
  };

  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="h-[100px] border-r border-solid-2 border-gray-900"></div>
        <div className="h-[100px]"></div>
      </div>
      <div className="flex items-center justify-center w-full">
        <span className="text-center w-[750px] mt-4 text-sm">
          Highly skilled and adaptable Software Engineer with{" "}
          <b>more than 1 year </b>
          of experience in both front-end and back-end development. Proficient
          in <b>JavaScript, ReactJS, Go, PostgreSQL, and DynamoDB.</b>
        </span>
      </div>
      <div className="grid grid-cols-2 mt-4">
        <div className="h-[200px] border-r border-solid-2 border-gray-900"></div>
        <div className="h-[200px]"></div>
      </div>
      <div className="flex items-center justify-center relative">
        <div className="absolute -top-3">
          <BsChevronDown size={"20px"} />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-8 ">
        <span className="text-lg mb-12">Hello I am</span>
        <div className="flex items-center justify-center">
          <span className={`firstname `}>JOHN PAUL</span>
        </div>
        <div className="flex items-center justify-center">
          <span className={`lastname`}>CERVANTES</span>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
