import React, { useEffect } from "react";

const NavLink = (props) => {
  const { link, setIsSelected, isSelected } = props;

  useEffect(() => {
    console.log("isSelected", isSelected);
  }, [isSelected]);

  const handleStyle = () => {
    if (isSelected === link) {
      console.log("isSelecsted", isSelected);
      return "border-b-4 border-b-solid border-black";
    }
  };

  return (
    <div className={`flex items-center justify-center`}>
      <div className={`${handleStyle()} h-full flex items-center`}>
        <span
          onClick={() => setIsSelected()}
          className={`cursor-pointer pb-1 `}
        >
          {link}
        </span>
      </div>
    </div>
  );
};

export default NavLink;
