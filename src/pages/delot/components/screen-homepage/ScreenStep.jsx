// import logo from "../../public/delot/logo.png";
import logo from "../../../../public/delot/logo (2).png";
// import heder__line from "../../public/delot/heder__line.png";
import heder__line from "../../../../public/delot/heder__line.png";
import cn from "classnames";

export const ScreenStep = ({ style, className, children, bg }) => {
  return (
    <section
      className={cn("w-screen h-screen relative overflow-hidden flex flex-col", className)}
      // style={{
      //   backgroundImage: `url(${bg})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "100% 100%",
      //   ...style,
      // }}
    >
      {/* <img className="absolute inset-0 w-screen h-screen" src={bg} alt="heder__line" /> */}
      {/* <img
        style={{ zIndex: 1 }}
        className="absolute w-full object-contain left-0 h-44 top-6 hidden lg:block"
        // style={{ zIndex: -1 }}
        src={heder__line}
        alt="heder__line"
      /> */}
      <div
        className="absolute w-full h-40 left-0 right-0 top-6 hidden lg:block"
        style={{
          backgroundImage: `url(${heder__line})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "calc(max(100%, 1200px)) 160px",
          backgroundPosition: "center",
          zIndex: 1,
        }}
      />
      <img
        style={{ zIndex: 1 }}
        className="absolute select-none lg:block hidden w-32 2xl:w-40 min-w-[100px] top-11 object-contain left-1/2 -translate-x-1/2"
        src={logo}
        alt="logo"
      />
      {children}
    </section>
  );
};
