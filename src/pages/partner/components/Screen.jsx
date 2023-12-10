import lines from "../assets/lines.png";
import ellipse from "../assets/ellipse.png";
import header_line from "../assets/heder__line.png";
import logo_2 from "../assets/logo (2).png";
import logo_1 from "../assets/logo-1.png";
import video_bg from "../assets/video-bg.png";
import arrow_tr from "../assets/arrow-tr.png";
import { LinesBg } from "./LinesBg";
import { BgSpot } from "../../../components/BgSpot";
import Ticker from "../../../components/Ticker";
import { Fade } from "react-reveal";
import { Menu } from "./Menu";

export const Screen = () => {
  const textItems = [
    "Play the Delot to win big!",
    "No MAtter the chain you prefer, DeFUi has you covered!",
    "Play the Delot to win big!",
    "No MAtter the chain you prefer, DeFUi has you covered!",
    "Play the Delot to win big!",
    "No MAtter the chain you prefer, DeFUi has you covered!",
    "Play the Delot to win big!",
    "No MAtter the chain you prefer, DeFUi has you covered!",
    "Play the Delot to win big!",
    "No MAtter the chain you prefer, DeFUi has you covered!",
    "Play the Delot to win big!",
    "No MAtter the chain you prefer, DeFUi has you covered!",
  ]
  return (
    <div className="min-h-screen w-full bg-black flex flex-col relative text-white overflow-x-hidden">
      <div>
        <img
          style={{ zIndex: 1 }}
          className="w-full min-w-[1000px] left-1/2 -translate-x-1/2 absolute h-auto object-contain"
          src={header_line}
          alt="header_line"
        />
        <img
          style={{ zIndex: 1 }}
          className="absolute left-1/2 -translate-x-1/2 top-5 w-20 xl:w-32 2xl:w-44"
          src={logo_2}
          alt="logo_2"
        />
             <Menu />
      </div>
      <div className="flex lg:flex-row flex-col h-full flex-1 ">
        <div className="w-full relative min-h-[300px] lg:flex-shrink flex-shrink-0 grow">
          <img className="absolute inset-0 w-full h-full" src={video_bg} alt="video_bg" />
          <div className="relative p-2 sm:p-5">
            <img src={logo_1} alt="logo_1" />
          </div>
        </div>
        <div className="w-full relative overflow-hidden">
          <LinesBg />
          <BgSpot
            style={{ zIndex: 0 }}
            ellipse={ellipse}
            className={"w-[1500px] h-[1000px] -top-1/2 -right-1/2"}
          />
          <div
            style={{ zIndex: 2 }}
            className="relative p-5 flex flex-col gap-20 justify-between h-full py-10"
          >
            <div className="lg:flex text-base sm:text-lg hidden  grid grid-cols-2 gap-5 xl:gap-10 lg:ml-auto mr-0 lg:mr-10 ">
              <a className="font-medium hover:underline hover:opacity-75 transition-all" href="#">
                Partner
              </a>
              <a className="font-medium  hover:underline hover:opacity-75 transition-all" href="#">
                About
              </a>
              <a className="font-medium  hover:underline hover:opacity-75 transition-all" href="#">
                Docs
              </a>
              <a className="font-medium  hover:underline hover:opacity-75 transition-all" href="#">
                Ecosystem
              </a>
              <a className="font-medium  hover:underline hover:opacity-75 transition-all" href="#">
                Contact
              </a>
            </div>
            <div className="flex flex-col px-2 sm:px-5 lg:px-10 xl:px-14">
              <Fade>
              <h1 className="uppercase underline font-RacingSansOne text-5xl xl:text-7xl">
                Partner
              </h1>
              </Fade>
              <Fade right>
              <span className="text-2xl xl:text-4xl font-RacingSansOne uppercase">Launch your own Delot</span>

              </Fade>
              <ul className="list-disc ml-5 mt-5 flex flex-col gap-2 text-sm sm:text-base xl:text-lg font-medium">
                <Fade top>
                <li>
                  At DeFui, our Mission is to decentralize the future through gaming and
                  entertainment. Join the DeFu initiative ecosystem. and launch your own DeLot for
                  your project.
                </li>
                </Fade>
                <Fade bottom>
                <li>
                  Whether you are an NFT Project, Crypto Project, DAO, Alpha Community, or any other
                  project/community, you can start our own DeLot today with DeFui’s DeLot
                  Partnership opportunity
                </li>
                </Fade>
             
              </ul>
            </div>
            <div className="flex">
            <Fade>
            <button className="bg-[#B419ED] text-sm w-full sm:w-fit sm:text-base hover:bg-[#B419ED]/80 transition-colors font-mono px-2 sm:px-6 py-1 sm:py-3 text-center">
                Become a partner
              </button>
            </Fade>
           <Fade>
   <button className="hover:border-[#B419ED] text-sm w-full sm:w-fit sm:text-base border-transparent border-2 transition-all font-mono px-2 sm:px-6 py-1 sm:py-3 text-center flex gap-2 items-center">
              Learn more
                <img src={arrow_tr} alt="arrow_tr" />
              </button>
           </Fade>
           
            </div>
          </div>
        </div>
      </div>
      <Ticker textItems={textItems} className={"bg-accent-color"} />

    </div>
  );
};
