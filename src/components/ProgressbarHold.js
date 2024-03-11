import "./ProgressBar.css";
import React from 'react'

const ProgressbarHold = () => {
  return (
      <div className=' flex flex-row items-center before:content-["Hold"] before:left-10 before:text-[#768396] before:mr-3'>
        <div className='progressbar-hold w-[25px] md:w-[8%] h-[10px] md:flex md:flex-row md:justify-start md:items-stretch rounded-[4px] overflow-hidden'>
            <div className=' w-[8%] '/>
        </div>
        <div className=' w-[30px] ml-[10px] flex flex-row font-[montserrat] font-bold text-[15px]'>
            <p>8%</p>
        </div>
    </div>
  )
}

export default ProgressbarHold
