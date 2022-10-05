import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="container">
      <h2>Error 404</h2>
      <div className="content-wrapper">
        <p>
          This page does not exist. Go <Link to="/">home</Link>
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
