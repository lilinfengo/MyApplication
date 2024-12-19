import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './SliderComponent.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'

import { Navigation, Pagination,Scrollbar,A11y ,Autoplay} from 'swiper/modules'


function SliderComponent() {
    const slidList = [
        { id: 1, imageUrl: '../../assets/icon/favicon.png' },
        { id: 2, imageUrl: '../../assets/icon/favicon.png' },
        { id: 3, imageUrl: '../../assets/icon/favicon.png' }
    ]

    return (
        <div>
            <Swiper
                id="swiperid"
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                spaceBetween={50}
                slidesPerView='auto'
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction:false,
                    waitForTransition:false,
                    pauseOnMouseEnter:false
                }}
            
            >
                {slidList.map((slide) => (
                    <SwiperSlide key={slide.id} id="swiperslide">
                        <img src={slide.imageUrl} alt={`Slide ${slide.id}`} className=""></img>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default SliderComponent