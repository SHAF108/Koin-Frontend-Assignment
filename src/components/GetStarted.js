import React from 'react'

const GetStarted = () => {
  return (
    <section>
      <div className='bg-blue-500 my-4 md:hidden py-2 flex-col text-center rounded-2xl items-center h-fit top-[170px] ml-14 m-3 '>
            <img className='ml-[80px]' src='https://www.koinx.com/_next/static/media/CryptoGuide.555c0e7d.svg'/>
            <p className=' text-white text-xl font-bold'>Get Started with KoinX for FREE</p>
            <p className='text-lg text-center mx-6 my-8 text-white'>with our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports</p>
            <div className='flex items-center justify-center m-4'>
                <button className='  bg-white text-black py-3 px-3 w-fit flex items-center cursor-pointer text-[17px] font-semibold justify-center  rounded-2xl '><p>Get Started for FREE -{'>'}</p> </button>
            </div>
      </div>
    </section>
  )
}

export default GetStarted
