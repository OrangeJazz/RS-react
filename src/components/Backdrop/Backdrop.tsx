import React, { FC } from "react";
import classes from "./Backdrop.module.css";

interface BackdropProps {
  onClick: () => void;
}

const Backdrop: FC<BackdropProps> = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};
export default Backdrop;
