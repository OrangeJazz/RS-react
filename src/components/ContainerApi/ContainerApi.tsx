import React, { FC, useState } from "react";
import { CardApi, Modal } from "components";
import { Item } from "../../data/types";
import classes from "./ContainerApi.module.css";

interface ContainerApiProps {
  items: Item[];
}

const ContainerApi: FC<ContainerApiProps> = (props) => {
  const [modalItem, setModalItem] = useState<Item>();
  return (
    <div className={classes.api__container}>
      {props.items.map((el) => (
        <CardApi
          item={el}
          key={el.name}
          setActiveItem={(el) => setModalItem(el)}
        />
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
