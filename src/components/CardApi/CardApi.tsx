import React, { FC } from "react";
import classes from "./CardApi.module.css";
import { Item } from "../../data/types";

interface CardApiProps {
  item: Item;
  setActiveItem: (item: Item) => void;
}

const CardApi: FC<CardApiProps> = (props) => {
  const item = props.item;
  const clickHandler = () => {
    props.setActiveItem(item);
  };
  return (
    <div className={classes.card} onClick={clickHandler}>
      <div className={classes.card__details}>
        <h4 className={classes.card__heading}>
          <span className={classes.card__heading_span}>
            {item.name.toUpperCase()}
          </span>
        </h4>
      </div>
    </div>
  );
};

export default CardApi;
