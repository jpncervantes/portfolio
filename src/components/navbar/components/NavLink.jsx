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

    const getNavLink = () => {
        switch (link) {
            case "About Me":
                return "#information";
            case "Experiences":
                return "#workexp";
            case "Work":
                return "#uiworks";
            case "Art":
                return "#artworks";
            default:
                return "";
        }
    };

    return (
        <div className={`flex items-center justify-center`}>
            <a href={getNavLink()} className="flex justify-center h-full">
                <div className={`${handleStyle()}  h-full flex items-center`}>
                    <span onClick={() => setIsSelected()} className={` cursor-pointer xs:text-xs sm:text-xs md:text-xs lg:text-xs xl:text-sm`}>
                        {link}
                    </span>
                </div>
            </a>
        </div>
    );
};

export default NavLink;
