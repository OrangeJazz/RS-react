import React from "react";
import classes from "./CardApi.module.css";
import { Item } from "../../data/types";

interface CardApiProps {
  item: Item;
}

const CardApi = (props: CardApiProps) => {
  const item = props.item;
  return (
    <div className="card">
      <div className="card__picture-container">
        {/* <img className="card__picture" src={item.img} alt="image" /> */}
      </div>
      <div className="card__details">
        <h4 className="card__heading">
          <span className="card__heading-span">{item.name.toUpperCase()}</span>
        </h4>
      </div>
    </div>
  );
};

export default CardApi;
