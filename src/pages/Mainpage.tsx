import React from "react";
import { SearchBar, CardsContainer } from "../components";
import data from "../data/data.json";
import { Doll } from "../data/types";

const MainPage = () => {
  return (
    <div className="container">
      <h2>Main Page</h2>
      <SearchBar />
      <div className="content-wrapper">
        <CardsContainer data={data as Doll[]} />
      </div>
    </div>
  );
};

export default MainPage;
