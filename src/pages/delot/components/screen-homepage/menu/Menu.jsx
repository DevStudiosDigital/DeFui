import { useState } from "react";
import menu_icon from "../../../../../public/burger-icon.png";
import logo from "../../../../../public/logo-1.png";
import close from "../../../../../public/close.png";
import cn from "classnames";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="lg:absolute flex lg:top-20 lg:right-40 text-white  lg:w-fit w-full">
      <div className="lg:hidden z-10 flex w-full justify-between border-b backdrop-blur-sm bg-black/50 border-white/40 px-5 py-3">
        <div className="">
          <img src={logo} alt="logo" />
        </div>
        <button onClick={() => setIsOpen((prev) => !prev)} className="">
          {isOpen ? <img src={close} alt="close icon" /> : <img src={menu_icon} alt="menu icon" />}
        </button>
      </div>
      <div className="lg:flex gap-10 text-lg font-medium items-center  hidden">
        <a className="hover:underline" href="#">
          About
        </a>
        <a className="hover:underline" href="#">
          Docs
        </a>
        <a className="hover:underline" href="#">
          Ecosystem
        </a>
        <a className="hover:underline" href="#">
          Contact
        </a>
      </div>
      <div
        className={cn("fixed inset-0 bg-black/90 transition-all flex flex-col p-5", {
          ["translate-x-full"]: !isOpen,
          ["translate-x-0"]: isOpen,
        })}
      >
        <div className="pt-40 text-white flex flex-col font-medium text-5xl gap-5">
          <a className="hover:underline" href="#">
            About
          </a>
          <a className="hover:underline" href="#">
            Docs
          </a>
          <a className="hover:underline" href="#">
            Ecosystem
          </a>
          <a className="hover:underline" href="#">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};
