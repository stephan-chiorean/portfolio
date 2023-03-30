import { motion } from 'framer-motion';
import React from 'react';

import Skill from './Skill';
import {isMobile} from "react-device-detect";
import {useState, useEffect} from "react";

const skillSet=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

type Props = {};

function Skills({}: Props) {
  const [shouldRenderHeader, setShouldRenderHeader] = useState(false);
  
    useEffect(() => {
      setShouldRenderHeader(!isMobile);
    }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5}}
      className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
    >
      <h3 className='absolute top-10 uppercase tracking-[20px] text-technology-primary font-bold text-2xl'>
        Skills
      </h3>
      {shouldRenderHeader && <h3 className='absolute top-36 uppercase tracking-[5px] text-technology-primary font-bold text-lg'>
        frontend | backend | architecture
      </h3>}
      <div
        className='grid grid-cols-3 gap-1 mt-5 max-h-[520px] md:max-h-none overflow-y-scroll md:grid-cols-8 md:gap-5'
      >
        {skillSet.map((skill, index)=> (
            <Skill skill={index}/>
        ))}
      </div>
      {!shouldRenderHeader && <div className="text-technology-primary mt-10 uppercase tracking-[3px]">Scroll for more</div>}
      
    </motion.div>
  );
}

export default Skills;
