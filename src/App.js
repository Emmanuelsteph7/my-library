import { useState } from "react";
import { Form, LinkTag, NavLinkTag, ImageSlider } from "./components";
import { array1, array2, array3 } from "./data";

const App = () => {
  const [form1, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    gender: "",
    message: "",
  });

  const [form2, setForm2] = useState({
    email: "",
    password: "",
    agree: true,
  });

  const [form3, setForm3] = useState({
    username: "",
    password: "",
  });

  const array = [
    {
      src: "/logo512.png",
    },
    {
      src: "/logo512.png",
    },
    {
      src: "/logo512.png",
    },
    {
      src: "/logo512.png",
    },
  ];

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <Form data={array1} state={form1} stateFunc={setForm} />
      <LinkTag label="Home" to="/home" />
      <NavLinkTag label="Home" to="/home" />
      <input type="date" name="" id="" /> */}
      <ImageSlider width="600px" data={array} />
    </div>
  );
};

export default App;
