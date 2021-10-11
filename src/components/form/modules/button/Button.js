import "./button.scss";

const Button = ({
  label,
  icon,
  disabled,
  onClick,
  type = "button",
  outline,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }

    return null;
  };

  let extraClass = icon && !label ? "icon" : icon && label ? "iconLabel" : "";

  return (
    <button
      type={type}
      className={`button ${disabled ? "disabled" : ""} ${extraClass} ${
        outline ? "button--outline" : ""
      }`}
      onClick={handleClick}
      disabled={disabled}
    >
      {label && label}
      {icon && icon}
    </button>
  );
};

export default Button;
