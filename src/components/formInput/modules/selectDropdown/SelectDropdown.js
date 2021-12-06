// import { Triangle2 } from "assets/index";
import { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { TiArrowSortedDown } from "react-icons/ti";
import "./selectDropdown.scss";

const SelectDropdown = ({
  label,
  name,
  value,
  headerLabel,
  data,
  onChange,
  optionValue,
  optionLabel,
  optionKey,
  search,
}) => {
  const [active, setActive] = useState(false);
  const [sortedData, setSortedData] = useState([]);
  const [filteredData, setFilteredData] = useState(sortedData);
  const [searchValue, setSearchValue] = useState("");

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

  useEffect(() => {
    const filtered = sortedData.filter((item) =>
      item.label?.toLowerCase().includes(searchValue?.toLowerCase())
    );

    setFilteredData(filtered);
  }, [searchValue, sortedData]);

  const handleChange = (e) => {
    if (onChange) {
      return onChange(e);
    }

    return null;
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleLabel = () => {
    setActive(!active);
    setSearchValue("");
  };

  return (
    <div className="selectDropdown" onBlur={handleLabel}>
      <div className="selectDropdown__container">
        <label className="selectDropdown__labelHeader">{label}</label>
        <div
          className={`selectDropdown__header ${active ? "active" : ""}`}
          onClick={handleLabel}
        >
          <div className="selectDropdown__headerContent">
            <span className="selectDropdown__headerText">
              {value ? value : headerLabel}
            </span>
          </div>
          <div className="selectDropdown__headerArrow">
            <TiArrowSortedDown />
          </div>
        </div>

        <div className={`selectDropdown__options ${active ? "active" : ""}`}>
          {search ? (
            <div className="selectDropdown__optionsSearch">
              <input
                type="text"
                value={searchValue}
                placeholder="Search"
                onChange={handleSearch}
              />
              <BiSearch />
            </div>
          ) : (
            ""
          )}
          <div className="selectDropdown__optionsContainer">
            {filteredData && filteredData.length ? (
              filteredData.map((item) => {
                return (
                  <div className="selectDropdown__option" key={item.id}>
                    <input
                      type="radio"
                      className="selectDropdown__radio"
                      name={name}
                      id={item.id}
                      value={item.value}
                      onChange={(e) => handleChange(e)}
                    />
                    <label
                      htmlFor={item.id}
                      onClick={handleLabel}
                      className={
                        value === item.value
                          ? "selectDropdown__label active"
                          : "selectDropdown__label"
                      }
                    >
                      {item.label}
                    </label>
                  </div>
                );
              })
            ) : (
              <label
                onClick={handleLabel}
                className="selectDropdown__label active"
              >
                No item
              </label>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectDropdown;
