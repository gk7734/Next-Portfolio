'use client'

// import swiper react components
import {Swiper, SwiperSlide} from "swiper/react";

// import swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'


// icons
import {
    RxCrop,
    RxDesktop,
    RxPencil2,
    RxReader,
    RxRocket,
    RxArrowTopRight
} from 'react-icons/rx'
import {FreeMode, Pagination} from "swiper";


const serviceData = [
    {
        icon: <RxCrop/>,
        title: 'Branding',
        description: '저의 아이덴티티는 지속적인 학습과 혁신을 통해 새로운 도전에 대응하며, 이러한 접근 방식이 제 브랜드의 가치를 높여주는 것이 아이덴티티 입니다.',
    },
    {
        icon: <RxPencil2/>,
        title: 'Design',
        description: '디자인에 대한 저의 접근 방식은 \'사용자 중심\'입니다. 사용자의 경험과 편의성을 최우선으로 생각하며, 직관적이고 깔끔한 디자인을 구현합니다.',
    },
    {
        icon: <RxDesktop/>,
        title: 'Development',
        description: '저에게는 개발은 꿈을 창출하는 것이라고 생각합니다. 그이유는 개발 공부하기 전에는 상상으로 했지만, 지금의 저는 상상을 했던 것을 현실로 구현합니다.',
    },
    {
        icon: <RxRocket/>,
        title: 'SEO',
        description: '\'SEO\'가 저에게는 나만의 꿈을 멀리 퍼트려주는 존재라고 생각합니다.',
    },
];

const ServiceSlider = () => {
    return (
        <Swiper breakpoints={{
            320: {
                slidesPerView: 1,
                spaceBetween: 15
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 15
            },
        }}
                freeMode={true}
                pagination={{
                    clickable: true
                }}
                modules={[FreeMode, Pagination]}
                className='h-[240px] sm:h-[340px]'
        >
            {
                serviceData.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className='bg-[rgba(65,47,123,0.15) h-max rounded-lg
                            px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0,15)] transition-all duration-300'>
                                {/*icon*/}
                                <div className='text-4xl text-accent mb-4'>{item.icon}</div>
                                {/*title & desc*/}
                                <div className='mb-8'>
                                    <div className='mb-2 text-lg'>{item.title}</div>
                                    <p className='max-w-[350px] leading-normal'>{item.description}</p>
                                </div>
                                {/*arrow*/}
                                <div className='text-3xl'>
                                    <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
};

export default ServiceSlider;
