import React from 'react'
import Image from 'next/image';
import Danflix from '../public/assets/Danflix.jpg';
import Dashboard from '../public/assets/coin.jpeg';
import Bahamas from '../public/assets/brain.jpeg';
import Food from '../public/assets/Food.jpeg';
import Todo from '../public/assets/todo.jpeg';
import Pinge from '../public/assets/pinge.jpeg';
import Link from 'next/link';
import ProjectItem from './ProjectItem';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      
      {/*container*/}
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='font-bold text-xl tracking-widest text-[#5651e5] uppercase'>Projects</p>
        <h2 className='py-4'>What I've Built</h2>

        {/*container for project*/}
        
        <motion.div 
        className='grid md:grid-cols-2 gap-8'
        initial="hidden" 
        whileInView='visible' 
        viewport={{once:true, amount:0.5}} 
        transition={{duration: 2}}
        variants={{hidden:{opacity: 0, x: -100}, visible:{opacity: 1, x: 0},}}
        >
        

          {/*project component i did a little destructuring*/}
          <ProjectItem title='Todo' backgroundImg={Todo} projectUrl='/Todo' />
          <ProjectItem title='Chat' backgroundImg={Pinge} projectUrl='/Chat' />
          <ProjectItem title='Danflix' backgroundImg={Danflix} projectUrl='/Danflix' />
          <ProjectItem title='Food' backgroundImg={Food} projectUrl='/Food' />
          <ProjectItem title='Quiz App' backgroundImg={Bahamas} projectUrl='/Veegan' />
          <ProjectItem title='Dashboard' backgroundImg={Dashboard} projectUrl='/Dasboard' />
        </motion.div>
      </div>
    </div>
  )
};

export default Projects;
