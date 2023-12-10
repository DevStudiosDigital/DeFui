import cn from "classnames";
export const Button = ({ img, className, onClick }) => {
  return (
    <button className={cn("w-fit max-w-[80%] hover:opacity-60 transition-opacity", className)} onClick={onClick}>
      <img className="w-full" src={img} alt="btn_2" />
    </button>
  );
};
