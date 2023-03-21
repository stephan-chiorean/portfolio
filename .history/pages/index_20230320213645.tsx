import Head from 'next/head';
import { NextPage } from 'next';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { isMobile } from 'react-device-detect';
import { useState, useEffect } from 'react';

const Home: NextPage = () => {
  const [shouldRenderHeader, setShouldRenderHeader] = useState(false);

  useEffect(() => {
    setShouldRenderHeader(!isMobile);
  }, []);
  return (
    <div className='bg-[#23419D] bg-[url("../public/clouds.svg")] h-screen text-slate-700 snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-500/30 scrollbar-thumb-[#F7AB0A]'>
      <Head>
        <title>Stephan's Portfolio</title>
        <meta property='og:title' content='Stephan Chiorean' />
        <meta
          property='og:description'
          content='My Portfolio Website'
        />
        <meta property='og:image' content='https://imgur.com/kdPBCnx' />
        <meta property='og:url' content='http://stephantc.dev' />
      </Head>

      {shouldRenderHeader && <Header />}

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='experience' className='snap-center'>
        <Experience />
      </section>

      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      <section id='contact' className='snap-start'>
        <Contact />
      </section>
    </div>
  );
};
export default Home;
