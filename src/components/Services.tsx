import React from 'react'
import Image from 'next/image';

const Services = () => {
  return (
    <section className='bg-yellow-700 h-screen w-full grid place-items-center md:grid-cols-2'>
      <div className='  m-2 p-4  text-2xl text-white ' >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nostrum aliquam dolorum corporis, sequi dicta iure sit temporibus explicabo vitae repellat recusandae cupiditate itaque accusantium nam quasi ut adipisci fuga?</p>
      </div>
      <Image src="/assets/image.png" alt="Service image" height={300} width={300}  className='border-2 rounded-2xl' />
    
    </section>
  )
}

export default Services
