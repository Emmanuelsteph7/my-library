import Button from "../button/Button";
import CheckBox from "../checkBox/CheckBox";
import InputDropdown from "../inputDropdown/InputDropdown";
import InputField from "../inputField/InputField";
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

const Form = ({ data, state, stateFunc }) => {
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
  return <form className="form">{mappedData}</form>;
};

export default Form;
