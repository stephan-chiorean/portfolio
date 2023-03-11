import { motion } from 'framer-motion';
import React from 'react';

import Skill from './Skill';

const skillSet=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5}}
      className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
    >
      <h3 className='absolute top-10 uppercase tracking-[20px] text-slate-700 font-bold text-2xl'>
        Skills
      </h3>
      <h3 className='absolute top-36 uppercase tracking-[5px] text-slate-700 font-bold text-lg'>
        frontend | backend | architecture
      </h3>
      <div
        className='grid grid-cols-3 gap-1 max-h-[400px] mt-20 md:max-h-none overflow-y-scroll md:grid-cols-8 md:gap-5'
      >
        {skillSet.map((skill, index)=> (
            <Skill skill={index}/>
        ))}
      </div>
      
    </motion.div>
  );
}

export default Skills;
