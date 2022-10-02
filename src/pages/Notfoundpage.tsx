import React from "react";
import { Link } from "react-router-dom";

const Notfoundpage = () => {
  return (
    <div>
      Error 404
      <p>
        This page doesn&apost exist. Go <Link to="/">home</Link>
      </p>
    </div>
  );
};

export { Notfoundpage };
