import "./button.scss";

const Button = ({ label, onClick, type, styleClass }) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }

    return null;
  };
  return (
    <button
      type={type ? type : "button"}
      className={`button btn ${styleClass ? styleClass : ""}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;
