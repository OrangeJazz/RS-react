import React, { FC } from "react";
import classes from "./LoadingSpinner.module.css";

const LoadingSpinner: FC = () => {
  return (
    <div className={classes.spinner}>
      <div className={classes.spinner__ring}></div>
    </div>
  );
};

export default LoadingSpinner;
