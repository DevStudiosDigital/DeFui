import lines from "../public/Group16.png";

export const LinesBg = ({ children }) => {
  return (
    <div
      className="absolute top-0 -right-0 h-full w-full -z-0"
      src={lines}
      alt="bg-lines"
      style={{
        backgroundImage: `url(${lines})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {children}
    </div>
  );
};
