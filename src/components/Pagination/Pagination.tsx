import { Pagination, PaginationProps } from "antd";
import { useAppSelector } from "hooks/redux";
import React from "react";
import { useDispatch } from "react-redux";
import { changeItemsPerPage, changePageNumber } from "store/reducers/sliceApi";
import classes from "./Pagination.module.css";

const PaginationBar = () => {
  const dispatch = useDispatch();
  const apiState = useAppSelector((state) => state.apiReducer);

  const onChange = async (page: number, pageSize: number) => {
    dispatch(changePageNumber(page));
    dispatch(changeItemsPerPage(pageSize));
  };

  const itemRender: PaginationProps["itemRender"] = (
    _,
    type,
    originalElement
  ) => {
    if (type === "prev") {
      return <a>Previous</a>;
    }
    if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  };

  return (
    <div className={classes.pagination}>
      <Pagination
        onChange={onChange}
        total={apiState.totalItemsCount}
        itemRender={itemRender}
        pageSizeOptions={["10", "20"]}
        current={apiState.page[0]}
        pageSize={apiState.page[1]}
        defaultCurrent={apiState.page[0]}
        defaultPageSize={apiState.page[1]}
      />
    </div>
  );
};

export default PaginationBar;
