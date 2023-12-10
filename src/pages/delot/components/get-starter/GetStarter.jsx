import btn_2 from "../../../../public/delot/btn_02.png";

import bg_lines from "../../../../public/delot/bg_lines.png";
import image_01 from "../../../../public/delot/01.png";
import image_02 from "../../../../public/delot/02.png";
import image_03 from "../../../../public/delot/03.png";
import ellipse from "../../../../public/Ellipse 26.png";

import { Header } from "../../../../components/header/Header";
import { BgSpot } from "../../../../components/BgSpot";
import { CardGetStarter } from "../.././components/cards/CardGetStarter/CardGetStarter";
import { Conveyor } from "../conveyor/Conveyor";
import { Button } from "../../../../components/Button";
import Fade from 'react-reveal/Fade'; 
import Ticker from "../../../../components/Ticker";
import { useNavigate } from 'react-router-dom';


export const GetStarter = () => {
  

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

  const navigate = useNavigate();
  
  const handleButtonClick = () => {
    // Use navigate to go to another page
    navigate('/chains');
  };

  return (
    <section className="py-20 h-fit relative overflow-hidden">
      <div
        style={{
          backgroundImage: `url(${bg_lines})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "calc(max(100%, 1200px)) 85%",
          backgroundPosition: "center bottom",
        }}
        className="w-full h-full absolute inset-0 sm:block hidden"
      />
      <Header title={"GET STARTER"} subtitle={"HOW TO"} />
      <BgSpot
        style={{ zIndex: 0 }}
        className={"-left-32 -top-32 w-[800px] h-[800px]"}
        ellipse={ellipse}
      />
      <BgSpot
        style={{ zIndex: 0 }}
        className={"left-40 top-0 w-[1000px] h-[1000px]"}
        ellipse={ellipse}
      />
      <BgSpot
        style={{ zIndex: 0 }}
        className={"sm:left-1/4 -left-full bottom-0 sm:-top-1/4 w-[2000px] h-[1500px]"}
        ellipse={ellipse}
      />
      <div className="p-5 sm:p-10 relative">
        <Fade>
        <CardGetStarter
          number={"01"}
          img={image_01}
          title={"Connect, create Wallet, or Use card"}
          text={
            "Start by creating a wallet to securely store your funds and enable seamless participation in our dapp games. If you alrady have a wallet, connect your wallet and enter Dapp."
          }
        />
             </Fade>
             <Fade>
        <CardGetStarter
          number={"02"}
          img={image_02}
          title={"Access Dapp and Choose DeLot"}
          text={
            "Access our user-friendly dApp and easily select the desired lottery in which you wish to participate, maximizing your chances of winning. With multiple chains to participate on, pick your favorite chain or pick them all."
          }
        />
          </Fade>
          <Fade>
        <CardGetStarter
          number={"03"}
          img={image_03}
          title={"Mint an NFTk"}
          text={
            "Mint an NFTk with the potential to win large every cycle! Increase your odds by participating in multiple DeLots. Winners will have funds automatically distributed immediately after all NFTks sell, and a new cycle of draws will begin!"
          }
        />
          </Fade>
      </div>
      <Fade bottom>
      <Button onClick={handleButtonClick} className={"relative mx-auto  flex justify-center mb-40 mt-10"} img={btn_2} />

        </Fade>
      <Ticker textItems={textItems} className={"bg-accent-color"} />
    </section>
  );
};
