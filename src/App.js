import { useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Button, Hamburger } from "./components";
import { useFetch } from "./utils";

const App = () => {
  const alertz = () => alert("ok");
  const { handleFetch, loading, data, error } = useFetch();

  useEffect(() => {
    handleFetch("https://jsonplaceholder.typicode.com/posts");
  }, [handleFetch]);

  console.log(loading);
  console.log(data);
  console.log(error);

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
