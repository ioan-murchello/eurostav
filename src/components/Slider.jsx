import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const Slider = () => {
  return (
    <Swiper
      className='w-full h-[100vh] sm:h-[400px]'
      modules={[Autoplay]}
      speed={2000}
      slidesPerView={1}
      slidesPerGroup={1}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      noSwiping={true}
      allowTouchMove={false}
    >
      <SwiperSlide>
        <img
          className='w-full h-[100%] sm:h-[400px] object-cover'
          src='https://www.hashmicro.com/blog/wp-content/uploads/2022/10/Tools-16.jpg'
          alt=''
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          className='w-full h-[100%] sm:h-[400px] object-cover'
          src='https://proest.com/wp-content/uploads/2022/11/Building-Construction-Process-From-Start-To-Finish.jpg'
          alt=''
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          className='w-full h-[100%] sm:h-[400px] object-cover'
          src='https://iknyte.com/media/posts/3/construction.jpg'
          alt=''
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          className='w-full h-[100%] sm:h-[400px] object-cover'
          src='https://cammconstructioninc.com/wp-content/uploads/2018/12/building-construction-sunset.jpg'
          alt=''
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          className='w-full h-[100%] sm:h-[400px] object-cover'
          src='https://cloudfront-us-east-1.images.arcpublishing.com/tgam/CIQXIPAXLJB3JPXWGXYMHKWEZM.jpg'
          alt=''
        />
      </SwiperSlide>
    </Swiper>
  );
};
export default Slider;
