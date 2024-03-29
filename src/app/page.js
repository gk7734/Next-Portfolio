'use client'

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// framer motion
import {motion} from 'framer-motion'

// variants
import {fadeIn} from '../variants'

function handleContextMenu(e) {
    e.preventDefault();
}

function handleMouseDown(e) {
    e.preventDefault();
}

export default function Home() {
    return (
        <div className='bg-[#181226] h-full ' onContextMenu={handleContextMenu} onMouseDown={handleMouseDown} onDragStart={handleMouseDown}>
            {/*text*/}
            <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30
            to-black/10'>
                <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left
                h-full container mx-auto'>
                    {/*title*/}
                    <motion.h1 variants={fadeIn('down', 0.2)}
                               initial='hidden'
                               animate='show'
                               exit='hidden'
                               className='h1 z-10'
                    >
                        새로운 기술을 탐구하는<br/>
                        <span className='text-accent'>개발자 주강현</span>
                    </motion.h1>
                    {/*subtitle*/}
                    <motion.p variants={fadeIn('down', 0.3)}
                              initial='hidden'
                              animate='show'
                              exit='hidden'
                              className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'
                    >
                        안녕하세요! 저는 주강현입니다. 현재 대구소프트웨어마이스터고등학교에서 공부하고 있습니다.
                        주로 Next.js, React.js, Vue.js와 같은 프론트엔드 기술 스택과 Express.js NestJS 백엔드 기술 스택을 활용하여 저만의 웹페이지를 만들어보고 있습니다.
                        저의 목표는 항상 새롭고 이로운 기술을 익히고 적용하는 것 이고,
                        대구소프트웨어마이스터고등학교에서 배운 지식과 경험을 받고 저는 더욱 더 성장 해나갈 것입니다.
                    </motion.p>
                    <motion.p variants={fadeIn('down', 0.3)}
                              initial='hidden'
                              animate='show'
                              exit='hidden'
                              className='xl:hidden visible text-[4px] max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>모바일 환경에서는 정상적으로 작동 안할 가능성이 있습니다.</motion.p>
                    {/*btn*/}
                    <motion.div variants={fadeIn('down', 0.4)}
                                initial='hidden'
                                animate='show'
                                exit='hidden'
                                className='flex justify-center xl:hidden relative'
                    >
                        <ProjectsBtn/>
                    </motion.div>
                    <motion.div variants={fadeIn('down', 0.4)}
                                initial='hidden'
                                animate='show'
                                exit='hidden'
                                className='hidden xl:flex'
                    >
                        <ProjectsBtn/>
                    </motion.div>
                </div>
            </div>
            {/*image*/}
            <div className='w-[1200px] h-full absolute right-0 bottom-0'>
                {/*bg img*/}
                <div className='bg-none xl:bg-explosion
                xl:bg-cover bg-right xl:bg-no-repeat w-full
                h-full absolute mix-blend-color-dodge translate-z-0'>
                </div>
                {/*particles*/}
                <ParticlesContainer/>
                {/*Avatar Img*/}
                <motion.div variants={fadeIn('up', 0.5)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            transition={{duration: 1, ease: 'easeInOut'}}
                            className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32
                            lg:bottom-0 lg:right-[8%]'
                >
                    <Avatar/>
                </motion.div>
            </div>
        </div>
    )
}
