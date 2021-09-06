import { useState } from "react";
import { Form, LinkTag, NavLinkTag, ImageSlider } from "./components";
import { array1, array2, array3 } from "./data";
import Home from "./pages/home/Home";

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
      <Home />
    </div>
  );
};

export default App;
