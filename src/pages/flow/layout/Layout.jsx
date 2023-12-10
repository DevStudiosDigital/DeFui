import { Menu } from "./Menu";

export const Layout = ({ children }) => {
  return (
    <div className="w-full min-h-screen h-fit bg-black text-white flex flex-col relative overflow-hidden z-0">
      <div className="flex flex-col xl:flex-row  w-full h-full flex-1 relative">
        <Menu />
        {children}
      </div>
    </div>
  );
};
