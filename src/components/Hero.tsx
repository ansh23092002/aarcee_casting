
import React from 'react'

const Hero = () => {
  return (
   <div className='relative   '> 

    <video src="/assets/background.mp4"
    autoPlay
    loop
    playsInline
    muted
    className='w-full h-screen object-fill  min-md:object-cover'
   />

    <h1 className=' tracking-wide  absolute inset-0 text-white flex justify-center items-center font-bold max-sm:hidden md:text-5xl lg:text-7xl '> Welcome to AarCee casting </h1>
    </div>
  )
}

export default Hero
