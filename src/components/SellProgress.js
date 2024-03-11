import React from 'react'
import "./ProgressBar.css";

const SellProgress = () => {
  return (
    <div className=' flex flex-row items-center before:content-["Sell"] before:text-[#768396] before:mr-5'>
        <div className='sell-progressbar w-[50px] h-[10px] flex flex-row justify-start items-stretch rounded-[4px] overflow-hidden'>
            <div className=' w-[16%]'/>
        </div>
        <div className='sell-progressbar-text-container'>
            <p>16</p>
            <p>%</p>
        </div>
    </div>
  )
}

export default SellProgress
