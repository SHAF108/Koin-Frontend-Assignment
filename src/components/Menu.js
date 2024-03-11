import React from 'react'
    
const Menu = () => {
    let menu = [
        {name: "Overview", link: "/"},
        {name: "Fundamentals", link: "/"},
        {name: "News Insight", link: "/"},
        {name: "Sentiments", link: "/"},
        {name: "Team", link: "/"},
        {name: "Technicals", link: "/"},
        {name: "Tokenomics", link: "/"}
        
      ];
  return (
    <div className='hidden md:block md:w-[61%] md:text-nowrap  md:ml-14  md:border-2 md:border-b-gray-500 '>
        <ul className='flex'>
            {
                menu.map((menu) => (
                    <li className='m-3  text-nowrap font-semibold' key={menu.name}><a href={menu.link}>{menu.name}</a></li>
                ))
            }
        </ul>
    </div>
  )
}

export default Menu
