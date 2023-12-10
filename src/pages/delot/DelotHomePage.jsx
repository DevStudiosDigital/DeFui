// import { ScreenHomepage } from "../../components/screen/screen-homepage/ScreenHomepage";
import logo_inv_1 from "../../public/delot/logo_inv_01.png";
import logo_inv_2 from "../../public/delot/logo_inv_02.png";
import logo_inv_3 from "../../public/delot/logo_inv_03.png";
import { Footer } from "./components/footer/Footer";
import { Introducing } from "./components/introducing/Introducing";
import { Payment } from "./components/payment/Payment";
import { GetStarter } from "./components/get-starter/GetStarter";
import { Whitepaper } from "./components/whitepaper/Whitepaper";
import { ScreenHomepage } from "./components/screen-homepage/ScreenHomepage";
import { Fade } from "react-reveal";
export const DelotHomePage = () => {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <ScreenHomepage />
      <section className="py-20 sm:py-40 px-10 sm:px-20">
        <div className="flex gap-x-24 items-center justify-center flex-wrap">
         <Fade left>
         <img src={logo_inv_1} alt="logo_inv_1" />
         </Fade>
      <Fade>
      <img src={logo_inv_2} alt="logo_inv_1" />
      </Fade>
         
          <Fade right>
          <img src={logo_inv_3} alt="logo_inv_1" />
          </Fade>
   
        </div>
      </section>
      <Introducing />
      <Payment />
      <GetStarter />
      <Whitepaper />
      <Footer />
    </div>
  );
};
