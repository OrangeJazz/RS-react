import React, { useEffect, useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [string, setString] = useState("");

  useEffect(() => {
    const value = localStorage.getItem("searchStr");
    if (value) {
      setString(value);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("searchStr", string);
  }, [string]);

  const onSearch = (searchStr: string) => {
    setString(searchStr);
    localStorage.setItem("searchStr", string);
  };

  return (
    <div className="search-bar">
      <form action="#" className="search">
        <input
          type="search"
          className="search__input"
          placeholder="Search dolls"
          value={string}
          onChange={(e) => onSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
