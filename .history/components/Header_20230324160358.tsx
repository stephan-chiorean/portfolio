import { motion } from 'framer-motion';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import dynamic from 'next/dynamic';
const Link = dynamic(() => import('next/link'), { ssr: false });
type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-4 flex items-start justify-between max-w-7xl mx-auto xl:items-center" style={{zIndex:'1'}}>
      <motion.div
      initial = {{
        x:-500,
        opacity: 0,
        scale: 0.5,
      }} 
      animate = {{
        x:0,
        opacity: 1,
        scale: 1,
      }}
      transition = {{
        duration: 2,
      }}
      className='flex flex-row items-center cursor-pointer'>
        <SocialIcon
          url='http://www.linkedin.com/in/stephan-chiorean'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='http://www.github.com/stephan-chiorean'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='http://www.instagram.com/stephan.tc/'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='http://twitter.com/ChioreanStevie'
          fgColor='gray'
          bgColor='transparent'
        />
      </motion.div>
      <Link href="#contact" passHref>
      <div
      className = "flex flex-row items-center text-gray-500 cursor-pointer">
        <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='gray'
          bgColor='transparent'
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-500">Get in Touch</p>
      </div>
      </Link>
    </header>
  );
}

export default Header;
