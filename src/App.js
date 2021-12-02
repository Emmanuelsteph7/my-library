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
      <ClipboardCopy copyText="Mancity always rocks" />
    </div>
  );
};

export default App;
