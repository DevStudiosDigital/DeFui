export const Slide = ({ icon, locked, selected_icon, unselected_icon, lock_icon, selected }) => {
  return (
    <div className="flex justify-center h-full items-center select-none ">
      <div className="justify-center shrink-0 relative items-center w-96 h-full max-h-[500px] overflow-hidden">
        {locked ? (
          <div className="absolute px-14 inset-0 flex justify-center items-center backdrop-brightness-50">
            <img className="w-36 h-36 " src={lock_icon} alt="unlocked_icon" />
          </div>
        ) : selected ? (
          <img className="w-full h-full absolute inset-0" src={selected_icon} alt="selected_icon" />
        ) : (
          <img
            className="w-full h-full absolute inset-0 p-14"
            src={unselected_icon}
            alt="unselected_icon"
          />
        )}
        <div className="w-full h-full py-14 px-5">
          <img className="w-full h-full object-contain" src={icon} alt="swiper image" />
        </div>
      </div>
    </div>
  );
};
