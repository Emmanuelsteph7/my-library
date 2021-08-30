import "./checkBox.scss";

const CheckBox = ({ value, onChange, label, id, name }) => {
  const handleChange = (e) => {
    if (onChange) {
      return onChange((prev) => ({
        ...prev,
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      }));
    }

    return null;
  };

  return (
    <div className="formGroup formGroup--checkbox">
      <input
        defaultChecked={value}
        type="checkbox"
        name={name ? name : ""}
        onChange={handleChange}
        className="formGroup__input"
        value={value}
        id={id}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default CheckBox;
