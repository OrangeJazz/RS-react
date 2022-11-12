import { SearchBarApi, LoadingSpinner, ContainerApi } from "components";
import React, { useEffect, FC } from "react";
import PaginationBar from "components/Pagination/Pagination";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { fetchItems } from "store/reducers/sliceApi";

const APIPage: FC = () => {
  const apiState = useAppSelector((state) => state.apiReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      fetchItems({
        filter: apiState.filter,
        page: apiState.page[0],
        itemsNum: apiState.page[1],
      })
    );
  }, [apiState.page, apiState.filter, dispatch]);

  return (
    <div className="container">
      <h2>API Page</h2>
      <SearchBarApi />
      <div className="content-wrapper">
        {!!apiState.loading && <LoadingSpinner />}
        {!apiState.loading && <ContainerApi items={apiState.items} />}
      </div>
      <PaginationBar />
    </div>
  );
};

export default APIPage;
