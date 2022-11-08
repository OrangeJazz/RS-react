import React, { FC, useState } from "react";
import { CardApi, Modal } from "components";
import { PeopleItem, PlanetsItem, StarshipsItem } from "../../data/types";
import classes from "./ContainerApi.module.css";

interface ContainerApiProps {
  items: PeopleItem[] | PlanetsItem[] | StarshipsItem[];
}

const ContainerApi: FC<ContainerApiProps> = (props) => {
  const [modalItem, setModalItem] = useState<PeopleItem>();
  return (
    <div className={classes.api__container} data-testid={"container-api"}>
      {props.items.map((el) => (
        <CardApi item={el} key={el.name} />
      ))}
      {modalItem && (
        <Modal
          item={modalItem}
          onCancel={() => {
            setModalItem(undefined);
          }}
        />
      )}
    </div>
  );
};

export default ContainerApi;
