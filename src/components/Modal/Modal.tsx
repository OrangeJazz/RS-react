import React from "react";
import classes from "./Modal.module.css";
import { Item } from "../../data/types";

interface ModalProps {
  onCancel: () => void;
  onConfirm: () => void;
  item: Item;
}

const Modal = (props: ModalProps) => {
  const cancelHandler = () => {
    props.onCancel();
  };

  const confirmHandler = () => {
    props.onConfirm();
  };

  return (
    <div className={classes.modal}>
      <p>A you sure?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
};

export default Modal;
