import React from 'react'

const Fundamentals = () => {
    let fundamentals =[
        {name:"Bitcoin", price:"$16,815"},
        {name:"24h Low / 24h High", price:"$$16,382.07/$16,874.12"},
        {name:"7d Low/7d High", price:"$16,382.07/$16,874.12"},
        {name:"Trading Volume", price:"$23,249,202,782"},
        {name:"Market Cap Rank", price:"#1"},

        {name:"Bitcoin", price:"$16,815"},
        {name:"Bitcoin", price:"$16,815"},
        {name:"Bitcoin", price:"$16,815"},
        {name:"Bitcoin", price:"$16,815"},
        

    ];
  return (
    <div className='mt-12'>
            <div className='flex items-center'>
                <h2 className='text-xl font-semibold'>Fundamentals</h2>
                <span className='mt-2 text-gray-500 ml-1'><ion-icon name="information-circle"></ion-icon></span>
            </div>
            <div className='md:flex  md:items-center md:justify-center'>
            <table class="table  mt-4 mr-12">
                <tbody>
                    <tr className='border-2 border-b-gray-500  border-collapse'>
                        <td className=' p-2 text-[#768396] font-normal text-[15px]'>Bitcoin Price</td>
                        <td className=' p-1 font-medium text-lg'>$16,815</td>
                    </tr>
                    <tr className='border-2 border-b-gray-500 border-collapse'>
                        <td className=' p-1 text-[#768396] font-normal text-[13px]'>24h Low / 24h High</td>
                        <td className=' p-2 font-medium text-lg'>$16,382.07</td>
                    
                    </tr>
                    <tr className='border-2 border-b-gray-500 border-collapse'>
                        <td className=' p-2 text-[#768396] font-normal text-[15px]'>7d Low/7d High</td>
                        <td className='p-2 font-medium text-lg'>$16,382.07</td>
                    </tr>
                    <tr className='border-2 border-b-gray-500 border-collapse'>
                        <td className=' p-2 text-[#768396] font-normal text-[15px]'>Trading Volume</td>
                        <td className='p-2 font-medium text-lg'>$16,382.07</td>
                    </tr>
                    <tr className='border-2 border-b-gray-500 border-collapse'>
                        <td className=' p-2 text-[#768396] font-normal text-[13px]'>Market Cap Rank</td>
                        <td className='p-2 font-medium text-lg'>#1</td>
                    </tr>
                </tbody>
            </table>
            <table class="table md:mt-4 md:ml-12">
                <tbody>
                    <tr className='border-2 border-b-gray-500 border-collapse'>
                        <td className=' p-2 text-[#768396] font-normal text-[15px]'>Market Cap</td>
                        <td className=' p-2 font-medium text-[15px]'>$323,507,290,047</td>
                    </tr>
                    <tr className='border-2 border-b-gray-500 border-collapse'>
                        <td className=' p-1 text-[#768396] font-normal text-[13px]'>Market Cap Dominance</td>
                        <td className=' p-2 font-medium text-[15px]'>38.343%</td>
                    
                    </tr>
                    <tr className='border-2 border-b-gray-500 border-collapse'>
                        <td className=' p-2 text-[#768396] font-normal text-[15px]'>Volume / Market Cap</td>
                        <td className='p-2 font-medium text-[15px]'>0.0718</td>
                    </tr>
                    <tr className='border-2 border-b-gray-500 border-collapse'>
                        <td className=' p-2 text-[#768396] font-normal text-[15px]'>All-Time High</td>
                        <td className='p-2 font-medium text-[15px]'>$69044.77 <span className='text-red-500 '>-75.6%</span></td>
                    </tr>
                    <tr className='border-2 border-b-gray-500 border-collapse'>
                        <td className=' p-2 text-[#768396] font-normal text-[15px]'>All-Time Low</td>
                        <td className='p-2 font-medium text-[15px]'>$67.81 <span className='text-green-500'>24729.31%</span></td>
                    </tr>
                </tbody>
            </table>
            </div>
    </div>
  )
}

export default Fundamentals
