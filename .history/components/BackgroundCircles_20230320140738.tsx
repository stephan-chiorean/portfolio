import { motion } from 'framer-motion';
import React from 'react';
type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <div className='relative flex justify-center items-center'>
      <motion.div
       initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 1.0],
      }}
      transition={{
        duration: 1.3,
      }} 
      className='rounded-full border-4 box-border border-[#F7AB0A] bg-white h-[650px] w-[650px] absolute mt-52 shadow-2xl' style={{boxShadow: '0px 0px 50px rgba(247, 171, 10, 1)' }}>
      </motion.div>
    </div>
  );
}

export default BackgroundCircles;
