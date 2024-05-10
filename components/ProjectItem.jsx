import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectItem = ({title, backgroundImg, projectUrl}) => {
  return (
    <motion.div 
    initial="hidden" 
    whileInView='visible' 
    viewport={{once:true, amount:0.5}} 
    transition={{duration: 2}}
    variants={{hidden:{opacity: 0, x: -100}, visible:{opacity: 1, x: 0},}}
    className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl tracking-wider text-white text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">React JS</p>
        <Link href={projectUrl}>
          <p className="text-center p-3 rounded-lg bg-white text-white font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
