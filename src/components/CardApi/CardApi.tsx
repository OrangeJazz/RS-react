import React, { FC } from "react";
import classes from "./CardApi.module.css";
import { PeopleItem } from "../../data/types";

interface CardApiProps {
  item: PeopleItem;
  setActiveItem: (item: PeopleItem) => void;
}

const CardApi: FC<CardApiProps> = (props) => {
  const item = props.item;
  const clickHandler = () => {
    props.setActiveItem(item);
  };
  return (
    <div
      className={classes.card}
      onClick={clickHandler}
      data-testid={"card-api"}
    >
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
