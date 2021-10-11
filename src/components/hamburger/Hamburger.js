import "./hamburger.scss";

const Hamburger = ({ toggleFunc, toggle }) => {
  const handleClick = () => {
    if (toggleFunc) {
      return toggleFunc();
    }

    return null;
  };
  return (
    <div className={`hamburger ${toggle && "show"}`} onClick={handleClick}>
      <div className="hamburger__container">
        <div className="hamburger__toggleIcon"></div>
        <div className="hamburger__toggleIcon"></div>
        <div className="hamburger__toggleIcon"></div>
      </div>
    </div>
  );
};

export default Hamburger;
