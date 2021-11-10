import { useState } from "react";

const usePagination = ({ initialPageNumber, postsPerPage, data }) => {
  const [currentPage, setCurrentPage] = useState(
    initialPageNumber ? initialPageNumber : 1
  );
  const [numOfPagePosts] = useState(postsPerPage ? postsPerPage : 10);

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
