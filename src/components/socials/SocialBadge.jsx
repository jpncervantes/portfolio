import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsArrowUpRight, BsFacebook, BsGithub } from "react-icons/bs";
const SocialBadge = (props) => {
  const { social } = props;

  const handleSocialIcon = (social) => {
    switch (social) {
      case "LinkedIn":
        return <AiFillLinkedin className="mr-8" size={23} />;
      case "Facebook":
        return <BsFacebook className="mr-8" size={23} />;
      case "GitHub":
        return <AiFillGithub className="mr-8" size={23} />;
      default:
        return <></>;
    }
  };

  return (
    <div className="col-span-1 bg-[#1F1F1F] rounded-full text-white flex items-center justify-center relative h-[35px]">
      {handleSocialIcon(social)}
      <span className="mr-8">{social}</span>
      <BsArrowUpRight className="ml-8 absolute top-2 right-4" size={15} />
    </div>
  );
};

export default SocialBadge;
