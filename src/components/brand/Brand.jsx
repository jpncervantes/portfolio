import React from "react"
import "./styles.css"

const Brand = () => {
    return (
        <>
            <div className="hidden md:flex lg:flex xl:flex h-full w-full">
                <div className="flex items-center justify-center bg-[#1F1F1F] rounded-full m-[3px] p-0 relative w-full">
                    <span className="brand ">JPNC</span>
                </div>
            </div>
            <div className="xl:hidden lg:hidden md:hidden flex h-full w-full items-center justify-center">
                <div className="flex items-center justify-center bg-[#1F1F1F] rounded-full m-[3px] p-0 relative w-full xs:w-[50%] sm:w-[50%] h-full">
                    <span className="brand ">JPNC</span>
                </div>
            </div>
        </>
    )
}

export default Brand
