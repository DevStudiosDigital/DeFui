import { Whitepaper } from "./WhitePaper";
import arrow_tr from "../assets/arrow-tr.png";
import arrow_tr_pink from "../assets/arrow_tr_pink.png";
import {Fade} from 'react-reveal'
export const WhyPartner = () => {
  return (
    <section className="py-12 sm:py-24 bg-black text-white">
      <div className="max-w-6xl px-5 mx-auto">
        <div className=" w-full text-center mb-10">
         <Fade top>
         <h2 className="uppercase underline [text-shadow:0_0_50px_white] font-RacingSansOne text-4xl sm:text-6xl mb-10 ">
            WHY partner?
          </h2>
         </Fade>
       <Fade bottom>
       <span className="text-base sm:text-lg text-[#8793AB]">
            A partner program is formalized relationships with existing businesses who have their
            own customer base, website visitors or other sales channels, from which you can benefit
            being exposed to
          </span>
       </Fade>
       
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <Fade>
          <div className="bg-white   p-5 flex flex-col gap-5">
            <div className="text-[#20203E] font-medium text-2xl">
              Enhanced Community Engagement and Loyalty
            </div>
            <div className="text-[#8793AB] mb-10">
              Launching your own DeLot offers an innovative way to engage your community, driving
              interaction and participation to new heights. The excitement of a lottery system not
              only captivates your audience but also fosters a sense of community and loyalty,
              making your platform more sticky and reducing user churn.
            </div>
            <a
              href="#"
              className="text-[#B419ED] mt-auto  hover:underline hover:opacity-75 transition-all flex items-center gap-2"
            >
              Learn more <img src={arrow_tr_pink} alt="arrow_tr" />{" "}
            </a>
          </div>
    

          </Fade>
          <Fade>
          <div className="bg-[#B419ED]  text-white p-5 flex flex-col gap-5">
            <div className=" font-medium text-2xl">New Revenue Streams with Zero Initial Cost</div>
            <div className="mb-10">
              DeLot provides a fresh avenue for monetization, allowing you to generate additional
              revenue from lottery participation. As an early adopter, you can take advantage of our
              limited-time offer for free DeLot development, making it a risk-free investment with
              high upside potential.
            </div>
            <a
              href="#"
              className="text-white mt-auto hover:underline hover:opacity-75 transition-all flex items-center gap-2"
            >
              Learn more <img src={arrow_tr} alt="arrow_tr" />{" "}
            </a>
          </div>
          </Fade>
          <Fade>

       
          <div className="bg-white   p-5 flex flex-col gap-5">
            <div className="text-[#20203E] font-medium text-2xl">
              Customization and Brand Alignment
            </div>
            <div className="text-[#8793AB] mb-10">
              Our adaptable decentralized lottery system is designed for seamless integration and
              can be tailored to reflect your project's unique branding and ethos. This not only
              enhances user experience but also strengthens your brand identity in a crowded
              marketplace.
            </div>
            <a
              href="#"
              className="text-[#B419ED] mt-auto  hover:underline hover:opacity-75 transition-all flex items-center gap-2"
            >
              Learn more <img src={arrow_tr_pink} alt="arrow_tr" />
            </a>
          </div>
          </Fade>
        </div>
      </div>
      <Whitepaper />
    </section>
  );
};
