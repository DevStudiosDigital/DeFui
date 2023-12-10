export const ProgressCircle = ({ percent }) => {
  return (
    <div className="bg-transparent w-[26px] h-[26px] overflow-hidden rounded-full rotate-[270deg]">
      <svg className="relative w-[26px] h-[26px]">
        <circle
          className="w-[24px] h-[24px] fill-[#646464] stroke-[#646464]"
          style={{
            fill: "#646464",
            strokeWidth: 24,
          }}
          cx="13"
          cy="13"
          r="12"
        ></circle>
        <circle
          className=" stroke-[#6fe9c9]"
          style={{
            fill: "#646464",
            strokeWidth: 24,
            strokeDasharray: 80,
            strokeDashoffset: 80 - (75.5 * percent) / 100,
          }}
          cx="13"
          cy="13"
          r="12"
        ></circle>
      </svg>
    </div>
  );
};
