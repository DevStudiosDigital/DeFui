import lines from "../assets/lines.png";

export const LinesBg = ({ children }) => {
  return (
    <div
      className="absolute top-0 -right-0 h-full w-full -z-0"
      src={lines}
      alt="bg-lines"
      style={{
        backgroundImage: `url(${lines})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      {children}
    </div>
  );
};
