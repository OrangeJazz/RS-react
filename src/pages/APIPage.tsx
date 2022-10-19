import { SearchBarApi, LoadingSpinner, ContainerApi } from "components";
import React, { useEffect, useState, FC } from "react";
import axiosInstance from "../services/api";
import { Item } from "../data/types";

const APIPage: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedItems, setLoadedItems] = useState([] as Item[]);

  useEffect(() => {
    setIsLoading(true);

    axiosInstance
      .get(`people/`)
      .then((response) => {
        setLoadedItems(response.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="container">
      <h2>API Page</h2>
      <SearchBarApi
        items={(items) => {
          setLoadedItems(items);
        }}
      />
      <div className="content-wrapper">
        {(isLoading || !loadedItems.length) && <LoadingSpinner />}
        {!isLoading && <ContainerApi items={loadedItems} />}
      </div>
    </div>
  );
};

export default APIPage;
