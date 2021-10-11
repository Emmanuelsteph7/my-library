import "./hamburger.scss";

const Hamburger = ({ toggleFunc, toggle }) => {
  return (
    <div className={`hamburger ${toggle && "show"}`} onClick={toggleFunc}>
      <div className="hamburger__container">
        <div className="hamburger__toggleIcon"></div>
        <div className="hamburger__toggleIcon"></div>
        <div className="hamburger__toggleIcon"></div>
      </div>
    </div>
  );
};

export default Hamburger;
