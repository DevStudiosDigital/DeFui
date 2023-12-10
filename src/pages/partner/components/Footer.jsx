// import footer_logo from "../../../../public/footer_logo.png";
import footer_logo from "../assets/footer_logo.png";

export const Footer = () => {
  return (
    <footer className="flex flex-col mt-10 ">
      <div className="grid items-start grid-cols-2 py-16 border-y border-white/40 md:pl-20 md:px-0 px-5 gap-7">
        <div className="flex justify-start sm:justify-center ">
          <img className="w-24 sm:w-40 object-contain" src={footer_logo} alt="footer_logo" />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <a className="hover:underline" href="#">
              About Defu
            </a>
            <a className="hover:underline" href="#">
              Whitepapper
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
        <div className="sm:pl-20 sm:px-0 px-5 text-sm text-[#DAD8D7] text-center">
          DeLot © 2023 • All rights reserved.
        </div>
      </div>
    </footer>
  );
};
