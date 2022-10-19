import { Item } from "../../data/types";
import React, { FC, useState, ChangeEvent } from "react";
import axiosInstance from "../../services/api";
import classes from "./SearchBarApi.module.css";

interface SearchProps {
  items: (value: Item[]) => void;
}
const SearchBarApi: FC<SearchProps> = (props) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const submitHandler = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    props.items([]);
    try {
      const response = await axiosInstance.get(`people/?search=${searchValue}`);
      props.items(response.data.results);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={classes.search__container}>
      <form onSubmit={submitHandler} className={classes.search}>
        <input
          type="search"
          className={classes.search__input}
          placeholder="Search"
          value={searchValue}
          onChange={changeHandler}
          disabled={isLoading}
          id="search"
        />
        <button type="submit" className={classes.search__button}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBarApi;
