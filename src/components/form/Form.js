import Button from "./modules/button/Button";
import CheckBox from "./modules/checkBox/CheckBox";
import InputDropdown from "./modules/inputDropdown/InputDropdown";
import InputField from "./modules/inputField/InputField";
import "./form.scss";

const handleFormData = (data, state, stateFunc) => {
  let newArray = [];
  let stateKeys = Object.keys(state);

  data.forEach((item) => {
    stateKeys.forEach((key) => {
      if (key === item.name) {
        item.value = state[key];
        item.onChange = stateFunc;
        newArray.push(item);
      }
    });

    if (item.name === "button") {
      newArray.push(item);
    }
  });

  return newArray;
};

const Form = ({
  data,
  state,
  stateFunc,
  width,
  height,
  maxWidth,
  maxHeight,
}) => {
  const newData = handleFormData(data, state, stateFunc);

  const mappedData = newData.map((item, key) => {
    if (item.type === "checkbox") {
      return <CheckBox key={key} {...item} />;
    }
    if (item.type === "dropdown") {
      return <InputDropdown key={key} {...item} />;
    }
    if (item.type === "submit" || item.name === "button") {
      return (
        <div key={key} className="formGroup">
          <Button {...item} />
        </div>
      );
    }

    return <InputField key={key} {...item} />;
  });

  let formStyle = {};

  if (width) {
    formStyle.width = width;
  }

  if (height) {
    formStyle.height = height;
  }

  if (maxWidth) {
    formStyle.maxWidth = maxWidth;
  }

  if (maxHeight) {
    formStyle.maxHeight = maxHeight;
  }

  return (
    <form className="form" style={formStyle}>
      {mappedData}
    </form>
  );
};

export default Form;
