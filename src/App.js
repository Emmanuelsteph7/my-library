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

export default App;
