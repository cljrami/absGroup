// SWIPER
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
//import "swiper/css/pagination";

import "swiper/css/navigation";
//import "swiper/css/effect-coverflow";

// import required modules
import { Keyboard, /*EffectCoverflow */ Navigation } from "swiper/modules";

const SliderProyectosRelevantes = () => {
  return (
    <div className="p-9  text-focus-in" id="SliderProyectosRelevantes">
      <>
        <section id="features">
          <div className="text-center  ">
            <span className="inline-block mb-3 text-sm  tracking-widest ">
              <h2 className="bg-blue-800 p-2 text-white font-normal rounded-md">
                ¿POR QUÉ ELEGIRNOS?
              </h2>
            </span>
            <h2 className="text-black font-heading text-3xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-none">
              Proyectos Ejecutados
            </h2>
            <p className="mt-3 text-lg text-neutral-500 capitalize">
              Capacidad técnica y profesional
            </p>
          </div>
        </section>

        <div className="mx-auto">
          <Swiper
            //slidesPerView={"auto"}
            //centeredSlides={true}
            spaceBetween={30}
            // effect={"coverflow"}
            //slidesPerView={"auto"}
            //spaceBetween={30}
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

            keyboard={{
              enabled: true,
            }}
            //pagination={true}
            navigation={true}
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
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            //pagination={true}
            modules={[/*EffectCoverflow,*/ Keyboard, Navigation]}
            className="SliderProyectosRelevantes"
          >
            <SwiperSlide>
              <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
                <div className="">
                  <img
                    src="Imagenes/Proyectos/besalco.webp"
                    className="w-full object-cover"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black  "></div>
                <div className="absolute inset-x-0 bottom-0 z-20 p-4">
                  <h3 className="text-base font-medium text-white">
                    BESALCO-DRAGADOS S.A
                  </h3>
                  <p className="text-white">
                    Tendido de Cables de Fuerza y conexionado
                  </p>
                  <br />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
                <div>
                  <img
                    src="Imagenes/Proyectos/elecnor.webp"
                    className="w-full object-cover"
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
                <div className="absolute inset-x-0 bottom-0 z-20 p-4">
                  <h3 className="text-base font-medium text-white">
                    ELECNOR CHILE
                  </h3>
                  <p className="text-white">Proyecto Lt y SS Mantos Verdes</p>
                  <br />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
                <div>
                  <img
                    src="Imagenes/Proyectos/leanval.webp"
                    className="w-full object-cover"
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
                <div className="absolute inset-x-0 bottom-0 z-20 p-4">
                  <h3 className="text-base font-medium text-white">
                    LEANVAL CHILE
                  </h3>
                  <p className="text-white">CMPC Maderas Santa Fé Linea 1</p>
                  <br />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
                <div>
                  <img
                    src="Imagenes/Proyectos/masisa.webp"
                    className="w-full object-cover"
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
                <div className="absolute inset-x-0 bottom-0 z-20 p-4">
                  <h3 className="text-base font-medium text-white">
                    MASISA PLANTA CABRERO
                  </h3>
                  <p className="text-white">
                    Montaje Lineas Moldureras 11 y Moldureras 12
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
                <div>
                  <img
                    src="Imagenes/Proyectos/masisa3.webp"
                    className="w-full object-cover"
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
                <div className="absolute inset-x-0 bottom-0 z-20 p-4">
                  <h3 className="text-base font-medium text-white">
                    MASISA S.A. PLANTA CABRERO
                  </h3>
                  <p className="text-white">
                    Montaje Electromecánico Aspiraciónes
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
                <div>
                  <img
                    src="Imagenes/Proyectos/masisa4.webp"
                    className="w-full object-cover"
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
                <div className="absolute inset-x-0 bottom-0 z-20 p-4">
                  <h3 className="text-base font-medium text-white">
                    MASISA S.A. PLANTA CABRERO
                  </h3>
                  <p className="text-white">
                    Montaje Electromecánico inyección polvo{" "}
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
                <div>
                  <img
                    src="Imagenes/Proyectos/masisa2.webp"
                    className="w-full object-cover"
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
                <div className="absolute inset-x-0 bottom-0 z-20 p-4">
                  <h3 className="text-base font-medium text-white">
                    MASISA S.A. PLANTA CABRERO
                  </h3>
                  <p className="text-white">
                    Montaje Electromecánico Sistema 8
                  </p>
                  <br />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
                <div>
                  <img
                    src="Imagenes/Proyectos/masisa5.webp"
                    className="w-full object-cover"
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
                <div className="absolute inset-x-0 bottom-0 z-20 p-4">
                  <h3 className="text-base font-medium text-white">
                    MASISA S.A. PLANTA CABRERO
                  </h3>
                  <p className="text-white">Parada De Planta</p>
                  <br />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
                <div>
                  <img
                    src="Imagenes/Proyectos/engie.webp"
                    className="w-full object-cover"
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
                <div className="absolute inset-x-0 bottom-0 z-20 p-4">
                  <h3 className="text-base font-medium text-white">ENGIE </h3>
                  <p className="text-white">Movimiento de Tierra</p>
                  <br />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
                <div>
                  <img
                    src="Imagenes/Proyectos/amsa.webp"
                    className="w-full object-cover"
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
                <div className="absolute inset-x-0 bottom-0 z-20 p-4">
                  <h3 className="text-base font-medium text-white">AMSA</h3>
                  <p className="text-white">Piscinas De Lodo</p>
                  <br />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
                <div>
                  <img
                    src="Imagenes/Proyectos/spci.webp"
                    className="w-full object-cover"
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
                <div className="absolute inset-x-0 bottom-0 z-20 p-4">
                  <h3 className="text-base font-medium text-white">SPCI</h3>
                  <p className="text-white">Circuito SPCI Planta </p>
                  <br />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
                <div>
                  <img
                    src="Imagenes/Proyectos/aeropuerto.webp"
                    className="w-full object-cover"
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
                <div className="absolute inset-x-0 bottom-0 z-20 p-4">
                  <h3 className="text-base font-medium text-white">
                    Aeropuerto SCL
                  </h3>
                  <p className="text-white">Obras Civíles Y Montaje </p>
                  <br />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
                <div>
                  <img
                    src="Imagenes/Proyectos/metso.webp"
                    className="w-full object-cover"
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
                <div className="absolute inset-x-0 bottom-0 z-20 p-4">
                  <h3 className="text-base font-medium text-white">
                    METSO - CONCÓN
                  </h3>
                  <p className="text-white">Ampliación de Planta </p>
                  <br />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
                <div>
                  <img
                    src="Imagenes/Proyectos/hlc.webp"
                    className="w-full object-cover"
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
                <div className="absolute inset-x-0 bottom-0 z-20 p-4">
                  <h3 className="text-base font-medium text-white">
                    REPRESA HLC
                  </h3>
                  <p className="text-white">Movimiento de Tierra </p>
                  <br />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
                <div>
                  <img
                    src="Imagenes/Proyectos/amsa2.webp"
                    className="w-full object-cover"
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
                <div className="absolute inset-x-0 bottom-0 z-20 p-4">
                  <h3 className="text-base font-medium text-white">AMSA</h3>
                  <p className="text-white">Mantenimiento De Caminos </p>
                  <br />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
                <div>
                  <img
                    src="Imagenes/Proyectos/ash.webp"
                    className="w-full object-cover"
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
                <div className="absolute inset-x-0 bottom-0 z-20 p-4">
                  <h3 className="text-base font-medium text-white">
                    PROYECTO ASH
                  </h3>
                  <p className="text-white">
                    Refuerzo Estructural Cinta Transportadora
                  </p>
                  <br />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
                <div>
                  <img
                    src="Imagenes/Proyectos/suez.webp"
                    className="w-full object-cover"
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
                <div className="absolute inset-x-0 bottom-0 z-20 p-4">
                  <h3 className="text-base font-medium text-white">SUEZ</h3>
                  <p className="text-white">Obras Tratamiento De Aguas</p>
                  <br />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-full text-center mt-20">
          <a
            className="inline-flex items-center justify-center bg-blue-900 text-lg font-light text-white shadow-sm transition-all duration-150 rounded-xl px-8 py-4 hover:bg-blue-900 hover:text-stone-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            href="Descargas/AbsGroup.pdf"
            target="_blank"
          >
            <i className="fas fa-file-pdf text-md" aria-hidden="true"></i>{" "}
            Descargar Brochure
          </a>
        </div>
      </>
    </div>
  );
};
export default SliderProyectosRelevantes;
