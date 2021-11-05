import { BsArrowRight } from "react-icons/bs";
import propTypes from "prop-types";
import "./pagination.scss";

// for how to use this component, check src/layouts/dashboard/projects/allProjects/components/allprojectsSection/AllProjectsSection.js

const Pagination = ({
  currentPage,
  currentPageFunc,
  dataLength,
  postsPerPage,
  dot,
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

    if (!dot) {
      window.scrollTo(0, 200);
    }
  };

  const nextPagination = () => {
    if (currentPage === highestNumber) {
      return currentPageFunc((current) => current + 0);
    }
    currentPageFunc((current) => current + 1);

    let paginationIcons = document.querySelectorAll(".pagination__page");

    for (let i = 0; i < paginationIcons.length; i++) {
      paginationIcons[i].classList.remove("active");

      if (paginationIcons[i].innerHTML == currentPage + 1) {
        paginationIcons[i].classList.add("active");
      }
    }
    window.scrollTo(0, 200);
  };

  return (
    <div className="pagination">
      {pageNumbers != undefined &&
        pageNumbers.map((number) => {
          return (
            <div
              onClick={(e) => handlePagination(e, number)}
              key={number}
              className={`pagination__page ${number === 1 ? "active" : ""} ${
                dot ? "dot" : ""
              }`}
              datanumber={number}
            >
              {number}
            </div>
          );
        })}
      {dot ? null : (
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
      )}
    </div>
  );
};

Pagination.propTypes = {
  postsPerPage: propTypes.any,
  dataLength: propTypes.any,
  currentPage: propTypes.any,
  currentPageFunc: propTypes.any,
  dot: propTypes.any,
};

export default Pagination;
