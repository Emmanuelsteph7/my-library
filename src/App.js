import { ClipboardCopy } from "./components";
import MyButton from "./components/myButton/MyButton";
const App = () => {
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
      <MyButton text="Btn 1" />
      <MyButton.Yellow text="Btn 1" />
    </div>
  );
};

export default App;
