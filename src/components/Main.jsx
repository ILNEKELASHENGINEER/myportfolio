import React from 'react'
import { FaTwitter, FaLinkedin } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { ImYoutube2 } from "react-icons/im";
import { SiWhatsapp } from "react-icons/si";
import { GrGithub } from "react-icons/gr";


const Main = () => {
  return (
    <div id='main'>
        <img
        className='w-full h-screen object-cover object-left' 
        src='https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>

        <div className='w-full h-screen absolute top-0 left-0 bg-white/35'>
        
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center 
        lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-black mb-2'>Hey there!!</h1>
            <h1 className='sm:text-5xl text-4xl font-bold text-gray-900'>I'm Nekelash</h1>
            <h2
            className='flex sm:text-3xl text-3xl pt-4 text-gray-900 font-medium font-mono'>I
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "'m a Devops Engineer",
        1300, // wait 1s before replacing "Mice" with "Hamsters"
        "'m a cloud practitioner",
        1200,
        "'m a Front-End Developer",
        1000,
        "'m a Content Creator",
        1100,
        "'m a UI/UX Developer",
        1100,
        'Love Linux',
        1200
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em',paddingLeft:'5px', display: 'inline-block' }}
      repeat={Infinity}
    />

            </h2>
            <div className='flex justify-between pt-6 max-w-[280px] w-full'>
                <a href='https://www.linkedin.com/in/nekelash-prabhu-429153225/' target='_blank'><FaLinkedin size={30} className='cursor-pointer'/></a>
                <a href='https://github.com/ILNEKELASHENGINEER' target="_blank" className='hover:scale-110 ease-in duration-90'><GrGithub  size={30} className='cursor-pointer'/></a>
                <a href='https://www.youtube.com/@Nekes-ContainerizeCorner' target='_blank'><ImYoutube2 size={40} className='cursor-pointer'/></a>
                <a href='whatsapp://send?text=Hi!&phone=+918754863699'><SiWhatsapp size={30} className='cursor-pointer'/></a>
                
            </div>
        </div>

        </div>

    </div>
  )
}

export default Main