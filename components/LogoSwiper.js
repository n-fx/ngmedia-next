import Link from 'next/link';

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Website_01() {
    return (

        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <div className='bg-logoswiper'>
                    <div className="img-logo" style={{ backgroundImage: "url('/images/logos/client-1.svg')" }}></div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='bg-logoswiper'>
                    <div className="img-logo" style={{ backgroundImage: "url('/images/logos/client-2.svg')" }}></div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='bg-logoswiper'>
                    <div className="img-logo" style={{ backgroundImage: "url('/images/logos/client-3.svg')" }}></div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='bg-logoswiper'>
                    <div className="img-logo" style={{ backgroundImage: "url('/images/logos/client-4.svg')" }}></div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='bg-logoswiper-dark'>
                    <div className="img-logo" style={{ backgroundImage: "url('/images/logos/client-11.svg')" }}></div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='bg-logoswiper-dark'>
                    <div className="img-logo" style={{ backgroundImage: "url('/images/logos/client-10.svg')" }}></div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='bg-logoswiper-dark'>
                    <div className="img-logo" style={{ backgroundImage: "url('/images/logos/client-14.svg')" }}></div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='bg-logoswiper-dark'>
                    <div className="img-logo" style={{ backgroundImage: "url('/images/logos/client-13.svg')" }}></div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='bg-logoswiper'>
                    <div className="img-logo" style={{ backgroundImage: "url('/images/logos/client-5.svg')" }}></div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='bg-logoswiper'>
                    <div className="img-logo" style={{ backgroundImage: "url('/images/logos/client-6.svg')" }}></div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='bg-logoswiper'>
                    <div className="img-logo" style={{ backgroundImage: "url('/images/logos/client-7.svg')" }}></div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='bg-logoswiper'>
                    <div className="img-logo" style={{ backgroundImage: "url('/images/logos/client-8.svg')" }}></div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='bg-logoswiper-dark'>
                    <div className="img-logo" style={{ backgroundImage: "url('/images/logos/client-16.svg')" }}></div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='bg-logoswiper-dark'>
                    <div className="img-logo" style={{ backgroundImage: "url('/images/logos/client-17.svg')" }}></div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='bg-logoswiper-dark'>
                    <div className="img-logo" style={{ backgroundImage: "url('/images/logos/client-18.svg')" }}></div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='bg-logoswiper-dark'>
                    <div className="img-logo" style={{ backgroundImage: "url('/images/logos/client-19.svg')" }}></div>
                </div>
            </SwiperSlide>

        </Swiper>

    )
}