import React from "react";

const SearchField = (props) => {
  const handleKeyUp = (e) => {
    props.setSearchTerm(e.target.value)
  }
  return (
    <>
      <input className="searchfield__input" placeholder="Search..." onKeyUp={handleKeyUp}/>
    </>
  );
};

export default SearchField;
