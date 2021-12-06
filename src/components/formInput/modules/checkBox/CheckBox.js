import "./checkBox.scss";

const CheckBox = ({ value, onChange, label, id, name, disabled }) => {
  const handleChange = (e) => {
    if (onChange) return onChange(e);

    return null;
  };

  return (
    <div className="checkbox">
      <input
        type="checkbox"
        name={name}
        onChange={handleChange}
        className="checkbox__input"
        checked={value}
        id={id}
        disabled={disabled}
      />
      <label htmlFor={id} className="checkbox__label">
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
