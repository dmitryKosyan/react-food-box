
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css'
import './SwiperSlider.css'

export default function SampleSlider() {
    return (
        <>
            <Swiper
                className="sample-slider"
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                    delay: 2000,

                }}
                // slidesPerView={1}
                speed={1000}
            >
                <SwiperSlide>
                    <img className="swiper-slide-img" src="./images/pizza/baner1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="swiper-slide-img" src="./images/pizza/baner2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="swiper-slide-img" src="./images/pizza/baner4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="swiper-slide-img" src="./images/pizza/baner9.jpg" />
                </SwiperSlide>

            </Swiper>
        </>
    );
}
