import { CardApi } from "components";
import { Item } from "../../data/types";
import React from "react";
import classes from "./ContainerApi.module.css";

interface ContainerApiProps {
  data: Item[];
}

const ContainerApi = (props: ContainerApiProps) => {
  return (
    <div className={classes.api__container}>
      {props.data.map((el) => (
        <CardApi item={el} key={el.id} />
      ))}
    </div>
  );
};

export default ContainerApi;
