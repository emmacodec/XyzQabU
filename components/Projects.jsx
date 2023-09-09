import React from 'react'
import Image from 'next/image';
import Danflix from '../public/assets/Danflix.jpg';
import Dashboard from '../public/assets/dashboard.jpeg';
import Bahamas from '../public/assets/Bahamas.png';
import Food from '../public/assets/Food.jpeg';
import Link from 'next/link';
import ProjectItem from './ProjectItem';

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
          <ProjectItem title='Danflix' backgroundImg={Danflix} projectUrl='https://emmyflix-59b75.web.app' />
          <ProjectItem title='Food' backgroundImg={Food} projectUrl='https://afam-confectionery.netlify.app' />
          <ProjectItem title='Bahamas' backgroundImg={Bahamas} projectUrl='https://veegan.netlify.app' />
          <ProjectItem title='Dashboard' backgroundImg={Dashboard} projectUrl='https://emmy-dan.netlify.app' />
        </div>
      </div>
    </div>
  )
};

export default Projects;
