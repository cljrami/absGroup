// SWIPER
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
//import "swiper/css/pagination";
import "swiper/css/navigation";
//import "swiper/css/effect-coverflow";

// import required modules
import { Keyboard, Navigation, Autoplay } from "swiper/modules";

const SliderPrincipal = () => {
  return (
    <div id="SliderPrincipal">
      <>
        <div className="mx-auto  ">
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
              delay: 4500,
              disableOnInteraction: false,
            }}
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
                spaceBetween: 0,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
            }}
            // pagination={true}
            modules={[/*EffectCoverflow,*/ Autoplay, Keyboard, Navigation]}
            className="SliderPrincipal "
          >
            <SwiperSlide>
              <div className="mt-20 h-[500px] text-white text-center grid bg-cover bg-[url('https://www.absgroup.cl/Imagenes/Home/ingenieria.webp')] ">
                <div className=" flex  items-center justify-center  bg-gray-800 bg-opacity-70 rounded-lg ">
                  <div className="max-w-full flex-shrink-0 px-4 text-center uppercase ">
                    <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-4xl  z-50">
                      <span className="text-sky-500">Ingeniería</span>
                    </h1>
                    <p className="mt-6 text-3xl leading-8 text-white font-semibold animate__animated animate__backInRight mb-20">
                      gestión integral de proyectos
                    </p>
                    <div className="w-full mx-auto mt-20">
                      <a
                        className="inline-flex items-center justify-center bg-white text-lg font-semibold text-indigo-700 shadow-sm transition-all duration-150 rounded-xl px-8 py-4 hover:bg-blue-900 hover:text-stone-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        href="Descargas/AbsGroup.pdf"
                        target="_blank"
                      >
                        <i
                          className="fas fa-file-pdf text-md "
                          aria-hidden="true"
                        ></i>{" "}
                        Descargar Brochure
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mt-20 h-[500px] text-white text-center grid bg-cover bg-[url('https://www.absgroup.cl/Imagenes/Home/construccion.webp')] ">
                <div className=" flex  items-center justify-center  bg-gray-800 bg-opacity-70 rounded-lg ">
                  <div className="max-w-full flex-shrink-0 px-4 text-center uppercase ">
                    <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-4xl  z-50">
                      <span className="text-sky-500">Construcción</span>
                    </h1>
                    <p className="mt-6 text-3xl leading-8 text-white font-semibold animate__animated animate__backInRight mb-20">
                      Innovación y mejora continua
                    </p>
                    <div className="w-full mx-auto mt-20">
                      <a
                        className="inline-flex items-center justify-center bg-white text-lg font-semibold text-indigo-700 shadow-sm transition-all duration-150 rounded-xl px-8 py-4 hover:bg-blue-900 hover:text-stone-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        href="Descargas/AbsGroup.pdf"
                        target="_blank"
                      >
                        <i
                          className="fas fa-file-pdf text-md "
                          aria-hidden="true"
                        ></i>{" "}
                        Descargar Brochure
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mt-20 h-[500px] text-white text-center grid bg-cover bg-[url('https://www.absgroup.cl/Imagenes/Home/montaje.webp')] ">
                <div className=" flex  items-center justify-center  bg-gray-800 bg-opacity-70 rounded-lg ">
                  <div className="max-w-full flex-shrink-0 px-4 text-center uppercase ">
                    <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-4xl text-focus-in z-50">
                      <span className="text-sky-500">Montaje Industrial </span>
                    </h1>
                    <p className="mt-6 text-3xl leading-8 text-white font-semibold animate__animated animate__backInRight mb-20">
                      Presupuestos y plazos acordados
                    </p>
                    <div className="w-full mx-auto mt-20">
                      <a
                        className="inline-flex items-center justify-center bg-white text-lg font-semibold text-indigo-700 shadow-sm transition-all duration-150 rounded-xl px-8 py-4 hover:bg-blue-900 hover:text-stone-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        href="Descargas/AbsGroup.pdf"
                        target="_blank"
                      >
                        <i
                          className="fas fa-file-pdf text-md "
                          aria-hidden="true"
                        ></i>
                        Descargar Brochure
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mt-20 h-[500px] text-white text-center grid bg-cover bg-[url('https://www.absgroup.cl/Imagenes/Home/paradaplantas.webp')] ">
                <div className=" flex  items-center justify-center  bg-gray-800 bg-opacity-70 rounded-lg ">
                  <div className="max-w-full flex-shrink-0 px-4 text-center uppercase ">
                    <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-4xl text-focus-in z-50">
                      <span className="text-sky-500">
                        Mantención Industrial
                      </span>
                    </h1>
                    <p className="mt-6 text-3xl leading-8 text-white font-semibold animate__animated animate__backInRight mb-20">
                      capacidad técnica y profesional
                    </p>
                    <div className="w-full mx-auto mt-20">
                      <a
                        className="inline-flex items-center justify-center bg-white text-lg font-semibold text-indigo-700 shadow-sm transition-all duration-150 rounded-xl px-8 py-4 hover:bg-blue-900 hover:text-stone-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        href="Descargas/AbsGroup.pdf"
                        target="_blank"
                      >
                        <i
                          className="fas fa-file-pdf text-md "
                          aria-hidden="true"
                        ></i>{" "}
                        Descargar Brochure
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </>
    </div>
  );
};
export default SliderPrincipal;
