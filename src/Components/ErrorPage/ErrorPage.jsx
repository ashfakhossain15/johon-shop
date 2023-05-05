import React from "react";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1 className="error-heading">Oops!</h1>
      <p className="error-message">
        Something went wrong. Please try again later.
      </p>
      <img src="/error-image.png" alt="Error" className="error-image" />
      <button className="error-button">Go Back</button>
    </div>
  );
};

export default ErrorPage;
