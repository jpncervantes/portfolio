import React, { useState } from "react";
import NavLink from "./components/NavLink";
import Brand from "../brand/Brand";
import SocialBadge from "../socials/SocialBadge";

const Navigation = () => {
  const [isSelected, setIsSelected] = useState("About Me");

  return (
    <div className="w-100 grid grid-cols-2 gap-1 mt-5">
      <div className="grid grid-cols-4 gap-1 border border-solid border-[#1F1F1F] rounded-full mr-44 h-[35px]">
        <Brand />
        <NavLink
          link={"About Me"}
          isSelected={isSelected}
          setIsSelected={() => setIsSelected("About Me")}
        />
        <NavLink
          link={"Experiences"}
          isSelected={isSelected}
          setIsSelected={() => setIsSelected("Experiences")}
        />
        <NavLink
          link={"Work"}
          isSelected={isSelected}
          setIsSelected={() => setIsSelected("Work")}
        />
      </div>
      <div className="grid grid-cols-4 gap-4 h-[40px]">
        <SocialBadge social={"LinkedIn"} />
        <SocialBadge social={"Facebook"} />
        <SocialBadge social={"GitHub"} />
        <SocialBadge social={"Linkedin"} />
      </div>
    </div>
  );
};

export default Navigation;
