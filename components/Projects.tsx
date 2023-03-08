import { motion } from 'framer-motion';
import React from 'react';
import airbnb from '../assets/projects/airbnb.png';
import nft from '../assets/projects/nft.png';
import verified from '../assets/projects/verifiedvoices.png';
import pitchit from '../assets/projects/pitchit.png';
import fleetman from '../assets/projects/fleetman.png';
import TypeScriptPhoto from '../assets/tech/typescript.png';
import MapBoxPhoto from '../assets/tech/mapbox.png';
import NextPhoto from '../assets/tech/next.png';
import TailwindPhoto from '../assets/tech/tailwindcss.png';
import ReactPhoto from '../assets/tech/react.png';
import ThirdWebPhoto from '../assets/tech/thirdweb.png';
import MetaMaskPhoto from '../assets/tech/metamask.png';
import GraphQlPhoto from '../assets/tech/graphql.png';
import PostgresPhoto from '../assets/tech/postgres.png';
import NodePhoto from '../assets/tech/node.png';
import ExpressPhoto from '../assets/tech/express.png';
import JWTPhoto from '../assets/tech/jwt.png';
import JavaPhoto from '../assets/tech/java.png';
import SpringPhoto from '../assets/tech/spring.png';
import KubePhoto from '../assets/tech/kube.png';
import AWSPhoto from '../assets/tech/aws.png';
import KafkaPhoto from '../assets/tech/kafka.png';
import ElasticPhoto from '../assets/tech/elastic.png';
import KibanaPhoto from '../assets/tech/kibana.png';

const projectos = [airbnb, nft, verified, pitchit, fleetman];
// How to build a beautiful Date and Calendar Functionality where you can book a listing just like Airbnb!
// 👉 How to build a Search Functionality that instantly displays all the listings with the speed of Next.js!
// 👉 How to use Tailwind CSS to build a beautiful carasoul, loading bars and lots of of good UI / UX design implementations!
// 👉 How to use Mapbox to display the exact location of all the listings
const stacks = [[TypeScriptPhoto, MapBoxPhoto, NextPhoto, TailwindPhoto], [TypeScriptPhoto, ReactPhoto, TailwindPhoto, ThirdWebPhoto, MetaMaskPhoto],[GraphQlPhoto, TypeScriptPhoto, NextPhoto, TailwindPhoto, ReactPhoto, PostgresPhoto],[NodePhoto, ExpressPhoto, ReactPhoto, PostgresPhoto, JWTPhoto],[JavaPhoto, SpringPhoto, KubePhoto, AWSPhoto, KafkaPhoto, ElasticPhoto, KibanaPhoto]];

const names=['Airbnb Clone','NFTDrop','Verified Voices','Pitch-It','MyDelivery'];

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex overflow-hidden text-left md:flex-row max-x-full justify-evenly mx-auto items-center z-0'
    >
      <h3 className='absolute top-5 uppercase tracking-[20px] text-slate-700 font-bold text-2xl'>
        Projects
      </h3>
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-w-8 scrollbar-track-gray-500/30 scrollbar-thumb-[#F7AB0A]'>
        {projects.map((project, i) => (
          <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <img
              src={projectos[i].src}
              alt=''
              className='h-80 w-160 object-cover'
            />
            <div className='space-y-10 px-10 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center text-black'>
                {names[i]}
              </h4>
              {/* <p className='text-lg text-center border-2 border-[#F7AB0A] p-5 bg-[#f7ebd3fe] z-30 rounded-md'>
                This is the app name{' '}
              </p> */}
              <div className='flex justify-evenly space-x-5 my-2 border-[#F7AB0A] p-5 bg-[#f7ebd3fe] z-30 rounded-md'>
                {stacks[i].map((element, index)=> (
                    <img
                    src={stacks[i][index].src}
                    className='w-10 h-10 md:w-15 md:h-15 object-contain'
                    />
                ))}
              </div>
            </div>
          </div>
        ))}
        {/* projects */}
        {/* projects */}
        {/* projects */}
        {/* projects */}
      </div>
      <div className='w-full absolute top-[30%] bg-[#F7AB0A] left-0 h-[50vh] -skew-y-12' />
    </motion.div>
  );
}

export default Projects;
