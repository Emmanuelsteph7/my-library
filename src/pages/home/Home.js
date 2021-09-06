import { useState } from "react";
import { Form } from "../../components";
import { data1 } from "./formData";
import "./home.scss";

const Home = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  return (
    <div>
      <Form width="400px" data={data1} state={form} stateFunc={setForm} />
    </div>
  );
};

export default Home;
