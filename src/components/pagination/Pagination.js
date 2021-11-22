import { useEffect } from "react";
import "./pagination.scss";

const Pagination = ({
  currentPage,
  currentPageFunc,
  dataLength,
  postsPerPage,
  displayedBtns = 5,
}) => {
  const pageNumbers = [];
  const mappedBtnsNumbers = [];

  let highestNumber = Math.ceil(dataLength / postsPerPage);

  for (let i = 1; i <= highestNumber; i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    let paginationIcons = document.querySelectorAll(".pagination__page");

    for (let i = 0; i < paginationIcons.length; i++) {
      paginationIcons[i].classList.remove("active");

      if (Number(paginationIcons[i].innerHTML) === currentPage) {
        paginationIcons[i].classList.add("active");
      }
    }
  }, [currentPage]);

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

  const handlePaginate = (num) => {
    currentPageFunc(num);
  };

  let maxLeft = currentPage - Math.floor(displayedBtns / 2);
  let maxRight = currentPage + Math.floor(displayedBtns / 2);

  if (maxLeft < 1) {
    maxLeft = 1;
    maxRight = displayedBtns;
  }

  if (maxRight > highestNumber) {
    maxRight = highestNumber;

    maxLeft = highestNumber - (displayedBtns - 1);

    if (maxLeft < 1) {
      maxLeft = 1;
    }
  }

  for (let i = maxLeft; i <= maxRight; i++) {
    mappedBtnsNumbers.push(i);
  }

  return (
    <div className="pagination">
      <div className="pagination__prev" onClick={() => handlePaginate(1)}>
        <span className="pagination__nextText">First</span>
      </div>
      <div className="pagination__prev" onClick={prevPagination}>
        <span className="pagination__nextText">Prev</span>
      </div>
      {mappedBtnsNumbers !== undefined &&
        mappedBtnsNumbers.map((number) => {
          return (
            <div
              onClick={(e) => handlePagination(e, number)}
              key={number}
              className={`pagination__page  `}
              datanumber={number}
            >
              {number}
            </div>
          );
        })}
      <div className="pagination__next" onClick={nextPagination}>
        <span className="pagination__nextText">Next</span>
      </div>
      <div
        className="pagination__next"
        onClick={() => handlePaginate(highestNumber)}
      >
        <span className="pagination__nextText">Last</span>
      </div>
    </div>
  );
};

export default Pagination;
