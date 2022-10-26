import React from "react";
import { Card } from "components";
import { Doll } from "../../data/types";
import "./CardsContainer.css";

interface CardsProps {
  data: Doll[];
}

const CardsContainer = (props: CardsProps) => {
  return (
    <div className="cards-container">
      {props.data.map((el) => (
        <Card doll={el} key={el.id} />
      ))}
    </div>
  );
};

export default CardsContainer;
