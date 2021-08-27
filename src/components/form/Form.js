import Button from "../button/Button";
import CheckBox from "../checkBox/CheckBox";
import InputDropdown from "../inputDropdown/InputDropdown";
import InputField from "../inputField/InputField";

const Form = ({ data }) => {
  const mappedData = data.map((item, key) => {
    if (item.type === "checkbox") {
      return <CheckBox key={key} {...item} />;
    }
    if (item.type === "dropdown") {
      return <InputDropdown key={key} {...item} />;
    }

    return <InputField key={key} {...item} />;
  });
  return (
    <form>
      {mappedData}
      <div className="formGroup">
        <Button type="submit" label="Submit" />
      </div>
    </form>
  );
};

export default Form;
