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

const getLines = (number) => {
  switch (number) {
    case 0:
      return "facebook_line";
    case 1:
      return "twitter_line";
    case 2:
      return "instagram_line";
    default:
      return "youtube_line";
  }
};

const FollowersCard = ({
  user,
  followers,
  update,
  color,
  iconeImageUrl,
  iconWidth,
  iconHeight,
  number,
  Theme,
  iconMediaUrl,
  mediaHeight,
  mediaWidth,
}) => {
  return (
    <>
      <button
        className={`relative rounded p-3 text-center transition-colors overflow-hidden  ${
          Theme === "dark"
            ? "bg-[#252B43] hover:bg-[#333A56]"
            : "bg-[#F0F3FA] hover:bg-[#E1E3F0]"
        } ${getLines(number)}`}
      >
        <div className="flex items-center justify-center gap-2 pb-3 pt-4">
          <img
            src={iconMediaUrl}
            alt={getAlternatives(number)}
            width={mediaWidth}
            height={mediaHeight}
            aria-hidden
          />
          <h2
            className={`text-xs font-bold transition-colors ${
              Theme === "dark" ? "text-[#8b97c6]" : "text-[#63687e]"
            }`}
          >
            {user}
          </h2>
        </div>

        <p
          className={`text-5xl font-bold transition-colors ${
            Theme === "dark" ? "text-[#fff]" : "text-[#000]"
          }`}
        >
          {followers}
        </p>
        <span
          className={`leading-3 text-xs tracking-[3px] transition-colors ${
            Theme === "dark" ? "text-[#8b97c6]" : "text-[#63687e]"
          }`}
        >
          {number === 3 ? "SUBSCRIBERS" : "FOLLOWERS"}
        </span>

        <div
          className={`flex gap-1 py-3 items-center justify-center text-xs font-bold ${
            color === "green"
              ? "text-P_Color_Lime_Green"
              : "text-P_Color_Bright_Red"
          }`}
        >
          <img
            src={iconeImageUrl}
            aria-hidden
            width={iconWidth}
            height={iconHeight}
            alt=""
          />
          <p>{update} Today</p>
        </div>
      </button>
    </>
  );
};
export default FollowersCard;
