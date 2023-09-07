import React from 'react'
import Image from 'next/image';
import Logo from '../public/assets/logo.png'
import Link from 'next/link';
import{AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import {FaLinkedin, FaGithub, FaWhatsapp} from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Image src={Logo} alt="/" width={80} height={20} />
        <div>
            <ul className='hidden md:flex'>
                <Link href="/">
                    <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                </Link>
                <Link href="/">
                    <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                </Link>
                <Link href="/">
                    <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                </Link>
                <Link href="/">
                    <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                </Link>
                <Link href="/">
                    <li className='ml-10 text-sm uppercase hover:border-b'>Contacts</li>
                </Link>
            </ul>

            <div className='md:hidden'>
                <AiOutlineMenu size={25} />
            </div>
        </div>
      </div>

      {/*Mobile menu overlay*/}
      <div className='fixed left-0 top-0 w-full h-screen bg-black/70'>

        {/*Mobile menu*/}
        <div className='fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'>
            <div>
                <div className='flex w-full items-center justify-between'>
                    <Image src={Logo} alt='/' width={70} height={20} />
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                        <AiOutlineClose />
                    </div>
                </div>
                <div className='border-b border-gray-300 my-4'>
                    <p className='w-[85%] md:w-[90%] py-4'>Let's Collaborate and build something great..!</p>
                </div>
            </div>
            <div className='py-4 flex flex-col'>
                <ul className='uppercase'>
                    <Link href="/">
                        <li className='text-sm'>Home</li>
                    </Link>
                    <Link href="/">
                        <li className='text-sm'>About</li>
                    </Link>
                    <Link href="/">
                        <li className='text-sm'>Skills</li>
                    </Link>
                    <Link href="/">
                        <li className='text-sm'>Projects</li>
                    </Link>
                    <Link href="/">
                        <li className='text-sm'>Contacts</li>
                    </Link>
                </ul>
                <div className='pt-40'>
                    <p className='uppercase tracking-widest text-[#5615e5]'>Let's Connect</p>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaGithub />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaLinkedin />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaWhatsapp />
                    </div>
                    
                </div>
            </div>
        </div>
      </div>
    </div>
  )
};

export default Navbar;
