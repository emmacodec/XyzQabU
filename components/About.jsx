import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>

      {/*Container*/}
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>

        {/*text-container*/}
        <div className='col-span-2'>
            <p className='uppercase tracking-widest text-xl text-[#ffb300] font-bold'>About</p>
            <h2 className='py-4 font-bold text-white'>Who I Am</h2>
            <p className='py-2 text-white'>I'm not your regular developer</p>
            <p className='text-white py-2'>I've spent the last 6 years as a professional laboratory technician ans a quality control analyst or officer.
                I've always had this great passion for technology and working with computers. In 2022 i took the bold step and started
                working with the following technologies: HTML, CSS to build my first static website. That was my paradigm shift in programming today.
                Astonished with how programming can be i dive into learning more. I started learning JavaScript and was excited with making
                website more responsive or interactive. And now i build great projects with firebase, React JS, and not restricted to That
                i'm learning new technologies as well.
            </p>
            <p className='py-2 text-yellow-600 underline cursor-pointer'>Check out some of my Projects..! </p>
        </div>

        {/*image-container*/}
        <div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-110 ease-in duration-300'>
                <img src='https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400' alt='/' className='rounded-xl' />
            </div>
        </div>
      </div>
    </div>
  )
};

export default About;
