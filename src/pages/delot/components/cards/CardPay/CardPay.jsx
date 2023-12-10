export const CardPay = ({ bg, children }) => {
  return (
    <div
      className="max-w-md flex p-5 sm:p-10 aspect-[1/1] sm:aspect-[5/4] w-full"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        // aspectRatio: 5 / 4,
      }}
    >
      {children}
    </div>
  );
};
