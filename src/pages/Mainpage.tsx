import React from "react";
import { SearchBar } from "../components/SearchBar/SearchBar";
import data from "../data/data.json";
import { Doll } from "../data/types";
import { CardsContainer } from "components/CardsContainer/CardsContainer";

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
