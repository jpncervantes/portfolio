import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const SideBar = (props) => {
    const {isSideBarOpen, setIsSideBarOpen} = props
  return (
    <div className='bg-black h-[1000px] xs:w-[40%] sm:w-[40%] md:w-[40%] lg:w-[40%] xl:w-[40%] w-[100%] z-10 absolute -left-10 top-0'>
        <AiOutlineClose fill='white' size={"25px"} className='mt-5 ml-10' onClick={() => setIsSideBarOpen(false)}/>
    </div>
  )
}

export default SideBar