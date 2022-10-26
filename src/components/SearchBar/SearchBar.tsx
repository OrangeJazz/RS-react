import React, { useEffect, useState } from "react";
import "./SearchBar.css";

// interface SearchProps {
//   onSearch: (searchStr: string) => void;
// }

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

  // componentDidMount(): void {
  //   const value = localStorage.getItem("searchStr");
  //   if (value) {
  //     this.setState({ value });
  //   }
  // }

  // componentWillUnmount(): void {
  //   this.state.value.length &&
  //     localStorage.setItem("searchStr", this.state.value);
  // }

  // componentDidUpdate(): void {
  //   localStorage.setItem("searchStr", this.state.value);
  // }

  return (
    <div className="search-bar">
      <form action="#" className="search">
        <input
          type="search"
          className="search__input"
          placeholder="Search dolls"
          value={string}
          onChange={(e) => {
            return onSearch(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default SearchBar;
