import React from 'react'

const CryptoCurrencies = () => {
  return (
    <div>
        <p className=' pl-5 md:ml-10  pt-3 text-gray-500 text-sm'>Cryptocurrencies  <span className='ml-1 font-semibold text-black before:content-[">>"] before:text-gray-400 before:p-1'>Bitcoin</span></p>
        <div className='flex items-center md:hidden lg:hidden xl:hidden 2xl:hidden'>
        <span className='bg-orange-500 text-white text-lg m-2 p-1 rounded-[50%] ml-2 md:text-xl md:ml-4 md:mt-6 '>
            <ion-icon name="logo-bitcoin"></ion-icon>
        </span>
        <h1 className='font-bold after:content-["BTC"] mt-4 after:ml-2 after:text-slate-500 after:text-xs text-xl'>Bitcoin</h1>
        <span className='bg-slate-600 ml-6 mt-4 text-xs rounded text-white p-2'>Rank #1</span>
        </div>
    </div>
  )
}

export default CryptoCurrencies
