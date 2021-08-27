import { useState } from "react";
import { Button, CheckBox, InputDropdown, InputField } from "./components";
import Form from "./components/form/Form";
// import { array } from "./data";

const App = () => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [value6, setValue6] = useState(true);

  const data = [
    { value: "Mancity" },
    { value: "Arsenal" },
    { value: "Chelsea" },
  ];

  const handleFrmData = (data, state) => {};

  const array = [
    {
      type: "text",
      placeholder: "Enter Name",
      label: "Full Name",
      value: value,
      onChange: setValue,
    },
    {
      type: "email",
      placeholder: "Enter email",
      label: "Email",
      value: value2,
      onChange: setValue2,
    },
    {
      type: "password",
      placeholder: "Enter Password",
      label: "Password",
      value: value3,
      onChange: setValue3,
    },
    {
      type: "dropdown",
      placeholder: "Select",
      data: [{ value: "man" }, { value: "woman" }],
      label: "gender",
      value: value4,
      onChange: setValue4,
    },
    {
      type: "textarea",
      placeholder: "Message",
      label: "Message",
      value: value5,
      onChange: setValue5,
    },
  ];

  console.log(value, value2, value3, value4, value5, value6);
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Form data={array} />
      {/* <form>
        <InputField
          value={value}
          name="first-name"
          label="First Name"
          onChange={setValue}
          placeholder="Enter Company Name"
        />
        <InputField
          value={value2}
          name="first-name"
          label="Email"
          onChange={setValue2}
          placeholder="Enter Company Name"
        />
        <InputField
          value={value3}
          name="password"
          label="Password"
          type="password"
          onChange={setValue3}
          placeholder="Enter Company Name"
        />
        <InputField
          value={value4}
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          onChange={setValue4}
          placeholder="Enter Company Name"
        />
        <InputField
          value={value4}
          name="msg"
          label="Message"
          type="textarea"
          onChange={setValue4}
          rows="10"
          cols="30"
          placeholder="Enter Message"
        />
        <InputDropdown value={value5} onChange={setValue5} data={data} />
        <CheckBox
          selected={value6}
          onChange={setValue6}
          label="I Accept"
          id="checkbox"
        />
        <Button type="submit" text="Submit" />
      </form> */}
    </div>
  );
};

export default App;
