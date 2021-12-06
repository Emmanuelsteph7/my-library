import "./inputField.scss";

const InputField = ({
  type = "text",
  placeholder,
  onChange,
  name,
  label,
  id,
  value,
  autoFocus,
  disabled,
  required,
  msg,
}) => {
  const handleChange = (e) => {
    if (onChange) return onChange(e);

    return null;
  };

  return (
    <div className="inputField">
      {label && (
        <label htmlFor={id} className="inputField__label">
          {label}
        </label>
      )}
      <input
        autoFocus={autoFocus}
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={handleChange}
        name={name}
        id={id}
        value={value}
        className="inputField__input"
      />
      <span className="inputField__msg">{msg}</span>
    </div>
  );
};

export default InputField;
