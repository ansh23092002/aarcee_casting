import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between  items-center p-4  top-0  z-10 w-full  fixed text-white backdrop-blur-2xl'> 
        <h1 className='font-bold text-2xl'>Aarcee</h1>
        <ul className='flex gap-4'>
            <li>services</li>
            <li>About us </li>
            <li>contect us</li>
        </ul>
    </div>
  )
}

export default Navbar
