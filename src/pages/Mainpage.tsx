import React from "react";
import { SearchBar } from "../components/SearchBar";
import data from "../data/data.json";
import { Doll } from "../components/types";
import { CardsContainer } from "components/CardsContainer";

const Mainpage = () => {
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

export { Mainpage };
