import React from 'react'
import Image from 'next/image';
import To from '../public/assets/todo.jpeg';
import {RiRadioButtonFill} from 'react-icons/ri';
import Link from 'next/link';

const Todo = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>

        {/*overlay*/}
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'></div>
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={To} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2 text-[#ffb300]'>To-do App</h2>
          <h3>React JS, Tailwind, Firebase</h3>
        </div>
      </div>

      {/*container*/}
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p className='tracking-widest uppercase text-[#ffb300] text-xl'>Project</p>
          <h2 className='text-white'>Overview</h2>
          <p className='text-white'>This web app was built using React JS. Users are able to make a list or more of a reminder on their daily 
            routine i.e activities, events, tasks,etc. This is made possible with Firestore, check out my repo for further updates.
          </p>
          <a href=''>
          <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>
          <a href='http://github.com/emmacodec/xxaawest'>
          <button className='px-8 py-2 mt-4'>Code</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2 text-[#ffb300]'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-white py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> React</p>
              <p className='text-white py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Tailwind</p>
              <p className='text-white py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> JavaScript</p>
              <p className='text-white py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Firebase</p>
              <p className='text-white py-2 flex items-center'><RiRadioButtonFill className='pr-1 mr-1' /> Firestore</p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer text-[#ffb300]'>Back</p>
        </Link>
      </div>
    </div>
  )
};

export default Todo;
