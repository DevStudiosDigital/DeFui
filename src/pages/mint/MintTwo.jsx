import mint_2 from "../../public/mint_2.png";
import twitter from "../../public/twitter 1.png";
import ellipse from "../../public/Ellipse 26.png";
import logo from "../../public/logo-1.png";
import bg_min from "../../public/bg_min.png";
import { MintBg } from "../../components/MintBg";
import { LinesBg } from "../../components/LinesBg";
import { BgSpot } from "../../components/BgSpot";

export const MintTwo = () => {
  return (
    <div className="w-full min-h-screen sm:h-screen flex sm:flex-row flex-col bg-black overflow-y-scroll">
      <div className="sm:max-w-[45%] w-full border-r-2 border-white h-full flex flex-col">
        <MintBg bg={bg_min}>
          <img src={mint_2} alt="main image" className="object-contain sm:h-full w-[50%]" />
        </MintBg>
        <div className="flex justify-between shrink-0 lg:h-28 h-16">
          <a
            href="#twitter"
            className="flex items-center justify-center h-full aspect-square border-r-2 border-white"
          >
            <img src={twitter} alt="twitter icon" className="object-contain w-[60%]" />
          </a>
          <button className="bg-[#F6019C] h-full hover:opacity-60 transition-opacity w-80 border-l-2 border-white text-white text-2xl font-bold uppercase ">
            mint now
          </button>
        </div>
      </div>

      <div className="w-full h-full border relative overflow-hidden">
        <LinesBg>
          <BgSpot
            className={
              "-top-96 sm:-top-52 -right-80 sm:-right-[500px] w-[1500px] h-[1500px] max-w-none"
            }
            ellipse={ellipse}
          />
        </LinesBg>
        <div className="relative h-full flex flex-col">
          <div className="lg:h-32 h-24 shrink-0 sm:border-b-2 border-white ">
            <a
              href="#home"
              className="flex justify-center items-center h-full sm:border-x-2 border-white sm:ml-auto sm:mr-24 w-fit mx-auto sm:mx-0 px-10"
            >
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="h-full flex">
            <div className="text-white max-w-xl mx-auto flex justify-center p-7  flex-col">
              <p className="font-rakitek lg:text-7xl text-3xl">mint your ticket</p>
              <p className="font-medium lg:text-lg text-sm">
                Access our user-friendly dApp and easily select the desired lottery in which you
                wish to participate, maximizing your chances of winning.
              </p>
            </div>
          </div>
          <button className="lg:text-4xl text-xl sm:px-0 px-5 font-medium lg:max-w-md max-w-xs text-white w-full flex lg:mb-28 mb-16">
            <div className="h-full w-5 bg-red-500 border-y-2 border-white sm:block hidden" />
            <span className="py-6 border-2 border-white block w-full">DeFuToken_2023</span>
          </button>
        </div>
      </div>
    </div>
  );
};
