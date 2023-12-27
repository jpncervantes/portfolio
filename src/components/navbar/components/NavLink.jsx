import React, { useEffect } from "react";

const NavLink = (props) => {
    const { link, setIsSelected, isSelected } = props;

    useEffect(() => {
        console.log("isSelected", isSelected);
    }, [isSelected]);

    const handleStyle = () => {
        if (isSelected === link) {
            console.log("isSelecsted", isSelected);
            return "selected-nav border-b-4 border-b-solid border-black";
        } else return "unselected-nav";
    };

    return (
        <div className={`flex items-center justify-center`}>
            <div className={`${handleStyle()}  h-full flex items-center`}>
                <span onClick={() => setIsSelected()} className={` cursor-pointer xs:text-xs sm:text-xs md:text-xs lg:text-xs xl:text-sm`}>
                    {link}
                </span>
            </div>
        </div>
    );
};

export default NavLink;
