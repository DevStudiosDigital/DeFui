// import bg from "../public/bg_min.png";

export const MintBg = ({ children, bg, style, ...attr }) => {
  return (
    <div
      className={"h-full border-b-2 border-white relative flex justify-center items-center"}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        ...style,
      }}
      {...attr}
    >
      {children}
    </div>
  );
};
