import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Profile from '../assets/profile2.jpeg';
import Link from 'next/link';

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Stephan Chiorean",
      'Mentor',
      "Leader",
      'Student',
      'System Designer',
      'Solutions Architect',
      'Frontend',
      'Backend',
      'Infrastructure',
      'Curious',
      'Passionate',
      'Driven',
      'Fun',
      'Creative',
    ],
    loop: true,
    delaySpeed: 1300,
  });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-central overflow-hidden'>
      <BackgroundCircles />
      <div style={{ marginTop: '-50px', zIndex: 50 }}>
        <h2 className='text-[10px] md:text-sm uppercase text-slate-900 tracking-[8px] md:tracking-[15px]'>
          Software Engineer
        </h2>
        <img
          className='relative rounded-full h-40 w-40 mt-5 mx-auto object-cover'
          src={Profile.src}
          alt='profile'
        />
      </div>
      <h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold px-10 z-50'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor='black' />
      </h1>
      <div className="pt-5" style={{zIndex:"30"}}>
        <Link href="#about">
        <button className="heroButton">About</button>
        </Link>
        <Link href="#skills">
        <button className="heroButton">Skills</button>
        </Link>
        <Link href="#experience">
        <button className="heroButton">Experience</button>
        </Link>
        <Link href="#projects">
        <button className="heroButton">Projects</button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
