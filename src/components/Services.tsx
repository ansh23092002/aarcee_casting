import React from 'react'
import Image from 'next/image';

interface ServicesProps {
  srcimg: string; 
} 

const Services: React.FC<ServicesProps> = ({srcimg})=> {
  return (
    <section className='bg-gray-200 h-screen w-full grid place-items-center md:grid-cols-2'>
      <div className='  m-2 p-4  text-2xl  ' >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nostrum aliquam dolorum corporis, sequi dicta iure sit temporibus explicabo vitae repellat recusandae cupiditate itaque accusantium nam quasi ut adipisci fuga?</p>
      </div>
      <Image src={srcimg} alt="Service image" height={300} width={300}  className='border-2 rounded-2xl' />
    
    </section>
  )
}

export default Services
