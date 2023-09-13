import React from 'react'
import Image from 'next/image';
import Bahamas from '../public/assets/Bahamas.png';
import {RiRadioButtonFill} from 'react-icons/ri';
import Link from 'next/link';

const Veegan = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>

        {/*overlay*/}
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'></div>
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={Bahamas} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Veegan Beaches</h2>
          <h3>React JS, Tailwind, JavaScript</h3>
        </div>
      </div>

      {/*container*/}
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p className='tracking-widest uppercase text-[#5651e5] text-xl'>Project</p>
          <h2>Overview</h2>
          <p>This web app was built using React JS and hosted on Netlify. Users are able to select their favorite
            holiday resort for friends, family and loved ones.
          </p>
          <a href='https://veegan.netlify.app'>
          <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>
          <a href='http://github.com/emmacodec/travel-app/'>
          <button className='px-8 py-2 mt-4'>Code</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> React</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Tailwind</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> JavaScript</p>
         </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  )
};

export default Veegan;
