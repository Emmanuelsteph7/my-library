const CheckBox = ({ selected, onChange, label, id }) => {
  const handleChange = (e) => {
    onChange(e.target.checked);
  };

  return (
    <div className="formGroup">
      <input
        defaultChecked={selected}
        type="checkbox"
        onChange={handleChange}
        value={selected}
        id={id}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default CheckBox;
