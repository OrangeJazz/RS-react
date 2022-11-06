import { Context } from "App";
import React, { ChangeEvent, useContext, useState } from "react";
import axiosInstance from "services/api";
import { changeFilter, changeItems } from "store/actions";

import classes from "./Filter.module.css";

const Filter = () => {
  const { state, dispatch } = useContext(Context);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onChangeHandler = async (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    dispatch(changeFilter(value));
    setIsLoading(true);
    dispatch(changeItems([]));
    try {
      const response = await axiosInstance.get(`${e.target.value}/`);
      dispatch(changeItems(response.data.results));
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={classes.filter}>
      <select
        id="filter"
        name="filter"
        className={classes.filter__options}
        onChange={onChangeHandler}
        value={state.filter}
      >
        <option value="people">People</option>
        <option value="planets">Planets</option>
        <option value="starships">Starships</option>
      </select>
    </div>
  );
};

export default Filter;
