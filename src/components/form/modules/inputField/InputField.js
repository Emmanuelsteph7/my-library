import "./inputField.scss";

// This input field is for text, email, password, textarea and number types
const InputField = ({
  type,
  placeholder,
  onChange,
  name,
  label,
  id,
  value,
  rows,
  cols,
}) => {
  const handleChange = (e) => {
    if (onChange) {
      return onChange((prev) => ({
        ...prev,
        [e.target.name]: e.target.value || e.target.checked,
      }));
    }

    return null;
  };

  return (
    <div className="formGroup formGroup--input">
      {label && (
        <label htmlFor={id} className="formGroup__label">
          {label}
        </label>
      )}
      {type === "textarea" ? (
        <textarea
          className="formGroup__textarea"
          onChange={handleChange}
          value={value}
          name={name}
          placeholder={placeholder}
          id={id}
          cols={cols}
          rows={rows}
        >
          {value}
        </textarea>
      ) : (
        <input
          type={type ? type : "text"}
          placeholder={placeholder ? placeholder : ""}
          onChange={handleChange}
          name={name ? name : ""}
          id={id ? id : null}
          value={value ? value : ""}
          className="formGroup__input"
        />
      )}
    </div>
  );
};

export default InputField;
