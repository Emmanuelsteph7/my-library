const Button = ({ label, onClick, type }) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }

    return null;
  };
  return (
    <button
      type={type ? type : "button"}
      className="button"
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;
