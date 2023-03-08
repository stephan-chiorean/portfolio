import { motion } from 'framer-motion';
import React from 'react';
import Profile from '../assets/about.jpeg';
import { isSafari } from 'react-device-detect';
import resume from '../assets/portfolioResume.pdf';

type Props = {};

function About({}: Props) {
  const shouldAnimate = isSafari;

  return (
    <div className='flex flex-col text-center md:text-left md:flex-row relative h-screen max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-10 uppercase tracking-[20px] text-slate-700 font-bold text-2xl'>
        About
      </h3>
      <motion.img
        initial={shouldAnimate ? { x: -200, opacity: 0 } : {}}
        transition={shouldAnimate ? { duration: 1.4 } : {}}
        whileInView={shouldAnimate ? { x: 0, opacity: 1 } : {}}
        viewport={{
          once: true,
        }}
        className='-mb-20 md:mb-0 flex-shrink-0 h-56 w-56 object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        src={Profile.src}
        alt=''
      />
      <motion.div
        initial={shouldAnimate ? { x: 200, opacity: 0 } : {}}
        whileInView={shouldAnimate ? { x: 0, opacity: 1 } : {}}
        viewport={{
          once: true,
        }}
        transition={shouldAnimate ? { duration: 1.4 } : {}}
        className='space-y-10 px-0 md:px-10'
      >
        <p className='text-base'>
          I love coding. Done right, it is much like art:{' '}
          <span className='text-lg text-black underline decoration-[#F7AB0A] font-bold'>Beautiful</span>.{' '}
          <span className='text-lg text-black underline decoration-[#F7AB0A] font-bold'>Elegant</span>.{' '}
          <span className='text-lg text-black underline decoration-[#F7AB0A] font-bold'>Inspiring</span>.
        </p>
        <p>
          I have been engineering software applications for 6 years. My expertise lies in building scalable, reliable, and maintainable applications in fast-paced, high energy environments. I combine sophisticated software technology with business insights to create and deliver effective products, and I love working on projects
          that I believe can change the world.
        </p>
        <a href={resume} download>
          <button className='bg-[#F7AB0A] text-black py-2 px-4 rounded-md mt-4 hover:scale-110 transition duration-100 ease-in-out'>
            Download Resume
          </button>
        </a>
      </motion.div>
    </div>
  );
}

export default About;
