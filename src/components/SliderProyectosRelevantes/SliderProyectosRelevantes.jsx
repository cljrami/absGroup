// SWIPER
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
//import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

// import required modules
import { Keyboard, EffectCoverflow /*Pagination*/ } from "swiper/modules";

const SliderProyectosRelevantes = () => {
  return (
    <div className="p-9  text-focus-in" id="SliderProyectosRelevantes">
      <>
        <section id="features" className="px-2">
          <div className="mx-auto flex flex-col  ">
            <span className="inline-block mb-3 text-sm text-blue-500  tracking-widest ">
              Soluciónes En Ingeniería
            </span>
            <h2 className="text-slate-200 font-heading text-3xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-none">
              Proyecto Relevantes
            </h2>
          </div>
        </section>

        <div className="mx-auto grid   ">
          <Swiper
            effect={"coverflow"}
            slidesPerView={1}
            coverflowEffect={{
              rotate: 2,
              grabCursor: true,
              slidesPerView: "1",
              centeredSlides: true,
              stretch: -20,
              depth: 50,
              modifier: 1,
              slideShadows: false,
            }}
            spaceBetween={0}
            keyboard={{
              enabled: true,
            }}
            //pagination={true}
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
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            //pagination={true}
            modules={[EffectCoverflow, Keyboard /*Pagination*/]}
            className="SliderProyectosRelevantes"
          >
            <SwiperSlide>
              <div className="w-full ">
                <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

                <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full ">
                <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

                <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full ">
                <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

                <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full ">
                <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

                <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </>
    </div>
  );
};
export default SliderProyectosRelevantes;
