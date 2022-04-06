import React, { useEffect, useContext, useRef, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
function SearchBar() {
  const { search, setSearch } = useContext(GlobalContext);

  const inputRef = useRef();
  console.log(inputRef);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <header>
        <input
          ref={inputRef}
          type="text"
          placeholder="type a name.."
          onChange={(e) => {
            setSearch(e.target.value);
            e.preventDefault();
          }}
          value={search}
        />
      </header>
    </div>
  );
}

export default SearchBar;
