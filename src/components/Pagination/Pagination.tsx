import { Pagination, PaginationProps } from "antd";
import { Context } from "App";
import { PeopleItem } from "data/types";
import React, { useContext, useState } from "react";
import axiosInstance from "services/api";
import {
  changeItems,
  changeItemsPerPage,
  changePageNumber,
} from "store/actions";
import classes from "./Pagination.module.css";
// import "antd/dist/antd.css";

const PaginationBar = () => {
  const { state, dispatch } = useContext(Context);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
        total={state.totalItemsCount}
        itemRender={itemRender}
        pageSizeOptions={["10", "20"]}
        current={state.page[0]}
        pageSize={state.page[1]}
        defaultCurrent={state.page[0]}
        defaultPageSize={state.page[1]}
      />
    </div>
  );
};

export default PaginationBar;
