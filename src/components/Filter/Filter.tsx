import { useAppSelector } from "hooks/redux";
import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import axiosInstance from "../../services/api";
import {
  changeFilter,
  changeItems,
  changeTotalItemsCount,
} from "store/reducers/sliceApi";

import classes from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const apiState = useAppSelector((state) => state.apiReducer);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onChangeHandler = async (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    dispatch(changeFilter(value));
    setIsLoading(true);
    dispatch(changeItems([]));
    try {
      const response = await axiosInstance.get(`${e.target.value}/`);
      dispatch(changeItems(response.data.results));
      dispatch(changeTotalItemsCount(Number(response.data.count)));
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
        value={apiState.filter}
      >
        <option value="people">People</option>
        <option value="planets">Planets</option>
        <option value="starships">Starships</option>
      </select>
    </div>
  );
};

export default Filter;
