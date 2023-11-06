import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import './styles.css'
const SideBar = (props) => {
    const {isSideBarOpen, setIsSideBarOpen} = props
  return (
    <div className='bg-black h-[1000px] xs:w-[40%] sm:w-[60%] md:w-[40%] lg:w-[40%] xl:w-[40%] w-[100%] z-10 absolute -left-10 top-0 p-10 pt-0'>
        <AiOutlineClose fill='white' size={"25px"} className='mt-5 cursor-pointer' onClick={() => setIsSideBarOpen(false)}/>
        <div className='flex flex-col text-white'>
          <span className='sidebar'>About Me</span>
          <span className='sidebar'>Experiences</span>
          <span className='sidebar'>Work</span>
        </div>
    </div>
  )
}

export default SideBar