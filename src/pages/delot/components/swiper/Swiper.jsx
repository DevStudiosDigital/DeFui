import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import frame from "../../../../public/delot/Frame_115-removebg-preview.png";
import "swiper/css";
import "swiper/css/pagination";
import "./swiper.css";

import { Slide } from "./Slide";

export const SwiperContainer = ({ cards, bg }) => {
  const arr = [...cards];
  const pagination = {
    clickable: true,
    dynamicBullets: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  return (
    <div
      className="absolute inset-0 flex  h-full"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 90%",
        backgroundPosition: "center center",
        zIndex: 0,
      }}
    >
      <Swiper
        modules={[EffectCoverflow, Pagination]}
        effect="coverflow"
        className="w-full absolute -top-20 h-full"
        slidesPerView={1}
        loop={true}
        pagination={pagination}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: -60,
          depth: 100,
          modifier: 4,
          slideShadows: false,
        }}
        style={{ zIndex: 20 }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 0,
          },

          1024: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
        }}
      >
        {arr.map((el, index) => {
          return (
            <SwiperSlide className="" key={index}>
              <Slide {...el} />
            </SwiperSlide>
            // <SwiperSlide key={index}>
            //   <div className="flex justify-center h-full items-center select-none ">
            //     <div className="justify-center shrink-0 relative items-center w-96 h-full max-h-[500px] overflow-hidden">
            //       <div className="absolute inset-0 py-14 px-4">
            //         <img className="w-full h-full object-fill" src={el.icon} alt="swiper image" />
            //       </div>
            //       <img
            //         className="w-full h-full relative"
            //         src={el.unlocked_icon}
            //         alt="unlocked_icon"
            //       />
            //     </div>
            //   </div>
            // </SwiperSlide>
          );
        })}
        <div className="flex gap-24 sm:gap-40 items-center text-xl absolute left-1/2 -translate-x-1/2 z-10 bottom-44 sm:bottom-32">
          <ArrowLeft />
          <ArrowRight />
        </div>
      </Swiper>
    </div>
  );
};

const ArrowLeft = () => {
  const swiper = useSwiper();
  return (
    <div onClick={() => swiper.slidePrev()} className="w-24 sm:w-32 h-24 sm:h-32">
      <img
        className="hover:drop-shadow-[0_0px_10px_#50D5F5] pt-1 w-full h-full transition-all cursor-pointer"
        src={frame}
        alt="arrow left"
      />
    </div>
  );
};
const ArrowRight = () => {
  const swiper = useSwiper();
  return (
    <div onClick={() => swiper.slideNext()} className="w-24 sm:w-32 h-24 sm:h-32">
      <img
        className="hover:drop-shadow-[0_0px_10px_#50D5F5] pt-1 w-full h-full rotate-180 transition-all  cursor-pointer"
        src={frame}
        alt="arrow left"
      />
    </div>
  );
};
