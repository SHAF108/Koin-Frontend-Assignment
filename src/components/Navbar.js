import React, { useState } from 'react'
import Button from './Button';

const Navbar = () => {
  let Links =[
    {name:"Crypto Taxes", link:"/"},
    {name:"Free Tools", link:"/"},
    {name:"Resource Center", link:"/"},
  ];
  
  let [open,setOpen] = useState(false);

  return (
    <section className='shadow-md w-full top-0 left-0'>
        <div className='md:flex items-center justify-between bg-white  md:px-10 px-7'>
          <div className='font-bold text-xl cursor-pointer flex items-center font-[Poppins]  text-indigo-500'>
          <img src="https://www.koinx.com/_next/static/media/Logo.5f2ad8d5.svg" />  
          </div>
          <div>
            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
              <ion-icon name={open ? 'close': 'menu'}></ion-icon>
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0 `}>
              
                  {
                    Links.map((link)=>(
                      <li key={link.name} className='md:ml-8 text-lg font-bold md:my-0 my-7'>
                        <a className='text-gray-800 hover:text-gray-400 duration-500' href={link.link}>{link.name}</a>
                      </li>
                    ))
                  }
              <Button>Get Started</Button>
            </ul>
          </div>
        </div> 
        
    </section>
  )
}

export default Navbar
