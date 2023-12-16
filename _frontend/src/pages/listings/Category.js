import React from "react";

const PropsTypes = ({ PropTypes, filterCategory, setFilterCategory }) => {
  const onChange = ({ currentTarget: input }) => {
    if (input.checked) {
      const state = [...filterCategory, input.value];
      setFilterCategory(state);
    } else {
      const state = filterCategory.filter((val) => val !== input.value);
      setFilterCategory(state);
    }
  };
  return (
    <div className="flex gap-4 text-sm items-center">
      <h1 className="font-medium">Filter By Type:</h1>
      <div className="flex items-center gap-4">
        {PropTypes.map((proptype) => (
          <div className="flex items-center gap-2" key={proptype}>
            <input type="checkbox" value={proptype} onChange={onChange} />
            <p>{proptype}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropsTypes;
