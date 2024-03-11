import React from 'react'
import Fundamentals from './Fundamentals'

const Performance = () => {
  return (
    <section className='md:p-2 md:ml-14 md:w-[61%] md:m-2 rounded text-2xl bg-whitebg-white   bg-white '>
      <div className='m-4'>
        <h1 className='font-semibold pt-3'>Performance</h1>
        <div className='mt-10 ml-[116px]'>
          <div>
            <div className='left-6 top-[580px] absolute md:mt-2 md:left-20 md:ml-3 text-sm text-[#768396] md:top-[750px]'>Today's Low</div>
            <div className='left-6 top-[700px] absolute text-sm md:left-[88px] md:ml-3 text-[#768396] md:top-[778px]'>46,930.22</div>

            <div className=' left-6 top-[530px] absolute md:mt-2 md:left-20 md:ml-3 text-sm text-[#768396] md:top-[820px]'>52W Low</div>
            <div className='left-6 top-[750px] absolute text-sm md:left-[88px] md:ml-3 text-[#768396] md:top-[850px]'>16,930.22</div>
          </div>
          <div className=''>
            <div className='w-[60%] bg-gradient-to-r from-red-500 via-yellow-300 to-green-600 rounded h-[7px] md:w-[80%] mb-12'></div>
            <div className='w-[55%] bg-gradient-to-r from-red-500 via-yellow-300 to-green-600 rounded h-[7px] md:w-[80%] '></div>
          </div>
          <div>
            <div className='text-sm text-[#768396] top-[680px] right-2 absolute md:top-[750px] md:right-[530px]'>Today's High</div>
            <div className='text-sm text-[#768396] top-[700px] right-2 absolute md:top-[768px] md:right-[530px]'>49,343.83</div>

            <div className='text-sm text-[#768396] right-2 top-[730px] absolute md:top-[820px] md:right-[530px]'>52W High</div>
            <div className='text-sm text-[#768396] right-2 top-[750px] absolute md:top-[840px] md:right-[530px]'>49,743.83</div>
          </div>
        </div>
        <Fundamentals/>
      </div>
    </section>
  )
}

export default Performance
