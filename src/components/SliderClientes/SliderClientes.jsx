// SWIPER
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
//import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

// import required modules
import { Keyboard, Pagination } from "swiper/modules";

const SliderClientes = () => {
  return (
    <div className="p-9" id="NuestrosClientes">
      <>
        <section id="features" className="px-2 max-w-5xl mx-auto">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center text-center">
            <h2 className="font-heading text-3xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-none">
              Grandes Empresas Han Confiado En Nosotros Como Clientes
            </h2>
            <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              este texto debe de ser conciso y directo .
            </p>
          </div>
        </section>

        <div className="mx-auto grid justify-center  md:max-w-[70rem] ">
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
            // Pagination={{
            // clickable: true,
            //}}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            pagination={true}
            modules={[/*EffectCoverflow,*/ Keyboard, Pagination]}
            className="SliderClientes"
          >
            <SwiperSlide>
              <div className="flex  items-center justify-center bg-white rounded-lg ">
                <img
                  className="p-5"
                  src="Imagenes/Clientes/MasisaChile-Clientes-De-AbsGroup.webp"
                  alt="Masisa es CLiente de ABSGroup"
                  title="Masisa es CLiente de ABSGroup"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" items-center justify-center bg-white rounded-lg">
                <img
                  className="p-5"
                  src="Imagenes/Clientes/MasisaChile-Clientes-De-AbsGroup.webp"
                  alt="Masisa es CLiente de ABSGroup"
                  title="Masisa es CLiente de ABSGroup"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" items-center justify-center bg-white rounded-lg">
                <img
                  className="p-5"
                  src="Imagenes/Clientes/MasisaChile-Clientes-De-AbsGroup.webp"
                  alt="Masisa es CLiente de ABSGroup"
                  title="Masisa es CLiente de ABSGroup"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" items-center justify-center bg-white rounded-lg">
                <img
                  className="p-5"
                  src="Imagenes/Clientes/MasisaChile-Clientes-De-AbsGroup.webp"
                  alt="Masisa es CLiente de ABSGroup"
                  title="Masisa es CLiente de ABSGroup"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="items-center justify-center bg-white rounded-lg">
                <img
                  className="p-5"
                  src="Imagenes/Clientes/MasisaChile-Clientes-De-AbsGroup.webp"
                  alt="Masisa es CLiente de ABSGroup"
                  title="Masisa es CLiente de ABSGroup"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" items-center justify-center bg-white rounded-lg">
                <img
                  className="p-5"
                  src="Imagenes/Clientes/MasisaChile-Clientes-De-AbsGroup.webp"
                  alt="Masisa es CLiente de ABSGroup"
                  title="Masisa es CLiente de ABSGroup"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="items-center justify-center bg-white rounded-lg">
                <img
                  className="p-5"
                  src="Imagenes/Clientes/MasisaChile-Clientes-De-AbsGroup.webp"
                  alt="Masisa es CLiente de ABSGroup"
                  title="Masisa es CLiente de ABSGroup"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </>
    </div>
  );
};
export default SliderClientes;
