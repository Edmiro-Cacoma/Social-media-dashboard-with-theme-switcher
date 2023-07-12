const Footer = ({ Theme }) => {
  return (
    <footer
      className={`text-center transition-colors ${
        Theme === "dark"
          ? "text-[#fff] bg-[#1D2029]"
          : "text-[#000] bg-[#FFFFFF]"
      }`}
    >
      <div>
        <span> Challenge by </span>
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
          className="text-green-600"
        >
          Frontend Mentor
        </a>
        <span> Coded by </span>
        <a
          href="http://https://www.frontendmentor.io/profile/Edmiro-Cacoma"
          target="_blank"
          rel="noreferrer"
          className="text-red-600"
        >
          Edmiro Cacoma
        </a>
      </div>
    </footer>
  );
};
export default Footer;
