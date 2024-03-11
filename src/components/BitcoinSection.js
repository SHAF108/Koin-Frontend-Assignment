import React from 'react'
import Button from './Button';

const BitcoinSection = () => {
    let time = [
        {time: "1H", link:"/"},
        {time: "24H", link:"/"},
        {time: "7D", link:"/"},
        {time: "1M", link:"/"},
        {time: "3M", link:"/"},
        {time: "6M", link:"/"},
        {time: "1Y", link:"/"},
        {time: "ALL", link:"/"},
      ]
  return (
    <section className='bg-white  md:w-[61%] md:ml-14  md:m-2 rounded ' >  
        <div>
            <div className='bg-white  md:w-[61%] md:ml-10  md:m-2 rounded '>
                <div className='md:flex md:items-center  hidden'>
                    <span className='bg-[#FFD700] text-white text-lg m-2 p-1 rounded-[50%] ml-2 md:text-xl md:ml-4 md:mt-4 '>
                        <ion-icon name="logo-bitcoin"></ion-icon>
                    </span>
                    <h1 className='font-bold after:content-["BTC"] mt-4 after:ml-2 after:text-slate-500 after:text-xs text-xl'>Bitcoin</h1>
                    <span className='bg-slate-600 ml-6 mt-4 text-xs rounded text-white p-2'>Rank #1</span>
                </div>
                <div className='flex items-center  ml-4 mt-6 s'>
                    <h1 className='font-bold text-2xl mr-10 '>$46,953.04</h1>
                    <span className=' text-sm text-green-500 bg-green-100 p-1 rounded'><ion-icon name="caret-up-outline"></ion-icon> 2.51%</span>
                    <span className='text-sm text-slate-500 ml-4'>(24H)</span>
                </div>
                <div className='text-sm font-semibold ml-4 border mr-4 border-white border-b-gray-300 pb-4'>$47560.74</div>
                
                <div className='mt-4 ml-2 mr-8 md:flex md:justify-between'>
                    <p className='font-bold text-sm '>Bitcoin Price Chart (USD)</p>
                    <ul className='flex items-center'>
                        {
                            time.map((time)=>(
                                <li key={time.time}><a className='text-xs text-gray-400 m-1' href={time.link}>{time.time}</a></li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <img src="https://cdn2.etrade.net/1/23013014080.0/aempros/content/dam/etrade/retail/en_US/images/knowledge/library/cryptocurrency/2023-crypto-02b.jpg" width={700} height={100} />
                </div>
            </div>
            <div className='hidden md:block md:absolute md:right-10 md:top-[86px] md:left-[66%] md:mt-8 md:bg-blue-500 rounded mb-4'>
                
                    <div className='px-12 py-2 flex-col text-center rounded-2xl items-center h-fit top-[170px]'>
                        <p className=' flex justify-center text-xl font-semibold text-white mt-4'>Get Started with KoinX</p>
                        <p className=' flex justify-center text-xl font-semibold text-white'>for free</p>
                        <p className='text-[13px] text-center mx-2 my-4 text-white'>with our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports</p>
                        <img className='ml-16' src='https://www.koinx.com/_next/static/media/CryptoGuide.555c0e7d.svg'/>
                        <div className='flex items-center justify-center m-4'>
                            <button className='  bg-white font-semibold text-black py-2 px-6 w-fit flex items-center cursor-pointer text-[15px] justify-center  rounded-lg gap-4'><p>Get Started for FREE -{'>'}</p> </button>
                        </div>
                    </div>
            </div>
            <div className='hidden md:block md:absolute md:right-10 md:top-[585px] md:rounded md:left-[66%] md:bg-white md:font-bold md:font-sans md:p-4'>
                <h1 className='text-xl mb-4'>
                    Trending Coins(24h)
                </h1>
                <div className='flex items-center'>
                    <span className='bg-blue-700 rounded-[100%] text-white text-xl p-1 m-1'><ion-icon name="diamond-outline"></ion-icon></span>
                    <h3 className='font-semibold  after:content-["8.21%"] after:text-green-500 after:bg-green-200 after:rounded after:p-1 after:pl-6 after:ml-[165px]'>Ethereum(ETH)</h3>
                    <span className='text-green-500 ml-[-65px]'><ion-icon name="caret-up-outline"></ion-icon></span>
                </div>
                <div className='flex items-center'>
                    <span className='bg-[#FFD700] rounded-[100%] text-white text-xl p-1 m-1'><ion-icon name="logo-bitcoin"></ion-icon></span>
                    <h3 className='font-semibold after:content-["5.26%"] after:text-green-500 after:bg-green-200 after:rounded after:p-1 after:pl-6 after:ml-[185px]'>Bitcoin(BTC)</h3>
                    <span className='text-green-500 ml-[-65px]'><ion-icon name="caret-up-outline"></ion-icon></span>
                </div>
                <div className='flex items-center'>
                    <span className='bg-violet-700 rotate-45 text-white text-xl p-1 m-1 rounded-[100%]'><ion-icon name="infinite-outline"></ion-icon></span>
                    <h3 className='font-semibold after:content-["4.32%"] after:text-green-500 after:bg-green-200 after:rounded after:p-1 after:pl-6 after:ml-[156px]'>Polygon(MATIC)</h3>
                    <span className='text-green-500 ml-[-65px]'><ion-icon name="caret-up-outline"></ion-icon></span>
                </div>
            </div>
        </div>
        
        
    </section>
    
  )
}

export default BitcoinSection
