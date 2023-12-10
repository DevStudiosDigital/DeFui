import { useState } from "react";
import cn from "classnames";
export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="ml-auto lg:hidden flex ">
      <div
        className={cn(
          "text-5xl flex flex-col backdrop-blur-sm pt-32 gap-8 fixed inset-0 z-30 min-h-screen w-screen transition-all bg-black/70 p-10",
          {
            ["translate-x-full"]: !isOpen,
            ["translate-x-0"]: !isOpen,
          }
        )}
      >
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

      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-10 h-5 absolute top-[40px] right-7  z-50"
      >
        <div
          className={cn("w-full h-[2px] absolute bg-white", {
            ["rotate-45 top-1/2 -translate-y-1/2"]: isOpen,
            ["rotate-0 top-0"]: !isOpen,
          })}
        ></div>
        <div
          className={cn("w-full h-[2px] absolute -translate-y-1/2 bg-white transition-all", {
            ["opacity-0 w-0"]: isOpen,
            ["opacity-100 w-full top-1/2"]: !isOpen,
          })}
        ></div>
        <div
          className={cn("w-full h-[2px] absolute bg-white", {
            ["-rotate-45 top-1/2 -translate-y-1/2"]: isOpen,
            ["rotate-0 top-full"]: !isOpen,
          })}
        ></div>
      </div>
    </div>
  );
};
