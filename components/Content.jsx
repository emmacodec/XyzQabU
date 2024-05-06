import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Content = () => {
  return (
    <div id="content" className="w-full lg:h-screen">
      {/*container*/}
      <div className="max-w-[]1240px] m-auto px-2 py-16 w-full">
        <p className="font-bold uppercase text-[#5651e5] text-xl tracking-widest">
          Contact
        </p>
        <h2 className="py-4 font-bold">Get in Touch</h2>

        {/*grid-container*/}
        <div className="grid lg:grid-cols-5 gap-8">
          {/*left-container*/}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  src="https://images.pexels.com/photos/3197390/pexels-photo-3197390.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="/"
                  className="rounded-xl hover:scale-110 ease-in duration-300"
                />
              </div>
              <div>
                <h2 className="py-2">Emmanuel Daniel</h2>
                <p className="text-gray-500 font-bold">Full-stack Developer</p>
                <p className="py-4 text-gray-600">
                  I am available for full-time, freelance, internship positions.
                  Contact me...!
                </p>
              </div>

              {/*icon*/}
              <div>
                <p className="uppercase pt-8 text-[#5651e5] flex items-center justify-center tracking-widest text-xl">
                  Connect with Me
                </p>
                <div className="flex items-center justify-between py-4">
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

          {/*right-container*/}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">

              {/*form-container*/}
              <form method="POST" action="https://getform.io/f/e2a9bd99-3555-4d33-a1bf-91b4c7ee0649">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="text-sm uppercase py-2">Name</label>
                    <input className="rounded-lg border-2 p-3 flex border-gray-300" type="text" name="name" />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm uppercase py-2">Phone Number</label>
                    <input className="rounded-lg border-2 p-3 flex border-gray-300" type="text" name="text" />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="text-sm uppercase py-2">E-mail</label>
                  <input className="rounded-lg border-2 p-3 flex border-gray-300" type="email" name="email" />
                </div>
                <div className="flex flex-col py-2">
                  <label className="text-sm uppercase py-2">Subject</label>
                  <input className="rounded-lg border-2 p-3 flex border-gray-300" type="text" name="text" />
                </div>
                <div className="flex flex-col py-2">
                  <label className="text-sm uppercase py-2">Message</label>
                  <textarea className="border-2 rounded-lg p-3 border-gray-300" rows={10} name="text"></textarea>
                </div>
                <button className="w-full p-3 text-gray-200 mt-4">Submit Message</button>
              </form>
            </div>
          </div>
        </div>

        {/*Scroll-To-Top*/}
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp size={30} className="text-[#5651e5]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Content;
