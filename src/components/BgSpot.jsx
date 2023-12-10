import cn from "classnames";

export const BgSpot = ({ ellipse, className, style }) => {
  return (
    <img
      className={cn("absolute  max-w-none", className)}
      style={{ zIndex: -1, ...style }}
      src={ellipse}
      alt="bg-ellipse"
    />
  );
};
