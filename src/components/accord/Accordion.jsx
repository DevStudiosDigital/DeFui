import dashboard from "../../public/dashboard.png";
import arrow_down from "../../public/arrow-down.png";
import { useState } from "react";
import cn from "classnames";
import { useRef } from "react";
import { useNavigate } from 'react-router-dom';

export const Accordion = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(true);
  const ref = useRef(null);
  console.log(ref.current && ref.current.scrollHeight);

  const navigate = useNavigate()

  const arrowClickHandler = () => {
    navigate('/' + title)
  }

  return (
    <div
      className="flex flex-col border-b border-white/40"
      style={{ "--h-collapse": `${ref.current && ref.current.scrollHeight}px` }}
    >
      <div
        className="flex items-center px-6 py-2 gap-2 mb-2 cursor-pointer w-full"
        onClick={() => setIsOpen((prev) => !prev)}
        
      >
        <img src={dashboard} alt="dashboard" onClick={arrowClickHandler}/>
        <span className="font-bold" onClick={arrowClickHandler}>{title} Dashboard</span>
        <img
          src={arrow_down}
          alt="arrow_down"
          className={cn("w-7 h-7 ml-auto transition-all", {
            ["rotate-180"]: !isOpen,
          })}
        />
      </div>
      <div
        ref={ref}
        className={cn("h-0 overflow-hidden transition-all duration-300", {
          ["h-[--h-collapse]"]: isOpen,
        })}
      >
        {children}
      </div>
      {/* {isOpen && <div>{children}</div>} */}
    </div>
  );
};
