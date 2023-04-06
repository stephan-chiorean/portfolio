import { motion } from 'framer-motion';
import React from 'react';
import messenger from '../assets/projects/messenger.jpeg';
import nft from '../assets/projects/NFT.png';
import verified from '../assets/projects/verifiedvoices.png';
import pitchit from '../assets/projects/pitchit.jpeg';
import fleetman from '../assets/projects/fleetman.jpeg';
import market from '../assets/projects/market.jpeg';
import TypeScriptPhoto from '../assets/tech/typescript.png';
import ReduxPhoto from '../assets/tech/redux.png';
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
import PusherPhoto from '../assets/tech/pusher.png';
import RedisPhoto from '../assets/tech/redis.png';
import SwrPhoto from '../assets/tech/swr.png';
import WebhookPhoto from '../assets/tech/webhooks.png';
import StripePhoto from '../assets/tech/stripe.png';
import FirebasePhoto from '../assets/tech/firebase.png';
import JavaScriptPhoto from '../assets/tech/javascript.png';
import MongoDBPhoto from '../assets/tech/mongo.png';
import CSSPhoto from '../assets/tech/css.png';
import SanityPhoto from '../assets/tech/sanity.png';
import travel from '../assets/projects/travelnow.jpeg';
import GooglePhoto from '../assets/tech/google.png';
import DockerPhoto from '../assets/tech/docker.png';
import vaas from '../assets/projects/Vaas.gif';
import ApolloPhoto from '../assets/tech/apollo.png';
import ExpoPhoto from '../assets/tech/expo.png';
import ups from '../assets/projects/ups.jpeg';
import blog from '../assets/projects/blog.jpeg';
import zuum from '../assets/projects/zuum.png';
import Link from 'next/link';
import krypt from '../assets/projects/krypt.jpeg';
import EthereumPhoto from '../assets/tech/ethereum.png';
import SolidityPhoto from '../assets/tech/solidity.png';
import VitePhoto from '../assets/tech/vite.png';
import EthersPhoto from '../assets/tech/ethers.png';
import NivoPhoto from '../assets/tech/nivo2.jpeg';
import MaterialPhoto from '../assets/tech/material.png';
import dashboard from '../assets/projects/dashboard.jpeg';

const projectos = [
  vaas,
  market,
  dashboard,
  blog,
  krypt,
  zuum,
  ups,
  messenger,
  verified,
  pitchit,
  fleetman,
  travel,
];
const links = [
  'http://vaas.dev',
  'https://www.github.com/stephan-chiorean/marketplace-app',
  'https://github.com/stephan-chiorean/dashboard',
  'https://github.com/stephan-chiorean/blog',
  'https://github.com/stephan-chiorean/krypt',
  'https://github.com/stephan-chiorean/zuum',
  'https://github.com/stephan-chiorean/native-delivery',
  'https://www.github.com/stephan-chiorean/messenger-clone',
  'https://github.com/TeamMEWTU/VerifiedVoices',
  'https://github.com/Pitch-It/PitchIt-Project-Management',
  'https://github.com/stephan-chiorean/Delivery-Application',
  'https://github.com/ctri-12-Goblin-shark/Travel-App',
];
const demos = [
  'http://vaas.dev',
  'https://www.youtube.com/watch?v=-j8DNJoN6WE',
  'https://youtu.be/QZQz018VwLk',
  'http://stephanblog.com',
  'https://www.youtube.com/watch?v=CsS0oHIvJdY',
  'https://www.youtube.com/watch?v=cNOoobLSYy0',
  'https://www.youtube.com/watch?v=L-Y32TqMrnM&t=6s',
  'https://www.youtube.com/watch?v=ub2Au5TahGo&t=18s',
]
const stacks = [
  [ReactPhoto, ReduxPhoto, TypeScriptPhoto, KubePhoto, DockerPhoto, NodePhoto],
  [
    ReactPhoto,
    ReduxPhoto,
    NextPhoto,
    TailwindPhoto,
    WebhookPhoto,
    FirebasePhoto,
    StripePhoto,
  ],
  [ReactPhoto, ReduxPhoto, MongoDBPhoto, MaterialPhoto, ExpressPhoto, NodePhoto],
  [ReactPhoto, TypeScriptPhoto, NextPhoto, TailwindPhoto, SanityPhoto],
  [ReactPhoto, SolidityPhoto, TailwindPhoto, MetaMaskPhoto, EthereumPhoto, VitePhoto],
  [ReactPhoto, NextPhoto, TailwindPhoto, ReduxPhoto, GooglePhoto],
  [
    ReactPhoto,
    GraphQlPhoto,
    TailwindPhoto,
    FirebasePhoto,
    StripePhoto,
    ApolloPhoto,
    ExpoPhoto,
  ],
  [
    TypeScriptPhoto,
    NextPhoto,
    TailwindPhoto,
    RedisPhoto,
    PusherPhoto,
    SwrPhoto,
  ],
  [
    GraphQlPhoto,
    TypeScriptPhoto,
    NextPhoto,
    TailwindPhoto,
    ReactPhoto,
    PostgresPhoto,
  ],
  [NodePhoto, ExpressPhoto, ReactPhoto, PostgresPhoto, JWTPhoto],
  [
    JavaPhoto,
    SpringPhoto,
    KubePhoto,
    AWSPhoto,
    KafkaPhoto,
    ElasticPhoto,
    KibanaPhoto,
  ],
  [JavaScriptPhoto, ReactPhoto, MongoDBPhoto, CSSPhoto],
];

