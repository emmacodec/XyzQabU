import React from 'react'
import Image from 'next/image';
import Danflix from '../public/assets/Danflix.jpg';
import Dashboard from '../public/assets/dashboard.jpeg';
import Bahamas from '../public/assets/Bahamas.png';
import Link from 'next/link';

const Projects = () => {
  return (
    <div className='w-full'>
      
      {/*container*/}
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='font-bold text-xl tracking-widest text-[#5651e5] uppercase'>Projects</p>
        <h2 className='py-4'>What I've Built</h2>

        {/*container for project*/}
        <div className='grid md:grid-cols-2 gap-8'>

            {/*project component i did a little destructuring*/}
            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                <Image className='rounded-xl group-hover:opacity-10' src={Danflix} alt='/' />
                <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h3 className='text-2xl tracking-wider text-white text-center'>Danflix</h3>
                    <p className='pb-4 pt-2 text-white text-center'>React JS</p>
                    <Link href='https://emmyflix-59b75.web.app'>
                        <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
};

export default Projects;
