// import border_card from "../../../../../public/delot/border_card.png";
// import group_for_card from "../../../../../public/delot/group_for_card.png";
// import { BgSpot } from "../../../../components/BgSpot";
import { BgSpot } from "../../../../../components/BgSpot";
import border_card from "../../../../../public/delot/border_card.png";
import group_for_card from "../../../../../public/delot/group_for_card.png";
import cn from "classnames";

// import { BgSpot } from "../../../../components/BgSpot";

export const Cardpan = ({ img, children, title, className, cnLeft, cnRight, cnTitle }) => {
  return (
    <div className="flex md:border-b px-5 border-white/40">
      <div
        className={cn(
          "flex md:flex-row flex-col md:border-none  border border-white/40 max-w-lg md:max-w-6xl mx-auto gap-5",
          className
        )}
      >
        <div
          className={cn(
            "max-w-lg w-full flex justify-center md:border-none border-white/40 border-b items-center p-5",
            cnLeft
          )}
          style={{
            backgroundImage: `url(${border_card})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            aspectRatio: 3 / 1,
          }}
        >
          <img className="max-w-[90%]" src={img} alt="icon for card" />
        </div>
        <div className={cn("w-full p-5 relative", cnRight)}>
          <BgSpot
            style={{ zIndex: 0 }}
            className={"w-8 h-8 top-5 md:top-1/2 right-0"}
            ellipse={group_for_card}
          />
          <BgSpot
            style={{ zIndex: 0 }}
            className={"w-8 h-8 top-5 md:top-1/2 right-10"}
            ellipse={group_for_card}
          />
          <BgSpot
            style={{ zIndex: 0 }}
            className={"w-8 h-8 top-5 md:top-1/2 right-20"}
            ellipse={group_for_card}
          />
          <p
            // style={{
            //   textShadow: "0 5px 46px #F6019D, 0 5px 46px #F6019D",
            // }}
            className={cn(
              `text-[#F6019D] text-xl sm:text-2xl font-bold 
              [text-shadow:0_0px_35px_#F6019D,0_10px_35px_#F6019D] 
              mb-4`,
              cnTitle
            )}
          >
            {title}
          </p>
          <p className="sm:text-base text-sm">{children}</p>
        </div>
      </div>
    </div>
  );
};
