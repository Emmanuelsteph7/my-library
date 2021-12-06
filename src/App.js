import { FormInput } from "./components";
import useForm from "./utils/hooks/useForm";

const App = () => {
  const [form, handleChange] = useForm({
    name: "",
    email: "",
    password: "",
    discipline: "",
    message: "",
    picture: null,
    agree: false,
  });

  console.log(form);

  const data = [
    {
      name: "Frontend",
    },
    {
      name: "Backend",
    },
    {
      name: "UI/UX",
    },
    {
      name: "Mobile",
    },
  ];
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form action="">
        <FormInput
          name="name"
          onChange={handleChange}
          placeholder="Enter name"
          label="Name"
          value={form.name}
        />
        <FormInput
          name="email"
          onChange={handleChange}
          placeholder="Enter Email"
          label="Email"
          value={form.email}
          type="email"
        />
        <FormInput
          name="password"
          onChange={handleChange}
          placeholder="Enter Password"
          label="Password"
          value={form.password}
          type="password"
        />
        <FormInput.DropDown
          label="Select Discipline"
          data={data}
          name="discipline"
          headerLabel="Select Discipline"
          value={form.discipline}
          optionLabel="name"
          optionValue="name"
          onChange={handleChange}
        />
        <FormInput.TextArea
          label="Message"
          placeholder="Enter Message"
          onChange={handleChange}
          name="message"
          value={form.message}
        />
        <FormInput.FileImage
          label="Select a picture"
          name="picture"
          id="picture"
          onChange={handleChange}
          value={form.picture}
        />
        <FormInput.CheckBox
          name="agree"
          value={form.agree}
          label="By clicking, you agree to the terms."
          id="agree"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default App;
