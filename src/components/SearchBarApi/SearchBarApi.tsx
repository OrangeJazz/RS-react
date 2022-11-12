import React, { ChangeEvent } from "react";
import classes from "./SearchBarApi.module.css";
import { Filter } from "components";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { changeSearchValue, fetchSearchItems } from "store/reducers/sliceApi";

const SearchBarApi = () => {
  const dispatch = useAppDispatch();
  const apiState = useAppSelector((state) => state.apiReducer);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(changeSearchValue(value));
  };

  const submitHandler = async (e: ChangeEvent<HTMLFormElement>) => {
    const filter = apiState.filter;
    const searchValue = apiState.searchValue;
    e.preventDefault();
    dispatch(fetchSearchItems({ filter: filter, searchValue: searchValue }));
  };

  return (
    <div className={classes.search__container} data-testid="api-search">
      <form onSubmit={submitHandler} className={classes.search}>
        <input
          type="search"
          className={classes.search__input}
          placeholder="Search"
          value={apiState.searchValue}
          onChange={changeHandler}
          disabled={apiState.loading}
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
