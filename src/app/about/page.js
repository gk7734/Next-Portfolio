'use client'

import React, {useState} from "react";

// icons
import {FaCss3, FaHtml5, FaJs, FaReact, FaFigma, FaPython} from "react-icons/fa";
import {
    SiCodepen,
    SiGithub, SiMaterialdesign,
    SiNextdotjs,
    SiPycharm,
    SiTailwindcss, SiTypescript, SiVuedotjs,
    SiWebstorm
} from "react-icons/si";

// about Data
const aboutData = [
    {
        title: 'Stack',
        info: [
            {
                title: 'Lang',
                icons: [
                    <FaC />,
                    <FaPython />,
                    <FaJs />,
                    <SiTypescript />
                ]
            },
            {
                title: 'Web Development',
                icons: [
                    <FaHtml5 />,
                    <FaCss3 />,
                    <SiTailwindcss />,
                    <FaJs />,
                    <SiTypescript />,
                    <FaReact />,
                    <SiVuedotjs />,
                    <SiNextdotjs />,

                ],
            },
            {
                title: 'UI/UX Design',
                icons: [<FaFigma />, <SiMaterialdesign />, <SiCodepen />],
            },
            {
                title: 'Tools',
                icons: [
                    <SiWebstorm />,
                    <SiPycharm />,
                    <SiGithub />
                ],
            }
        ],
    },
    {
        title: 'awards',
        info: [
            {
                title: '삼성 주니어 SW 창작대회 - 장려상',
                stage: '2021',
            },
        ],
    },
    {
        title: 'experience',
        info: [
            {
                title: 'C 공부',
                stage: '2020 - 202x',
            },
            {
                title: 'Python 공부',
                stage: '2019 - 202x',
            },
            {
                title: 'React 공부',
                stage: '2023/8/1 - 202x',
            },
            {
                title: 'Next.js 공부',
                stage: '2023/8/10 - 202x',
            },
        ],
    },
];

// components
import Avatar from "../../components/Avatar";

// framer motion
import {motion} from 'framer-motion'
import {fadeIn} from "@/variants";

// counter
import CountUp from "react-countup";
import {FaC} from "react-icons/fa6";
import Circles from "@/components/Circles";

function handleContextMenu(e) {
    e.preventDefault();
}

function handleMouseDown(e) {
    e.preventDefault();
}

function About() {
    const [index, setIndex] = useState(0)
    return (
        <div className='h-full bg-primary/30 py-32 text-center xl:text-left mx-auto p-4' onContextMenu={handleContextMenu} onMouseDown={handleMouseDown} onDragStart={handleMouseDown}>
            {/*avatar img*/}
            <Circles/>
            <motion.div
                variants={fadeIn('right', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='hidden xl:flex absolute -bottom-[300px] -left-[370px]'
            >
                <Avatar />
            </motion.div>
            <div className='container mx-auto p-4 overflow-x-hidden xl:overflow-x-visible h-full flex flex-col items-center xl:flex-row gap-x-6'>
                {/*text*/}
                <div className='flex-1 flex flex-col justify-center'>
                    <motion.h2 variants={fadeIn('right', 0.2)}
                               initial='hidden'
                               animate='show'
                               exit='hidden'
                               className='h2'>나의 개발 <span className='text-accent'>여정</span></motion.h2>
                    <motion.p
                        variants={fadeIn('right', 0.2)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias earum laboriosam necessitatibus non quo quos! Eligendi ipsam iure sint!</motion.p>
                    {/*counters*/}
                    <div>
                        <motion.div variants={fadeIn('right', 0.6)}
                                    initial='hidden'
                                    animate='show'
                                    exit='hidden'
                                    className='grid grid-cols-2 md:grid-cols-4 xl:flex xl:gap-x-6'>
                            {/*experience*/}
                            <div className='relative flex-1 after:w-[1px] after:h-full
                            after:bg-white/10 after:absolute after:top-0 after:right-0'>
                                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                                    <CountUp start={0.1} end={1}  duration={5}/> +
                                </div>
                                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Year of experience</div>
                            </div>
                            {/*clients*/}
                            <div className='relative flex-1 after:w-[1px] after:h-full
                            after:bg-white/10 after:absolute after:top-0 after:right-0'>
                                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                                    <CountUp start={0} end={4}  duration={5}/> +
                                </div>
                                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Satisfied clients</div>
                            </div>
                            {/*projects*/}
                            <div className='relative flex-1 after:w-[1px] after:h-full
                            after:bg-white/10 after:absolute after:top-0 after:right-0'>
                                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                                    <CountUp start={0} end={6}  duration={5}/> +
                                </div>
                                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Finished projects</div>
                            </div>
                            {/*awards*/}
                            <div className='relative flex-1'>
                                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                                    <CountUp start={0} end={1}  duration={5}/> +
                                </div>
                                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Winning awards</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                {/*info*/}
                <motion.div variants={fadeIn('left', 0.4)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
                    <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
                        {aboutData.map((item, itemIndex) => {
                            return (
                                <div
                                    key={itemIndex}
                                    className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'}  cursor-pointer capitalize
                                    xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute
                                    after:-bottom-1 after:left-0 z-10`}
                                    onClick={() => setIndex(itemIndex)}>
                                    {item.title}
                                </div>
                            )
                        })}
                    </div>
                    <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-x-4 items-center xl:items-start'>
                        {aboutData[index].info.map((item, itemIndex) => {
                            return (
                                <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                                    {/*title*/}
                                    <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                                    <div className='hidden md:flex'>-</div>
                                    <div>{item.stage}</div>
                                    <div className='flex gap-x-4'>
                                        {/*icons*/}
                                        {item.icons?.map((icon, itemIndex) => {
                                            return (
                                                <div className='text-2xl text-white' key={itemIndex}>
                                                    {icon}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default About;
