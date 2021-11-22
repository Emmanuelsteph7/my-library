import { useEffect } from "react";
import { Pagination } from "./components";
import { useFetch } from "./utils";
import usePagination from "./utils/hooks/usePagination";

const App = () => {
  const { handleFetch, loading, data } = useFetch();

  const { slicedPosts, currentPage, setCurrentPage, numOfPagePosts } =
    usePagination(data);

  useEffect(() => {
    handleFetch("https://jsonplaceholder.typicode.com/posts");
  }, [handleFetch]);

  return (
    <div
      className="App"
      style={{
        height: "100vh",
      }}
    >
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {slicedPosts &&
            slicedPosts.map((item) => (
              <div key={item.id}>
                <h1>{item.title}</h1>
                <p>{item.body}</p>
              </div>
            ))}
          <Pagination
            currentPage={currentPage}
            currentPageFunc={setCurrentPage}
            dataLength={data?.length}
            postsPerPage={numOfPagePosts}
          />
        </>
      )}
    </div>
  );
};

export default App;
