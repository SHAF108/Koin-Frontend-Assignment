import React from 'react'
import ProgressBar from './components/ProgressBar'
import ProgressbarHold from './components/ProgressbarHold'
import SellProgress from './components/SellProgress'
import KeyEvents from './components/KeyEvents'



// import SharesProgress from './SharesProgress'


const Sentiment = () => {
  return (
    <div className=' bg-white  md:ml-14 md:w-[61%]  md:m-2 rounded md:p-2 '>
        <div className='bg-white'>
            <h1 className='text-2xl font-semibold ml-5 p-3 my-1'>Sentiment</h1>
            <div className='flex bg-white'>
                <h2 className='text-xl font-semibold ml-6 pl-3 text-gray-500'>Key Events</h2>
                <span className='mt-2 text-gray-500 ml-1'><ion-icon name="information-circle"></ion-icon></span>
            </div>
            <KeyEvents/>
            <div className='pb-1'>
                <div className='flex'>
                <h1 className='text-2xl font-semibold text-gray-600 ml-5 pl-3'>Analyst Estimates</h1>
                <span className='mt-2 text-gray-500 ml-1'><ion-icon name="information-circle"></ion-icon></span>
                </div>
                
                <div className='flex ml-5 pl-3 m-4'>
                    <div className='   md:w-40 md:h-40 flex justify-center items-center rounded-full bg-green-200'>
                        <p className='after:content-[""] before:content-[""] before:p-8 after:p-8'>76%</p>                   
                    </div>
                    <div className='md:ml-8 p-3'>
                        <div className='p-2'>
                            <ProgressBar/>
                        </div> 
                        <div className='p-2'>
                            {/* <p>Hold</p> */}
                            <ProgressbarHold/>
                        </div> 
                        <div className='p-2'>
                            <SellProgress/>
                        </div>
                    </div> 
                </div>
             </div> 
        </div>
    </div>
  )
}

export default Sentiment
