import { FaChevronRight } from "react-icons/fa";
import { Button, Hamburger } from "./components";

const App = () => {
  const alertz = () => alert("ok");
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
      <Button onClick={alertz} label="Proceed" icon={<FaChevronRight />} />
      <Hamburger />
    </div>
  );
};

const ModalBody = ({ closeFunc }) => {
  return (
    <>
      <h1>Header</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quae.</p>
      <button onClick={closeFunc}>close modal</button>
    </>
  );
};

export default App;
