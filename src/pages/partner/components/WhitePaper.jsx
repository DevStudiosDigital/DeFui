import group_07 from "../assets/group_07.png";
import arrow_right from "../assets/arrow_right.png";
import { Fade } from "react-reveal";

export const Whitepaper = () => {
  return (
    <section className="py-10 sm:py-32 md:py-52 p-5 text-white ">
      <div
        style={{
          backgroundImage: `url(${group_07})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundPosition: "top top",
        }}
        className="max-w-4xl mx-auto aspect-video bg-white/5 flex flex-col"
      >
        <div className="text-center p-5 sm:p-10 md:p-20">
         <Fade top>
         <div className="text-2xl md:text-4xl font-bold mb-5 uppercase">
            Join us AND Explore the DeFui Whitepaper
          </div>
         </Fade>
        <Fade >
        <div className="text-sm sm:text-lg md:text-xl">
            Learn more about DeFui and our Delot Partnership and future Partnership opportunities
          </div>
        </Fade>
       
        </div>
        <Fade bottom>
        <button className="h-20 bg-[#B419ED] hover:bg-[#B419ED]/70 mt-auto hover:bg-accent-color/80 transition-colors w-full flex justify-center items-center">
          <div className="flex items-center gap-8  leading-3 font-bold ">
            <span className="text-xl sm:text-3xl uppercase">learn more</span>

            <img className="w-10 object-contain" src={arrow_right} alt="arrow_right" />
          </div>
        </button>
        </Fade>
      
      </div>
    </section>
  );
};
