import React from 'react'

export default function Navbar() {
  return (
    <>
    <div className='main z-20 lg:flex md:flex flex-wrap justify-between items-center 
     px-4 bg-[#9A3B3B] py-4 shadow-md sticky top-0'>
        <div className='left flex items-center space-x-3'>
            <img className='w-10' src="https://cdn-icons-png.flaticon.com/512/3658/3658959.png" alt="img" />
            <h1 className='logo font-bold text-white'>MOVIE MANIA</h1>
        </div>
    
    <div className="right">
        <ul className='flex text-white justify-center space-x-4'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Contact</li>
            <li className='cursor-pointer'>Services</li>
        </ul>
    </div>
    </div>
    </>
  )
}
