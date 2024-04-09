// SWIPER
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
//import "swiper/css/pagination";
import "swiper/css/navigation";
//import "swiper/css/effect-coverflow";

// import required modules
import { Keyboard, Navigation } from "swiper/modules";

const SliderPrincipal = () => {
  return (
    <div id="SliderPrincipal">
      <>
        <div className="mx-auto grid p-9  text-white  ">
          <Swiper
            // effect={'coverflow'}
            // slidesPerView={1}
            // coverflowEffect={{
            //   rotate: 2,
            //   grabCursor: true,
            //   slidesPerView: "1",
            //   centeredSlides: true,
            //   stretch: -20,
            //   depth: 50,
            //   modifier: 1,
            //   slideShadows: false,
            // }}
            spaceBetween={0}
            keyboard={{
              enabled: false,
            }}
            //Pagination={{
            // clickable: true,
            //}}
            navigation={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            }}
            // pagination={true}
            modules={[/*EffectCoverflow,*/ Keyboard, Navigation]}
            className="SliderPrincipal"
          >
            <SwiperSlide>Hero 1</SwiperSlide>
            <SwiperSlide>1zxczxczxczxczx</SwiperSlide>
            <SwiperSlide>1xzczxczxczxc</SwiperSlide>
            <SwiperSlide>1zxczxczxczxc</SwiperSlide>
            <SwiperSlide>1xzczxczxczxc</SwiperSlide>
            <SwiperSlide>1zxczxczxczxczx</SwiperSlide>
            <SwiperSlide>1zxczxczxc</SwiperSlide>
          </Swiper>
        </div>
      </>
    </div>
  );
};
export default SliderPrincipal;
