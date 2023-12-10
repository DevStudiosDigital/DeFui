export const CardGetStarter = ({ number, img, title, text }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 border lg:border-b border-white/40">
      <div className="flex w-full border-b lg:border-none">
        <div className="w-full border-r border-white/40 flex justify-center items-center lg:items-start text-4xl font-medium p-5">
          {number}
        </div>
        <div className="w-full p-5 border-r border-white/40 flex justify-center">
          <img className="w-2/4  object-contain" src={img} alt={title} />
        </div>
      </div>
      <div className="w-full  p-5 sm:p-14">
        <div className=" text-xl sm:text-3xl 2xl:text-4xl font-bold mb-5 uppercase">{title}</div>
        <div className="font-medium text-base sm:text-lg xl:text-xl ">{text}</div>
      </div>
    </div>
  );
};
