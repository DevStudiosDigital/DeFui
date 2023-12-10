import vector_header from "../../public/delot/vector_header.png";
export const Header = ({ title, subtitle }) => {
  return (
    <div
      className="w-full flex flex-col bg-[length:1100px_50px] sm:bg-[length:120%_50%] relative"
      style={{
        backgroundImage: `url(${vector_header})`,
        backgroundRepeat: "no-repeat",
        // backgroundSize: "100% 50%",
        backgroundPosition: "center bottom",
        zIndex: 1,
      }}
    >
      <div
        className="text-center font-bold pb-[50px]"
        style={{
          textShadow: "0 5px 55px #F6019D, 0 5px 100px #F6019D",
        }}
      >
        <span className="text-3xl lg:text-4xl xl:text-5xl">{subtitle}</span>
        <p className="text-4xl lg:text-5xl xl:text-6xl ">{title}</p>
      </div>
    </div>
  );
};
