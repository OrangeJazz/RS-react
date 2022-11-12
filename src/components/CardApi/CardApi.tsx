import React, { FC } from "react";
import classes from "./CardApi.module.css";
import { PeopleItem, PlanetsItem, StarshipsItem } from "../../data/types";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeItem } from "../../store/reducers/sliceApi";

interface CardApiProps {
  item: PeopleItem | PlanetsItem | StarshipsItem;
  // setActiveItem: (item: PeopleItem) => void;
}

const CardApi: FC<CardApiProps> = (props) => {
  const dispatch = useDispatch();
  const item = props.item;

  const clickHandler = () => {
    dispatch(changeItem(item));
  };
  return (
    <NavLink
      key={item.name}
      to={`/api/${item.name}`}
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
    </NavLink>
  );
};

export default CardApi;
