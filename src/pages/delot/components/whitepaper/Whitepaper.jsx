import group_07 from "../../../../public/delot/group_07.png";
import arrow_right from "../../../../public/arrow_right.png";
import Fade from 'react-reveal/Fade'; 
export const Whitepaper = () => {
  return (
    <section className="py-10 sm:py-32 md:py-52 p-5">
      <div
        style={{
          backgroundImage: `url(${group_07})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundPosition: "top top",
        }}
        className="max-w-4xl mx-auto aspect-video"
      >
        <div className="text-center p-5 sm:p-10 md:p-20">
         <Fade top>
          <div className="text-2xl md:text-4xl font-bold mb-5">
            Learn More
          </div>
          </Fade>
          <div className="text-sm sm:text-lg md:text-xl">
          Explore the DeFui Whitepaper to learn about the exciting journey ahead. See the Future today!  A Decentralized Future, with DeFui.
          </div>
        </div>
        <Fade bottom>
        <button className="h-20 bg-accent-color hover:bg-accent-color/80 transition-colors w-full flex justify-center items-center">
          <div className="flex items-center gap-8  leading-3 font-bold ">
            <a href=" https://defui.gitbook.io/defui-whitepaper/">
            <span className="text-xl sm:text-3xl uppercase">see whitepaper</span>
            </a>
            <img className="w-10 object-contain" src={arrow_right} alt="arrow_right" />
          </div>
        </button>
        </Fade>
      </div>
    </section>
  );
};
