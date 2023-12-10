import React from 'react';
import vector_01 from "../public/delot/vector_01.png";
import Marquee from "react-fast-marquee";
const Ticker = ({ textItems }) => {
  return (
    
    <div className=" flex items-center  h-20 bg-[#B419ED] relative z-10 overflow-hidden text-white py-2 px-4">
 <Marquee direction='right'>


      {textItems.map((text, index) => (
        <div className="mr-8 flex uppercase -left-full lg:opacity-100 opacity-0  whitespace-nowrap shrink-0 items-center gap-5 text-xl font-bold text-white w-fit h-full" key={index}>
        
         <img src={vector_01} alt="vector_icon" />
         <span> {text}</span>
       </div>
      ))}
       </Marquee>
    </div>
  );
};

export default Ticker;