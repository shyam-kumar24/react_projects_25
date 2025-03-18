import React from "react";

export default function PageBtn({pageNo, setPageNo}) {

  function createPageNo() {
    const pages = [];
    for (let i = 1; i <= 10; i++) {
      pages.push(i);
    }
    return pages;
  }


  return (
    <div className="buttons">
      <button
        className="prev"
        onClick={() => setPageNo((prev) => (prev - 1 >= 1 ? prev - 1 : prev))}
        disabled={pageNo === 1}
      >
        Prev
      </button>
      {createPageNo().map((pageNos) => (
        <button
          key={pageNos}
          className={`button ${pageNos === pageNo ? "active" : null}`}
          onClick={() => setPageNo(pageNos)}
        >
          {pageNos}
        </button>
      ))}
      <button
        className="next"
        onClick={() => setPageNo((prev) => (prev + 1 <= 10 ? prev + 1 : prev))}
        disabled={pageNo === 10}
      >
        Next
      </button>
    </div>
  );

}


