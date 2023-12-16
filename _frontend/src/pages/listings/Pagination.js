import React from "react";

const Pagination = ({ page, total, limit, setPage }) => {
  const totalPages = Math.ceil(total / limit);
  const onclick = (newPage) => {
    setPage(newPage + 1);
  };
  return (
    <div className="flex gap-2 text-sm justify-end mx-4 mb-4">
      {totalPages > 0 &&
        [...Array(totalPages)].map((val, index) => (
          <button
            key={index}
            onClick={() => onclick(index)}
            className={
              page === index + 1
                ? ` py-1 px-3 rounded ring-1 ring-slate-900 bg-slate-900 text-white`
                : `py-1 px-3 rounded ring-1 ring-slate-500 hover:bg-slate-900 hover:text-white`
            }
          >
            {index + 1}
          </button>
        ))}
    </div>
  );
};

export default Pagination;
