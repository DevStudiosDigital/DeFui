import logo from "../../../public/logo-1.png";
import nav_title from "../../../public/nav-title.png";
import close from "../../../public/close.png";
import burger_icon from "../../../public/burger-icon.png";
import header__btn from "../../../public/header__btn.png";

import { Accordion } from "../../../components/accord/Accordion";
import { Link } from "../../../components/Link";
import { chains, pools, stables } from "../flow.data";
import { useState } from "react";
import cn from "classnames";
import { links } from "./menu.data";
import { LinkMenu } from "./LinkMenu";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className={cn("fixed bg-black/70 inset-0", {
          ["block"]: isOpen,
          ["hidden"]: !isOpen,
        })}
      ></div>
      <div
        className={cn(
          `
        xl:bg-transparent
        xl:relative 
        xl:left-0
        xl:z-auto
        z-20
        sm:max-w-lg
        min-h-screen
        max-w-xs 
        w-full 
        border-r 
        border-white/40 
        flex 
        fixed
        transition-all
        bg-black`,
          {
            ["left-0"]: isOpen,
            ["left-[-100%]"]: !isOpen,
          }
        )}
      >
        <div className="sm:w-32 w-16 shrink-0 h-full">
          <div className="aspect-square w-full  border-b border-white/40 flex justify-center items-center">
            <a href="#" className="hidden xl:flex ">
              <img src={logo} alt="logo" className="object-contain" />
            </a>
            <img
              onClick={() => setIsOpen(false)}
              src={close}
              alt="logo"
              className="object-contain xl:hidden block"
            />
          </div>
          {links.map((l) => (
            <LinkMenu {...l} />
          ))}
        </div>

        <div className="flex-1 flex flex-col shrink-0 overflow-y-auto h-screen xl:h-full border-l border-white/40  ">
          <div className="border-b shrink-0 border-white/40 w-full py-5 px-2">
            <img src={nav_title} alt="nav_title" />
          </div>
          <nav>
            <Accordion title={"Chains"}>
              {chains.map((link) => (
                <Link key={link.title} icon={link.icon} title={link.contractAddress == '' ? link.title + ' DeLot' : link.title + ' DeLot'} link={link.contractAddress == '' ? null : '/mint/' + link.title}/>
              ))}
            </Accordion>
            <Accordion title={"Stables"}>
              {stables.map((link) => (
                <Link key={link.title} icon={link.icon} title={link.contractAddress == '' ? link.title + ' DeLot' : link.title + ' DeLot'}  link={link.contractAddress == '' ? null : '/mint/' + link.title} />
              ))}
            </Accordion>
            <Accordion title={"Pools"}>
              {pools.map((link) => (
                <Link key={link.title} icon={link.icon} title={link.title} link={null} />
              ))}
            </Accordion>
          </nav>
        </div>
      </div>
      <div className="xl:hidden flex px-3 py-2 pt-5 items-center justify-between gap-4">
        <div onClick={() => setIsOpen(true)}>
          <img className="w-20 aspect-square object-contain" src={burger_icon} alt="burger_icon" />
        </div>
        <a href="#">
          <img className="w-24" src={logo} alt="logo" />
        </a>
        <button>
          <img className="w-52" src={header__btn} alt="header__btn" />
        </button>
      </div>
    </>
  );
};
