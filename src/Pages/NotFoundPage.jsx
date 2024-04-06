import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p>
        Go back to <Link to="/">home</Link>.
      </p>
    </div>
  );
};

export default NotFoundPage;
