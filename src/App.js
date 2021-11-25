import { useEffect } from "react";
import { Pagination } from "./components";
import VideoPlayer from "./components/videoPlayer/VideoPlayer";
import { useFetch } from "./utils";
import usePagination from "./utils/hooks/usePagination";

const App = () => {
  // const { handleFetch, loading, data } = useFetch();

  // const { slicedPosts, currentPage, setCurrentPage, numOfPagePosts } =
  //   usePagination(data);

  // useEffect(() => {
  //   handleFetch("https://jsonplaceholder.typicode.com/posts");
  // }, [handleFetch]);

  return (
    <div
      className="App"
      style={{
        height: "100vh",
      }}
    >
      <VideoPlayer />
    </div>
  );
};

export default App;
