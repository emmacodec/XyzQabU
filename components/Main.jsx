import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase bg-gray-600 text-sm tracking-widest">
            LET'S BUILD SOMETHING GREAT TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Emmanuel</span>
          </h1>
          <h1 className="py-4 text-gray-700">A FRONT-END WEB DEVELOPER</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a proficient front end developer specializing in designing and
            building exceptional digital experience (web applications). I'm
            Focused on building responsive front-end web applications. Also
            learning some good backend stuff.
          </p>

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
        </div>
      </div>
    </div>
  );
};

export default Main;