const names = [
  'VaaS',
  'Market',
  'Vizionpro',
  'Blog',
  'Krypt',
  'Zuum',
  'Shipper',
  'Messenger',
  'Verified Voices',
  'Pitch-It',
  'MyDelivery',
  'TravelNow',
];

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative overflow-hidden flex text-left md:flex-row max-x-full justify-evenly mx-auto items-center z-0'
    >
      <h3 className='absolute top-5 uppercase tracking-[20px] text-technology-primary font-bold text-2xl'>
        Projects
      </h3>
      <div className='relative w-screen flex overflow-x-scroll snap-x snap-mandatory z-20 scrollbar scrollbar-w-8 scrollbar-track-gray-500/30 scrollbar-thumb-[#F7AB0A]'>
        {projects.map((project, i) => (
          <div className='w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-5 md:p-10'>
            <div id="track" className="flex items-center flex-col md:flex-row md:w-[500px] md:space-x-3 space-y-9 md:space-y-0 mb-8 md:mt-10 md:mb-0">
              {i<8 && <Link href={demos[i]} className="md:mx-0 px-3 py-2 bg-technology text-center text-technology-xdark text-xl rounded-md hover:bg-technology-secondary cursor-pointer w-full">See Demo</Link>}
              <Link href={links[i]} className="md:mx-0 px-3 py-2 bg-technology text-center text-technology-xdark text-xl rounded-md hover:bg-technology-secondary cursor-pointer w-full">Github</Link>
            </div>
            <a href={links[i]}>
              <img
                src={projectos[i].src}
                alt=''
                className='h-[200px] w-[800px] md:h-[600px] md:w-[1400px] max-h-[500px] object-contain cursor-pointer'
              />
            </a>
            <div className='space-y-10 px-10 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold uppercase tracking-[10px] text-center text-technology-primary'>
                {names[i]}
              </h4>
            </div>
            <div className='flex justify-center space-x-3 md:space-x-5 my-2 p-5 bg-[#f7ebd3fe] z-30 rounded-md'>
              {stacks[i].map((element, index) => (
                <img
                  src={stacks[i][index].src}
                  className='w-10 h-10 md:w-15 md:h-15 object-contain'
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* <div className='w-full absolute top-[30%] bg-technology-secondary/60 left-0 h-[50vh] -skew-y-12 z-[-1]' /> */}
    </motion.div>
  );
}

export default Projects;
