import cn from "classnames";
export const LinkMenu = ({ link, img, active, only_mobile }) => {
  return (
    <a
      href={link}
      className={cn(
        "border-b hover:bg-accent-color border-white/40 w-full py-5 flex justify-center items-center",
        {
          ["xl:hidden"]: only_mobile,
          ["bg-accent-color"]: active,
        }
      )}
    >
      <img src={img} alt="group image" />
    </a>
  );
};
