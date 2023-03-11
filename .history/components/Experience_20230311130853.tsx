import { motion } from 'framer-motion';
import React from 'react';
import { isSafari } from 'react-device-detect';
import ExperienceCard from './ExperienceCard';
import { isMobile } from 'react-device-detect';
import { useEffect, useState } from 'react';

type Props = {};

const experiences = [0, 1, 2, 3];

function Experience({}: Props) {
  const [renderMobile, setRenderMobile] = useState(false);

  useEffect(() => {
    setRenderMobile(isMobile);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-0 md:px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-5 uppercase tracking-[20px] text-slate-700 font-bold text-2xl'>
        Experience
      </h3>
      {renderMobile ? (
        <div
          className='w-full flex space-x-10 overflow-x-scroll mt-10 mb-0 scrollbar scrollbar-track-gray-500/30 scrollbar-thumb-[#F7AB0A]'
          style={{ transform: 'translateZ(0)', zIndex: '10' }}
        >
          {experiences.map((experience) => {
            return <ExperienceCard experience={experience} />;
          })}
        </div>
      ) : isSafari ? (
        <div
          className='w-full flex space-x-40 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-500/30 scrollbar-thumb-[#F7AB0A]'
          style={{ zIndex: '10' }}
        >
          {experiences.map((experience) => {
            return <ExperienceCard experience={experience} />;
          })}
        </div>
      ) : (
        <div
          className='w-full flex space-x-40 overflow-x-scroll p-10 scrollbar scrollbar-track-gray-500/30 scrollbar-thumb-[#F7AB0A]'
          style={{ transform: 'translateZ(0)', zIndex: '10' }}
        >
          {experiences.map((experience) => {
            return <ExperienceCard experience={experience} />;
          })}
        </div>
      )}
    </motion.div>
  );
}

export default Experience;
