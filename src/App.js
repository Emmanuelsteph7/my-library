import { ClipboardCopy } from "./components";
const App = () => {
  return (
    <div
      className="App"
      style={{
        height: "100vh",
      }}
    >
      <ClipboardCopy copyText="Mancity always rocks" />
    </div>
  );
};

export default App;
