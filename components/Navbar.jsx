import React, {useState, useEffect} from "react";
import Image from "next/image";
import ED from "../public/assets/ed.png";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {useRouter} from 'next/router';

const Navbar = () => {

const [nav, setNav] = useState(false);
const [shadow, setShadow] = useState(false);
const [navBackground, setNavBackground] = useState('#3d0e36');
const [linkColor, setLinkColor] = useState('#ffb300');
const router = useRouter();

{/*function that handles/toggle the menu using state*/}
const handleNav = () => {
    setNav(!nav)
};

useEffect(()=>{
  const handleShadow = () => {
    if(window.scrollY >= 90) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  }
  window.addEventListener('scroll', handleShadow);
},[])

useEffect(()=>{
  if(
    router.asPath === '/Danflix' ||
    router.asPath === '/Food' ||
    router.asPath === '/Veegan' ||
    router.asPath === '/Dasboard' 
  ) {
    setNavBackground('transparent')
    setLinkColor('#3d0e36')
  } else {
    setNavBackground('#3d0e36')
    setLinkColor('#ffb300')
  }
}, [router])

  return (
    <div style={{backgroundColor: `${navBackground}`}} className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href='/'>
        <Image src={ED} alt="/" width={90} height={70} />
        </Link>
        <div>
          <ul style={{color: `${linkColor}`}} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#content">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contacts
              </li>
            </Link>
          </ul>

          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/*Mobile menu overlay*/}
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        
        {/*Mobile menu*/}
        <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#3d0e36] p-10 ease-in duration-500' 
           : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href='/'>
              <Image src={ED} alt="/" width={80} height={60} />
              </Link>

              <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4 text[#ffb300]">
                Let's Collaborate and build something great..!
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={()=>setNav(false)} className="text-sm py-4">Home</li>
              </Link>
              <Link href="/#about">
                <li onClick={()=>setNav(false)} className="text-sm py-4">About</li>
              </Link>
              <Link href="/#skills">
                <li onClick={()=>setNav(false)} className="text-sm py-4">Skills</li>
              </Link>
              <Link href="/#projects">
                <li onClick={()=>setNav(false)} className="text-sm py-4">Projects</li>
              </Link>
              <Link href="/#content">
                <li onClick={()=>setNav(false)} className="text-sm py-4">Contacts</li>
              </Link>
            </ul>
            <div className="pt-39">
              <p className="uppercase tracking-widest text-[#5615e5]">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a href="https://github.com/emmacodec">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub />
              </div>
                </a>
              
              <a href="https://www.linkedin.com/in/daniel-emmanuel-924564236">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedin />
              </div>
              </a>
              
              <a href="https://wa.me/2348164060988">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaWhatsapp />
              </div>
              </a>
             
              <a href="https://danielemmanuel7553@gmail.com">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiOutlineMail />
              </div>
              </a>
              
              <a href="/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
              </a>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
