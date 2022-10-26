import React from "react";
import "./Card.css";
import { Doll } from "../../data/types";

interface CardProps {
  doll: Doll;
}

const Card = (props: CardProps) => {
  const doll = props.doll;
  return (
    <div className="card">
      <div className="card__picture-container">
        <img className="card__picture" src={doll.img} alt="doll image" />
      </div>
      <div className="card__details">
        <h4 className="card__heading">
          <span className="card__heading-span">{doll.name.toUpperCase()}</span>
        </h4>
        <ul className="card__list">
          <li>Type: {doll.type[0].toUpperCase() + doll.type.slice(1)}</li>
          <li>Brand: {doll.brand}</li>
          <li>Year: {doll.year}</li>
          <li>{doll.rare ? "Rare" : "Not rare"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
