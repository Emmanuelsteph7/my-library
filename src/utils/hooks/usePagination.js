import { useState } from "react";

const usePagination = (data, initialPageNumber = 1, postsPerPage = 10) => {
  const [currentPage, setCurrentPage] = useState(initialPageNumber);
  const [numOfPagePosts] = useState(postsPerPage);

  const indexOfLastPost = currentPage * numOfPagePosts;
  const indexOfFirstPost = indexOfLastPost - numOfPagePosts;
  const slicedPosts = data?.slice(indexOfFirstPost, indexOfLastPost);

  return {
    slicedPosts,
    currentPage,
    setCurrentPage,
    numOfPagePosts,
  };
};

export default usePagination;
