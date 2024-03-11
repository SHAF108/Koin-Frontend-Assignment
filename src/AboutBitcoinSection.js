import React from 'react'

const AboutBitcoinSection = () => {
  return (
    <section className='bg-white rounded md:w-[61%] md:ml-14'>
        <div className='p-5 '>
            <div>
                <h1 className='text-2xl font-semibold'>About Bitcoin</h1>
            </div>
            <div>
                <h2 className='text-xl font-semibold mt-4'>what is Bitcoin</h2>
                <div className='py-3'>
                    <p className='font-medium text-lg text-[#768396] '>Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of $19.14 8. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.</p>
                </div> <hr/>
            </div>
            <div>
                <h3 className='text-xl font-bold my-4'>Lorem ipsum dolor sit amet</h3>
                <p className='font-medium'>
                    Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque
                    fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed.
                    Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
                </p>
                <p className='mt-4 font-medium'>
                    Diam praesent massa dapibus magna aliquam a dictumst volutpat. 
                    Egestas vitae pellentesque auctor amet. 
                    Nunc sagittis libero adipiscing cursus felis pellentesque interdum. 
                    Odio cursus phasellus velit in senectus enim dui. 
                    Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.
                </p>
                <p className='mt-4 font-medium'>
                    Fermentum hendrerit imperdiet nulla viverra faucibus. 
                    Sit aliquam massa vel convallis duis ac. 
                    Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. 
                    Fermentum potenti iaculis lacinia congue ipsum fames amet dui. 
                    Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
                </p>
                <hr className='my-4'/>
            </div>
            <div>
                <h2 className='text-2xl font-semibold'>Already Holding Bitcoin</h2>
                <div className='md:flex my-4'>
                <div className='flex bg-gradient-to-r from-green-300 via-blue-300 to-blue-500   m-2 rounded'>
                    <div className='w-36 rounded m-3 '>
                        <img className=' rounded' src='https://www.koinx.com/_next/static/media/CryptoGuide.555c0e7d.svg'/>
                    </div>
                    <div className='my-3 p-2 text-start'>
                        <span className='font-bold text-white text-xl'>Calculate your Profit</span>
                        <div className=''>
                            <button className='  bg-white text-black  p-2 my-3 font-semibold rounded '><p>Check Now -{'>'}</p> </button>
                        </div>
                        
                    </div>
                </div>
                <div className='flex bg-gradient-to-r from-orange-400 via-orange-300 to-red-500 m-2 rounded'>
                    <div className='w-36 rounded  m-3'>
                        <img className=' roundeds' src='https://www.koinx.com/_next/static/media/CryptoGuide.555c0e7d.svg'/>
                    </div>
                    <div className='my-3 p-2 text-start'>
                        <span className='font-bold text-white text-xl'>Calculate your tax liability</span>
                        <div className=''>
                            <button className='  bg-white text-black p-2 my-3 font-semibold  rounded '><p>Check Now -{'>'}</p> </button>
                        </div>
                        
                    </div>
                </div>
                </div>
                
            </div>
        </div>
        
        
    </section>
  )
}

export default AboutBitcoinSection
