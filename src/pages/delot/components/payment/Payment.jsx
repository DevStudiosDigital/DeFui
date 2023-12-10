import subtract from "../../../../public/delot/Subtract.png";
import bg_next from "../../../../public/delot/bg_next.png";
import subtract_01 from "../../../../public/delot/subtract_01.png";
import subtract_02 from "../../../../public/delot/subtract_02.png";
import subtract_03 from "../../../../public/delot/subtract_03.png";
import lol_light from "../../../../public/delot/Lol_light.png";
import happy_light from "../../../../public/delot/happy_light.png";
import rofl_light from "../../../../public/delot/Rofl_light.png";
import btn_04 from "../../../../public/delot/btn_04.png";
import frame_86 from "../../../../public/delot/Frame 86.png";
import frame_87 from "../../../../public/delot/Frame 87.png";
import frame_88 from "../../../../public/delot/Frame 88.png";
import frame_78 from "../../../../public/delot/Frame 78.png";
import frame_79 from "../../../../public/delot/Frame 79.png";
import frame_80 from "../../../../public/delot/Frame 80.png";
import frame_81 from "../../../../public/delot/Frame 81.png";
import { CardPay } from "../.././components/cards/CardPay/CardPay";
import { Button } from "../../../../components/Button";
import Fade from 'react-reveal/Fade'; 
import { useNavigate } from 'react-router-dom';



export const Payment = () => {
  const navigate = useNavigate()

  const handleButtonClick = () => {
    // Use navigate to go to another page
    navigate('/chains');
  };

  return (
    <section
      className="w-full relative min-h-[500px] px-5 bg-[length:800px_100%] sm:bg-[length:120%_95%]"
      // style={{
      //   backgroundImage: `url(${subtract})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "center bottom",
      // }}
    >
      <img
        className="absolute md:block hidden min-w-[1250px] -translate-x-1/2 left-1/2 inset-0 w-full h-full"
        src={subtract}
        alt=""
      />
      <img
        className="absolute md:hidden

      block w-full h-[97%] bottom-0 left-0"
        src={bg_next}
        alt=""
      />
      <Fade top>
      <p
        className="text-center font-bold text-3xl sm:text-5xl uppercase"
        style={{
          textShadow: "0 5px 55px #F6019D, 0 5px 100px #F6019D",
        }}
      >
        Buy with Card
      </p>
      </Fade>
      <div className="grid relative grid-cols-1 place-items-center md:grid-cols-2  xl:grid-cols-3 py-20 md:py-40  items-end hap-0 md:gap-10 ">
      <Fade>
        <CardPay bg={subtract_01}>
          <div className="flex flex-col w-full justify-center gap-3 items-center text-center min-h-fit">
            <div className="text-xl sm:text-2xl font-bold uppercase"> everyone Can Participate</div>
            <div className="text-sm lg:text-lg">
              Now you don’t have to worry about your crypto wallet because you can buy with your
              credit card
            </div>
            <div className="flex flex-wrap gap-2">
              <img src={rofl_light} alt="rofl_light" />
              <img src={lol_light} alt="lol_light" />
              <img src={happy_light} alt="happy_light" />
            </div>
          </div>
        </CardPay>
        </Fade>
        <div className="flex md:order-none order-last flex-col items-center w-full">
        <Fade>
          <CardPay bg={subtract_02}>
            <div className="flex flex-col w-full justify-center gap-3 items-center text-center min-h-fit">
              <div className="text-xl sm:text-2xl font-bold uppercase">
                All cards and payment methods
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                <img src={frame_78} alt="rofl_light" />
                <img src={frame_79} alt="lol_light" />
                <img src={frame_80} alt="happy_light" />
                <img src={frame_81} alt="happy_light" />
              </div>
            </div>
          </CardPay>
          </Fade>
          {/* <button className="mt-10">
            <img src={btn_04} alt="button" />
          </button> */}
          <Fade bottom>
          <Button onClick={handleButtonClick} className={"mt-14"} img={btn_04} />
          </Fade>
     
        </div>
        <Fade>
        <CardPay bg={subtract_03}>
          <div className="flex flex-col w-full justify-center gap-3 items-center text-center min-h-fit">
            <div className="text-xl sm:text-2xl font-bold uppercase">
              1 minute checkout. No friction
            </div>
            <div className="text-sm lg:text-lg ">Wallet created for you. No hassle.</div>
            <div className="flex flex-wrap gap-2 items-start ">
              <img className="object-contain w-16 sm:w-20" src={frame_86} alt="rofl_light" />
              <img className="object-contain  w-20" src={frame_87} alt="lol_light" />
              <img className="object-contain w-16 sm:w-20" src={frame_88} alt="happy_light" />
            </div>
          </div>
        </CardPay>
        </Fade>
      </div>
    </section>
  );
};
