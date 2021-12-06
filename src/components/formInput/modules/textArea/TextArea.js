import "./textArea.scss";

const TextArea = ({
  placeholder,
  onChange,
  name,
  label,
  id,
  value,
  autoFocus,
  cols = 20,
  rows = 5,
  required,
}) => {
  const handleChange = (e) => {
    if (onChange) return onChange(e);

    return null;
  };

  return (
    <div className="textarea">
      {label && (
        <label htmlFor={id} className="textarea__label">
          {label}
        </label>
      )}
      <textarea
        className="textarea__textarea"
        onChange={handleChange}
        value={value}
        name={name}
        autoFocus={autoFocus}
        placeholder={placeholder}
        id={id}
        cols={cols}
        rows={rows}
        required={required}
      />
    </div>
  );
};

export default TextArea;
