import { SearchBarApi, LoadingSpinner, ContainerApi } from "components";
import React, { useEffect, useState, FC, useContext } from "react";
import axiosInstance from "../services/api";
import { Context } from "App";
import { changeItems } from "store/actions";

const APIPage: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    setIsLoading(true);

    axiosInstance
      .get(`${state.filter}/`)
      .then((response) => {
        dispatch(changeItems(response.data.results));
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="container">
      <h2>API Page</h2>
      <SearchBarApi />
      <div className="content-wrapper">
        {(isLoading || !state.items.length) && <LoadingSpinner />}
        {!isLoading && <ContainerApi items={state.items} />}
      </div>
    </div>
  );
};

export default APIPage;
