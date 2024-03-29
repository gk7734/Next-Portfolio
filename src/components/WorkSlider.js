// next image
import Image from "next/image";

const workSlides = {
    slides: [
        {
            images: [
                {
                    title: 'title',
                    path: '/port1.png',
                    git: 'https://github.com/gk7734/Next-Portfolio'
                },
                {
                    title: 'title',
                    path: '/port2.png',
                    git: 'https://github.com/gk7734/WebDesign'
                },
                {
                    title: 'title',
                    path: '/port3.png',
                    git: 'https://github.com/gk7734/ReactLearn'
                },
                {
                    title: 'title',
                    path: '/port4.png',
                    git: 'https://github.com/gk7734/Nextjs-Project'
                },
            ],
        },
        {
            images: [
                {
                    title: 'title',
                    path: '/port5.png',
                    git: 'https://github.com/gk7734/Gk-Toy'
                },
                {
                    title: 'title',
                    path: '/port6.png',
                    git: 'https://github.com/WebVending/Front-end'
                },
                {
                    title: 'title',
                    path: '/port2.png',
                    git: 'https://github.com/gk7734/WebDesign'
                },
                {
                    title: 'title',
                    path: '/port3.png',
                    git: 'https://github.com/gk7734/ReactLearn'
                },
            ],
        },
    ],
};


// import swiper react components
import {Swiper, SwiperSlide} from "swiper/react";

// import swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import {Pagination} from "swiper";

// icons
import {BsArrowRight} from 'react-icons/bs'
import Link from "next/link";
import {log} from "next/dist/server/typescript/utils";


const WorkSlider = () => {
    return (
        <Swiper
            spaceBetween={10}
            pagination={{
                clickable: true
            }}
            modules={[Pagination]}
            className='h-[240px] sm:h-[480px]'
        >
            {
                workSlides.slides.map((slide, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
                                {slide.images.map((image, index) => {
                                    return (
                                        <div
                                            className='relative rounded-lg flex items-center justify-center group'>
                                            <div
                                                className='flex items-center justify-center relative group' key={index}>
                                                {/*image*/}
                                                <Image src={image.path} width={500} height={300} alt=''/>
                                                {/*overlay gradient*/}
                                                <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0
                            group-hover:opacity-80 transition-all duration-700'></div>
                                                {/*title*/}
                                                <div className='hidden group-hover:flex absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20
                                               transition-all duration-300'>
                                                    <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                                                        {/*title part 1*/}
                                                        <div className='delay-100'>LIVE</div>
                                                        {/*title part 2*/}
                                                        <Link href={image.git} className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</Link>
                                                        {/*icon*/}
                                                        <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
};

export default WorkSlider;

