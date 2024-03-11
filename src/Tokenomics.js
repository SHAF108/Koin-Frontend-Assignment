import React from 'react'
import "./components/ProgressBar.css";


const Tokenomics = () => {
  return (
    <section className='bg-white  md:w-[61%] md:ml-14  md:m-2 rounded '>
      <div className='p-4'>
        <div>
            <h1 className='text-2xl font-semibold'>Tokenomics</h1>
        </div>
        <div className='my-4'>
            <h2 className='text-xl font-semibold'>Initial Distribution</h2>
        </div>
        <div className='flex items-center'>
        <div className='w-20 h-20 md:w-40 md:h-40 flex justify-center items-center rounded-full bg-blue-400'>
            <div className='w-16 h-16 md:w-32 md:h-32 bg-white rounded-full'>
                {/* <div className=' md:w-28 md:h-28 m-2 bg-yellow-400 rounded-full'> */}
                    {/* <div className='md:w-20 md:h-20 m-2   bg-white rounded-full'></div> */}
                {/* </div> */}
                <p className='after:content-[""] before:content-[""] before:p-8 after:p-8'></p>                   
            </div>
        </div>
            <div className='ml-4' >
                <span className='block p-2 before:content-[""] before:p-1 before:m-2  before:h-[1px] before:rounded-full before:bg-blue-500'>Crowdsale Investor:100%</span>
                <span className='p-2 before:content-[""] before:p-1 before:m-2 before:h-[1px] before:rounded-full before:bg-yellow-500'>Foundation:0%</span>
            </div>
        </div>
        <div className='my-4'>
            <p className='font-semibold text-[15px] leading-7'>Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque,Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisqueViverra diam suspendisse enim facilisi diam ut sed. Quam scelerisqueViverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque</p>
        </div>

      </div>
    </section>
  )
}

export default Tokenomics
