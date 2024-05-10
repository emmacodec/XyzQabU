import React from 'react'
import Image from 'next/image';
import Pinge from '../public/assets/pinge.jpeg';
import {RiRadioButtonFill} from 'react-icons/ri';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Chat = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>

        {/*overlay*/}
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'></div>
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={Pinge} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2 text-white'>Chat App</h2>
          <h3 className='text-white'>React JS, Tailwind, Firebase</h3>
        </div>
      </div>

      {/*container*/}
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <motion.div 
        className='col-span-4'
        initial="hidden" 
        whileInView='visible' 
        viewport={{once:true, amount:0.5}} 
        transition={{duration: 2}}
        variants={{hidden:{opacity: 0, x: -100}, visible:{opacity: 1, x: 0},}}
        >
        
          <p className='tracking-widest uppercase text-[#ffb300] text-xl'>Project</p>
          <h2 className='text-white'>Overview</h2>
          <p className='text-white'>To-do App is a web application that employs the use of CRUD (create, read, update, delete) functionality for 
            persistence data storage. The CRUD programming helps to facilitate viewing, searching, and changing information
            by managing data from the database (Google cloud-Firebase). It’s a responsive, scalable and user friendly App, 
            that allows users keep track of all their daily routine or activities and marking all completed task at the end
            of the day. All tasks are created, saved, updated and most times deleted from the database (firestore).  
          </p>
          <a href=''>
          <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>
          <a href='http://github.com/emmacodec/azzubest'>
          <button className='px-8 py-2 mt-4'>Code</button>
          </a>
        </motion.div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2 text-[#ffb300]'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-white py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> React</p>
              <p className='text-white py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Tailwind</p>
              <p className='text-white py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> JavaScript</p>
              <p className='text-white py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Firebase</p>
              <p className='text-white py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> CRUD functionality / programming</p>
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

export default Chat;
