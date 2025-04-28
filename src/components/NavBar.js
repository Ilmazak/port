import React from 'react';
import logo from "../assets/Logo.png";
import {FaGithub} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import { motion } from "framer-motion"


function NavBar() {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-20' src={logo} alt="Logo-HasanMJMM" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <motion.a
             animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              Delay: [2]
            }}
            href='https://github.com/Ilmazak'><FaGithub /></motion.a> 
            <motion.a
             animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              Delay: [0.6]
            }}
            href='http://www.linkedin.com/in/ilma-jakariya-3b89b5262'><FaLinkedin /></motion.a>
            <motion.a
             animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              Delay: [0.8]
            }}
            href='https://www.instagram.com/ilma.zakariya?igsh=YnY0bHZxa3lyeGRk/'><FaInstagram /></motion.a> 
        </div>
    </nav>
  )
}

export default NavBar
