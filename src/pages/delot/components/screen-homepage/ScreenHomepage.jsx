import bg from "../../../../public/delot/image_02.png";
import bgLogo from "../../../../public/logo-1.png";
import { Conveyor } from "../conveyor/Conveyor";
import { Menu } from "./menu/Menu";
import { ScreenStep } from "./ScreenStep";
import { SwiperWrapper } from "../swiper/SwiperWrapper";
import Ticker from "../../../../components/Ticker";

export const ScreenHomepage = () => {
  const textItems = [
    "Get your NFTk on your favorite chain!",
    "Join Delot to win big!",
    "Get your NFTk on your favorite chain!",
    "Join Delot to win big!",
    "Get your NFTk on your favorite chain!",
    "Join Delot to win big!",
    "Get your NFTk on your favorite chain!",
    "Join Delot to win big!",
    "Get your NFTk on your favorite chain!",
    "Join Delot to win big!",
    "Get your NFTk on your favorite chain!",
    "Join Delot to win big!",
  ]
  return (
    <div className="relative">
      <div className="absolute z-[999] top-[53px] left-0 md:block hidden">
        <img src={bgLogo} alt="logo-text" />
      </div>
      <ScreenStep
        className={"bg-black "}
        style={{
          backgroundSize: "calc(max(100%, 1200px)) 90%",
          backgroundPosition: "center center",
        }}
        bg={bg}
      >
        <SwiperWrapper />
        <Menu />
        <div
          style={{ zIndex: 1 }}
          className="text-white select-none pointer-events-none text-lg sm:text-2xl max-w-4xl text-center p-5 mx-auto mt-auto h-fit "
        >
          Step into a realm where blockchain's promise becomes reality. With DeFui, we're not just
          embracing the future – we're sculpting it. Decentralize the Future with us.
        </div>

        {/* <Conveyor /> */}
        <Ticker textItems={textItems} />
      </ScreenStep>
    </div>
  );
};
