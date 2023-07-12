const getAlternatives = (number) => {
  switch (number) {
    case 0:
      return "Facebook Icon";

    case 1:
      return "Twitter Icon";

    case 2:
      return "Instagram Icon";

    default:
      return "youtube Icon";
  }
};

const OverviewCard = ({
  title,
  number,
  percent,
  color,
  mediaIcon,
  mediaWidth,
  mediaHeight,
  arrowIcon,
  arrowWidth,
  arrowHeight,
  index,
  Theme,
}) => {
  return (
    <>
      <button
        type="button"
        className={`rounded p-5 transition-colors ${
          Theme === "dark"
            ? "bg-[#252B43] hover:bg-[#333A56]"
            : "bg-[#F0F3FA] hover:bg-[#E1E3F0]"
        }`}
      >
        <div className="flex items-center justify-between">
          <h3
            className={`text-sm font-bold transition-colors ${
              Theme === "dark" ? "text-[#8b97c6]" : "text-[#63687e]"
            }`}
          >
            {title}
          </h3>
          <img
            src={mediaIcon}
            alt={getAlternatives(index)}
            width={mediaWidth}
            height={mediaHeight}
          />
        </div>

        <div className="flex items-end justify-between pt-3">
          <p
            className={`text-3xl font-bold transition-colors ${
              Theme === "dark" ? "text-[#fff]" : "text-[#000]"
            }`}
          >
            {number}
          </p>
          <span
            className={`flex gap-1 items-center text-xs font-bold ${
              color === "green"
                ? "text-P_Color_Lime_Green"
                : "text-P_Color_Bright_Red"
            }`}
          >
            <img
              src={arrowIcon}
              aria-hidden
              width={arrowWidth}
              height={arrowHeight}
              alt=""
            />
            {percent}
          </span>
        </div>
      </button>
    </>
  );
};
export default OverviewCard;
