export const Dashboard = ({ title, children }) => {
  return (
    <div>
      <div className="font-rakitek text-2xl sm:text-4xl mb-8">{title}</div>
      <>{children}</>
    </div>
  );
};
