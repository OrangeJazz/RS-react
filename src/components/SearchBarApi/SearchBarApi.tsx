import React from "react";
import "./SearchBarApi.modele.css";

const SearchBarApi = () => {
  // state = {
  //   value: "",
  // };

  // onSearch(searchStr: string) {
  //   this.setState({ value: searchStr });
  //   localStorage.setItem("searchStr", this.state.value);
  // }

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
          placeholder="Search"
          // value={this.state.value}
          // onChange={(e) => {
          //   return this.onSearch(e.target.value);
          // }}
        />
      </form>
    </div>
  );
};

export default SearchBarApi;
