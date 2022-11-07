import { SearchBarApi, LoadingSpinner, ContainerApi } from "components";
import React, { useEffect, useState, FC, useContext } from "react";
import axiosInstance from "../services/api";
import { Context } from "App";
import { changeItems, changeTotalItemsCount } from "store/actions";
import PaginationBar from "components/Pagination/Pagination";
import { PeopleItem } from "data/types";

const APIPage: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    dispatch(changeItems([]));
    setIsLoading(true);
    if (state.page[1] === 10) {
      axiosInstance
        .get(`${state.filter}/?page=${state.page[0]}`)
        .then((response) => {
          dispatch(changeItems(response.data.results));
          dispatch(changeTotalItemsCount(Number(response.data.count)));
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err);
          // dispatch(changeItems([]));
        });
    }
    if (state.page[1] === 20) {
      const res1 = axiosInstance
        .get(`${state.filter}/?page=${state.page[0] * 2 - 1}`)
        .then((response) => {
          dispatch(changeTotalItemsCount(Number(response.data.count)));
          return response.data.results as PeopleItem[];
        })
        .catch((err) => {
          console.error(err);
          return [];
        });
      const res2 = axiosInstance
        .get(`${state.filter}/?page=${state.page[0] * 2}`)
        .then((response) => response.data.results as PeopleItem[])
        .catch((err) => {
          console.error(err);
          return [];
        });
      Promise.all([res1, res2])
        .then((result) => {
          setIsLoading(false);
          return result.flat();
        })
        .then((res) => {
          dispatch(changeItems(res as PeopleItem[]));
        })
        .catch((err) => {
          console.error(err);
          dispatch(changeItems([]));
        });
    }
  }, [state.page, state.filter, dispatch]);

  return (
    <div className="container">
      <h2>API Page</h2>
      <SearchBarApi />
      <div className="content-wrapper">
        {(isLoading || !state.items.length) && <LoadingSpinner />}
        {!isLoading && <ContainerApi items={state.items} />}
      </div>
      <PaginationBar />
    </div>
  );
};

export default APIPage;
