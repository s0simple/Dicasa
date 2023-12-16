import React from "react";

const Sort = ({ sort, setSort }) => {
  const onSelectionChange = ({ currentTarget: input }) => {
    setSort({ sort: input.value, order: sort.order });
  };

  const onArrowChange = () => {
    if (sort.order === "asc") {
      setSort({ sort: sort.sort, order: "desc" });
    } else {
      setSort({ sort: sort.sort, order: "asc" });
    }
  };
  return (
    <div className="flex justify-end gap-2 text-sm items-center">
      <p className="font-medium">Sort by:</p>
      <select
        defaultValue={sort.sort}
        onChange={onSelectionChange}
        name=""
        id=""
        className="border ring-1 text-sm hover:ring-slate-800  ring-slate-400  leading-none  text-slate-700  px-2 py-1  rounded bg-white"
      >
        <option value="createdAt">Most Recent</option>
        <option value="rating">Rating</option>
      </select>
      <button
        className="hover:bg-slate-900 hover:text-white ring-1 py-1 hover:ring-slate-800 ring-slate-400 text-lg leading-none focus:bg-slate-900 focus:text-white text-slate-500  px-2  rounded  "
        onClick={onArrowChange}
      >
        {" "}
        <i class="bx bx-sort-alt-2 text-semibold"></i>
      </button>
    </div>
  );
};

export default Sort;
