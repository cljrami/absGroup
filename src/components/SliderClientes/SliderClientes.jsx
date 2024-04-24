// SWIPER
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
//import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

// import required modules
import { Keyboard, Pagination, Autoplay } from "swiper/modules";

const SliderClientes = () => {
  return (
    <div className="p-9" id="NuestrosClientes">
      <>
        <div className="">
          <span className="text-lg font-bold text-blue-500">Experiencia</span>
          <h2 className=" text-3xl font-bold font-heading">
            Empresas Que Confían En Nosotros{" "}
          </h2>
        </div>

        <div className="mx-auto grid  p-10 ">
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
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            spaceBetween={0}
            keyboard={{
              enabled: false,
            }}
            // Pagination={{
            // clickable: true,
            //}}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
            pagination={true}
            modules={[/*EffectCoverflow,*/ Autoplay, Keyboard, Pagination]}
            className="SliderClientes"
          >
            <SwiperSlide>
              <div className=" items-center justify-center bg-white rounded-lg">
                <a href="https://www.elecnor.cl/elecnor-chile">
                  <img
                    src="Imagenes/Clientes/elecnor.webp"
                    alt="Masisa es CLiente de ABSGroup"
                    title="Masisa es CLiente de ABSGroup"
                    loading="lazy"
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="items-center justify-center bg-white rounded-lg">
                <a href="https://www.leanvalv-spa.com/">
                  {" "}
                  <img
                    src="Imagenes/Clientes/leanv.webp"
                    alt="Masisa es CLiente de ABSGroup"
                    title="Masisa es CLiente de ABSGroup"
                    loading="lazy"
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" items-center justify-center bg-white rounded-lg">
                <a href="http://rsmconstructora.cl/">
                  <img
                    src="Imagenes/Clientes/rsm.webp"
                    alt="Masisa es CLiente de ABSGroup"
                    title="Masisa es CLiente de ABSGroup"
                    loading="lazy"
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="items-center justify-center bg-white rounded-lg">
                <a href="https://www.masisa.com" target="_blank">
                  <img
                    src="Imagenes/Clientes/masisa.webp"
                    alt="Masisa es CLiente de ABSGroup"
                    title="Masisa es CLiente de ABSGroup"
                    loading="lazy"
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="items-center justify-center bg-white rounded-lg">
                <a href="https://www.oxiquim.cl">
                  <img
                    src="Imagenes/Clientes/oxiquim.webp"
                    alt="Masisa es CLiente de ABSGroup"
                    title="Masisa es CLiente de ABSGroup"
                    loading="lazy"
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="items-center justify-center bg-white rounded-lg">
                <img
                  src="Imagenes/Clientes/suez.webp"
                  alt="Masisa es CLiente de ABSGroup"
                  title="Masisa es CLiente de ABSGroup"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="items-center justify-center bg-white rounded-lg">
                <img
                  src="Imagenes/Clientes/besalco.webp"
                  alt="Masisa es CLiente de ABSGroup"
                  title="Masisa es CLiente de ABSGroup"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="items-center justify-center bg-white rounded-lg">
                <img
                  src="Imagenes/Clientes/ful.webp"
                  alt="Masisa es CLiente de ABSGroup"
                  title="Masisa es CLiente de ABSGroup"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="items-center justify-center bg-white rounded-lg">
                <img
                  src="Imagenes/Clientes/dvc.webp"
                  alt="Masisa es CLiente de ABSGroup"
                  title="Masisa es CLiente de ABSGroup"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="items-center justify-center bg-white rounded-lg">
                <img
                  src="Imagenes/Clientes/tulsa.webp"
                  alt="Masisa es CLiente de ABSGroup"
                  title="Masisa es CLiente de ABSGroup"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="items-center justify-center bg-white rounded-lg">
                <img
                  src="Imagenes/Clientes/enapesca.webp"
                  alt="Masisa es CLiente de ABSGroup"
                  title="Masisa es CLiente de ABSGroup"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="items-center justify-center bg-white rounded-lg">
                <img
                  src="Imagenes/Clientes/flesan.webp"
                  alt="Masisa es CLiente de ABSGroup"
                  title="Masisa es CLiente de ABSGroup"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="items-center justify-center bg-white rounded-lg">
                <img
                  src="Imagenes/Clientes/fepasa.webp"
                  alt="Masisa es CLiente de ABSGroup"
                  title="Masisa es CLiente de ABSGroup"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="items-center justify-center bg-white rounded-lg">
                <img
                  src="Imagenes/Clientes/cbb.webp"
                  alt="Masisa es CLiente de ABSGroup"
                  title="Masisa es CLiente de ABSGroup"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="items-center justify-center bg-white rounded-lg">
                <img
                  src="Imagenes/Clientes/alimex.webp"
                  alt="Masisa es CLiente de ABSGroup"
                  title="Masisa es CLiente de ABSGroup"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="items-center justify-center bg-white rounded-lg">
                <img
                  src="Imagenes/Clientes/cvv.webp"
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
