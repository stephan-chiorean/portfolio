import { motion } from 'framer-motion'
import React from 'react'
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
import GraphQlPhoto from '../assets/tech/graphql.png';
import NextPhoto from '../assets/tech/next.png';
import GooglePhoto from '../assets/tech/google.png';
import GrafanaPhoto from '../assets/tech/grafana.png';
import PrometheusPhoto from '../assets/tech/prometheus.png';
import KafkaPhoto from '../assets/tech/kafka.png';
import PythonPhoto from '../assets/tech/python.png';


const skillPhotos=[ReactPhoto, TailwindPhoto, ReduxPhoto, JavaScriptPhoto, HTMLPhoto, CSSPhoto, MaterialUIPhoto, NextPhoto, TypeScriptPhoto, NodePhoto, ExpressPhoto, JavaPhoto, SpringPhoto, PostgresPhoto, MongoPhoto, GraphQlPhoto, AWSPhoto, KubePhoto, DockerPhoto, GrafanaPhoto, PrometheusPhoto, PythonPhoto, KafkaPhoto, GooglePhoto ];

const progress=[100,95,85,100,100,100,85,95,100,100,100,70,70,85,95,70,100,70,70,85,80,70,70,90];

type Props = {
    directionLeft?:boolean;
    skill:number;
}

function Skill({directionLeft, skill}: Props) {
    console.log("skill", skill)
    console.log("skillPhotoslength", skillPhotos.length);
    console.log("photo", skillPhotos[skill]);

  return (
    <div className="group relative flex cursor-pointer">
        <motion.img
        initial={{
            x:directionLeft?-200:200,
            opacity:0,
        }} 
        whileInView={{
            x:0,
            opacity:1,
        }}
        viewport={{
            once:true,
        }}
        transition={{
            duration:1,
        }}
        src={skillPhotos[skill].src}
        alt=""
        className="rounded-full border-2 border-[#F7AB0A] object-contain p-1 h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale  ease-in-out"
        />
        <div className="absolute opacity-0 hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[#F7AB0A] h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">
                    {progress[skill]}%
                </p>
            </div>
        </div>
    </div>
  )
}

export default Skill