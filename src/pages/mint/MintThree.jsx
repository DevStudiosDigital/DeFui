import { MintBg } from "../../components/MintBg";
import mint_2 from "../../public/mint_2.png";
import logo from "../../public/logo-1.png";
import arrow_left from "../../public/arrow_left.png";
import ellipse from "../../public/Ellipse 26.png";
import header__btn from "../../public/header__btn.png";
import btn__mint from "../../public/btn__mint.png";
import bg_2 from "../../public/bg_2.png";

import { LinesBg } from "../../components/LinesBg";
import { BgSpot } from "../../components/BgSpot";
import { Button } from "../../components/Button";
export const MintThree = () => {
  return (
    <div className="flex lg:flex-row flex-col min-h-screen h-full bg-black text-white">
      <div className="border-r-2 border-white lg:max-w-[45%] w-full flex flex-col">
        <MintBg bg={bg_2} style={{ backgroundSize: "100%" }}>
          <img src={mint_2} alt="main image" className="object-contain sm:h-full w-[50%]  py-12" />
          <img
            src={logo}
            alt="logo image"
            className="object-contain absolute top-4 left-4 sm:w-fit w-16 "
          />
          {/* <button className="object-contain absolute top-4 w-[40%] right-4 lg:hidden">
            <img src={header__btn} alt="button" />
          </button> */}
          <Button
            className={"object-contain absolute top-4 w-[40%] right-4 lg:hidden"}
            img={header__btn}
          />
        </MintBg>
        <div className="h-28 flex border-b-2 border-white">
          <button className="hidden uppercase hover:opacity-60 transition-opacity items-center gap-4 text-white h-full mx-auto lg:flex">
            <img src={arrow_left} alt="arrow_left_assets" />
            <span>back to dapp</span>
          </button>
          <div className="text-white w-full lg:w-fit uppercase px-5 sm:px-10 border-r-2 lg:border-r-0 lg:border-x-2 border-white flex flex-col gap-1 text-lg sm:text-2xl font-bold justify-center ">
            <p>Minted</p>
            <p>
              900/<span className="text-accent-color">1000</span>
            </p>
          </div>
          <div className="text-white w-full lg:w-fit uppercase px-5 sm:px-10 lg:border-x-2 border-white flex flex-col gap-1 text-lg sm:text-2xl font-bold justify-center ">
            <p>collected</p>
            <p>
              4.5 <span className="text-accent-color">millions</span>
            </p>
          </div>
        </div>
      </div>
      <div className="overflow-hidden w-full relative pt-10 ">
        <LinesBg>
          <BgSpot
            className={"-top-96 sm:-top-20 -right-96 sm:-right-96 w-[1200px] h-[1000px] max-w-none"}
            ellipse={ellipse}
          />
        </LinesBg>
        <div className="relative z-0 flex flex-col">
          {/* <button className="ml-auto mt-10 mr-5 lg:block hidden">
            <img src={header__btn} alt="button" />
          </button> */}
          <Button className={"ml-auto mt-10 mr-5 lg:block hidden"} img={header__btn} />
          <div className="lg:px-20 px-5 sm:px-10 flex flex-col justify-center gap-10">
            <h1 className="font-rakitek text-4xl sm:text-6xl lg:text-9xl">mint your ticket</h1>
            <ul className="list-disc ml-8 font-medium text-lg sm:text-xl">
              <li>
                Mint your NFTk for a chance to win a share of the Jackpot! Increase your odds by
                minting up to 25 tickets!{" "}
              </li>
              <li>
                5 winners will be selected to share 69% of the total revenue. See the Whitepaper for
                more details
              </li>
            </ul>
            <div className="flex border-2 border-white h-10 w-fit">
              <button className="w-10 hover:opacity-60 transition-opacity flex justify-center items-center h-full shrink-0">
                <span className="text-5xl mb-2">-</span>
              </button>
              <div className="w-12 flex justify-center items-center h-full shrink-0 border-x-2 border-white">
                <span className="text-2xl">1</span>
              </div>
              <button className="w-10 hover:opacity-60 transition-opacity flex justify-center items-center h-full shrink-0 bg-accent-color text-9xl leading-3">
                <span className="text-5xl mb-2">+</span>
              </button>
            </div>
            {/* <button className="sm:w-fit w-48">
              <img src={btn__mint} alt="btn__mint" />
            </button> */}
            <Button img={btn__mint} />
          </div>
          <button className="flex hover:opacity-60 transition-opacity items-center gap-4 uppercase text-white h-full w-full justify-center lg:hidden mt-32 py-5 border-t-2 border-white">
            <img src={arrow_left} alt="arrow_left_assets" />
            <span>back to dapp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
