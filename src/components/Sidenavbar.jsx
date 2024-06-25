import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineHome, AiOutlineMail } from 'react-icons/ai'
import { GrProjects , GrBook } from 'react-icons/gr';
import { LuFileSpreadsheet } from "react-icons/lu";
import { FcTwoSmartphones } from "react-icons/fc";
import { BsPerson } from 'react-icons/bs';
import { BiUpArrowAlt } from "react-icons/bi";
import { MdOutlineContactPage } from "react-icons/md";

const Sidenavbar=()=>{

    const[nav,setNav] = useState(false);

    const handlenav=()=>{
        setNav(!nav);
        console.log("State is changed");
    };

    return (
        <div>
            <AiOutlineMenu onClick={handlenav} className='absolute top-4 right-4 z-[99] md:hidden' size={35}/>
            {
                nav?(
                    <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                        <a onClick={handlenav} href='#home' className='w-[65%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 
                        shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150'>
                            <AiOutlineHome size={22}/>
                            <span className='pl-4'>Home</span>
                        </a>
                        <a onClick={handlenav} href='#education' className='w-[65%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 
                      shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150'>
                            <GrBook size={22}/>
                            <span className='pl-4'>Education</span>
                        </a>
                        <a onClick={handlenav} href='#projects' className='w-[65%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 
                        shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150'>
                            <GrProjects size={22}/>
                            <span className='pl-4'>Projects</span>
                        </a>
                        <a onClick={handlenav} href='https://nekes3bucket.s3.amazonaws.com/NEKELASH_IL_21CSR125.pdf' className='w-[65%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 
                        shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150'>
                            <LuFileSpreadsheet size={22}/>
                            <span className='pl-4'>Resume</span>
                        </a>
                        <a onClick={handlenav} href='#contact' className='w-[65%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 
                        shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150'>
                            <FcTwoSmartphones size={22}/>
                            <span className='pl-4'>Contact</span>
                        </a>
                    </div>
                ):
                ('')
            }

        <div className='md:block hidden fixed top-[25%] z-10'>
            <div className='flex flex-col'>
                <a href='#main'className='rounded-full shadow-lg bg-gray-100 
                shadow-gray-400 m-2 p-4 cursor-pointer 
                hover:scale-110 ease-in duration-300' title='Home'>
                    <AiOutlineHome size={20}/>
                </a>
                <a href='#education'className='rounded-full shadow-lg bg-gray-100 
                shadow-gray-400 m-2 p-4 cursor-pointer 
                hover:scale-110 ease-in duration-300' title='Education'>
                    <GrBook size={20}/>
                </a>
                <a href='#projects'className='rounded-full shadow-lg bg-gray-100 
                shadow-gray-400 m-2 p-4 cursor-pointer 
                hover:scale-110 ease-in duration-300' title='Projects'>
                    <GrProjects size={20}/>
                </a> 
                <a href='#contact'className='rounded-full shadow-lg bg-gray-100 
                shadow-gray-400 m-2 p-4 cursor-pointer 
                hover:scale-110 ease-in duration-300' title='Contact'>
                    <BsPerson size={20}/>
                </a>
                <a href='https://nekes3bucket.s3.amazonaws.com/NEKELASH_IL_21CSR125.pdf'className='rounded-full shadow-lg bg-gray-100 
                shadow-gray-400 m-2 p-4 cursor-pointer 
                hover:scale-110 ease-in duration-300' title='Resume'>
                    {/* <AiOutlineMail  size={20}/> */}
                    <MdOutlineContactPage size={20}/>
                </a>
                <a href='#main'className='rounded-full shadow-lg bg-gray-100 
                shadow-gray-400 m-2 p-4 cursor-pointer 
                hover:scale-110 ease-in duration-300' title='Go to top'>
                    {/* <AiOutlineMail  size={20}/> */}
                    <BiUpArrowAlt size={20}/>
                </a>
            </div>
        </div>
        </div>
    )
}
export default Sidenavbar