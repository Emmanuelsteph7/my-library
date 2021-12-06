import { Text } from "./components";

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
      <Text.Span>This is a simple text</Text.Span>
    </div>
  );
};

export default App;
