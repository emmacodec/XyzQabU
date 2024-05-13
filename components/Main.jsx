import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center pt-20">
        <motion.div  
        initial="hidden" 
          whileInView='visible' 
          viewport={{once:true, amount:0.5}} 
          transition={{duration: 2}}
          variants={{hidden:{opacity: 0, x: -100}, visible:{opacity: 1, x: 0},}}
          >
          <p className="uppercase bg-purple-800 text-sm tracking-widest text-white">
            LET'S BUILD SOMETHING GREAT TOGETHER
          </p>
          <h1 className="py-4 text-yellow-700">
            Hi, I'm <span className="text-[#ffb300]">Emmanuel</span>
          </h1>
          <h1 className="py-4 text-white">A FULL-STACK WEB DEVELOPER</h1>
          <p className="py-4 text-white max-w-[70%] m-auto">
            I'm a proficient full-stack developer providing high-impact web and mobile app solutions for diverse industry and
            organization. Skilled in developing and testing multiple web and mobile-based applications incorporating a range of
            technologies. Passionate about learning and development with desire to apply skills to a larger development, eager
            to tackle more complex problems, and continue to find efficient ways to maximize user efficiency. I am looking
            for new challenges that allow me to continue growing professionally.
          </p>

          <a href="https://drive.google.com/file/d/1ymcpHZ0p7r7aS1RBnwgDVhowPkPrUzRh/view?usp=drive_link">
            <button className='px-8 py-2 mt-4 mr-8'>Resume</button>
          </a>

         

          {/*container surrounding icons*/}
          <div className="flex items-center justify-between max-w-[330px] mx-auto py-4">
            <a href="https://www.linkedin.com/in/daniel-emmanuel-924564236">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300">
                <FaLinkedin />
              </div>
            </a>
            <a href="https://github.com/emmacodec">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a href="https://danielemmanuel7553@gmail.com">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </a>
            <a href="/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300">
                <BsFillPersonFill />
              </div>
            </a>
            <a href="https://wa.me/2348164060988">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300">
                <FaWhatsapp />
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
