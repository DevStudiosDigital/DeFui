export const Delots = ({ children }) => {
  return (
    <div>
      <div className="font-rakitek text-2xl py-10">Delots</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">{children}</div>
    </div>
  );
};
