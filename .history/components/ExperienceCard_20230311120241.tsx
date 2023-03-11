import { motion } from 'framer-motion';
import React from 'react';
import VaaS from '../assets/vaas.jpeg';
import Even from '../assets/even.png';
import NM from '../assets/nm.jpeg';
import Mitigreen from '../assets/mitigreen.png';

import ReactPhoto from '../assets/tech/react.png';
import TailwindPhoto from '../assets/tech/tailwindcss.png';
import ReduxPhoto from '../assets/tech/redux.png';
import JavaScriptPhoto from '../assets/tech/javascript.png';
import HTMLPhoto from '../assets/tech/html.png';
import CSSPhoto from '../assets/tech/css.png';
import MaterialUIPhoto from '../assets/tech/material.png';
import TypeScriptPhoto from '../assets/tech/typescript.png';
import NodePhoto from '../assets/tech/node.png';
import ExpressPhoto from '../assets/tech/express.png';
import JavaPhoto from '../assets/tech/java.png';
import SpringPhoto from '../assets/tech/spring.png';
import PostgresPhoto from '../assets/tech/postgres.png';
import MongoPhoto from '../assets/tech/mongo.png';
import AWSPhoto from '../assets/tech/aws.png';
import KubePhoto from '../assets/tech/kube.png';
import DockerPhoto from '../assets/tech/docker.png';
import ECPhoto from '../assets/tech/ec.png';
import LambdaPhoto from '../assets/tech/lambda.png';
import CloudFormation from '../assets/tech/cloudform.png';
import S3Photo from '../assets/tech/s3.png';
import KibanaPhoto from '../assets/tech/kibana.png';
import GrafanaPhoto from '../assets/tech/grafana.png';
import PrometheusPhoto from '../assets/tech/prometheus.png';
import PythonPhoto from '../assets/tech/python.png';
import NumpyPhoto from '../assets/tech/numpy.png';
import SalesforcePhoto from '../assets/tech/salesforce.png';
import {isMobile} from "react-device-detect";
import {useEffect, useState} from "react";
type Props = {
  experience: number;
};
type Indexes = keyof typeof summaries;

const techStacks=[[TypeScriptPhoto, NodePhoto, KubePhoto, DockerPhoto, ReactPhoto, MongoPhoto, GrafanaPhoto, PrometheusPhoto, AWSPhoto], [JavaScriptPhoto, ReactPhoto, TailwindPhoto, PostgresPhoto, NodePhoto, MongoPhoto, PythonPhoto, AWSPhoto],[PythonPhoto, NumpyPhoto, SalesforcePhoto],[HTMLPhoto, CSSPhoto, JavaScriptPhoto, NodePhoto, ExpressPhoto, PostgresPhoto]]
const images = [VaaS, Even, NM, Mitigreen];
const locations = ['VaaS', 'Even Trading', 'Northwestern Mutual', 'Mitigreen'];
const indexes: Indexes[] = ["vaas", "even", "nm", "mitigreen"];
const titles = [
  'Senior Software Engineer',
  'Founder/Full Stack Software Engineer',
  'Financial Analyst',
  'Founder/Full Stack Software Engineer',
];

const dates = [
  'January 2022 - Present',
  'January 2019 - Present',
  'June 2021 - March 2022',
  'March 2017 - March 2018',
];

const summaries = {
  vaas: [
    'Led and mentored multiple teams of engineers in system design, product development and technology implementation',
    'Implemented TypeScript with custom types and interfaces, resulting in a predictable, readable, and extensible codebase',
    'Constructed a RESTful Node.js server with Express to build out routes and middleware for data fetching and authentication',
    'Revamped the front-end using React and Material UI to provide reusable and responsive front-end components in a mobile-first approach for enhanced usability across all devices—prioritizing ease of use and clear, intuitive design',
    'Overhauled product design by incorporating 4 new, optimized visualization tools: a custom Prometheus query tool, an architecture visualizer component, 15 robust Grafana dashboards, and a customized infrastructure cost forecasting tool',
    'Utilized MongoDB to securely store user credentials and session data through JWTs stored in server-side cookies',
    'Deployed Kubernetes clusters via Google Cloud Platform with GKE to minimize setup time, resource cost, and logistical complexity',
  ],
  even: [
    'Designed and executed a full stack trading platform with advanced machine learning algorithms in Python to identify value optimized trades for students',
    'Utilized Node.js backend, MongoDB to store user sessions and Postgres to store and query information regarding users, their trading block, and their trade preferences',
    'Utilized React with context API to manage state and share data between components with optimized efficiency and performance',
    'Individually responsible for research, testing, product development, marketing, prototyping, design, and deployment',
  ],
  nm: [
    'Built clientele and relationships with 100+ sophisticated professionals in a variety of industries utilizing Salesforce CRM',
    'Constructed financial forecasts with advanced regression modeling in Python, and communicated planning recommendations to clientele',
    'Accounted for over $50 million of financial asset planning across clientele, providing investment optimizations of $2 million per client',
    'Specialized in lead generation, earning referrals, and broadening the scope of my personal practice adding 4+ clients per week',
    'Led 3 generations of interns into building their own practice',
  ],
  mitigreen: [
    'Founded non-profit organization dedicated towards reducing waste pollution in the community by labeling customer goods as compostable or recyclable',
    'Built and deployed website for non-profit organization via Bluehost',
    'Constructed front-end only application using JavaScript/HTML/CSS to create UI that reflected company brand',
    'Created frontend components for displaying products, use-case, product demonstration, and company mission',
    'Conducted meetings with Bellevue City Council, Republic Services Waste Management, as well as multiple local restaurant owners to discuss product deployment',
  ],
};
//[#f7ebd3fe]
function ExperienceCard({ experience }: Props) {
  const [shouldRenderStack, setShouldRenderStack] = useState(false);

  useEffect(() => {
    setShouldRenderStack(!isMobile);
  }, []);
  return (
    <article
      className='flex flex-col rounded-lg items-center space-y-3 md:space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[600px] snap-center bg-white p-10 border-2 border-gray-500 hover:border-[#F7AB0A] transform transition duration-300 ease-in-out hover:scale-110 opacity-100 cursor-pointer max-h-[500px] md:max-h-[670px] overflow-y-hidden hover:overflow-y-scroll' style={{zIndex:'30', position:'relative'}}>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
        className='w-24 h-24 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center'
        src={images[experience].src}
        alt=''
      />
      <div className='px-0 md:px-5'>
        <h4 className='text-4l font-light'>{titles[experience]}</h4>
        <p className='font-bold text-2xl mt-1'>{locations[experience]}</p>
        {shouldRenderStack && <div className='flex space-x-3 my-2'>
            {techStacks[experience].map((element,index)=> (
                <img className="w-10 h-10 md:w-15 md:h-15 object-contain" src={techStacks[experience][index].src}/>
            ))}
        </div>}
        <p className='uppercase py-5 text-gray-400'>{dates[experience]}</p>
        <ul className='list-disc space-y-1 text-lg'>
            {summaries[indexes[experience]].map((summary)=> (
                <li>{summary}</li>
            ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
