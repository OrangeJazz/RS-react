import React, { useState, ChangeEvent, useContext } from "react";
import axiosInstance from "../../services/api";
import classes from "./SearchBarApi.module.css";
import { Filter } from "components";
import { Context } from "App";
import { changeItems, changeSearchValue } from "store/actions";

const SearchBarApi = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { state, dispatch } = useContext(Context);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(changeSearchValue(value));
  };

  const submitHandler = async (e: ChangeEvent<HTMLFormElement>) => {
    const filter = state.filter;
    const searchValue = state.searchValue;
    e.preventDefault();
    setIsLoading(true);
    dispatch(changeItems([]));
    try {
      const response = await axiosInstance.get(
        `${filter}/?search=${searchValue}`
      );
      dispatch(changeItems(response.data.results));
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={classes.search__container} data-testid="api-search">
      <form onSubmit={submitHandler} className={classes.search}>
        <input
          type="search"
          className={classes.search__input}
          placeholder="Search"
          value={state.searchValue}
          onChange={changeHandler}
          disabled={isLoading}
          id="search"
          data-testid="api-search-input"
        />
        <button
          type="submit"
          className={classes.search__button}
          data-testid="api-search-button"
        >
          Search
        </button>
        <Filter />
      </form>
    </div>
  );
};

export default SearchBarApi;
