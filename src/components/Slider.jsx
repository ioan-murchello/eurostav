import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const Slider = ({ 
  height,
  perWiew,
  swipe,
  touchMode,
  spaceBetween, 
  delayTime,
  forNavigation
}) => {
    console.log(typeof height)
  return (
    <Swiper
    className='w-full h-full' 
      navigation={forNavigation}
      modules={[Navigation, Autoplay]}
      speed={2000}
      slidesPerView={1}
      slidesPerGroup={1}
      loop={true}
      autoplay={{ delay: delayTime, disableOnInteraction: false }}
      noSwiping={swipe}
      allowTouchMove={touchMode}
      spaceBetween={spaceBetween}
      breakpoints={{
        640: {
          slidesPerView: perWiew,
        },
        
      }}
    >
      <SwiperSlide className={`w-full h-full sm:h-[${height}]`}>
        <img
          className={`w-full h-full object-cover`}
          src='https://www.hashmicro.com/blog/wp-content/uploads/2022/10/Tools-16.jpg'
          alt=''
        />
      </SwiperSlide>

      <SwiperSlide className={`w-full h-full sm:h-[${height}]`}>
        <img
          className={`w-full h-full  object-cover`}
          src='https://proest.com/wp-content/uploads/2022/11/Building-Construction-Process-From-Start-To-Finish.jpg'
          alt=''
        />
      </SwiperSlide>

      <SwiperSlide className={`w-full h-full sm:h-[${height}]`}>
        <img
          className={`w-full h-full object-cover`}
          src='https://iknyte.com/media/posts/3/construction.jpg'
          alt=''
        />
      </SwiperSlide>

      <SwiperSlide className={`w-full h-full sm:h-[${height}]`}>
        <img
          className={`w-full h-full object-cover`}
          src='https://cammconstructioninc.com/wp-content/uploads/2018/12/building-construction-sunset.jpg'
          alt=''
        />
      </SwiperSlide>

      <SwiperSlide className={`w-full h-full sm:h-[${height}]`}>
        <img
          className={`w-full h-full object-cover`}
          src='https://cloudfront-us-east-1.images.arcpublishing.com/tgam/CIQXIPAXLJB3JPXWGXYMHKWEZM.jpg'
          alt=''
        />
      </SwiperSlide>
    </Swiper>
  );
};
export default Slider;
