import { useEffect, useState } from "react";
import "./radioBtns.scss";

const RadioBtns = ({
  data,
  optionValue,
  optionLabel,
  optionKey,
  onChange,
  label,
  name,
  msg,
}) => {
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    const opts = data.map((item, index) => {
      let optionData = {
        value: item[optionValue],
        label: item[optionLabel],
        id: item[optionKey] || index,
      };

      return optionData;
    });

    setSortedData(opts);
  }, [data, optionKey, optionLabel, optionValue]);

  const handleChange = (e) => {
    if (onChange) {
      return onChange(e);
    }

    return null;
  };

  return (
    <div className="radioBtns">
      {label && <label>{label}</label>}
      <div className="radioBtns__radioGroup">
        {sortedData &&
          sortedData.map((item, index) => {
            return (
              <div key={index} className="radioBtns__radioDiv">
                <input
                  type="radio"
                  name={name}
                  onChange={handleChange}
                  className="radioBtns__input"
                  value={item.value}
                  id={item.value || item.id}
                />
                <label
                  htmlFor={item.value || item.id}
                  className="radioBtns__label"
                >
                  {item.label}
                </label>
              </div>
            );
          })}
      </div>
      <div className="radioBtns__msgDiv">
        <span className="radioBtns__msg">{msg}</span>
      </div>
    </div>
  );
};

export default RadioBtns;
