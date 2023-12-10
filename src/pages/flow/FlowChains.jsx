import ellipse from "../../public/Ellipse 25.png";
import twitter from "../../public/twitter 1.png";
import header__btn from "../../public/header__btn.png";
import dashboard_01 from "../../public/dashboard_01.png";
import footer_logo from "../../public/footer_logo.png";

import { BgSpot } from "../../components/BgSpot";
import { chains } from "./flow.data";
import { Dashboard } from "../../components/dashboard/Dashboard";
import { Delots } from "../../components/delots/Delots";
import { DelotsCard } from "../../components/delots/DelotsCard";
import { Layout } from "./layout/Layout";
import { Button } from "../../components/Button";
import { Fade } from "react-reveal";

export const FlowChains = () => {
  return (
    <Layout>
      <div className=" py-5 pr-6 w-full flex flex-col">
        <BgSpot ellipse={ellipse} className={"bottom-[20%] right-[-50%] w-[1500px] h-[1500px]"} />
        <BgSpot ellipse={ellipse} className={"bottom-[-20%] left-[-30%] w-[1500px] h-[1500px]"} />
        <BgSpot ellipse={ellipse} className={"top-[-25%] left-[-28%] w-[1500px] h-[1500px]"} />
        <div className="xl:pl-20 pl-6">
          <div className="xl:flex hidden items-center justify-between mb-16">
          <Fade left>
            <a href="https://twitter.com/0xDefui">
              <img src={twitter} alt="twitter" />
            </a>
          </Fade>
          {/*<Fade right>
            <Button img={header__btn} />
            </Fade>*/}
          </div>
          <Dashboard title={"Chains Dashboard"}>
          <Fade>
            <div className="w-full overflow-hidden ">
              <img className="w-full object-contain" src={dashboard_01} alt="dashboard_01" />
            </div>
            </Fade>
          </Dashboard>
          <Delots>
            {chains.map((card) => (
              <Fade>
              <DelotsCard {...card} />
              </Fade>
            ))}
          </Delots>
        </div>
        <footer className="flex flex-col mt-32 ">
          <div className="grid  grid-cols-2 py-16 border-y border-white/40 md:pl-20 md:px-0 px-5 gap-7">
            <div>
              <img className="w-24 sm:w-40 object-contain" src={footer_logo} alt="footer_logo" />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-4">
                <a className="hover:underline" href="#">
                  About Defu
                </a>
                <a className="hover:underline" href="#">
                  Whitepaper
                </a>
                <a className="hover:underline" href="#">
                  Documentation
                </a>
              </div>
              <div className="flex flex-col gap-4">
                <a className="hover:underline" href="#">
                  Terms and conditions
                </a>
                <a className="hover:underline" href="#">
                  Privacy Policy
                </a>
                <a className="hover:underline" href="#">
                  Audits
                </a>
              </div>
            </div>
          </div>
          <div className="py-8">
            <div className="sm:pl-20 sm:px-0 px-5 text-sm text-[#DAD8D7]">
              DeLot © 2023 • All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </Layout>
  );
};
