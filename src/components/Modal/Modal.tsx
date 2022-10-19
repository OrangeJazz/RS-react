import React, { FC } from "react";
import classes from "./Modal.module.css";
import { Item } from "../../data/types";
import { Backdrop } from "components";

interface ModalProps {
  onCancel: () => void;
  item: Item;
}

const Modal: FC<ModalProps> = (props) => {
  const cancelHandler = () => {
    props.onCancel();
  };
  const item = props.item;

  return (
    <div>
      <Backdrop onClick={cancelHandler} />
      <div className={classes.modal}>
        <button className={classes.modal__close} onClick={cancelHandler}>
          X
        </button>
        <h2 className={classes.modal__heading}>{item.name}</h2>
        <ul className={classes.modal__list}>
          <li>Birth year: {item.birth_year}</li>
          <li>Gender: {item.gender}</li>
          <li>Height: {item.height}</li>
          <li>Mass: {item.mass}</li>
          <li>Eye color: {item.eye_color}</li>
          <li>Hair color: {item.hair_color}</li>
          <li>Skin color: {item.skin_color}</li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
