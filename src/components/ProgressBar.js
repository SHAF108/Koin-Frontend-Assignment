import React from 'react'
import "./ProgressBar.css";

const ProgressBar = () => {
  return (
    <>
    <div className='before:content-["Buy"] before:text-[#768396] before:mr-1 flex flex-row items-center'>
        {/* w-[8%] h-[10px] flex flex-row justify-start items-stretch rounded-[4px] overflow-hidden */}
        <div className='progressbar w-[100px] h-[10px] md:w-[195px] md:h-[10px] flex flex-row justify-start rounded-[4px] md:overflow-hidden'>
            <div className='  md:w-[75%]'/>
            {/* <span className='md:absolute md:left-[-96]'>Buy</span> */}
        </div>
        <div className=' w-[30px] md:ml-[10px] font-[montserrat] font-bold text-[15px]'>
            <p>75%</p>
            
        </div>
    </div>
    
    </>
    
    
  )
}

export default ProgressBar
