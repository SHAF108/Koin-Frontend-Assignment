import React from 'react'

const TrendingCoins = () => {
  return (
    <section>
      <div className='bg-white font-bold font-sans p-4 md:hidden'>
                <h1 className='text-2xl mb-4'>
                    Trending Coins(24h)
                </h1>
                <div className='flex items-center'>
                    <span className='bg-blue-700 rounded-[100%] text-white text-xl p-1 m-1'><ion-icon name="diamond-outline"></ion-icon></span>
                    <h3 className='font-semibold  after:content-["8.21%"] after:text-green-500 after:bg-green-200 after:rounded after:p-1 after:pl-6 after:ml-[105px]'>Ethereum(ETH)</h3>
                    <span className='text-green-500 ml-[-65px]'><ion-icon name="caret-up-outline"></ion-icon></span>
                </div>
                <div className='flex items-center'>
                    <span className='bg-[#FFD700] rounded-[100%] text-white text-xl p-1 m-1'><ion-icon name="logo-bitcoin"></ion-icon></span>
                    <h3 className='font-semibold after:content-["5.26%"] after:text-green-500 after:bg-green-200 after:rounded after:p-1 after:pl-6 after:ml-[123px]'>Bitcoin(BTC)</h3>
                    <span className='text-green-500 ml-[-65px]'><ion-icon name="caret-up-outline"></ion-icon></span>
                </div>
                <div className='flex items-center'>
                    <span className='bg-violet-700 rotate-45 text-white text-xl p-1 m-1 rounded-[100%]'><ion-icon name="infinite-outline"></ion-icon></span>
                    <h3 className='font-semibold after:content-["4.32%"] after:text-green-500 after:bg-green-200 after:rounded after:p-1 after:pl-6 after:ml-[96px]'>Polygon(MATIC)</h3>
                    <span className='text-green-500 ml-[-65px]'><ion-icon name="caret-up-outline"></ion-icon></span>
                </div>
        </div>
    </section>
  )
}

export default TrendingCoins
