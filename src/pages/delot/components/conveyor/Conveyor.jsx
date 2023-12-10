import vector_01 from "../../../../public/delot/vector_01.png";
import cn from "classnames";

export const Conveyor = ({ className }) => {
  return (
    <div className={cn("w-full h-20 bg-[#B419ED] relative z-10 overflow-hidden", className)}>
      <div className="flex items-center h-full gap-80 w-fit">
    
        <div
          className="flex uppercase -left-full lg:opacity-100 opacity-0 animate-conveyor absolute whitespace-nowrap shrink-0 items-center gap-5 text-xl font-bold text-white w-fit h-full"
          style={{
            animationDelay: "2s", // Adjust the animation delay for a slower animation
          }}
        >
          <img src={vector_01} alt="vector_icon" />
          <span>Get your NFTk on your favorite chain!</span>
        </div>
        <div
          className="flex uppercase -left-full sm:opacity-100 opacity-0 animate-conveyor absolute whitespace-nowrap shrink-0 items-center gap-5 text-xl font-bold text-white w-fit h-full"
          style={{
            animationDelay: "8s", // Adjust the animation delay for a slower animation
          }}
        >
          <img src={vector_01} alt="vector_icon" />
          <span>Join Delot to win big!</span>
        </div>
        <div
          className="flex uppercase -left-full sm:opacity-100 opacity-0 animate-conveyor absolute whitespace-nowrap shrink-0 items-center gap-5 text-xl font-bold text-white w-fit h-full"
          style={{
            animationDelay: "12s", // Adjust the animation delay for a slower animation
          }}
        >
          <img src={vector_01} alt="vector_icon" />
          <span>Get your NFTk on your favorite chain!</span>
        </div>
        <div
          className="flex uppercase -left-full sm:opacity-100 opacity-0 animate-conveyor absolute whitespace-nowrap shrink-0 items-center gap-5 text-xl font-bold text-white w-fit h-full"
          style={{
            animationDelay: "18s", // Adjust the animation delay for a slower animation
          }}
        >
          <img src={vector_01} alt="vector_icon" />
          <span>Join Delot to win big!</span>
        </div>
      </div>
    </div>
  );
};
