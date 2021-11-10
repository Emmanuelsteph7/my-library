import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import "./pagination.scss";

// for how to use this component, check src/layouts/dashboard/projects/allProjects/components/allprojectsSection/AllProjectsSection.js

const Pagination = ({
  currentPage,
  currentPageFunc,
  dataLength,
  postsPerPage,
}) => {
  const pageNumbers = [];

  let highestNumber = Math.ceil(dataLength / postsPerPage);

  for (let i = 1; i <= highestNumber; i++) {
    pageNumbers.push(i);
  }

  const handlePagination = (e, pageNumber) => {
    currentPageFunc(pageNumber);

    let paginationIcons = document.querySelectorAll(".pagination__page");

    paginationIcons.forEach((icon) => {
      icon.classList.remove("active");
    });

    e.target.classList.add("active");
  };

  const nextPagination = () => {
    if (currentPage === highestNumber) {
      return currentPageFunc((current) => current + 0);
    }
    currentPageFunc((current) => current + 1);

    let paginationIcons = document.querySelectorAll(".pagination__page");

    for (let i = 0; i < paginationIcons.length; i++) {
      paginationIcons[i].classList.remove("active");

      if (Number(paginationIcons[i].innerHTML) === currentPage + 1) {
        paginationIcons[i].classList.add("active");
      }
    }
  };

  const prevPagination = () => {
    if (currentPage <= 1) {
      return currentPageFunc((current) => current - 0);
    }
    currentPageFunc((current) => current - 1);

    let paginationIcons = document.querySelectorAll(".pagination__page");

    for (let i = 0; i < paginationIcons.length; i++) {
      paginationIcons[i].classList.remove("active");

      if (Number(paginationIcons[i].innerHTML) === currentPage - 1) {
        paginationIcons[i].classList.add("active");
      }
    }
  };

  return (
    <div className="pagination">
      <div className="pagination__prev" onClick={prevPagination}>
        <BsArrowLeft />
        <span className="pagination__nextText">Prev</span>
      </div>
      {pageNumbers !== undefined &&
        pageNumbers.map((number) => {
          return (
            <div
              onClick={(e) => handlePagination(e, number)}
              key={number}
              className={`pagination__page ${number === 1 ? "active" : ""} `}
              datanumber={number}
            >
              {number}
            </div>
          );
        })}
      <div className="pagination__next" onClick={nextPagination}>
        <span className="pagination__nextText">Next</span>
        <BsArrowRight />
      </div>
      {/* {dot ? null : (
        <>
          <div className="pagination__dot"></div>
          <div className="pagination__dot"></div>
          <div className="pagination__dot"></div>
          <div className="pagination__dot"></div>
          <div className="pagination__dot"></div>
          <div className="pagination__next" onClick={nextPagination}>
            <BsArrowRight />
            <span className="pagination__nextText">Next</span>
          </div>
        </>
      )} */}
    </div>
  );
};

export default Pagination;
