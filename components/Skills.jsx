import React from 'react'
import Image from 'next/image';
import Aws from '../public/assets/aws.png';
import CSS from '../public/assets/css.png';
import Firebase from '../public/assets/firebase.png';
import Github from '../public/assets/github.png';
import Hmtl from '../public/assets/html.png';
import JavaScript from '../public/assets/javascript.png';
import MongoDB from '../public/assets/mongoDB.png';
import react from '../public/assets/react.png';
import Realestate from '../public/assets/realestate.png';
import Tailwind from '../public/assets/tailwind.png'; 


const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      
      {/*container*/}
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5] font-bold'>Skills</p>
        <h2 className='py-4 font-bold'>What I Can Do</h2>

        {/*Grid-container*/}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

            {/*image-container*/}
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={Aws} alt='/' width={64} height={64} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Amazon Web Service</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={CSS} alt='/' width={64} height={64} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>CSS</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={Firebase} alt='/' width={64} height={64} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>FIREBASE</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={Github} alt='/' width={64} height={64} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>GitHub</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={Hmtl} alt='/' width={64} height={64} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>HTML</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={JavaScript} alt='/' width={64} height={64} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>JAVASCRIPT</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={MongoDB} alt='/' width={64} height={64} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>MongoDB</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={react} alt='/' width={64} height={64} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>REACT</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={Realestate} alt='/' width={64} height={64} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>HOUSING ESTATE</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={Tailwind} alt='/' width={64} height={64} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>TAILWIND</h3>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
};

export default Skills;
